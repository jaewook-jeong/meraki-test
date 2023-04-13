import { text13, text18SemiBold } from "@constants/TYPHOGRAP";
import styled from "@emotion/styled";
import { dynamicLineClamp } from "utils/dynamicLineClamp";

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  row-gap: 8px;
  background-color: var(--white-90);
  border-radius: 8px;
  text-decoration: none;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 11px;
  height: 56px;

  & > svg {
    flex-shrink: 0;
  }
`;

export const Title = styled.div`
  ${text18SemiBold};
  color: var(--black-100);
  ${dynamicLineClamp(2)};
`;

export const ScrapButton = styled.button`
  align-self: flex-start;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  ${text13};
  color: var(--black-100);
  & > div {
    ${dynamicLineClamp(1)};
  }
`;

export const PublishedAt = styled.div`
  flex-shrink: 0;
  ${text13};
  color: var(--black-80);
`;