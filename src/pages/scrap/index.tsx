import EmptyScrap from '@/EmptyScrap';
import Filter from '@/Filter';
import GNB from '@/GNB';
import Layout from '@/Layout';

const ScrapPage = () => {
  return (
    <>
      <Filter />
      <Layout>
        <EmptyScrap />
      </Layout>
      <GNB />
    </>
  );
};

export default ScrapPage;
