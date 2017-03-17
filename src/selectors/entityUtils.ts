import { createSelector } from 'reselect'
import _ from 'lodash'
import { FETCH_STATUS } from '../constants'

const DEFAULT_KEY = 'default'


// new
export const entity = (name, id) => (state): SelectedEntity => {
  return {
    ..._.get(state, ['entities', name, 'entities', id], {}),
    ...{
      fetchStatus: _.get(state, ['entities', name, 'fetchStatus', id]) as any,
      error: _.get(state, ['entities', name, 'errors', id]) as any
    }
  }
}

export const entities = name => state => _.get(state, ['entities', name], {}) as {
  [key: string]: any
}
// old

export const isPaginationFetching = (name, key = DEFAULT_KEY) => state => {
  return _.get(state, ['pagination', name, key, 'fetchStatus']) === FETCH_STATUS.LOADING
}

export const paginationPages = (name, key = DEFAULT_KEY) => state => {
  return _.get(state, ['pagination', name, key, 'pages'], {})
}

export const paginationLinks = (name, key = DEFAULT_KEY) => state => {
  return _.pick(_.get(state.pagination, `${name}.${key}`, {}), ['next', 'last'])
}

export const nextPage = (name, key = DEFAULT_KEY) => createSelector(
  paginationLinks(name, key),
  selectedPaginationLinks => {
    return _.get(selectedPaginationLinks, 'next.page', 0)
  }
)

export const currentPage = (name, key = DEFAULT_KEY) => createSelector(
  paginationLinks(name, key),
  selectedPaginationLinks => {
    const next = _.get(selectedPaginationLinks, 'next.page')
    const last = _.get(selectedPaginationLinks, 'last.page')

    return next
      ? next as any - 1
      : last
  }
)

interface EntityPagesOptions {
  entitiesName: string
  paginationName: string
  paginationKey?: string
}
export const entityPages = (options: EntityPagesOptions) => {
  const { entitiesName, paginationName, paginationKey } = options

  return createSelector(
    entities(entitiesName),
    paginationPages(paginationName, paginationKey),
    (selectedEntities, pages) => {
      return _.mapValues(pages, ids => {
        return (ids as string[])
          .map(id => selectedEntities[id])
          .filter(item => Boolean(item))
      })
    }
  )
}

interface PagedEntitiesOptions extends EntityPagesOptions {
  page?: string | number
}
export const pagedEntities = (options: PagedEntitiesOptions) => {
  const { page } = options

  return createSelector(
    entityPages(options),
    pages => {
      if (page) {
        return _.get(pages, [page], [])
      }

      let allEntities = []
      _.keys(pages).forEach(p => {
        allEntities = allEntities.concat(pages[p])
      })

      return allEntities
    }
  )
}
