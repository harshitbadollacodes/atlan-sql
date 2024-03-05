import { useQueryContext } from "../../context/queryContext";
import QueryResultTable from "../queryResultTable/queryResultTable";
import RunQueryMessage from "../runQueryMessage/runQueryMessage";
import { QueryResultContainer } from "./queryResultStyles";

const QueryResult = () => {
  const { queryState } = useQueryContext();
  const { queryData } = queryState;

  return (
    <QueryResultContainer>
      {queryData.length > 0 ? (
        <QueryResultTable queryData={queryData} />
      ) : (
        <RunQueryMessage />
      )}
    </QueryResultContainer>
  );
};

export default QueryResult;
