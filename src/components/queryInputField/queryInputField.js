import { useEffect } from "react";
import {
  QueryInputFieldContainer,
  Form,
  InputField,
} from "./queryInputFieldStyles";
import { PrimaryBtn } from "../button/primaryButtonStyles";
import { ActionTypes } from "../../actionTypes/actionTypes";
import { useInputContext } from "../../context/inputContext";
import { useQueryContext } from "../../context/queryContext";

const QueryInputField = () => {
  const { queryDispatch } = useQueryContext();
  const { inputState, inputDispatch } = useInputContext();

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputState.queryInput.length === 0) {
      alert("Enter a query or select a query from the sidebar");
      return;
    }

    queryDispatch({ type: inputState.queryInput });
    inputDispatch({
      type: ActionTypes.UPDATE_RECENT_QUERY_LIST,
      payload: inputState.queryInput,
    });
  };

  const inputChangeHandler = (e) => {
    inputDispatch({ type: ActionTypes.UPDATE_INPUT, payload: e.target.value });
  };

  const clearHandler = () => {
    inputDispatch({ type: ActionTypes.CLEAR_QUERY_INPUT });
    queryDispatch({ type: ActionTypes.CLEAR_QUERY_OUTPUT });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && inputState.queryInput.length > 0) {
        return submitHandler(e);
      }

      return;
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <QueryInputFieldContainer>
      <Form onSubmit={submitHandler}>
        <InputField
          type="text"
          placeholder="Enter query or select any query from the sidebar"
          value={inputState.queryInput}
          onChange={inputChangeHandler}
        />

        <PrimaryBtn type="submit">Run</PrimaryBtn>
      </Form>
      <PrimaryBtn onClick={clearHandler} type="submit">
        Clear
      </PrimaryBtn>
    </QueryInputFieldContainer>
  );
};

export default QueryInputField;
