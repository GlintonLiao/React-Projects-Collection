export const initialState = {
  basket:[], 
}

export const getBasketTotal = (basket) => {
  return basket?.reduce((sum, item) => sum + item.price, 0);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, 
        basket: [...state.basket, action.item], 
      }
    
    case "REMOVE": 
      let flag = false;
      const newBasket = state.basket.filter(item => {
        if (item.id === action.id && !flag) {
          flag = true;
          return false;
        }
        return true;
      })
      return {
        ...state, 
        basket: newBasket,
      }
  
    default:
      break;
  }
}

export default reducer;
