import { createContext, useContext, useReducer } from "react";
import { inputReducer, initialInputState } from "../reducer/inputReducer";

const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    initialInputState
  );

  return (
    <InputContext.Provider value={{ inputState, inputDispatch }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  return useContext(InputContext);
};
