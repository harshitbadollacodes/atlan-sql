import { createContext, useContext, useReducer } from "react";
import { queryReducer, initialQueryState } from "../reducer/queryReducer";

const QueryContext = createContext();

export const QueryContextProvider = ({ children }) => {
  const [queryState, queryDispatch] = useReducer(
    queryReducer,
    initialQueryState
  );

  return (
    <QueryContext.Provider value={{ queryState, queryDispatch }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => {
  return useContext(QueryContext);
};
