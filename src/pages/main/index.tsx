import Articles from '@/Articles';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';
import Spinner, { SpinnerWrapper } from '@/Spinner';
import { getArticles } from 'features/article/slice';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
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
        <SpinnerWrapper ref={targetRef}>
          <Spinner />
        </SpinnerWrapper>
      </Layout>
      <GNB />
    </>
  );
};

export default MainPage;
