// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import People from './qcomps/list_keys_id'
import Recipes from './qcomps/recipes'
//import Gallery from './components/whyState'
// import Gallery from './components/state'
//import Gallery from './qcomps/state'
//import PersonData from './components/stateObj'
//import Form from './qcomps/stuckForm'
//import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot'

export default function Home() {
  return (
    <div className={styles.main}>
        <Counter />
    </div>
  )
}
