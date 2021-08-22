import Body from './Body'
import Social from './Social'
import styles from '../../styles/Card.module.css'
export default function Card(props) {
  let background = 'background_black'
  let social = (
    <span></span>
  )
  if(props.data.background != undefined) {
    background = props.data.background
  }
  if(props.data.social != undefined) {
    social = (
      <Social data={props.data.social} />
    )
  }
  if(props.data.url !== "" || props.data.url != undefined) {
    return (
      <div className={styles.card}>
        <div className={styles[background]}>
          <a href={props.data.url} target={props.linkTarget}>
            <Body data={props.data} imagePath={props.imagePath} />
            {social}
          </a>
        </div>
      </div>
    )
  }else {
    <div className={styles.card}>
      <div className={styles[background]}>
        <Body data={props.data} imagePath={props.imagePath} />
        {social}
      </div>
    </div>
  }
}
