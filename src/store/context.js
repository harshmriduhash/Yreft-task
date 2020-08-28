import React from 'react'

const defaultValue = {
    cart : [],
    data: []
}

const store = React.createContext(defaultValue);

const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch(action.type) {
    case 'CART_ADD':
        let newState = [...state.cart, action.payload]
        return {...state, cart:newState};
    case 'CART_REMOVE':
        newState = state.cart.filter(item => item._id!==action.payload._id)
        return {...state, cart: newState};
    case 'ADD_DATA':
        console.log("Putting data into context ", action.payload)
        return {...state, data: action.payload}
    default:
    throw new Error();
    };
  }, defaultValue);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
