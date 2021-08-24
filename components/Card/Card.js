import Body from './Body'
import Social from './Social'
import ButtonShop from './ButtonShop'
import styles from '../../styles/Card.module.css'
export default function Card(props) {
  let social = null
  let shop = null
  let url = null
  if(props.data.url != undefined) {
    if(props.data.url.social != undefined) {
      social = <Social data={props.data.url.social} />
    }
    if(props.data.url.page != undefined && props.data.url.page != '') {
      url = props.data.url.page
    }
    if(props.data.url.amazon != undefined && props.data.url.amazon != '') {
      url = props.data.url.amazon
      shop = <ButtonShop data={url} />
    }
  }
  if(url != null) {
    return (
      <div className={styles.card}>
        <a href={url} target={props.linkTarget}>
          <Body data={props.data} imagePath={props.imagePath} />
          {social}
          {shop}
        </a>
      </div>
    )
  }else {
    return (
      <div className={styles.card}>
        <Body data={props.data} imagePath={props.imagePath} />
        {social}
        {shop}
      </div>
    )
  }
}
