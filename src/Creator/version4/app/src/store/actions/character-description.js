import client from '@client'

export const characterDescriptionTypes = {
    UPDATE_DETAILS: 'CHARACTER_DESCRIPTION_UPDATE_DETAILS'
}

const updateDescription = details => {
    console.log('DETAILS CALLED')
    console.log(details)
    return ({
        type: characterDescriptionTypes.UPDATE_DETAILS,
        payload: client.dispatch(details).then(() => details)
    })
}

export default {
    updateDescription
}
