import { take, put, select, fork } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import _ from 'lodash'
import * as selectors from '../selectors'
import utils from '../utils'
import calcBook from './effects/calcBook'

const DEFAULT_PAGE_HEIGHT = 900
const DEFAULT_FONT_SIZE = 16

const getDefaultConfig = (override: Viewer.Config = {}): Viewer.Config => {
  const viewerWidth = utils.getScreenInfo().view.width
  const isSmallScreen = viewerWidth < 700

  return {
    ...{
      fluid: isSmallScreen,
      isScrollMode: true,
      isTouchMode: isSmallScreen,
      pageHeight: DEFAULT_PAGE_HEIGHT,
      fontSize: DEFAULT_FONT_SIZE,
      theme: 'WHITE' as Viewer.Themes,
      width: isSmallScreen
        ? viewerWidth
        : 'max'
    },
    ...override
  }
}

function* loadProgressAndGo(bookId) {
  const session: Session = yield select(selectors.session)
  if (session.role !== 'visitor') {
    yield put(actions.loadBookProgress(bookId))
    yield take(ACTION_TYPES.BOOK_PROGRESS.SUCCESS)
    const { percentage } = yield select(selectors.entity('bookProgress', bookId))
    yield put(actions.viewerGoTo(percentage))
  } else {
    yield put(actions.viewerGoTo(0))
  }
}

function* watchInitialization() {
  while (true) {
    const { payload: bookId } = yield take(ACTION_TYPES.VIEWER.INITIALIZE)
    const computed = yield select(selectors.viewer.computed(bookId))

    if (_.isEmpty(computed)) {
      yield [put(actions.loadBookInfo(bookId)), put(actions.loadBookContent(bookId))]
      const config = getDefaultConfig({
        isCalcMode: true
      })
      yield put(actions.configViewer(config, true))

      yield take(ACTION_TYPES.VIEWER.CALC_SUCCESS)
      yield put(actions.configViewer({
        isCalcMode: false
      }, true))
      yield put(actions.viewer.setStatus({
        isReady: true
      }))
      // fetch cloud progress and go there
      yield loadProgressAndGo(bookId)
    } else {
      yield put(actions.viewer.setStatus({
        isReady: true
      }))
      yield loadProgressAndGo(bookId)
    }
  }
}

function* watchCalcBook() {
  while (true) {
    const { payload: { bookId, wrap } } = yield take(ACTION_TYPES.VIEWER.CALC_START)
    const bookContent = yield select(selectors.entity('bookContents', bookId))
    const flesh = bookContent.flesh || {}

    try {
      const computed = calcBook(wrap, flesh)
      yield put(actions.calcBookSuccess(bookId, computed))
    } catch (error) {
      yield put(actions.calcBookFailure(bookId, error))
    }
  }
}

function* watchGoTo() {
  while (true) {
    const { payload } = yield take(ACTION_TYPES.VIEWER.GO_TO)
    const bookId = yield select(selectors.viewer.id)
    const computed = yield select(selectors.viewer.computed(bookId))
    const { pageHeight, isScrollMode } = yield select(selectors.viewer.config)
    const pageCount = computed.length
    const totalHeight = pageCount * pageHeight
    let percentage = payload

    if (payload > 1) {
      // payload is page number
      percentage = payload / pageCount
    }

    if (isScrollMode) {
      document.body.scrollTop = totalHeight * percentage
    } else {
      // todo: page flip mode
    }
  }
}

function* watchConfig() {
  while (true) {
    const oldConfig: Viewer.Config = yield select(selectors.viewer.config)
    const action = yield take(ACTION_TYPES.VIEWER.CONFIG)
    const bookId = yield select(selectors.viewer.id)
    const newConfig: Viewer.Config = yield select(selectors.viewer.config)
    const isInit = _.get(action, 'meta.isInit')

    if ((oldConfig.fontSize !== newConfig.fontSize) && !isInit) {
      yield put(actions.viewer.setStatus({
        isReady: false
      }))
      yield put(actions.configViewer({
        isCalcMode: true
      }))
      yield put(actions.viewer.toggleViewerPanel(false))
      yield take(ACTION_TYPES.VIEWER.CALC_SUCCESS)
      yield put(actions.configViewer({
        isCalcMode: false
      }))
      yield put(actions.viewer.setStatus({
        isReady: true
      }))
      yield loadProgressAndGo(bookId)
    }
  }
}

export default function* watchViewer() {
  yield [
    fork(watchInitialization),
    fork(watchCalcBook),
    fork(watchGoTo),
    fork(watchConfig)
  ]
}
