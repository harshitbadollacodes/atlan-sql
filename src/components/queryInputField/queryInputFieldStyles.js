import styled from "styled-components";
import { colors } from "../../static/colors";

export const QueryInputFieldContainer = styled.div`
  display: flex;
  position: fixed;
  top: 1.5rem;
  z-index: 100;
  width: 80%;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
  border-radius: 8px;
  border: 1px solid ${colors.ATLAN_BLUE};

  &:focus {
    outline: none;
  }
`;
