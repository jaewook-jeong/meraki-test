import { text14, text16SemiBold } from "@constants/TYPHOGRAP";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  ${text16SemiBold};
  color: var(--black-100);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid var(--gray);
  border-radius: 8px;
  ${text14};
  ::placeholder {
    color: var(--gray);
  }
`;

export const NationSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  row-gap: 8px;
  flex-wrap: wrap;
`;

export const NationButton = styled.button<{$selected: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white-60);
  border-radius: 30px;
  padding: 6px 12px 4px;
  ${text14};
  color: ${(props) => props.$selected ? 'var(--white-100)' : 'var(--black-80)'};;
  background-color: ${(props) => props.$selected ? 'var(--blue-sky)' : 'transparent'};
`;

export const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  width: 100%;
  border-radius: 16px;
  border: none;
  ${text16SemiBold};
  background-color: var(--blue-main);
  color: var(--white-100);
`;