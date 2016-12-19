import { takeEvery, takeLatest } from 'redux-saga'
import { take, put, call, select, fork, cancel, cancelled } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ACTION_TYPES from '../../constants/actionTypes'
import api from '../../services/api'
import _ from 'lodash'
import * as selectors from '../../store/selectors'
import { ROLES } from '../../constants/common'
import { fetchEntity } from './utils'
import helpers from '../../helpers'
import * as viewerUtils from '../../routes/Viewer/Viewer.utils'
import utils from '../../utils'

const DEFAULT_PAGE_HEIGHT = 900
const DEFAULT_FONT_SIZE = 16

const fetchBookProgress = fetchEntity.bind(null, actions.progress, api.fetchBookProgress)

function* setViewer(bookId, config: ViewerConfig = {}): any {
  const viewerWidth = utils.getScreenInfo().view.width
  const isSmallScreen = viewerWidth < 700

  let initialized = {
    bookId,
    isCalcMode: true,
    fluid: isSmallScreen,
    isTouchMode: isSmallScreen,
    pageHeight: DEFAULT_PAGE_HEIGHT,
    fontSize: DEFAULT_FONT_SIZE,
    width: isSmallScreen
      ? viewerWidth
      : 'max'
  }

  const computed = yield select(selectors.viewer.computed(bookId))

  if (computed.length > 0) {
    initialized.isCalcMode = false
  }
  initialized = _.merge({}, initialized, config)

  yield put(actions.configViewer(bookId, initialized))
}

function* setViewerWithAction(action): any {
  const bookId = action.bookId
  const config: ViewerConfig = action.config

  yield setViewer(bookId, config)
}

function* watchInitViewer() {
  yield* takeEvery(ACTION_TYPES.VIEWER.INITIALIZE_CONFIG, setViewerWithAction)
}

function calcBook(wrap: HTMLElement, flesh: TBookFlesh) {
  const startCalcHtmlTime = new Date().valueOf()
  const computedChapters = Array.prototype
    .map.call(wrap.childNodes, child => {
      const childDiv = child as HTMLDivElement
      const id = childDiv.getAttribute('id')
      const nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes)

      return {
        id,
        nodeHeights
      }
    })
  const endCalcHtmlTime = new Date().valueOf()
  helpers.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)

  const computedPages = viewerUtils.groupPageFromChapters(flesh, computedChapters, 900)

  return computedPages
}

function* updateProgress(bookId, percentage): any {
  try {
    yield call(api.setProgress, bookId, {
      percentage
    })
  } catch (error) {
    console.error(error)
  } finally {
    if (yield cancelled()) {
      helpers.print('updateProgress canceled')
    }
  }
}

function* watchCalcBook(): any {
  while (true) {
    const { bookId, wrap } = yield take(ACTION_TYPES.VIEWER.CALC_START)
    const bookContent = yield select(selectors.common.entity('bookContents', bookId))
    const flesh = bookContent.flesh || {}

    try {
      const computed = calcBook(wrap, flesh)
      yield put(actions.calcBookSuccess(bookId, computed))
      yield put(actions.configViewer(bookId, {
        isCalcMode: false
      }))
    } catch (error) {
      yield put(actions.calcBookFailure(bookId, error))
    }
  }
}

function* watchProgressOperations(): any {
  while (true) {
    const action = yield take([ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE, ACTION_TYPES.LOAD_BOOK_PROGRESS])
    const session = yield select(selectors.common.session)
    const userRole = _.get(session, 'user.role')

    if (userRole !== ROLES.VISITOR) {
      if (action.type === ACTION_TYPES.LOAD_BOOK_PROGRESS) {
        yield call(fetchBookProgress, { id: action.id })
      }

      if (action.type === ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE) {
        yield updateProgress(action.id, action.percentage)
      }
    } else {
      helpers.print('Not logged in, progress will not be fetched!')
    }
  }
}

function* jumpTo(action): any {
  const { percentage } = action
  const { bookId, pageHeight, isScrollMode } = yield select(selectors.viewer.config)
  const allPages = yield select(selectors.viewer.computed(bookId))
  const pageCount = allPages.length
  const totalHeight = pageCount * pageHeight

  if (isScrollMode) {
    document.body.scrollTop = percentage
      ? totalHeight * percentage
      : 0
  } else {
    yield put(actions.updateBookProgress(percentage) as any)
  }
}

function* watchJumpRequest() {
  yield* takeEvery(ACTION_TYPES.VIEWER.JUMP, jumpTo)
}

function* fetchProgressAndJump(bookId): any {
  yield put(actions.loadBookProgress(bookId))
  yield take(ACTION_TYPES.BOOK_PROGRESS.SUCCESS)
  const { percentage } = yield select(selectors.common.entity('bookProgress', bookId))
  yield put(actions.viewerJumpTo(percentage))
}

function* initializeViewer(): any {
  while (true) {
    const { bookId } = yield take(ACTION_TYPES.VIEWER.INITIALIZE)
    const computed = yield select(selectors.viewer.computed(bookId))

    if (_.isEmpty(computed)) {
      yield [put(actions.loadBook(bookId)), put(actions.loadBookContent(bookId))]
      yield put(actions.initializeViewerConfig(bookId))

      yield take(ACTION_TYPES.VIEWER.CALC_SUCCESS)
      yield fetchProgressAndJump(bookId)
    } else {
      yield fetchProgressAndJump(bookId)
    }
  }
}

export default function* watchViewer() {
  yield [
    fork(watchProgressOperations),
    fork(watchCalcBook),
    fork(watchInitViewer),
    fork(watchJumpRequest),
    fork(initializeViewer)
  ]
}