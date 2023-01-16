import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Header from "./Header"
import Footer from "./Footer"
import Modal from "../Modal"
import { fetchUser } from '../../features/productsSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import {Loading , Error} from "./WaitingScreens"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const dispatch = useAppDispatch()
    const {loading, error} = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div className={styles.fullscreen}>
            <Header/>
            <main>
                {!error ?
                    !loading
                    ?
                    children
                    :
                    <Loading/>
                :
                <Error/>}
            </main>
            <Footer />
            <Modal/>
        </div>
    )
}

export default Layout