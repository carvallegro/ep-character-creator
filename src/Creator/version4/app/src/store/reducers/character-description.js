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
            FULFILLED: (state, {data}) => ({
                ...state,
                data: data
            }),
            PENDING: state => ({
                ...state,
                loading: true
            }),
            REJECTED: state => ({
                ...state,
                error: 'something happened.'
            })
        }
    },
    INITIAL_STATE
)

export default characterDescription
