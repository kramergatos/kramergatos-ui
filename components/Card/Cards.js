import Card from './Card'
import styles from '../../styles/Card.module.css'
export default function Cards(props) {
  return (
    <section>
      <div className="content_wrap">
        <div className="section_title">{props.data.title}</div>
        <div className="section_subtitle">{props.data.subtitle}</div>
        {props.data.items.map(item => (
          <Card data={item} imagePath={props.data.imagePath} linkTarget={props.data.linkTarget} key={item.id} />
        ))}
      </div>
    </section>
  )
}
