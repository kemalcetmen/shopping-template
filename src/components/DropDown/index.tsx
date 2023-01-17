import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../store'
import { changeSorting } from '../../features/sortingSlice'
import { useTranslation } from "react-i18next"

const DropDawn = () => {
    const ref = useRef<any>()

    const [isOpen, setIsOpen] = useState(false)
    const { sort } = useAppSelector((state) => state.sort)
    const dispatch = useAppDispatch()

    const { t } = useTranslation()

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
    const sortOpt1 = t("sortOpt1")
    const sortOpt2 = t("sortOpt2")
    const sortOpt3 = t("sortOpt3")
    let sortName
    switch (sort) {
        case "Featured":
            sortName = sortOpt1
            break;
        case "High to Low":
            sortName = sortOpt2
            break;
        case "Low to High":
            sortName = sortOpt3
            break;

        default:
            break;
    }
    return (
        <div className={styles.dropdown}>
            {!isOpen
                ?
                <div className={styles.closed} onClick={() => { setIsOpen(true) }}>
                    <h4>{t("sort")}</h4>
                    <p>{sortName}</p>
                </div>
                :
                <ul ref={ref} onClick={() => { }}>
                    <li onClick={sortFeatured} className={`${sort === "Featured" && styles.choosen}`}>
                        {sortOpt1}
                    </li>
                    <li onClick={sortHighttoLow} className={`${sort === "High to Low" && styles.choosen}`}>
                        {sortOpt2}
                    </li>
                    <li onClick={sortLowtoHigh} className={`${sort === "Low to High" && styles.choosen}`}>
                        {sortOpt3}
                    </li>
                </ul>
            }
        </div>
    )
}

export default DropDawn