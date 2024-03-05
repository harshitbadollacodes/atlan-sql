import { ActionTypes } from "../../actionTypes/actionTypes";
import { useInputContext } from "../../context/inputContext";
import { PrimaryBtn } from "../button/primaryButtonStyles";
import {
  RecentQueriesContainer,
  RecentQueriesDiv,
} from "./recentQueiresStyles";

const RecentQueries = () => {
  const { inputState, inputDispatch } = useInputContext();
  const { recentQueries } = inputState;

  const queryHandler = (e) => {
    inputDispatch({
      type: ActionTypes.UPDATE_INPUT,
      payload: e.target.dataset.query,
    });
  };

  return (
    <RecentQueriesContainer>
      <h3>Recent Queries</h3>
      {!recentQueries.length && <p>No recent queries</p>}
      <RecentQueriesDiv onClick={queryHandler}>
        {recentQueries.map((query) => (
          <PrimaryBtn data-query={query}>{query}</PrimaryBtn>
        ))}
      </RecentQueriesDiv>
    </RecentQueriesContainer>
  );
};

export default RecentQueries;
