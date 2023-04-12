import moment from 'moment';
import Icons from '@assets/svg';
import { Article as ArticleType } from 'types/article';
import * as Styled from './styled';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

const Article = ({ headline, source, byline, pub_date, url }: ArticleType) => {
  const date = moment(pub_date);
  const day = DAY[date.day()];

  return (
    <Styled.Wrapper href={url} target="_self" rel="noreferrer">
      <Styled.Header>
        <Styled.Title>{headline}</Styled.Title>
        <Icons.EmptyStar />
      </Styled.Header>
      <Styled.Footer>
        <Styled.Person>
          <div>{source}</div>
          <div>{byline}</div>
        </Styled.Person>
        <Styled.PublishedAt>{`${date.format('YYYY.MM.DD.')} (${day})`}</Styled.PublishedAt>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Article;
