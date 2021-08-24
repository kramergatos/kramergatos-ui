import styles from '../../styles/Card.module.css'
export default function Button(props) {
  let icon
  switch (props.network) {
    case "instagram":
      icon = "fab fa-instagram"
      break
    case "facebook":
      icon = "fab fa-facebook-f"
      break
    case "linkedin":
      icon = "fab fa-linkedin-in"
      break
    case "angellist":
      icon = "fab fa-angellist"
      break
    case "tiktok":
      icon = "fab fa-tiktok"
      break
    case "cart":
      icon = "fas fa-cart-arrow-down"
      break
  }
  let buttonSocial = (
    <a className={styles.social_link} href={props.url} target="_blank">
      <i className={icon}></i>
    </a>
  )
  let buttonAmazon = (
    <a className={styles.shop_link} href={props.url} target="_blank">
      <span>Shop Now</span>
      <img alt="Amazon.com" src="/image/gear/amazon.png" />
    </a>
  )
  if (props.url != undefined && props.url != "") {
    return (
      <a className={styles.social_link} href={props.url} target="_blank">
        <i className={icon}></i>
      </a>
    )
  } else {
    return (
      <span></span>
    )
  }
}
