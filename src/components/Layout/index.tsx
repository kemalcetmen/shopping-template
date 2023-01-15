import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Header from "./Header"
import Footer from "./Footer"
import Modal from "../Modal"
import { fetchUser } from '../../features/productsSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div className={styles.fullscreen}>
            <Header/>
            <main>
                {loading
                    ?
                    <div className={styles.loading}>
                        <ClipLoader
                            color={"black"}
                            loading={true}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    children}
            </main>
            <Footer />
            <Modal/>
        </div>
    )
}

export default Layout