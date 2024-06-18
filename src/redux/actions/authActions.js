import axios from 'axios';

export const loginUser = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: err.response.data
    });
  }
};
