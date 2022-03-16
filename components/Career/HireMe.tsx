import Button from '../Button/Default'
import {dataEmailButton} from '../../data/joe'
import styles from '../../styles/Hire.module.css'
export default function HireMe() {
  return (
    <section className={styles.section_yes} id="hire">
      <div className="content_wrap_slim">
        <div className={styles.hire_me}>
          <span className={styles.hire_me_title}>I'm Available<br />
          Contact Me</span>
          <Button data={dataEmailButton} key={dataEmailButton.id} />
        </div>
      </div>
    </section>
  )
}
