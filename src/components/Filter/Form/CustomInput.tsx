import React from 'react';
import styled from '@emotion/styled';
import Icons from '@assets/svg';
import { text14 } from '@constants/TYPHOGRAP';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid var(--gray);
  border-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: inherit;
  background: transparent;
  ${text14};
  ::placeholder {
    color: var(--gray);
  }
`;

export type Props = {
  placeholder?: string;
  value?: string;
  onClick?(e: React.MouseEvent<HTMLElement>): void;
};

const CustomInput = ({ value, onClick, placeholder }: Props) => {
  return (
    <InputWrapper>
      <Input readOnly value={value} onClick={onClick} placeholder={placeholder}></Input>
      <Icons.Calendar />
    </InputWrapper>
  );
};

export default CustomInput;
