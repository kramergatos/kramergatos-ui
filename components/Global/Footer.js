import Nav from './FooterNav'
import styles from '../../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.logo} href="/">KramerGatos</a>
      <a className={styles.button_top} href="#header">
        <i className="fas fa-arrow-up"></i>
      </a>
      <Nav />
      <div className={styles.made_with}>
        Made with&nbsp;
        <i className="fas fa-code"></i>
        &nbsp;&amp;&nbsp;
        <i className="fas fa-heart"></i>
      </div>
      <div className={styles.copyright}>&copy; 2021 Kramergatos. All Rights Reserved.</div>
    </footer>
  )
}
