import Member from './Member'
import styles from '../../styles/Card.module.css'
export default function SocialAccounts(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Creators</div>
        {props.data.members.map(item => (
          <Member data={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
