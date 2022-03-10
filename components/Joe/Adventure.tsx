import styles from '../../styles/Joe.module.css'
export default function Adventure() {
  return (
    <section id="adventure">
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/video/kramer.mp4" />
      </video>
    </section>
  )
}
