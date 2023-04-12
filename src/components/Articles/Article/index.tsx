import * as Styled from './styled';
import Icons from '@assets/svg';

const Article = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”</Styled.Title>
        <Icons.EmptyStar />
      </Styled.Header>
      <Styled.Footer>
        <Styled.Person>
          <div>조선일보</div>
          <div>김정확 기자</div>
        </Styled.Person>
        <Styled.PublishedAt>2021.3.15. (목)</Styled.PublishedAt>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Article;
