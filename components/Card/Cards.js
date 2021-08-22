import Card from './Card'
import styles from '../../styles/Card.module.css'
export default function Cards(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">{props.data.title}</div>
        {props.data.items.map(item => (
          <Card data={item} imagePath={props.data.imagePath} linkTarget={props.data.linkTarget} key={item.id} />
        ))}
      </div>
    </section>
  )
}
