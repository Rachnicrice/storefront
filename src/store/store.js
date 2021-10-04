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
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      })

      return { totalVotes, candidates };

    case 'RESET':
      return initialState
    default:
      return state
  }
}

// an action creator is a function that RETURNS an ACTION
export const increment = (name) => {
  // action is an object literal with a type and a payload (optional)
  return {
    type: 'INCREMENT',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}