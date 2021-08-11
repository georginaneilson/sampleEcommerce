import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getNavigation, getProducts } from "../api/pltApi";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      ></section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await getNavigation();
  const productList = await getProducts();

  return {
    props: {
      navigation,
    },
  };
};
