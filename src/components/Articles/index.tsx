import { useSelector } from 'react-redux';
import Article from './Article';
import * as Styled from './styled';
import { RootState } from 'store';
import useLocalStorage from 'hooks/useLocalStorage';
import { SCRAP_KEY } from '@constants/SCRAP';
import { Article as ArticleType } from 'types/article';

const Articles = () => {
  const { articles } = useSelector((state: RootState) => state.article);

  const [scrapedList, setScrap] = useLocalStorage<ArticleType[]>(SCRAP_KEY, []);
  const toggleScrap = ({ article, isScraped }: { article: ArticleType; isScraped: boolean }) => {
    if (isScraped) {
      setScrap(scrapedList.filter((s) => s.id !== article.id));
    } else {
      setScrap([...scrapedList, article]);
    }
  };
  return (
    <Styled.Wrapper>
      {articles.length > 0 &&
        articles.map((article) => (
          <Article
            isScraped={!!scrapedList.find((s) => s.id === article.id)}
            toggleScrap={toggleScrap}
            key={article.id}
            {...article}
          />
        ))}
    </Styled.Wrapper>
  );
};

export default Articles;
