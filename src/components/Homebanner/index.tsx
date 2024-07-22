import { useEffect, useState } from "react"
import styles from './styles.module.scss'
import Image from "next/image"
const images = [
    '/slide1.webp',
    '/slide2.webp',
    '/slide3.webp'
]

export default function HomeBanner() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval);

    }, [])

    return (
        <div className={styles.carouselContainer}>
            <Image className={styles.carouselImage} fill={true} src={images[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} />
        </div>
    )
}