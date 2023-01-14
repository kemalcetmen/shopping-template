import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from './index.module.scss'
import Headroom from "react-headroom"
import { IconContext } from "react-icons";
import { TbSearch } from 'react-icons/tb';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineClear } from 'react-icons/md';

type Props = {
    filterProducts: (tofilter: string) => void
}

const Header = ({filterProducts}: Props) => {
    const [inputValue, setInputValue] = useState("") 
    const handleChange = (e:any) => {
        filterProducts(e.target.value)
        setInputValue(e.target.value)
      }
    const clearInput =()=>{
        filterProducts("")
        setInputValue("")
    }

      return (

        <Headroom style={{ zIndex:"5"}}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img
                        src='./logo.jpg'
                        alt='LOGO'    
                    />
                </div>
                <div className={styles.search}>
                    <TbSearch />
                    <input
                        placeholder='Ara'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    {inputValue && <MdOutlineClear onClick={clearInput} style={{cursor:"pointer"}} color="#ccc"/>}
                </div>
                <nav>
                    <IconContext.Provider value={{ color: "grey" }}>
                        <CustomLink to="/">
                            <AiOutlineShop strokeWidth='1.3rem' />
                        </CustomLink>
                        <CustomLink to="/favorites">
                            <HiOutlineHeart />
                        </CustomLink>
                        <CustomLink to="/basket">
                            <HiOutlineShoppingBag />
                        </CustomLink>
                    </IconContext.Provider>
                </nav>
            </header>
        </Headroom>
    )
}
type CustomProps = {
    to: string,
    children: React.ReactNode
}

const CustomLink = ({ to, children, ...props }: CustomProps) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link to={to} {...props}>
            <div className={`${styles.navbutton} ${isActive ? styles.active : ""}`}>
                {children}
            </div>
        </Link>
    )
}
export default Header