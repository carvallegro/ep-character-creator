import typeToReducer from 'type-to-reducer'

import { appContextTypes } from '../actions/appContext'

const INITIAL_STATE = {
  error: false,
  sessionExist: false,
  session: {
    loading: false,
    exist: false
  }
}

export const appContext = typeToReducer({
  [appContextTypes.LOADING_START]: (state ) => ({
    ...state,
    session: {
      loading: true,
      exist: state.session.exist
    }
  }),
  [appContextTypes.SESSION_CHECK]: {
    FULFILLED: (state, { payload }) => ({
      ...state,
      session: {
        loading: false,
        exist: payload.sessionExist
      }
    }),
    PENDING: (state, { payload }) => ({
      ...state,
      session: {
        loading: true,
        exist: false
      }
    }),
    REJECTED: (state, action) => ({
      ...state,
      error: true,
      session: {
        loading: false,
        exist: false
      }
    })
  }
}, INITIAL_STATE)

export default appContext
