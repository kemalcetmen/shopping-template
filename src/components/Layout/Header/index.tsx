import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from './index.module.scss'
import Headroom from "react-headroom"
import { IconContext } from "react-icons";
import { TbSearch } from 'react-icons/tb';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineClear } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { changeInput } from '../../../features/inputSlice'
import { useAppDispatch, useAppSelector } from '../../../store'
import ThemeButton from './ThemeButton'

const Header = () => {
    const { search } = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch()

    const handleChange = (e: any) => {
        dispatch(changeInput(e.target.value))
    }
    const clearInput = () => {
        dispatch(changeInput(""))
    }

    return (
        <Headroom style={{ zIndex: "5" }}>
            <header className={styles.header}>
                <div className={styles.logo}>
                <Link to="/">
                    <img
                        src='./logo.svg'
                        alt='LOGO'
                    />
                </Link>
                </div>
                <div className={styles.middle}>
                    <ThemeButton />
                    <div className={styles.search}>
                        <TbSearch />
                        <input
                            placeholder='Ara'
                            value={search}
                            onChange={handleChange}
                        />
                        {search && <MdOutlineClear onClick={clearInput} style={{ cursor: "pointer" }} color="#ccc" />}
                    </div>
                </div>
                <nav>
                    <IconContext.Provider value={{ color: "#87ceeb " }}>
                        <CustomLink to="/">
                            <AiOutlineShop strokeWidth='1.3rem' />
                        </CustomLink>
                        <CustomLink to="/favorites">
                            <HiOutlineHeart />
                        </CustomLink>
                        <CustomLink to="/bag">
                            <HiOutlineShoppingBag />
                        </CustomLink>
                        <CustomLink to="/bag">
                            <FiSettings/>
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