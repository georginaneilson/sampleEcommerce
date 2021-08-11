import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getNavigation, getProducts } from "../api/pltApi";
import { useSelector } from "react-redux";
import UpdateCart from "../components/UpdateCart";
import { Product } from "../models/Product";

export default function Basket({
  navigation,
}: {
  navigation: Array<{
    category: string;
    img: string;
    subCategories: Array<any>;
    url: string;
  }>;
  productList: any;
}) {
  const basketMap: Map<number, Product> = useSelector(
    (state: any) => state.basketMap
  );

  const totalAmount = Array.from(basketMap.values())
    .map((prod) => prod.count * prod.price)
    .reduce((sum, val) => sum + val, 0);

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Checkout</h2>

        <ul className={utilStyles.list}>
          {Array.from(basketMap.values()).map((product) => (
            <div className={utilStyles.listItem} key={product.id}>
              <p>{product.name}</p>
              <p>£{(product.price * product.count).toFixed(2)}</p>
              <p>{product.colour}</p>
              <br />

              <UpdateCart product={product} />
            </div>
          ))}
        </ul>
        <h2>Basket total: £{totalAmount.toFixed(2)}</h2>
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
