import axios from 'axios'
import { API_HOST } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'


import store from '../store/store'
import { loginUserInitiated, loginUserSuccessful, loginUserFailed } from '../reducers/UserReducer'

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
                store.dispatch(loginUserSuccessful('Success'))
                Actions.home()
            }).catch(err=> {
                store.dispatch(loginUserFailed('Login Failed'))
            })
    }
}