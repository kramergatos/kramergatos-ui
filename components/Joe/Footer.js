import Social from './Social'
import styles from '../../styles/FooterJoe.module.css'
export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a href="/">
          <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo-white.png" />
        </a>
        <div className={styles.legal}>
          <div className={styles.legal_text}>
            Made with&nbsp;
            <i className="fas fa-code"></i>
            &nbsp;&amp;&nbsp;
            <i className="fas fa-heart"></i>
          </div>
          <div className={styles.legal_text}>&copy; 2022 Kramergatos. All Rights Reserved.</div>
        </div>
        <a className="button_icon_only" href="#header">
          <i className="fas fa-arrow-up"></i>
        </a>
        <Social />
      </div>
    </footer>
  )
}
