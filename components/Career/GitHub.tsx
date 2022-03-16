import ButtonDefault from '../Button/Default'
import styles from '../../styles/Jobs.module.css'
export default function GitHub(props: {
  data: {
    id: number,
    url: string,
    icon: string,
    label: string,
    subtitle: string,
    target: string,
    title: string
  }[]
}) {
  return (
    <section id="github">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            GitHub
          </div>
        </div>
        <a aria-label="GitHub" href="https://github.com/kramergatos" target="_blank">
          <img alt="GitHub OctoCat" className={styles.octocat} src="/image/joe/octocat-min.png" />
        </a>
        <div className={styles.button_group_github}>
          {props.data.map(item => (
            <ButtonDefault data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
