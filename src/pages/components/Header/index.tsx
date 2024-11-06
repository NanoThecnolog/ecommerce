import { FaCartShopping } from 'react-icons/fa6'
import styles from './styles.module.scss'
import { FaUserCircle } from 'react-icons/fa'
export default function Header() {
    return (
        <header className={styles.container}>
            <div>Logo</div>
            <nav className={styles.nav}>
                <ul>
                    <li>Home<div className={styles.line}></div></li>
                    <li>Categorias<div className={styles.line}></div></li>
                    <li>Contato<div className={styles.line}></div></li>
                </ul>
            </nav>
            <div className={styles.iconsContainer}>
                <FaUserCircle size={25} />
                <FaCartShopping size={25} />
            </div>
        </header>
    )
}