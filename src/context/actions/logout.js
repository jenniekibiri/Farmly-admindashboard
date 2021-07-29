import { LOGOUT_USER } from "../actions/actionTypes";



export default (history) => (dispatch) => {
    
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT_USER,
  });
  history.push("/auth/login");
};
