import QueryInputField from "../queryInputField/queryInputField";
import QueryResult from "../queryResult/queryResult";
import { MainContainer } from "./mainStyles";

const Main = () => {
  return (
    <MainContainer>
      <QueryInputField />
      <QueryResult />
    </MainContainer>
  );
};

export default Main;
