import Link from "next/link";
import Carrinho from "./Carrinho";
import Nav from "./Nav";
import styles from "./styles.module.scss"
import Letter from "./Letter";
import { Box } from "@mui/material";
import Conta from "./Conta";


export default function Header() {
    return (
        <Box component="header" className={styles.headerContainer}>
            <Letter
                text="FRETE GRÁTIS para todo o Brasil nas compras acima de R$"
                freteValor={299}
            />
            <Box className={styles.navContainer}>
                <Nav />
                <Box className={styles.accountContainer}>
                    <Conta />
                    <Carrinho />
                </Box>
            </Box>
        </Box>
    )
}