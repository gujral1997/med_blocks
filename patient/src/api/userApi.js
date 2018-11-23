import axios from 'axios'
import { API_HOST, LOCAL_HOST } from 'react-native-dotenv'
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

export const medApi = {
    create: () => {
        return axios({
            method: 'post',
            url: `${LOCAL_HOST}/mine_block`,
            data: {
                "gender": "Hello Hi",
                "data": "aasdasdasdasd",
                "amount": "100",
                "name": "Ansh",
                "doctor": "Doctor"
            },
            timeout: 15000
        })
            .then(response => {
                console.log(response)
            }).catch(err=> {
                console.log(err)
            })
    }
}