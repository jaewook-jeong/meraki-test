import Article from '@/Articles/Article';
import { Wrapper } from '@/Articles/styled';
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
  const onDelete = (id: string) => {
    setList(scrapedList.filter((s) => s.id !== id));
    toast.success('스크랩을 삭제했습니다.');
  };
  return (
    <>
      <Filter />
      <Layout>
        {scrapedList.length > 0 ? (
          <Wrapper>
            {scrapedList.map((s) => (
              <Article onDelete={onDelete} isScraped {...s} />
            ))}
          </Wrapper>
        ) : (
          <EmptyScrap />
        )}
      </Layout>
      <GNB />
    </>
  );
};

export default ScrapPage;
