import dispatcher from '../../client/dispatcher'

import creditsActions from './credits'
import refDataActions from './ref-data'

export const appContextTypes = {
  SESSION_CHECK: 'APP_CONTEXT_SESSION_CHECK',
  LOADING_START: 'APP_CONTEXT_LOADING_START',
  LOADING_STOP: 'APP_CONTEXT_LOADING_STOP'
}

const checkExistingSession = () => ({
  type: appContextTypes.SESSION_CHECK,
  payload: dispatcher.dispatcher('firstTime=first&getCrePoint=get')
})

const loadingStart = () => ({type: appContextTypes.LOADING_START})
const loadingStop = () => ({type: appContextTypes.LOADING_STOP})

const appLoad = () =>
  dispatch => {
    dispatch(loadingStart())
    dispatch(checkExistingSession())
      .then(({value}) => {
        if (value.sessionExist) {
          return dispatch(refDataActions.loadAllRefData())
        }
      })
      .then(() => dispatch(loadingStop()))
  }

const startNewCharacter = (initialCredits) =>
  dispatch => {
    dispatch(loadingStart())
    return dispatch(creditsActions.setCP(initialCredits))
      .then(() => dispatch(checkExistingSession()))
      .then(() => dispatch(loadingStart()))
      .then(({value}) => {
        if (value.sessionExist) {
          return dispatch(refDataActions.loadAllRefData())
        }
      })
      .then(() => dispatch(loadingStop()))
  }

export default {
  checkExistingSession,
  appLoad,
  startNewCharacter,
  loadingStart,
  loadingStop
}
