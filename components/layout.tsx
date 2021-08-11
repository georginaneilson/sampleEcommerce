import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Product } from "../models/Product";

export const siteTitle = "PLT";

export default function Layout({
  children,
  navigation,
}: {
  children: React.ReactNode;
  home?: boolean;
  navigation: Array<{
    category: string;
    img: string;
    subCategories: Array<any>;
    url: string;
  }>;
}) {
  const basketMap: Map<number, Product> = useSelector(
    (state: any) => state.basketMap
  );

  const total = Array.from(basketMap.values())
    .map((prod) => prod.count)
    .reduce((sum, val) => sum + val, 0);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="A basic eCommerce web based application"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Link href={`/`}>
            <h1 className={utilStyles.heading2Xl}>Sample eCommerce Site</h1>
          </Link>
        </>
      </header>
      <nav>
        <ul className={utilStyles.nav}>
          {navigation.map((nav) => (
            <li className={utilStyles.listItem} key={nav.url}>
              <Link href={`${nav.url}`}>
                <a>{nav.category}</a>
              </Link>
              <br />
            </li>
          ))}
          <Link href={`/basket`}>
            <a>basket({total})</a>
          </Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
