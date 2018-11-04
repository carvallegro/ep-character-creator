import { characterDescriptionTypes as types } from '../actions/character-description'
import typeToReducer from 'type-to-reducer'

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: {
        playerName: 'player Name',
        characterName: 'Character Name',
        realAge: '12',
        birthGender: 'Irrelevant',
        notesDetails: 'More details'
    }
}

export const characterDescription = typeToReducer(
    {
        [types.UPDATE_DETAILS]: {
            PENDING: state => ({
                ...state,
                loading: true
            }),
            FULFILLED: (state, {payload}) => ({
                ...state,
                loading: false,
                data: payload.details
            }),
            REJECTED: state => ({
                ...state,
                loading: false,
                error: 'something happened.'
            })
        }
    },
    INITIAL_STATE
)

export default characterDescription
