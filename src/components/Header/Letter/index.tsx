import { useState } from "react"
import styles from './styles.module.scss'
import { TiFlash } from "react-icons/ti";

interface LetterProps {
    text: string;
    freteValor: number;
}

export default function Letter({ text, freteValor }: LetterProps) {
    const [letter, setLetter] = useState<string>(text)
    const [frete, setFrete] = useState<number>(freteValor)

    return (
        <div className={styles.letterContainer}>
            <p><TiFlash size={25} />{letter}{frete}</p>
        </div>
    )
}