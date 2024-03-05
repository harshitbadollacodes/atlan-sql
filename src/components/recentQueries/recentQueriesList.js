import { ActionTypes } from "../../actionTypes/actionTypes";
import {
  QueryButtonContainer,
  RecentQueriesListContainer,
} from "./recentQueiresStyles";
import { PrimaryBtn } from "../button/primaryButtonStyles";
import { TrashIconSvg } from "../../assets/svg/trashIconSvg";
import { useInputContext } from "../../context/inputContext";

const RecentQueriesList = () => {
  const { inputState, inputDispatch } = useInputContext();
  const { recentQueries } = inputState;

  const queryHandler = (e) => {
    if (e.target.dataset.query) {
      inputDispatch({
        type: ActionTypes.UPDATE_INPUT,
        payload: e.target.dataset.query,
      });
    }

    return;
  };

  const removeQueryHandler = (e) => {
    inputDispatch({
      type: ActionTypes.REMOVE_RECENT_QUERY,
      payload: e.target.dataset.query,
    });
  };

  return (
    <RecentQueriesListContainer onClick={queryHandler}>
      {recentQueries.map((query) => (
        <QueryButtonContainer key={query}>
          <PrimaryBtn data-query={query}>{query}</PrimaryBtn>
          <div onClick={removeQueryHandler} data-query={query}>
            <TrashIconSvg data-query={query} />
          </div>
        </QueryButtonContainer>
      ))}
    </RecentQueriesListContainer>
  );
};

export default RecentQueriesList;
