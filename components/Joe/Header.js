import Social from './Social'
import Nav from './ButtonNav'
import styles from '../../styles/HeaderJoe.module.css'
export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.content}>
        <img alt="JKtheory logo" className={styles.logo} src="image/joe/joe-kramer-logo.png" />
        <div className={styles.title}>Joe Kramer</div>
        <div className={styles.social_container}>
          <Social />
        </div>
        <Nav />
      </div>
    </header>
  )
}
