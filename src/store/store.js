/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  categories: [
    { name: 'Romance', products: [ { title: 'The Duke and I' } ] },
    { name: 'Fantasy', products: [ { title:'The Name of the Wind' } ] },
    { name: 'Young Adult', products: [ { title:'An Ember in the Ashes' } ] }
  ],
  activeCategory: { name: 'Fantasy', products: [ { title:'The Name of the Wind' } ] },
}

// a reducer is a pure function that is meant to eval an action type
export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case 'ACTIVATE_CATEGORY':
      return {...state, activeCategory: payload};

    case 'RESET':
      return initialState
    default:
      return state
  }
}

// an action creator is a function that RETURNS an ACTION
export const activate = (payload) => {
  console.log(payload);
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: payload,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}