import styles from '../../styles/Footer.module.css'
export default function Nav(props) {
  return (
    <div className={styles.nav_wrap}>
      <nav className={styles.nav}>
        <a href="/#channels">
          <i className="fas fa-hashtag"></i>
          Channels
        </a>
        <a href="/kitty">
          <i className="fas fa-cat"></i>
          Pet Sitting
        </a>
        <a href="/gear">
          <i className="fas fa-suitcase-rolling"></i>
          Digital Nomad Gear
        </a>
      </nav>
      <nav className={styles.nav}>
        <a href="/#about">
          <i className="fas fa-info-circle"></i>
          About Us
        </a>
        <a href="/joe">
          <i className="fas fa-user"></i>
          Joe
        </a>
        <a href="/mali">
          <i className="fas fa-user"></i>
          Mali
        </a>
      </nav>
    </div>
  )
}
