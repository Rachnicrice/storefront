/* eslint-disable import/no-anonymous-default-export */
let initialState = [];

// a reducer is a pure function that is meant to eval an action type
export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case 'ADD':
      return [...state, payload];

    case 'REMOVE':
      return state.filter(product => product !== payload);

    case 'RESET':
      return initialState
    default:
      return state
  }
}

export const addToCart = (payload) => {
  return {
    type: 'ADD',
    payload: payload,
  }
}

export const removeFromCart = (payload) => {
  return {
    type: 'REMOVE',
    payload: payload,
  }
}