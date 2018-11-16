import axios from 'axios'
import { API_HOST } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'


import store from '../store/store'
import { loginUserInitiated, loginUserSuccessful, loginUserFailed } from '../actions/userActions'

export const userApi = {

    login: (username, password) => {
        store.dispatch(loginUserInitiated())
        return axios({
            method: 'post',
            url: `${API_HOST}/nodative/api/v1/users/login`,
            data: {
                'username': username,
                'password': password
            },
            timeout: 15000
        })
            .then(response => {
                store.dispatch(loginUserSuccessful('Success'))
                Actions.afterLogin()
            }).catch(err=> {
                store.dispatch(loginUserFailed('Login Failed'))
            })
    }
}