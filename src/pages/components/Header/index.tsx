import styles from './styles.module.scss'
export default function Header() {
    return (
        <header className={styles.container}>
            <div>Logo</div>
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Categorias</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}