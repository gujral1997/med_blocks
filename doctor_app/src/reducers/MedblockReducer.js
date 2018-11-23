const CREATE_BLOCK_FAILED = 'CREATE_BLOCK_FAILED'
const CREATE_BLOCK_INITIATED = 'CREATE_BLOCK_INITIATED'
const CREATE_BLOCK_SUCCESSFUL = 'CREATE_BLOCK_SUCCESSFUL'

export const createBlockInitiated =()=> ({
    type: CREATE_BLOCK_INITIATED
})

export const createBlockFailed =message=> ({
    type: CREATE_BLOCK_FAILED,
    message
})

export const createBlockSuccessful =(message, payload)=> ({
    type: CREATE_BLOCK_SUCCESSFUL,
    payload,
    message
})

const INITIAL_STATE = {
    loading: false,
    message: '',
    response: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case CREATE_BLOCK_INITIATED:
            return {
                ...state,
                loading: true
            }
        
        case CREATE_BLOCK_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            }

        case CREATE_BLOCK_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                message: action.message,
                response: action.payload
            }

        default:
        return state
    }
}