/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  categories: [
    { 
      name: 'romance', 
      displayName: 'Romance',
      description:'All the romance novels all the time.' 
    },
    { 
      name: 'fantasy', 
      displayName: 'Fantasy',
      description:'Mystical creatures, oh my!'  
    },
    { 
      name: 'young_adult', 
      displayName: 'Young Adult',
      description:'The best genre.'   
    }
  ],
  activeCategory: 'all',
}

// a reducer is a pure function that is meant to eval an action type
export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case 'ACTIVATE_CATEGORY':
      return {...state, activeCategory: payload.name};

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