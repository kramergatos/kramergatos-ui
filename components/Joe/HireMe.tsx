import styles from '../../styles/Joe.module.css'
export default function HireMe() {
  return (
    <section className={styles.section_yes} id="hire">
      <div className="content_wrap_slim">
        <div className={styles.hire_me}>
          <span className={styles.hire_me_title}>I'm Available<br />
          Contact Me</span>
          <a className="button" href="mailto:joe@kramergatos.com">
            <span className="button_icon fa fa-envelope"></span>
            <span className="button_label">joe@kramergatos.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
