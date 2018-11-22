import {
    LOGIN_USER_FAILED,
    LOGIN_USER_INITIATED,
    LOGIN_USER_SUCCESSFUL
} from '../types'

export const loginUserInitiated =()=> ({
    type: LOGIN_USER_INITIATED
})

export const loginUserFailed =message=> ({
    type: LOGIN_USER_FAILED,
    message
})

export const loginUserSuccessful =message=> ({
    type: LOGIN_USER_SUCCESSFUL,
    message
})