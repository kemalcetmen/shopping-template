import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { abstract, add } from '../../features/productsSlice'
import { openModal } from '../../features/modalSlice'
import { useAppDispatch } from '../../store'
import styles from './index.module.scss'
import { useTranslation } from "react-i18next"

interface Props {
    id: string,
    photo: string,
    inBasket: number
}

const BasketFooter = ({
    id,
    photo,
    inBasket }: Props) => {

    const dispatch = useAppDispatch()

    const addOne = () => {
        dispatch(add(id))
    }
    const subtractOne = () => {
        dispatch(abstract(id))
    }
    const emptyBasket = () => {
        dispatch(openModal({ id, photo }))
    }
    const { t } = useTranslation()
    const addbasket = t("addbasket")

    return (
        <div className={styles.basketfooter}>
            {
                inBasket === 0
                    ?
                    <div onClick={addOne} className={styles.addbasket}>
                        <p>{addbasket}</p> &nbsp;
                        <FiShoppingCart />
                    </div>
                    :
                    <div className={styles.basketoperations}>
                        <div className={styles.basketicons}>
                            <AiOutlinePlusCircle onClick={addOne} />
                            <p>{inBasket}</p>
                            {
                                inBasket === 1
                                    ?
                                    <FiTrash2 onClick={emptyBasket} />
                                    :
                                    <AiOutlineMinusCircle onClick={subtractOne} />
                            }
                        </div>
                        <FiTrash2 onClick={emptyBasket} />
                    </div>
            }
        </div>
    )
}

export default BasketFooter