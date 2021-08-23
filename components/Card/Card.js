import Body from './Body'
import Social from './Social'
import styles from '../../styles/Card.module.css'
export default function Card(props) {
  let social = <span></span>
  if(props.data.social != undefined) {
    social = <Social data={props.data.social} />
  }
  if(props.data.url !== "" || props.data.url != undefined) {
    return (
      <div className={styles.card}>
        <a href={props.data.url} target={props.linkTarget}>
          <Body data={props.data} imagePath={props.imagePath} />
          {social}
        </a>
      </div>
    )
  }else {
    return (
      <div className={styles.card}>
        <Body data={props.data} imagePath={props.imagePath} />
        {social}
      </div>
    )
  }
}
