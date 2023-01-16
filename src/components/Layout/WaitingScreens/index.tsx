import React from 'react'
import styles from './index.module.scss'
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = () => {

    return (
        <div className={styles.container}>
            <ClipLoader
                color={"black"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
export const Error = () => {

    return (
        <div className={styles.container}>
            Sorry, an Error Happened
        </div>
    )
}