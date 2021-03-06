import WordCloud from './WordCloud'
export default function Skills(props: {
  data: {
    id: number, 
    type: string,
    title: string,
    years: string
  }[]
}) {
  return (
    <section id="skills">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Skills
          </div>
        </div>
        <WordCloud data={props.data} />
      </div>
    </section>
  )
}
