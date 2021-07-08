import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_REQUEST_SUCCESS, 
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGOUT_REQUEST
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, products: [] }
    case USER_LOGIN_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_REQUEST_FAILURE:
      return { loading: false, error: action.payload }
    case USER_LOGOUT_REQUEST:
      return { }
    default: return state
  }
}