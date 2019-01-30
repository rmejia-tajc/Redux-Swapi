import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";


const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};


export const charsReducer = (state = initialState, action) => {
  console.log("charsReducer", action);
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
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

    default:
      return state;
  }
};
