import ButtonIconOnly from '../../components/Button/IconOnly'
import Social from './Social'
import styles from '../../styles/Footer.module.css'
export default function Footer() {
  const buttonTop = {
    id: 1,
    url: "#header",
    icon: "fas fa-arrow-up",
    label: "Top of Page",
    target: "_self"
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a aria-label="Home" href="/">
          <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo.png" />
        </a>
        <div className={styles.legal}>
          <div className={styles.legal_text}>
            Made with&nbsp;
            <i className="fas fa-code"></i>
            &nbsp;&amp;&nbsp;
            <i className="fas fa-heart"></i>
          </div>
          <div aria-label="Copyright" className={styles.legal_text}>&copy; 2022 Kramergatos. All Rights Reserved.</div>
        </div>
        <ButtonIconOnly data={buttonTop} key={buttonTop.id} />
        <Social />
      </div>
    </footer>
  )
}
