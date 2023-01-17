import { useAppSelector } from '../store'

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

/* this hook takes all necessary states and gives new products which u wants

before this hook I did it on other two hooks but I guess it is faster
you can check them in ./olds*/
const useAllFilter = () => {
    const { products } = useAppSelector((state) => state.products)
    const { search } = useAppSelector((state) => state.search)
    const { sort } = useAppSelector((state) => state.sort)
    
    let newProducts = [...products]

    switch (sort) {
        case "Featured":
            newProducts.sort((a, b) => b.suggestion - a.suggestion);
            break;

        case "High to Low":
            newProducts.sort((a, b) => b.price - a.price);
            break;
        case "Low to High":
            newProducts.sort((a, b) => a.price - b.price);
            break;

        default:
            newProducts.sort((a, b) => b.suggestion - a.suggestion);
    }
    if (search) newProducts = newProducts?.filter((product: Product) => {
        let fullName = product.brand + ' ' + product.explanation
        return fullName?.toLowerCase().includes(search.toLowerCase())
    })

    return newProducts
}

export default useAllFilter