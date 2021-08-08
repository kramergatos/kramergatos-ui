import Social from './Social'
import Member from './Member'
import styles from '../../styles/Card.module.css'
export default function SocialAccounts(props) {
  return (
    <section>
      <div className="content_wrap">
        {props.data.social.map(item => (
          <Social data={item} key={item.id} />
        ))}
        {props.data.members.map(item => (
          <Member data={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
