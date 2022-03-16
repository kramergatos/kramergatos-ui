import React, { useState } from 'react'
import Job from './Job'
import ButtonDefault from '../Button/Default'
import ButtonExpand from '../Button/Expand'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props: {
  data: {
    id: string,
    location: string,
    title: string,
    company: string,
    url?: string,
    dateStart: string,
    dateEnd: string,
    status: string,
    remote: number,
    description: string,
    logo: string,
    tech?: string[]
  }[],
  files: {
    id: number,
    url: string,
    icon: string,
    label: string,
    subtitle: string,
    target: string,
    title: string
  }[]
}) {
  const [showMe, setShowMe] = useState<boolean>(false)
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <section id="experience">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Experience
          </div>
        </div>
        <div className="button_group">
          {props.files.map(item => (
            <ButtonDefault data={item} key={item.id} />
          ))}
        </div>
        <div className={styles.jobs}>
          {props.data.slice(0,3).map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
        <ButtonExpand show={showMe} onClick={toggle} />
        <div className={styles.jobs_all} style={{display: showMe?"block":"none"}}>
          {props.data.slice(3,props.data.length).map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
