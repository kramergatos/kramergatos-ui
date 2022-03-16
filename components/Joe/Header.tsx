import Social from './Social'
import Nav from '../Button/Nav'
import styles from '../../styles/Header.module.css'
import {dataNav} from '../../data/joe'
export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.content}>
        <a aria-label="Home" href="/">
          <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo.png" />
        </a>
        <Social />
        <Nav data={dataNav} />
      </div>
    </header>
  )
}
