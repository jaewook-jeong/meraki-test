import Articles from '@/Articles';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';
import { getArticles } from 'features/article/slice';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'store';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const targetRef = useIntersectionObserver<HTMLDivElement>({
    callback: () => {
      dispatch(getArticles());
    },
  });
  return (
    <>
      <Filter />
      <Layout>
        <Articles />
        <div ref={targetRef} />
      </Layout>
      <GNB />
    </>
  );
};

export default MainPage;
