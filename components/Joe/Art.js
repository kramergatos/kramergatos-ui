import styles from '../../styles/Art.module.css'
export default function Art(props) {
  let sale
  if(props.data.forSale) {
    sale = (
      <div aria-label="For Sale" className={styles.tag_sale}>
        <i className="fa-solid fa-dollar-sign"></i>
        <span className={styles.tag_text}>FOR SALE</span>
      </div>
    )
  }
  return (
    <div className={styles.art}>
      <img alt={'art work titled: ' + props.data.title} className={styles.image} src={'/image/joe/art/' + props.data.image} />
      <div aria-label="Art Work Title" className={styles.title}>
        {props.data.title}
      </div>
      <div className={styles.tags}>
        <div aria-label="Medium" aria-description={props.data.medium} className={styles.tag}>
          <i className="fa-solid fa-paintbrush"></i>
          <span className={styles.tag_text}>{props.data.medium}</span>
        </div>
        <div aria-label="Dimensions" aria-description={props.data.dimensions} className={styles.tag}>
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          <span className={styles.tag_text}>{props.data.dimensions}</span>
        </div>
        {sale}
      </div>
      <div className={styles.description}>
        {props.data.description}
      </div>
    </div>
  )
}
