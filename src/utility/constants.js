export const APIS = {
  GET_LOUNCHES: 'https://api.spacexdata.com/v3/launches'
}

export const LOADER_STATUS = {
  LOADING: 'loading',
  IDEAL: 'idle',
  FAILED: 'failed'
}

export const DATE_FILTER = [
  { key: 0, value: 'All' },
  { key: 7, value: 'Last Week' },
  { key: 30, value: 'Last Month' },
  { key: 365, value: 'Last Year' },
]

export const DEBOUNSE_DELAY = 500;

export const ROUTES = {
  DEFAULT: '/',
  DASHBOARD : '/dashboard',
  COMING_SOON : '/comingSoon'
}

export const HEADER_TAB = [
  {
    value: 'Mission',
    subMenue: [
      {
        value: 'All',
        component: ROUTES.DASHBOARD,
      },
      {
        value: 'Last Week',
        component: ROUTES.COMING_SOON,
      },
      {
        value: 'Last Month',
        component: ROUTES.COMING_SOON
      },
      {
        value: 'Last Year',
        component: ROUTES.COMING_SOON
      }
    ]
  },
  {
    value: 'Launches',
    subMenue: [
      {
        value: 'All Launches',
        component: ROUTES.COMING_SOON
      },
      {
        value: 'Last Week Launches',
        component: ROUTES.COMING_SOON
      },
      {
        value: 'Last Month Launches',
        component: ROUTES.COMING_SOON
      },
      {
        value: 'Last Year Launches',
        component: ROUTES.COMING_SOON
      }
    ]
  },
  {
    value: 'Careers',
    subMenue: [
      {
        value: 'View All Openings',
        component: ROUTES.COMING_SOON
      },
      {
        value: 'View Internships',
        component: ROUTES.COMING_SOON
      }
    ]
  },
  {
    value: 'Updates',
    subMenue: [
      {
        value: 'All Updates',
        component: ROUTES.COMING_SOON
      }
    ]
  }
]

export const MISSION_TABLE_COLS = [
  { id: 'mission_name', label: 'Mission Name' },
  { id: 'launch_year', label: 'Launch Year' },
  { id: 'rocket_name', label: 'Rocket Name' },
  { id: 'rocket_type', label: 'Rocket Type' },
]