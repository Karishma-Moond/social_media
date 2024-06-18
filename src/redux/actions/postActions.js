import axios from 'axios';

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: 'FETCH_POSTS_SUCCESS',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_POSTS_FAIL',
      payload: err.response.data
    });
  }
};
