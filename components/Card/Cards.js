import Card from './Card'
import styles from '../../styles/Card.module.css'
export default function Cards(props) {
  let subtitle = <span></span>
  if(props.data.subtitle != undefined && props.data.subtitle != '') {
    subtitle = <div className="section_subtitle">{props.data.subtitle}</div>
  }
  return (
    <section>
      <div className="content_wrap">
        <div className="section_title">{props.data.title}</div>
        {subtitle}
        {props.data.items.map(item => (
          <Card data={item} imagePath={props.data.imagePath} linkTarget={props.data.linkTarget} key={item.id} />
        ))}
      </div>
    </section>
  )
}
