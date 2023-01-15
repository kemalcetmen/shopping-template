import { useEffect, useState } from 'react'
import { useAppSelector } from '../store'

type Props = {
  sequenceType: string,
  reverse?: boolean,
}

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

interface ProductState {
  products: Product[] | null,
  loading: boolean,
  error: string,
}

const useSequence = ({ sequenceType, reverse }: Props): Product[] => {
  const states = useAppSelector((state) => state.products)

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getItems = (state: ProductState) => state.products ? state.products : []

    let items = [...getItems(states)]

    switch (sequenceType) {
      case "price":
        items.sort((a, b) => b.price - a.price);
        break;
      // case y:
      //   break;
      default:
        items.sort((a, b) => b.id - a.id);
    }

    if (reverse === true) items = items.reverse()

    setProducts(items)

  }, [reverse, sequenceType, states])

  return products
}

export default useSequence