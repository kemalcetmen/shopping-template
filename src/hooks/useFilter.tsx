import { useEffect, useState } from 'react'
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
    const { search } = useAppSelector((state) => state.search)

    const [filteredProducts, setfilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        if (search === "") {
            setfilteredProducts(products)
        } else {
            const filtereds = products?.filter((product: Product) => {
                let fullName = product.brand + ' ' + product.explanation

                return fullName?.toLowerCase().includes(search.toLowerCase())
            })
            setfilteredProducts(filtereds)
        }
    }, [products, search])

    return filteredProducts
}

export default useFilter