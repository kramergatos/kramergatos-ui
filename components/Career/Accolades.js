import React, { createContext, useState } from 'react'
import Accolade from './Accolade'
import styles from '../../styles/Accolades.module.css'
export default function Accolades(props) {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <section id="accolades">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Accolades
          </div>
        </div>
        <div className={styles.accolades}>
          {props.data.slice(0,3).map(item => (
            <Accolade data={item} key={item.id} />
          ))}
        </div>
        <div className={styles.button_all} onClick={toggle} style={{display: showMe?"none":"block"}}>
          <i className="button_icon fa-solid fa-maximize"></i>
          <span className="button_label">See All</span>
        </div>
        <div className={styles.accolades_all} style={{display: showMe?"block":"none"}}>
          {props.data.slice(3,props.data.length).map(item => (
            <Accolade data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
