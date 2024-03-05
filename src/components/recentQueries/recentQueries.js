import { lazy, Suspense } from "react";
import { useInputContext } from "../../context/inputContext";
import { RecentQueriesContainer } from "./recentQueiresStyles";

const RecentQueriesList = lazy(() => import("./recentQueriesList"));

const RecentQueries = () => {
  const { inputState } = useInputContext();
  const { recentQueries } = inputState;

  return (
    <RecentQueriesContainer>
      <h3>Recent Queries</h3>
      {recentQueries.length ? (
        <Suspense fallback={<div>Loading...</div>}>
          <RecentQueriesList />
        </Suspense>
      ) : (
        <p>No recent queries</p>
      )}
    </RecentQueriesContainer>
  );
};

export default RecentQueries;
