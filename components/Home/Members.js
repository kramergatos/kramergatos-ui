import Member from './Member'
import styles from '../../styles/Card.module.css'
export default function Members(props) {
  return (
    <section>
      <div className="content_wrap">
        <div className={styles.members}>
          {props.data.map(item => (
            <Member data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
