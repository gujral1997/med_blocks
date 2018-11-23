import axios from 'axios'
import { API_HOST, LOCAL_HOST } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'


import store from '../store/store'
import { loginUserInitiated, loginUserSuccessful, loginUserFailed } from '../reducers/UserReducer'
import { getChainFailed, getChainInitiated, getChainSuccessful } from '../reducers/MedblockReducer';

export const userApi = {

    login: (password) => {
        store.dispatch(loginUserInitiated())
        return axios({
            method: 'post',
            url: `${API_HOST}/nodative/api/v1/users/login`,
            data: {
                'username': 'doctor',
                'password': password
            },
            timeout: 15000
        })
            .then(response => {
                store.dispatch(loginUserSuccessful('Success', password))
                Actions.home()
            }).catch(err=> {
                store.dispatch(loginUserFailed('Login Failed'))
            })
    }
}

export const medApi = {
    get_chain: () => {
        store.dispatch(getChainInitiated())
        return axios({
            method: 'get',
            url: `${LOCAL_HOST}/get_chain`,
            timeout: 15000
        })
            .then(response => {
                console.log(response.data.chain[1].medicalData[0].age)
                store.dispatch(getChainSuccessful(response.data.chain))
            }).catch(err=> {
                store.dispatch(createBlockFailed('Network Error'))
            })
    }
}