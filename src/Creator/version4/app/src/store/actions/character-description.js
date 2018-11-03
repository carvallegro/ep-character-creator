import client from '@client'

export const characterDescriptionTypes = {
    UPDATE_DETAILS: 'CHARACTER_DESCRIPTION_UPDATE_DETAILS'
}

const updateDescription = details => ({
    type: characterDescriptionTypes.UPDATE_DETAILS,
    payload: client.dispatch(details).then(() => details)
})

export default {
    updateDescription
}
