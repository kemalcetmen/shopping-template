import { useAppSelector } from '../store'

const useLocalStorage = () => {
    const { products } = useAppSelector((state) => state.products)

    let newProducts: any = {}

    products.forEach(product => {
        if (product.isLiked || product.inBasket > 0) {
            let oneProduct = {
                isLiked: product.isLiked,
                inBasket: product.inBasket
            }
            newProducts[product?.id] = oneProduct
        }
    })

    localStorage.removeItem('products')

    localStorage.setItem('products', JSON.stringify(newProducts))
    return 
}

export default useLocalStorage