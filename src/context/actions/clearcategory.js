import { CLEAR_ADD_CATEGORY } from "context/actions/actionTypes";

export default () => (dispatch) => {
  dispatch({
    type: CLEAR_ADD_CATEGORY,
  });
};
