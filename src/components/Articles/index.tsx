import { useSelector } from 'react-redux';
import Article from './Article';
import * as Styled from './styled';
import { RootState } from 'store';

const Articles = () => {
  const { articles } = useSelector((state: RootState) => state.article);

  return (
    <Styled.Wrapper>
      {articles.length > 0 && articles.map((article) => <Article key={article.url} {...article} />)}
    </Styled.Wrapper>
  );
};

export default Articles;
