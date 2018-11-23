import axios from 'axios'
import { API_HOST, LOCAL_HOST } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'


import store from '../store/store'
import { loginUserInitiated, loginUserSuccessful, loginUserFailed } from '../reducers/UserReducer'
import { createBlockInitiated, createBlockSuccessful, createBlockFailed } from '../reducers/MedblockReducer';

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
    create: (
        heading,
        name,
        age,
        gender,
        data,
        doctor,
        hospital
    ) => {
        store.dispatch(createBlockInitiated())
        return axios({
            method: 'post',
            url: `${LOCAL_HOST}/mine_block`,
            data: {
                "heading": heading,
                "gender": gender,
                "data": data,
                "age": age,
                "name": name,
                "doctor": doctor,
                "hospital": hospital
            },
            timeout: 15000
        })
            .then(response => {
                store.dispatch(createBlockSuccessful('Data saved successfully'))
            }).catch(err=> {
                store.dispatch(createBlockFailed('Network Error'))
            })
    }
}