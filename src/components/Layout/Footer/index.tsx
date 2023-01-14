import React from 'react'
import styles from './index.module.scss'
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

type Props = {}

const lines = [
    [
        {
            name: "BİZ",
            href: ""
        },
        {
            name: "Biz Kimiz",
            href: ""
        },
        {
            name: "Kariyer",
            href: ""
        },
        {
            name: "İletişim",
            href: ""
        },
        {
            name: "Fabrikalar",
            href: ""
        },
    ],
    [
        {
            name: "YARDIM",
            href: ""
        },
        {
            name: "Aktif Kampanyalar",
            href: ""
        },
        {
            name: "Premium Üyelik",
            href: ""
        },
        {
            name: "Hediye Fikirleri",
            href: ""
        },
        {
            name: "Kişisel Fırsatları",
            href: ""
        },
    ],

    [   
        {
            name: "KAMPANYALAR",
            href: ""
        },
        {
            name: "Sıkça Sorulan Sorular",
            href: ""
        },
        {
            name: "Canlı Yardım",
            href: ""
        },
        {
            name: "Nasıl İade Edebilirim",
            href: ""
        },
        {
            name: "İşlem Rehberi",
            href: ""
        },
    ],

]
const Header = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.alltexts}>
                {
                    lines.map((line,i)=>(
                        <ul key={i}>
                            {/* {line.map((y) => <li><a href={y.href}>{y.name}</a></li>)} 
                            do it for to make a link them*/}
                            {line.map((one, j) => j===0 ?
                            <h3 key={i*10}>{one.name}</h3>
                            :
                            <li key={j}>{one.name}</li>)}
                        </ul>
                    ))
                }
                <div className={ styles.socials }>
                    <div className={ styles.fb }>
                        <BsFacebook />
                    </div>
                    <div className={ styles.yt }>
                        <BsYoutube />
                    </div>
                    <div className={ styles.tw }>
                        <AiFillTwitterCircle />
                    </div>
                    <div className={ styles.in }>
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                ©2023 BLABLABLA Grup Satış Tic.A.Ş.-Her Hakkı Saklıdır.
            </div>
        </footer>)
}

export default Header