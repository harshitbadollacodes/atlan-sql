import Main from "../main/main.js";
import Sidebar from "../sidebar/sidebar.js";
import { BodyContainer } from "./bodyStyles.js";

const Body = () => {
  return (
    <BodyContainer>
      <Sidebar />
      <Main />
    </BodyContainer>
  );
};

export default Body;
