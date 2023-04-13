import { text14 } from '@constants/TYPHOGRAP';
import styled from '@emotion/styled'
import { dynamicLineClamp } from 'utils/dynamicLineClamp';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 7px;
  align-items: center;
  padding: 13px 0 13px 20px;
  background-color: var(--white-100);
  border-bottom: 1px solid var(--gray);
`;

export const FilterButton = styled.button<{$active: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  border: 1px solid ${(props) => props.$active ? 'var(--blue-main)' : 'var(--gray)'};
  border-radius: 30px;
  padding: 6px 12px 4px;
  background-color: transparent;
  ${text14};
  color: ${(props) => props.$active ? 'var(--blue-main)' : 'var(--black-80)'};

  & > svg > path {
    fill: ${(props) => props.$active ? 'var(--blue-main)' : 'var(--black-80)'};
  }
`;

export const FilterText = styled.div`
  ${dynamicLineClamp(1)};
  text-align: initial;
  max-width: 100px;
`;