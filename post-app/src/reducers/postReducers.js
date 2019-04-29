import { FETCHING_POST, SUCCESS_POST, FAILURE_POST, getPost } from "../actions";

const intitalState = {
  posts: [],
  post: {},
  fetchedPost: false,
  fetchingPost: false
};

export const postReducers = (state = intitalState, action) => {
  switch (action.type) {
    case FETCHING_POST:
      return {
        ...state,
        fetchingPost: true
      };
    case SUCCESS_POST:
      return {
        ...state,
        posts: action.payload,
        fetchingPost: false,
        fetchedPost: true
      };
    case FAILURE_POST:
      return {
        ...state,
        fetchingPost: false,
        fetchedPost: false
      };
    default:
      return state;
  }
};
