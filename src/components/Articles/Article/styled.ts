import { text13, text18SemiBold } from "@constants/TYPHOGRAP";
import styled from "@emotion/styled";
import { dynamicLineClamp } from "utils/dynamicLineClamp";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  row-gap: 8px;
  background-color: var(--white-90);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 11px;
  height: 56px;
`;

export const Title = styled.div`
  ${text18SemiBold};
  color: var(--black-100);
  ${dynamicLineClamp(2)};
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
`;

export const PublishedAt = styled.div`
  ${text13};
  color: var(--black-80);
`;