import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../store'
import { changeSorting } from '../../features/sortingSlice'

const DropDawn = () => {
    const ref = useRef<any>()

    const [isOpen, setIsOpen] = useState(false)
    const { sort } = useAppSelector((state) => state.sort)
    const dispatch = useAppDispatch()


    useEffect(() => {
        //for close when click outside
        const handleOutsideClick = (e: any) => {
            if (isOpen === false) return
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });
    const sortFeatured = () => {
        dispatch(changeSorting("Featured"))
        setIsOpen(false)
    }
    const sortHighttoLow = () => {
        dispatch(changeSorting("High to Low"))
        setIsOpen(false)
    }
    const sortLowtoHigh = () => {
        dispatch(changeSorting("Low to High"))
        setIsOpen(false)
    }

    return (
        <div className={styles.dropdown}>
            {!isOpen
                ?
                <div className={styles.closed} onClick={() => { setIsOpen(true) }}>
                    <h4>Sort by</h4>
                    <p>{sort}</p>
                </div>
                :
                <ul ref={ref} onClick={() => { }}>
                    <li onClick={sortFeatured} className={`${sort === "Featured" && styles.choosen}`}>
                        Featured
                    </li>
                    <li onClick={sortHighttoLow} className={`${sort === "High to Low" && styles.choosen}`}>
                        Price: High to Low
                    </li>
                    <li onClick={sortLowtoHigh} className={`${sort === "Low to High" && styles.choosen}`}>
                        Price: Low to High
                    </li>
                </ul>
            }
        </div>
    )
}

export default DropDawn