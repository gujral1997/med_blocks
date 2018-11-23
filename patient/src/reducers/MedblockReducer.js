const GET_CHAIN_FAILED = 'GET_CHAIN_FAILED'
const GET_CHAIN_INITIATED = 'GET_CHAIN_INITIATED'
const GET_CHAIN_SUCCESSFUL = 'GET_CHAIN_SUCCESSFUL'
const GET_DATA_BY_ID = 'GET_DATA_BY_ID'

export const getChainInitiated =()=> ({
    type: GET_CHAIN_INITIATED
})

export const getChainFailed =message=> ({
    type: GET_CHAIN_FAILED,
    message
})

export const getChainSuccessful =payload=> ({
    type: GET_CHAIN_SUCCESSFUL,
    payload
})

export const getDataById =(payload)=> ({
    type: GET_DATA_BY_ID,
    payload
})

const INITIAL_STATE = {
    loading: false,
    message: '',
    response: '',
    blockData: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case GET_CHAIN_INITIATED:
            return {
                ...state,
                loading: true
            }
        
        case GET_CHAIN_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            }

        case GET_CHAIN_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                response: action.payload
            }

        case GET_DATA_BY_ID:
            return {
                ...state,
                blockData: action.payload
            }

        default:
        return state
    }
}