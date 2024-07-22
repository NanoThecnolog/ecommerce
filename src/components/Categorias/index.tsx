import styles from './styles.module.scss'

export default function CategoryBox() {
    return (
        <div className={styles.container}>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Blusas e Camisas</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Shorts e Sais</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Calças</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Casacos e Blazers</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Vestidos e Macacões</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Conjuntos</p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.imageContainer}>
                    imagem
                </div>
                <p>Acessórios</p>
            </div>

        </div>

    )
}