import {
  CATEGORY_LOADING,
  CATEGORY_LOAD_ERROR,
  CATEGORY_LOAD_SUCCESS,
} from "context/actions/actionTypes";
const category = (state, { payload, type }) => {
  switch (type) {
    case CATEGORY_LOADING: {
      return {
        ...state,
        category: {
          ...state.category,
          loading: true,
        },
      };
    }
    case CATEGORY_LOAD_SUCCESS: {
      return {
        ...state,
        category: {
          ...state.category,
          loading: false,
          data: payload,
        },
      };
    }
    case CATEGORY_LOAD_ERROR: {
      return {
        ...state,
        category: {
          ...state.category,
          loading: false,
          error: payload,
        },
      };
    }

    default:
      return state;
      break;
  }
};
export default category;
