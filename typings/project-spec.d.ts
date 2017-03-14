/**
 * General types
 */
type TNotification = 'success' | 'error' | 'warning' | 'ongoing'

type RequestTypes = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
  LOAD_CACHE: string
}

interface ActionEntity {
  request: any
  success: any
  failure: any
  loadCache: any
}

type FetchDataOptions = {
  store: {
    dispatch: (action: any) => any
  }
  params: any
  query: any
  userSession: any
}

interface RequestConfig {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  cookie?: boolean | string | object
  dataType?: 'urlencoded' | 'json'
  data?: {}
  query?: object | string
  useJsonp?: boolean
  _rawInit?: RequestInit
}


/**
 * App config file
 */
interface AppConfig {
  api: {
    prefix: string
  },
  database: {
    host: string,
    name: string,
    mongoStoreName: string
  },
  siteUrl: string,
  siteName: string,
  apiPort: number,
  assetsPort: number,
  pagesPort: number,
  enableEntityCache: boolean
}

/**
 * Viewer components & data types
 */
type TBookPage = {
  nodes: string[]
  meta?: {
    pageNo?: number
    offset?: number
    chapterId: string
    hash?: string
  }
}

type TBookFlesh = {
  markdown: string
  id: string
}[]

type TBookNav = {
  index: number
  label: string
  ref: string
  hash?: string
  children?: TBookNav[]
}

interface ViewerConfig {
  isCalcMode?: boolean
  isTouchMode?: boolean
  isScrollMode?: boolean
  fluid?: boolean
  pageHeight?: number
  fontSize?: number
  theme?: string
}
