import styles from '../../styles/Joe.module.css'
export default function Quote() {
  return (
    <section id="inspiration">
      <div className="content_wrap_slim">
        <div className={styles.quote}>
          <span className={styles.color_lighter_blue}>"Walk with the dreamers, </span>
          <span className={styles.color_light_blue}>the believers, </span>
          <span className={styles.color_medium_blue}>the courageous, </span>
          <span className={styles.color_dark_blue}>the cheerful, </span>
          <span className={styles.color_purple}>the planners, </span>
          <span className={styles.color_violet}>the doers, </span>
          <span className={styles.color_pink}>the successful people </span>
          <span className={styles.color_dark_pink}>with their heads in the clouds </span>
          <span className={styles.color_red}>and their feet on the ground."</span>
        </div>
        <div className={styles.quote_source}>- Wilferd Peterson</div>
      </div>
    </section>
  )
}
