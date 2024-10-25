import { ProductProps } from "@/@types/product"
import Image from "next/image"
import styles from './styles.module.scss'

interface ProductCardProps {
    produto: ProductProps
}

export default function ProductCard({ produto }: ProductCardProps) {
    return (
        <div key={produto.id} className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image src={produto.image} fill={true} alt={produto.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className={styles.price}>
                    {Number(produto.price).toLocaleString("pt-br", { style: "currency", currency: "brl" })}
                </div>
            </div>
            <div className={styles.nome}>
                <h3>{produto.name} {produto.model}</h3>
            </div>
            <div className={styles.description}>
                <p title={produto.description}>{produto.description}</p>
            </div>
        </div>
    )
}