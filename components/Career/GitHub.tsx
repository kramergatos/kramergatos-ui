import styles from '../../styles/Jobs.module.css'
export default function GitHub() {
  return (
    <section id="github">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Public Code Repos
          </div>
        </div>
        <div className="button_group">
          <a className="button" href="https://github.com/kramergatos/kramergatos-ui" target="_blank">
            <i className="button_icon fab fa-github"></i>
            <span aria-label="Code Repo - kramergatos.com" className="button_label">kramergatos.com</span>
            <span className="button_sublabel">(NodeJS, NextJS, ReactJS, TypeScript)</span>
          </a>
          <a className="button" href="https://github.com/kramergatos/turbo-jaguar-enigma" target="_blank">
            <i className="button_icon fab fa-github"></i>
            <span aria-label="Code Repo - Turbo Jaguar Enigma" className="button_label">Turbo Jaguar Enigma</span>
            <span className="button_sublabel">(NodeJS, NextJS, ReactJS)</span>
          </a>
          <a className="button hide" href="https://github.com/kramergatos/tactical-tiger-blitz" target="_blank">
            <i className="button_icon fab fa-github"></i>
            <span aria-label="Code Repo - Tactical Tiger Blitz" className="button_label">Tactical Tiger Blitz</span>
            <span className="button_sublabel">(NodeJS, REST API)</span>
          </a>
          <a className="button" href="https://github.com/kramergatos/js-study-guide" target="_blank">
            <i className="button_icon fab fa-github"></i>
            <span aria-label="Code Repo - JS Study Guide" className="button_label">JS Study Guide</span>
            <span className="button_sublabel">(NodeJS, Vanilla JS)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
