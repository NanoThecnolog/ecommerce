import Link from "next/link"
import styles from './styles.module.scss'
import { useState } from "react"

export default function Nav() {
    const [dropVisible, setDropVisible] = useState(false)

    function letdropVisible() {
        setDropVisible(!dropVisible)
        console.log("Clicando", dropVisible)
    }
    return (
        <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
                <Link href='/'>Logomarca</Link>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <Link href="/">Início</Link>
                </div>
                <div className={styles.menuDropdown}>
                    <button type="button" onClick={letdropVisible}>
                        Roupas
                    </button>


                    {dropVisible && (
                        <div className={styles.dropdownItens}>
                            <Link className={styles.dropLink} href="">Blusas e Camisas</Link>
                            <Link className={styles.dropLink} href="">Calças</Link>
                            <Link className={styles.dropLink} href="">Vestidos e Macacões</Link>
                            <Link className={styles.dropLink} href="">Acessórios</Link>
                            <Link className={styles.dropLink} href="">Shorts e Saias</Link>
                            <Link className={styles.dropLink} href="">Casacos e Blazers</Link>
                            <Link className={styles.dropLink} href="">Conjuntos</Link>
                            <Link className={styles.dropLink} href="">Liquida El Até 50% OFF</Link>
                        </div>
                    )}

                </div>
                <div className={styles.menuItem}>
                    <Link href="#">As Queridinhas</Link>
                </div>
                <div className={styles.menuItem}>
                    <Link href="#">Liquida EL</Link>
                </div>
                <div className={styles.menuItem}>
                    <Link href="#">Acessórios</Link>
                </div>
            </div>


        </nav >

    )
}

