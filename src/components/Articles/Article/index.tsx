import moment from 'moment';
import Icons from '@assets/svg';
import { Article as ArticleType } from 'types/article';
import * as Styled from './styled';
import { MouseEventHandler } from 'react';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

type Props = {
  isScraped: boolean;
  onClickScrap: ({ article, isScraped }: { article: ArticleType; isScraped: boolean }) => void;
};

const Article = ({ onClickScrap, isScraped, ...article }: ArticleType & Props) => {
  const { headline, source, byline, pub_date, url } = article;
  const date = moment(pub_date);
  const day = DAY[date.day()];
  const onToggle: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onClickScrap({ article, isScraped });
  };
  return (
    <Styled.Wrapper href={url} target="_self" rel="noreferrer">
      <Styled.Header>
        <Styled.Title>{headline}</Styled.Title>
        <Styled.ScrapButton onClick={onToggle}>
          {isScraped ? <Icons.FillStar /> : <Icons.EmptyStar />}
        </Styled.ScrapButton>
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
