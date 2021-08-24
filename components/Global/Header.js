import Nav from './HeaderNav'
import styles from '../../styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.header} id="header">
      <a className={styles.kg} href="/">KramerGatos</a>
      <Nav />
    </header>
  )
}
