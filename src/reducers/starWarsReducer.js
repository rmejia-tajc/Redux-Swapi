import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";


const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  console.log('charsReducer', action);
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
