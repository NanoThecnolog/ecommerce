import { useState } from "react"
import styles from './styles.module.scss'
import { Box } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { Divider } from "@mui/material";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { RiShoppingBagFill } from "react-icons/ri";
import Router from "next/router";

export default function Conta() {
    const [menuVisible, setMenuVisible] = useState(false)

    function handlePerfil() {
        setMenuVisible(false)
        console.log("Clicando")
        Router.push('/perfil')
    }
    function handleCompras() {
        Router.push('/compras')
    }
    function handleLogout() {
        console.log("função de logout")
    }
    function handleSettings() {
        console.log("clicando em configs")
        Router.push('/settings')
    }
    return (
        <div className={styles.accountContainer}>
            <Box className={styles.accountButton} onClick={() => setMenuVisible(!menuVisible)}>
                <Avatar className={styles.accountAvatar} sx={{ width: 32, height: 32 }}>M</Avatar>
            </Box>
            {menuVisible && (
                <Box className={styles.dropboxContainer}>
                    <div className={styles.dropboxItem} onClick={handlePerfil}>
                        <RiAccountCircleFill size={30} />
                        <span>Meu Perfil</span>
                    </div>
                    <div className={styles.dropboxItem} onClick={handleCompras}>
                        <RiShoppingBagFill size={30} />
                        <span>Minhas compras</span>
                    </div>
                    <Divider />
                    <div className={styles.dropboxItem} onClick={handleSettings}>
                        <RiSettings5Fill size={30} />
                        <span>Configurações</span>
                    </div>
                    <div className={styles.dropboxItem} onClick={handleLogout}>
                        <FiLogOut size={30} />
                        <span>Logout</span>
                    </div>
                </Box>
            )}
        </div>
    )
}