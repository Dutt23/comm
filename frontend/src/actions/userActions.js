import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST_FAILURE,
} from '../constants/userConstants'
import axios from 'axios'
export const login = (email, password) => async (dispatch) => {

  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: { 'Content-Type': "application/json" }
    }

    const { data } = await axios.post('/api/users/login', {
      email,
      password
    }, config)

    dispatch({
      type: USER_LOGIN_REQUEST_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  catch (error) {
    dispatch({ type: USER_LOGIN_REQUEST_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const logout = () => async (dispatch) =>{
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOGOUT_REQUEST
  })
}

export const register = (email, password, name) => async (dispatch) => {

  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = {
      headers: { 'Content-Type': "application/json" }
    }

    const { data } = await axios.post('/api/users', {
      email,
      password,
      name
    }, config)

    dispatch({
      type: USER_REGISTER_REQUEST_SUCCESS,
      payload: data
    })

    dispatch({
      type: USER_LOGIN_REQUEST_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  catch (error) {
    dispatch({ type: USER_REGISTER_REQUEST_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {

  try {
    dispatch({
      type: USER_DETAILS_REQUEST
    })
    
    const { userLogin: { userInfo } } = getState()
    const config = {
      headers: { 
        'Content-Type': "application/json",
         Authorization: `Bearer ${userInfo.token}`
     }
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({
      type: USER_DETAILS_REQUEST_SUCCESS,
      payload: data
    })
    
  }

  catch (error) {
    dispatch({ type: USER_DETAILS_REQUEST_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}