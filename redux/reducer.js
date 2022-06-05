const initialState = {
  selectedItems: { items: [], restaurantName: '' }
}

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        // copy all state
        ...state,
        // change who I want
        selectedItems: {
          // copy original states and add the new one
          items: [...state.selectedItems.items, action.payload.menuItem],
          // set restaurant name
          restaurantName: action.payload.restaurantName
        }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        selectedItems: {
          items: state.selectedItems.items.filter(item => item.name !== action.payload),
          restaurantName: state.selectedItems.restaurantName
        }
      }
      
    default:
      return state
  }
}
