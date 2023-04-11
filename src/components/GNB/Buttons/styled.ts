import { text10SemiBold } from '@constants/TYPHOGRAP';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  row-gap: 9px;
  align-items: center;
  ${text10SemiBold};

  ${(props) => {
    return props.$active ? css`
      color: var(--white-100);
      & > svg {
        rect {
          stroke: var(--white-100);  
        }
        path {
          stroke: var(--white-100);  
        }
        
      }
    ` : css`
      color: var(--black-80);
      & > svg {
        path {
          fill: var(--black-80);
        }
      }
    `
  }}
`;

export default StyledLink;