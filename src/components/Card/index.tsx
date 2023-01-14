import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import Rating from '@mui/material/Rating';
import styles from './index.module.scss'
import BasketFooter from '../BasketFooter';
import { changeLiked } from '../../features/productsSlice'
import { useAppDispatch, useAppSelector } from '../../store'

interface Props {
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

const OneProduct = ({
    id,
    brand,
    explanation,
    photo,
    price,
    ratio,
    ratioNumber,
    isLiked,
    inBasket }: Props) => {

    const dispatch = useAppDispatch()
    const states = useAppSelector((state) => state.products)

    const likeChanger = () => {
        dispatch(changeLiked(id))
    }
    return (
        <div className={styles.cardframe}>
            <div className={styles.card}>
                <IconContext.Provider value={{ size: "1.45rem", color: "#6daed3" }}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon} onClick={likeChanger}>
                            {isLiked
                                ?
                                <IoMdHeart />
                                :
                                <IoMdHeartEmpty color="grey" />
                            }
                        </div>
                    </div>
                </IconContext.Provider>
                <div className={styles.image}>
                    <img src={photo} alt={brand} />
                </div>
                <div className={styles.cardfooter}>
                    <div className={styles.explanation}>
                        <p><strong>{brand}</strong>&nbsp;{explanation}</p>
                    </div>
                    <div className={styles.ratio}>
                        <Rating
                            value={ratio}
                            precision={0.1}
                            readOnly
                            max={5}
                            size="small"
                        />
                        <p>{ratioNumber}</p>
                    </div>
                    <div className={styles.basket}>
                        <p>{price}&nbsp;TL</p>
                        <BasketFooter
                            id={id}
                            photo={photo}
                            inBasket={inBasket}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct