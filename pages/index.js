import Head from 'next/head'
import Link from 'next/link'
import NavBar from "../comp/NavBar";
import Footer from "../comp/Footer";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gramps Pad | Home</title>
        <meta name="keywords" content="gramps"/>
      </Head>
      <div className={styles.container}>
        <h1>Gramps Pad</h1>
        <p className={styles.text}>The guitar is a fretted musical instrument that typically has six strings. It is held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing the strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier.</p>
        <p className={styles.text}>The guitar is a fretted musical instrument that typically has six strings. It is held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing the strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier.</p>
        <Link href="gramps">
          <a className={styles.btn}>See Gramps Pad</a>
        </Link>
      </div>
    </>
  )
}
