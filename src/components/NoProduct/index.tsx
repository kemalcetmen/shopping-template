import React, { useEffect } from 'react'
import styles from './index.module.scss'

interface Props {
}

const NoProduct = () => {

    return (
        <div className={styles.nothing}>
            there is no shoes
        </div>
    )
}

export default NoProduct