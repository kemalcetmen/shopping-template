import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface Props {
    setTyper: React.Dispatch<React.SetStateAction<{
        sequenceType: string;
        reverse: boolean;
    }>>;
}

const DropDawn = ({ setTyper }: Props) => {
    const ref = useRef<any>()

    const [isOpen, setIsOpen] = useState(false)
    const [sortBy, setSortBy] = useState("High to Low")

    useEffect(() => {
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

    const sortHighttoLow = () => {
        setTyper({
            sequenceType: "price",
            reverse: false
        })
        setIsOpen(false)
        setSortBy("High to Low")
    }
    const sortLowtoHigh = () => {
        setTyper({
            sequenceType: "price",
            reverse: true
        })
        setIsOpen(false)
        setSortBy("Low to High")
    }
    const sortFeatured = () => {
        setTyper({
            sequenceType: "suggest",
            reverse: false
        })
        setIsOpen(false)
        setSortBy("Featured")
    }
    return (
        <div className={styles.dropdown}>
            {!isOpen
                ?
                <div className={styles.closed} onClick={() => { setIsOpen(true) }}>
                    <h4>Sort by</h4>
                    <p>{sortBy}</p>
                </div>
                :
                <ul ref={ref} onClick={() => { }}>
                    <li onClick={sortFeatured} className={`${sortBy === "Featured" && styles.choosen}`}>
                        Featured
                    </li>
                    <li onClick={sortHighttoLow} className={`${sortBy === "High to Low" && styles.choosen}`}>
                        Price: High to Low
                    </li>
                    <li onClick={sortLowtoHigh} className={`${sortBy === "Low to High" && styles.choosen}`}>
                        Price: Low to High
                    </li>
                </ul>
            }
        </div>
    )
}

export default DropDawn