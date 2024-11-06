import { ProductProps } from "@/@types/product";
import Header from "@/pages/components/Header";
import { api } from "@/pages/services/api";
import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from './styles.module.scss'
import Image from "next/image";
import { calcularDesconto } from "@/pages/services/calcularDesconto";

export default function ProductPage() {
    const router = useRouter()
    const { id } = router.query;
    const [productDetail, setProductDetail] = useState<ProductProps | null>(null)
    useEffect(() => {
        if (!id) return
        const fetchProductDetail = async (): Promise<ProductProps | null> => {
            const produto = await api.get<ProductProps>(`produto/${id}`)
            if (!produto) return null
            setProductDetail(produto.data)
            return produto.data
        }
        fetchProductDetail()
    }, [id])

    if (!productDetail) return "Carregando..."

    return (
        <>
            <Head>
                <title>{productDetail.name} - FlixNext</title>
                <meta name="description" content="Um Ecommerce nunca antes visto porque é novo!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.imageContainer}>
                            <Image src={productDetail.image} fill alt={productDetail.name} />
                        </div>
                        <div className={styles.infoContainer}>
                            <h1>Produto:{productDetail.name}</h1>
                            <h2>{calcularDesconto(productDetail.price, 10)}</h2>
                            frete, formas de pagamento
                        </div>
                    </div>
                    <div className={styles.row}>
                        <h4>
                            {productDetail.description}
                        </h4>
                    </div>
                </div>

            </main>
        </>
    )
}