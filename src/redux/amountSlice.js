const initialState = {
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, totalItems: state.totalItems + 1 };
    case 'REMOVE_ITEM':
      return { ...state, totalItems: state.totalItems - 1 };
    default:
      return state;
  }
};

export default cartReducer;
