import styled from "styled-components";
import { colors } from "../../static/colors";

export const PrimaryBtn = styled.button`
  background: ${({ $active }) =>
    $active ? `${colors.NAVY}` : `${colors.ATLAN_BLUE}`};
  color: ${colors.SMOKE_WHITE};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: ${({ $active }) =>
    $active ? `1px solid ${colors.SMOKE_WHITE}` : "none"};
  cursor: pointer;
  margin-left: 0.5rem;
  text-align: start;
`;
