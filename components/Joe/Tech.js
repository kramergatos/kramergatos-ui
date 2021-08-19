import WordCloud from './WordCloud'
export default function Tech(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Tech Stack</div>
        <WordCloud data={props.data} />
      </div>
    </section>
  )
}
