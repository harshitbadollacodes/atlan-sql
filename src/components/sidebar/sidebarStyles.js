import styled from "styled-components";
import { colors } from "../../static/colors";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.ATLAN_BLUE};
  color: ${colors.SMOKE_WHITE};
  padding: 1.5rem;
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const BtnContainer = styled.div`
  margin-top: 10rem;

  button + button {
    margin-top: 1rem;
  }
`;
