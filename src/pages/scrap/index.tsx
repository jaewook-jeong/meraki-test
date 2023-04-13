import Article from '@/Articles/Article';
import { Wrapper as ArticlesWrapper } from '@/Articles/styled';
import EmptyScrap from '@/EmptyScrap';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';
import { SCRAP_KEY } from '@constants/SCRAP';
import useLocalStorage from 'hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { Article as ArticleType } from 'types/article';

const ScrapPage = () => {
  const [scrapedList, setList] = useLocalStorage<ArticleType[]>(SCRAP_KEY, []);
  const onDelete = ({ article }: { article: ArticleType }) => {
    setList(scrapedList.filter((s) => s.id !== article.id));
    toast.success('스크랩을 삭제했습니다.');
  };
  return (
    <>
      <Filter />
      <Layout>
        {scrapedList.length > 0 ? (
          <ArticlesWrapper>
            {scrapedList.map((s) => (
              <Article onClickScrap={onDelete} isScraped {...s} />
            ))}
          </ArticlesWrapper>
        ) : (
          <EmptyScrap />
        )}
      </Layout>
      <GNB />
    </>
  );
};

export default ScrapPage;
