import dispatcher from '../../client/dispatcher'

import creditsActions from './credits'

export const appContextTypes = {
  SESSION_CHECK: 'APP_CONTEXT_SESSION_CHECK',
  LOADING_START: 'APP_CONTEXT_LOADING_START'
}

const checkExistingSession = () => ({
  type: appContextTypes.SESSION_CHECK,
  payload: dispatcher.dispatcher('firstTime=first&getCrePoint=get')
})

const startNewCharacter = (initialCredits) =>
  dispatch => {
    dispatch({type: appContextTypes.LOADING_START})
    return dispatch(creditsActions.setCP(initialCredits))
      .then(() => dispatch(checkExistingSession()))
  }

export default {
  checkExistingSession,
  startNewCharacter
}
