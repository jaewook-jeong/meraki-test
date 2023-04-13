import Articles from '@/Articles';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';
import Spinner, { SpinnerWrapper } from '@/Spinner';
import { getArticles } from 'features/article/slice';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState, useAppDispatch } from 'store';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const targetRef = useIntersectionObserver<HTMLDivElement>({
    callback: () => {
      dispatch(getArticles());
    },
  });
  const { error } = useSelector((state: RootState) => state.article);

  useEffect(() => {
    if (typeof error === 'string') {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Filter />
      <Layout>
        <Articles />
        {!error && (
          <SpinnerWrapper ref={targetRef}>
            <Spinner />
          </SpinnerWrapper>
        )}
      </Layout>
      <GNB />
    </>
  );
};

export default MainPage;
