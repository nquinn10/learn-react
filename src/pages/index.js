// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import People from './qcomps/list_keys_id'
import Recipes from './qcomps/recipes'

export default function Home() {
  return (
    <div className={styles.main}>
        <Recipes />
    </div>
  )
}
