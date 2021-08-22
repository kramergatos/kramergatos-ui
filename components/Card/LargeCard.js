import Body from './Body'
import styles from '../../styles/Card.module.css'
export default function LargeCard(props) {
  let background = 'background_black'
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">{props.data.title}</div>
        <div className={styles.card_large}>
          <div className={styles[background]}>
            <a href={props.data.item.url} target={props.data.linkTarget}>
              <Body data={props.data.item} imagePath={props.data.imagePath} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
