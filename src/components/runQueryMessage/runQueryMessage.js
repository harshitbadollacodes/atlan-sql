import { RunQueryMessageContainer } from "./runQueryMessageStyles";
import sqlImage from "../../assets/sql-injection.png";

const RunQueryMessage = () => {
  return (
    <RunQueryMessageContainer>
      <img src={sqlImage} alt="SQL query png" />
      <p>
        Enter a query in the input field and hit run or select any query from
        the sidebar
      </p>
    </RunQueryMessageContainer>
  );
};

export default RunQueryMessage;
