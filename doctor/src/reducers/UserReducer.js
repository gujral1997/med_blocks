import {
    LOGIN_USER_FAILED,
    LOGIN_USER_INITIATED,
    LOGIN_USER_SUCCESSFUL
} from '../actions/types'

const INITIAL_STATE = {
    loading: false,
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case LOGIN_USER_INITIATED:
            return {
                ...state,
                loading: true
            }
        
        case LOGIN_USER_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            }

        case LOGIN_USER_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                message: action.message
            }

        default:
        return state
    }
}