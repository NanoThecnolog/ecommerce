import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import HomeBanner from "@/components/Homebanner";
import CategoryBox from "@/components/Categorias";
import Slogan from "@/components/Slogan";
//fonte
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/*<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNPLIoCGCftV7zK//JpFxTxoF+BnMNu5Vp0y9+X+H+Wi4eOnfFJGxZ7XWZrgHZZ" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eylGNDOScoCk5BSsm7Gk96U5pO0iB2CIqIwg4eMjAKr8G5ctb7pA0Tb" crossOrigin="anonymous"></script>*/ }
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>

        <section className={styles.container}>
          <HomeBanner />
          <CategoryBox />
          <Slogan />
          <hr />


        </section>
      </main>
    </>
  );
}
