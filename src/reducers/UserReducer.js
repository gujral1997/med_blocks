const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'
const LOGIN_USER_INITIATED = 'LOGIN_USER_INITIATED'
const LOGIN_USER_SUCCESSFUL = 'LOGIN_USER_SUCCESSFUL'

export const loginUserInitiated =()=> ({
    type: LOGIN_USER_INITIATED
})

export const loginUserFailed =message=> ({
    type: LOGIN_USER_FAILED,
    message
})

export const loginUserSuccessful =(message, payload)=> ({
    type: LOGIN_USER_SUCCESSFUL,
    payload,
    message
})

const INITIAL_STATE = {
    loading: false,
    message: '',
    passkey: ''
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
                message: action.message,
                passkey: action.payload
            }

        default:
        return state
    }
}