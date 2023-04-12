import Articles from '@/Articles';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';

const MainPage = () => {
  return (
    <>
      <Filter />
      <Layout>
        <Articles />
      </Layout>
      <GNB />
    </>
  );
};

export default MainPage;
