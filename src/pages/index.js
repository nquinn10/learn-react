// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
import ShoppingCart from './qcomps/shoppingCart'
//import Scoreboard from './qcomps/updObjectsForm'
//import List from './components/artistsArr'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'

export default function Home() {
    return (
        <div className={styles.main}>
            <BucketList />
        </div>
    )
}
