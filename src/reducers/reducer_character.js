import { FETCH_CHARACTER } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_CHARACTER:
      return action.payload.character
    default:
      return state;
  }
}
