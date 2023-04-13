import Icons from '@assets/svg';
import * as Styled from './styled';
import ROUTES from '@constants/ROUTES';

const EmptyScrap = () => {
  return (
    <Styled.Wrapper>
      <Styled.Description>
        <Icons.FileText />
        <div>저장된 스크랩이 없습니다.</div>
      </Styled.Description>
      <Styled.GoToMain to={ROUTES.MAIN}>스크랩 하러 가기</Styled.GoToMain>
    </Styled.Wrapper>
  );
};

export default EmptyScrap;
