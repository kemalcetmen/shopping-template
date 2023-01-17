import React from 'react'
import styles from './index.module.scss'
import Card from '../Card'
import NoProduct from '../NoProduct'

interface Product {
    id: string,
    suggestion: number,
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

const Cards = ({ products }: Props) => {

    return (
        <div className={styles.cards}>
            <ul>{products.length > 0 ?
                products.map((e: Product, i: number) => (
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
                ))
                :
                <NoProduct />}
            </ul>
        </div>
    )
}

export default Cards