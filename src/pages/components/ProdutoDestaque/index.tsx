import { ProductProps } from "@/@types/product"
import styles from './styles.module.scss'
import Image from "next/image"

interface DestaqueProps {
    produto: ProductProps,
    titulo: string
}

export default function ProdutoDestaque({ produto, titulo }: DestaqueProps) {
    return (
        <section className={styles.container}>
            <div className={styles.leftContent}>
                <div className={styles.titulo}>
                    <h1>{titulo.toUpperCase()}</h1>
                </div>
                <div className={styles.description}>
                    <p>{produto.model} - {produto.description}</p>
                </div>
                <div className={styles.button}>
                    <button>Compre já!</button>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.imageContainer}>
                    <Image src={produto.image} width={400} height={400} alt={produto.name} />
                </div>

            </div>

        </section>
    )
}