import { lazy, Suspense } from "react";
import { useQueryContext } from "../../context/queryContext";

import RunQueryMessage from "../runQueryMessage/runQueryMessage";
import { QueryResultContainer } from "./queryResultStyles";

const QueryResultTable = lazy(() =>
  import("../queryResultTable/queryResultTable")
);

const QueryResult = () => {
  const { queryState } = useQueryContext();
  const { queryData } = queryState;

  return (
    <QueryResultContainer>
      {queryData.length > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <QueryResultTable queryData={queryData} />
        </Suspense>
      ) : (
        <RunQueryMessage />
      )}
    </QueryResultContainer>
  );
};

export default QueryResult;
