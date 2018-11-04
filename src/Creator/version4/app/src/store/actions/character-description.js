import client from '@client'
import { setCredits } from './credits'

export const characterDescriptionTypes = {
    UPDATE_DETAILS: 'CHARACTER_DESCRIPTION_UPDATE_DETAILS'
}

const updateDescription = details => ({
    type: characterDescriptionTypes.UPDATE_DETAILS,
    payload: client.dispatch(details)
        .then(credits => ({credits, details}))
})

export default {
    updateDescription
}
