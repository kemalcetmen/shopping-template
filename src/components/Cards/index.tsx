import React, { useState } from 'react'
import styles from './index.module.scss'
import Card from '../Card'
import { useAppSelector } from '../../store'

interface Product {
    id: number ,
    brand: string,
    explanation: string,
    photo: string,
    price: number,
    ratio: number,
    ratioNumber: number,
    isLiked: boolean,
    inBasket: number,
}

const Cards = () => {
    const products = useAppSelector((state) => state.products)
    return (
        <div className={styles.cards}>
            <ul>{products.filtered?.map((e: Product, i: number) => (
                    <li key={i}>
                        <Card
                            id={e.id}
                            brand={e.brand}
                            explanation={e.explanation}
                            photo={e.photo}
                            price={e.price}
                            ratio={e.ratio}
                            ratioNumber={e.ratioNumber}
                            isLiked={e.isLiked}
                            inBasket={e.inBasket}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cards