import { ActionTypes } from "../../actionTypes/actionTypes";
import { useInputContext } from "../../context/inputContext";
import { useQueryContext } from "../../context/queryContext";
import { PrimaryBtn } from "../button/primaryButtonStyles";
import RecentQueries from "../recentQueries/recentQueries";
import { SidebarContainer, BtnContainer } from "./sidebarStyles";

const Sidebar = () => {
  const { queryState, queryDispatch } = useQueryContext();
  const { inputDispatch } = useInputContext();

  const fetchQueryData = (e) => {
    const { query } = e.target.dataset;
    queryDispatch({ type: query });
    inputDispatch({ type: ActionTypes.UPDATE_INPUT, payload: query });
  };

  return (
    <SidebarContainer>
      <h1 className="logo">atlan</h1>
      <BtnContainer onClick={(e) => fetchQueryData(e)}>
        <h3>Select Queries</h3>
        <PrimaryBtn
          data-query={ActionTypes.SELECT_ALL}
          $active={ActionTypes.SELECT_ALL === queryState.queryInput}
        >
          SELECT * FROM ORDERS
        </PrimaryBtn>
        <PrimaryBtn
          data-query={ActionTypes.SELECT_FN_LN_PRODUCT}
          $active={ActionTypes.SELECT_FN_LN_PRODUCT === queryState.queryInput}
        >
          SELECT First Name Last Name Product FROM ORDERS
        </PrimaryBtn>
      </BtnContainer>

      <RecentQueries />
    </SidebarContainer>
  );
};

export default Sidebar;
