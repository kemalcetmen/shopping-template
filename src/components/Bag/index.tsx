import React from 'react'
import { BsFillWalletFill } from 'react-icons/bs';
import { abstract, add } from '../../features/productsSlice'
import { useAppDispatch } from '../../store'

import styles from './index.module.scss'
import { useAppSelector } from '../../store'

const Bag = () => {
    let totalprice: number = 0 
    const {products} = useAppSelector((state) => state.products)

    products?.forEach(product => {if(product.inBasket > 0) totalprice += product.inBasket * product.price})
    return (
        <div className={styles.bag}>
            <div className={styles.price}>
                <p>Total Price:&nbsp;<strong>{totalprice}</strong>&nbsp; TL</p>
            </div>
            {totalprice > 0 &&
                        <div className={styles.checkout}>
                Proceed to Checkout
            </div>
            }

        </div>
    )
}

export default Bag