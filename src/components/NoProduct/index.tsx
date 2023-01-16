import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import ClipLoader from "react-spinners/ClipLoader";

const NoProduct = () => {
    const [loading, setLoading] = useState(true)
    useEffect(
        // I am sure there is a better way
        () => {
            let timer = setTimeout(() => setLoading(false), 1000);
            return () => {
                clearTimeout(timer);
            };
        },
        []
    );

    return (
        <div className={styles.nothing}>
            {loading
                ?
                <ClipLoader
                    color={"black"}
                    loading={true}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                "There is no shoe that you want"
            }
        </div>
    )
}

export default NoProduct
