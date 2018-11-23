import {combineReducers} from 'redux'

import UserReducer from './UserReducer'
import MedblockReducer from './MedblockReducer'

export default combineReducers({
    user: UserReducer,
    med: MedblockReducer
})