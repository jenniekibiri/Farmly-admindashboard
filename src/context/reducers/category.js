import { ADD_CATEGORY_ERROR } from "context/actions/actionTypes";
import { ADD_CATEGORY_SUCCESS } from "context/actions/actionTypes";
import { ADD_CATEGORY_LOAD } from "context/actions/actionTypes";
import { CLEAR_ADD_CATEGORY } from "context/actions/actionTypes";

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
    case ADD_CATEGORY_LOAD: {
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          error: null,
          loading: true,
        },
      };
    }

    case ADD_CATEGORY_ERROR: {
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          loading: false,
        },
      };
    }

    case ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          loading: false,
          data: payload,
        },

        category: {
          ...state.category,
          loading: false,
          data: [payload, ...state.category.data.data],
        },
      };
    }
    case CLEAR_ADD_CATEGORY: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          loading: false,
          data: null,
        },
      };
    }
    default:
      return state;
  }
};
export default category;
