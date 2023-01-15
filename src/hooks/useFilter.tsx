import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../store'

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

type Props = Product[]

const useFilter = ( products : Props): Product[] => {
    const { text } = useAppSelector((state) => state.search)

    const [filteredProducts, setfilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        if (text === "") {
            setfilteredProducts(products)
        } else {
            const filtereds = products?.filter((product: Product) => {
                let fullName = product.brand + ' ' + product.explanation

                return fullName.toLowerCase().includes(text.toLowerCase())
            })
            setfilteredProducts(filtereds)
        }
    }, [products, text])

    return filteredProducts
}

export default useFilter