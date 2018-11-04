import client from '../../client'

export const creditTypes = {
    SET_CP: 'CREDITS_SET_CP',
    SET_CREDITS: 'CREDITS_SET_CREDITS'
}

export const setCP = (cpAmount = 1000) => ({
    type: creditTypes.SET_CP,
    payload: client.dispatch({ setCP: cpAmount })
})

export const setCredits = credits => ({
    type: creditTypes.SET_CREDITS,
    data: credits
})

export default {
    setCP,
    setCredits
}
