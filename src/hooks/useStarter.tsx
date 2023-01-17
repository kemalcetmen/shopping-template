import { useAppDispatch, useAppSelector } from '../store'
import { changeLiked, addMuch } from '../features/productsSlice'
import { useState } from 'react'

const useStarter = () => {
    const dispatch = useAppDispatch()

    const { loading } = useAppSelector((state) => state.products)

    const [takeNow, setTakeNow] = useState(false)

    const taker = () => {
        const productsInStorage = localStorage.getItem('products')
        if (productsInStorage) {
            const products = JSON.parse(productsInStorage)

            for (const property in products) {
                if (products[property].isLiked) {
                    dispatch(changeLiked(property))
                }
                if(products[property].inBasket > 0) {
                    dispatch(addMuch({id:property,
                    amount:products[property].inBasket}))
                }
            }
            setTakeNow(false)
        }
    }
    !loading && setTakeNow(true)

    if (takeNow) {
        taker()
    }
    return
}

export default useStarter