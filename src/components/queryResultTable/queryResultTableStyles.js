import styled, { css } from "styled-components";
import { colors } from "../../static/colors";

export const QueryResultTableContainer = styled.div`
  position: fixed;
  top: 7rem;
  left: calc(20% + 1.5rem);
  right: 0;
  bottom: 0;
  overflow: auto;
  max-width: 80vw;
`;

const sharedStyles = css`
  padding: 0.75rem 0.45rem;
  border: 1px solid #000;
`;

export const TD = styled.td`
  ${sharedStyles};
  text-align: left;
`;

export const TH = styled.th`
  ${sharedStyles};
  text-align: left;
`;

export const THead = styled.thead`
  background: ${colors.ATLAN_BLUE};
  color: ${colors.SMOKE_WHITE};
  position: sticky;
  top: 0;
`;

export const TBody = styled.tbody`
  margin-top: 5rem;
`;
