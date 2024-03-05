import { ActionTypes } from "../actionTypes/actionTypes";

export const initialInputState = {
  queryInput: "",
  recentQueries: [],
};

export const inputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.UPDATE_INPUT:
      return {
        ...state,
        queryInput: payload,
      };

    case ActionTypes.UPDATE_RECENT_QUERY_LIST:
      return {
        ...state,
        recentQueries: [...state.recentQueries, payload],
      };

    case ActionTypes.CLEAR_QUERY_INPUT:
      return {
        ...state,
        queryInput: "",
      };

    case ActionTypes.REMOVE_RECENT_QUERY:
      return {
        ...state,
        recentQueries: state.recentQueries.filter((query) => query !== payload),
      };

    default:
      return state;
  }
};
