import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGOUT_REQUEST
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
    dispatch({ type: USER_LOGIN_REQUEST_FAILURE, payload: error.response &&  error.response.data.message ? error.response.data.message : error.message})
  }
}