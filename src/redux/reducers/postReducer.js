const initialState = {
    posts: [],
    loading: true
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case 'FETCH_POSTS_FAIL':
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  }
  