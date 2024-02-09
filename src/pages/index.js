// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' // specific css style
//import Profile from './components/profile' // import Profile component
// import Gallery from './components/gallery'
import Profile from './qcomps/profile_mistake'
import FirstComp from './qcomps/firstcomp'
import Bios from './qcomps/bios'
import TodoList from "@/pages/qcomps/todos";
import Gallery from './qcomps/gallery_props'
import Square from './components/square'
import Item from './qcomps/props_item'
// capital letter indicates custom made component
// When importing component - need capital first letter

export default function Home() { // main component is Home
  return (
    <div className={styles.main}>
        <Gallery />
    </div>
  )
}
