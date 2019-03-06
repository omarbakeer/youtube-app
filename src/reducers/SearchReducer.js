import {
  SET_LOADING_STATE,
  HANDLE_SEARCH_INPUT,
  SUBMIT_SEARCH_REQUEST
} from '../actions'

const initState = {
  input: '',
  results: [],
  isLoading: false
}

const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case HANDLE_SEARCH_INPUT:
      return {
        ...state,
        input: action.payload
      }
    case SUBMIT_SEARCH_REQUEST:
      return {
        ...state,
        results: action.searchResult
      }
    default:
      return state
  }
}

export default SearchReducer
