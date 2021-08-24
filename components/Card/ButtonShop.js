import styles from '../../styles/Card.module.css'
export default function ButtonShop(props) {
  if (props.data != undefined && props.data != "") {
    return (
      <a className={styles.shop_link} href={props.data} target="_blank">
        <span>Shop Now</span>
        <img alt="Amazon.com" src="/image/gear/amazon.png" />
      </a>
    )
  } else {
    return (
      <span></span>
    )
  }
}
