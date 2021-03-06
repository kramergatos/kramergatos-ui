import Art from './Art'
import styles from '../../styles/Art.module.css'
export default function Arts(props: {
  data: {
    id: string,
    title: string,
    image: string,
    medium: string,
    dimensions: string,
    date: string,
    forSale: boolean
  }[]
}) {
  return (
    <section className={styles.section} id="art">
      <img alt="street art from Merida Mexico" className={styles.hero_image} src="/image/joe/art2-min.jpg" />
      <div className="content_wrap">
        <div className="section_title">
          <div className="section_title_text">
            Art Work
          </div>
        </div>
        <div className={styles.arts}>
          {props.data.map(item => (
            <Art key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
