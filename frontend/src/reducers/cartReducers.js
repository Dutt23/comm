import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(x => x.product === x.product)
      let cartItems = state.cartItems;
      if (existItem) {
        return {
          ...state,
          cartItems: cartItems.map(x => x.product === existItem.product ? item : x)
        }
      }
      else {
        return {
          ...state,
          cartItems: [...cartItems, item]
        }
      }
    default: return state
  }
}