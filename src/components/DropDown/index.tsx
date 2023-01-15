import React from 'react'
import styles from './index.module.scss'

interface Product {
    id: number,
    brand: string,
    explanation: string,
    photo: string,
    price: number,
    ratio: number,
    ratioNumber: number,
    isLiked: boolean,
    inBasket: number,
}

interface Props {
    products: Product[],
}

const Cards = ({products}: Props) => {

    return (
        <div className={styles.cards}>
        </div>
    )
}

export default Cards