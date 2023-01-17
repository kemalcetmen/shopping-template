import React from 'react'
import styles from './index.module.scss'
import { useAppSelector } from '../../store'
import { useTranslation } from "react-i18next"

const Bag = () => {
    let totalprice: number = 0 
    const {products} = useAppSelector((state) => state.products)

    products?.forEach(product => {if(product.inBasket > 0) totalprice += product.inBasket * product.price})

    const { t } = useTranslation()

    const totalPrice = t("totalPrice")
    const proceedtocheckout = t("proceedtocheckout")
    return (
        <div className={styles.bag}>
            <div className={styles.price}>
                <p>{totalPrice}:&nbsp;<strong>{totalprice}</strong>&nbsp; TL</p>
            </div>
            {totalprice > 0 &&
                        <div className={styles.checkout}>
               {proceedtocheckout}
            </div>
            }
        </div>
    )
}

export default Bag