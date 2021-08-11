import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getNavigation, getProducts } from "../api/pltApi";
import AddToCart from "../components/addToCart";

export default function NewIn({
  navigation,
  productList,
}: {
  navigation: Array<{
    category: string;
    img: string;
    subCategories: Array<any>;
    url: string;
  }>;
  productList: any;
}) {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Brand new togs</h2>

        <div className={utilStyles.productGrid}>
          {productList.map((product) => (
            <div key={product.id}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>£{product.price}</p>
              <AddToCart product={product} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await getNavigation();
  const productList = await getProducts();

  return {
    props: {
      navigation,
      productList,
    },
  };
};
