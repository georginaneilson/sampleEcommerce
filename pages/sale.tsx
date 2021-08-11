import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getNavigation } from "../api/pltApi";

export default function Home({
  navigation,
}: {
  navigation: Array<{
    category: string;
    img: string;
    subCategories: Array<any>;
    url: string;
  }>;
}) {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Shop the latest sale</h2>

        <p>Nothing to see here yet 👀</p>
        <p>Check back soon for our hottest sale yet</p>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await getNavigation();
  return {
    props: {
      navigation,
    },
  };
};
