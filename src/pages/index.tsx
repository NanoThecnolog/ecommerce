import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.scss";
import { api } from "./services/api";
import { ProductProps } from "@/@types/product";
import { GetServerSideProps } from "next";
import Header from "./components/Header";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
interface HomeProps {
  productList: ProductProps[]
}
export default function Home({ productList }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ecommerce FlixNext</title>
        <meta name="description" content="Um Ecommerce nunca antes visto porque é novo!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          {productList.map(produto => (
            <ProductCard produto={produto} />
          ))}
        </main>
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {

  const fetchProducts = await api.get('/product')

  return {
    props: {
      productList: fetchProducts.data
    }
  }
}
