import SocialAccount from './SocialAccount'
import styles from '../../styles/Card.module.css'
export default function SocialAccounts(props) {
  return (
    <section>
      <div className="content_wrap">
        {props.data.map(item => (
          <SocialAccount data={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
