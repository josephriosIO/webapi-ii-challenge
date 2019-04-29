import axios from "axios";

export const FETCHING_POST = "FETCHING_POST";
export const SUCCESS_POST = "SUCCESS_POST";
export const FAILURE_POST = "FAILURE_POST";
export const DELETE_POST = "DELETE_POST";

export const getPost = () => async dispatch => {
  dispatch({
    type: FETCHING_POST
  });
  try {
    const res = await axios.get("http://localhost:4000/api/posts");
    dispatch({
      type: SUCCESS_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FAILURE_POST,
      payload: "OOPS"
    });
  }
};

export const deletePost = id => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
