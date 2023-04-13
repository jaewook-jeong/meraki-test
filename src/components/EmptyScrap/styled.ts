import { text16SemiBold, text18SemiBold } from "@constants/TYPHOGRAP";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  color: var(--black-80);
  ${text18SemiBold};
`;

export const GoToMain = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  border-radius: 16px;
  background-color: var(--blue-main);
  color: var(--white-100);
  ${text16SemiBold};
  text-decoration: none;
`;

