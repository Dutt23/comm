import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems');
const items = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : []

const userInfoFromStorage = localStorage.getItem('userInfo');
const user = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null
const initialState = {
  cart: {
    cartItems: items
  },
  userLogin: {
    userInfo: user
  }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store