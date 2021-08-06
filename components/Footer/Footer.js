import styles from '../../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Kramer Gatos</div>
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
