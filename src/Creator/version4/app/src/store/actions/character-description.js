export const characterDescriptionTypes = {
    UPDATE_DETAILS: 'CHARACTER_DESCRIPTION_UPDATE_DETAILS'
}

const updateDescription = details => ({
    type: characterDescriptionTypes.UPDATE_DETAILS,
    data: details
})

export default {
    updateDescription
}
