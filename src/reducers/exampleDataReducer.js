import { EXAMPLE_ACTION } from '../actions/types';


export default (state = [], action) => {
  switch (action.type) {
    case EXAMPLE_ACTION : {
      return [...state, action.payload]
    }
    default: {
      return state;
    }
  }
}