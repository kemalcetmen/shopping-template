import React from 'react'
import styles from './index.module.scss'
import Card from '../Card'
import useSequence from '../../hooks/useSequence'
import useFilter from '../../hooks/useFilter'
import { useAppSelector } from '../../store'

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
    page: string,
}

const Cards = ({page}: Props) => {
    const products = useSequence({sequenceType:"price",reverse:true})
    const filteredProducts= useFilter(products)
    // const states = useAppSelector((state) => state.products)

    // console.log(page)
    return (
        <div className={styles.cards}>
            <ul>{filteredProducts?.map((e: Product, i: number) => (
                (page ==="main" || (page ==="bag" && e.inBasket) || (page ==="favorites" && e.isLiked))
                 && 
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