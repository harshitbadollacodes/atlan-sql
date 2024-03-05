import { ActionTypes } from "../actionTypes/actionTypes";
import MOCK_DATA from "../data/mockData.json";

export const initialQueryState = {
  queryInput: "",
  queryData: [],
  recentQueries: [],
};

const filterData = (data) => {
  return data.map((entry) => {
    return {
      id: entry.id,
      "First Name": entry.first_name,
      "Last Name": entry.last_name,
      Order: entry.order,
    };
  });
};

export const queryReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SELECT_ALL:
      return {
        ...state,
        queryInput: ActionTypes.SELECT_ALL,
        queryData: MOCK_DATA,
      };

    case ActionTypes.SELECT_FN_LN_PRODUCT:
      return {
        ...state,
        queryInput: ActionTypes.SELECT_FN_LN_PRODUCT,
        queryData: filterData(MOCK_DATA),
      };

    case ActionTypes.UPDATE_INPUT:
      return {
        ...state,
        queryInput: payload,
      };

    case ActionTypes.CLEAR_QUERY_OUTPUT:
      return initialQueryState;

    default:
      alert("No result to display");
      return initialQueryState;
  }
};
