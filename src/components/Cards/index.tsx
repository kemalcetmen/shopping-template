import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Card from '../Card'
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
    page?: string,
}

const Cards = ({page}: Props) => {
    const states = useAppSelector((state) => state.products)
    const [products, setProducts] = useState<Product[]>([])

    // useEffect(()=>{
    //     console.log(states.filtered?.sort((a,b) => a.price - b.price))
    // },[])
    return (
        <div className={styles.cards}>
            <ul>{states.filtered?.map((e: Product, i: number) => (
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