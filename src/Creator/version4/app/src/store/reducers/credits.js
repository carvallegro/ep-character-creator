import typeToReducer from 'type-to-reducer'

import { creditTypes } from '../actions/credits'
import { appContextTypes } from '../actions/appContext'
import { characterDescriptionTypes as types } from '@store/actions/character-description'

const loadCredits = (state, { payload }) => ({
    ...state,
    data: {
        creation: payload['creation_remain'],
        credit: payload['credit_remain'],
        aptitude: payload['aptitude_remain'],
        reputation: payload['reputation_remain'],
        rez: payload['rez_remain'],
        asr: payload['asr_remain'],
        ksr: payload['ksr_remain']
    }
})

const setLoading = isLoading => state => ({
    ...state,
    loading: isLoading
})

const INITIAL_STATE = {
    loading: false,
    data: {
        creation: 0,
        credit: 0,
        aptitude: 0,
        reputation: 0,
        rez: 0,
        asr: 0,
        ksr: 0
    }
}

export const credits = typeToReducer(
    {
        [creditTypes.SET_CP]: {
            FULFILLED: loadCredits
        },
        [creditTypes.SET_CREDITS]: (state, { data }) => ({
            ...state,
            loading: false,
            data: {
                creation: data['creation_remain'],
                credit: data['credit_remain'],
                aptitude: data['aptitude_remain'],
                reputation: data['reputation_remain'],
                rez: data['rez_remain'],
                asr: data['asr_remain'],
                ksr: data['ksr_remain']
            }
        }),
        [appContextTypes.SESSION_CHECK]: {
            FULFILLED: loadCredits
        },
        [types.UPDATE_DETAILS]: {
            PENDING: setLoading(true),
            REJECTED: setLoading(false),
            FULFILLED: (state, { payload }) => ({
                ...state,
                loading: false,
                data: {
                    creation: payload.credits['creation_remain'],
                    credit: payload.credits['credit_remain'],
                    aptitude: payload.credits['aptitude_remain'],
                    reputation: payload.credits['reputation_remain'],
                    rez: payload.credits['rez_remain'],
                    asr: payload.credits['asr_remain'],
                    ksr: payload.credits['ksr_remain']
                }
            })
        }
    },
    INITIAL_STATE
)

export default credits
