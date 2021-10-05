/* eslint-disable import/no-anonymous-default-export */
let initialState = [
  { 
    name: 'The Duke and I', 
    description: 'From #1 New York Times bestselling author Julia Quinn comes the story of Daphne Bridgerton, in the first of her beloved Regency-set novels featuring the charming, powerful Bridgerton family, now a series created by Shondaland for Netflix.',
    price: 10.99,
    inventoryCount: 1,
    category: 'romance',
    display: true, 
  },
  { 
    name: 'The Name of the Wind', 
    description: 'Discover #1 New York Times-bestselling Patrick Rothfuss\' epic fantasy series, The Kingkiller Chronicle.',
    price: 12.99,
    inventoryCount: 2,
    category: 'fantasy',
    display: true, 
  },
  { 
    name: 'An Ember in the Ashes', 
    description: 'One of Time Magazine\'s 100 Best Fantasy Books of All Time',
    price: 10.99,
    inventoryCount: 1,
    category: 'young_adult',
    display: true, 
  },
]

// a reducer is a pure function that is meant to eval an action type
export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case 'ACTIVATE_CATEGORY':
      return state.map( product => {
        if (product.inventoryCount > 0) {
          if ( payload.name === 'all' ) {
            product.display = true;
          } else if (product.category === payload.name) {
            product.display = true;
          } else {
            product.display = false;
          }
        }
        return product
      });

    case 'ADD':
      return state.map( product => {
        if ( product === payload ) {
          if ( product.inventoryCount === 1 ) {
            product.display = false;
          } 
          product.inventoryCount--;
        }
        return product
      });

    case 'REMOVE':
      return state.map( product => {
        if ( product === payload ) {
          product.inventoryCount++;
        }
        return product
      });

    case 'RESET':
      return initialState
    default:
      return state
  }
}