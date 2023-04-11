import { useLocation } from 'react-router-dom';
import * as Styled from './styled';
import Buttons from './Buttons';

const GNB = () => {
  const { pathname } = useLocation();
  return (
    <Styled.Wrapper>
      <Styled.ButtonsWrapper>
        <Buttons currentPath={pathname} />
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default GNB;
