import client from '../../client'

export const creditTypes = {
    SET_CP: 'CREDITS_SET_CP'
}

const setCP = (cpAmount = 1000) => ({
    type: creditTypes.SET_CP,
    // payload: client.dispatch(`setCP=${cpAmount}&getCrePoint=get`)
    payload: client.dispatch({ setCP: cpAmount })
})

export default {
    setCP
}
