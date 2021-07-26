const Category = (state, { payload, type }) => {
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
    case CATEGORY_LOAD_ERROR:
      {
        return {
          ...state,
          category: {
            ...state.category,
            loading: false,
            error: payload,
          },
        };
      }

      break;

    default:
      break;
  }
};
