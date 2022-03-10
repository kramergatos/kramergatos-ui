import React, { useState } from 'react'
import Job from './Job'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props: {
  data: {
    resumeHumanReadable: string,
    resumeMachineReadable: string,
    coverLetterHumanReadable: string,
    coverLetterMachineReadable: string,
    jobs: [
      {
        id: string,
        location: string,
        title: string,
        company: string,
        url: string,
        dateStart: string,
        dateEnd: string,
        status: string,
        remote: number,
        description: string,
        logo: string
      }
    ]
  }
}) {
  const [showMe, setShowMe] = useState<boolean>(false)
  function toggle() {
    setShowMe(!showMe)
  }
  let resumeHumanReadable = null
  let resumeMachineReadable = null
  let coverLetterHumanReadable = null
  let coverLetterMachineReadable = null
  if(props.data.resumeHumanReadable != undefined) {
    resumeHumanReadable = (
      <a aria-label="Download Human Readable Resume" className="button" href={'/download/' + props.data.resumeHumanReadable} target="_blank">
        <span className="button_icon fa fa-file-pdf"></span>
        <span className="button_label">Resume</span>
        <span className="button_sublabel">Human Readable</span>
      </a>
    )
  }
  if(props.data.resumeMachineReadable != undefined) {
    resumeMachineReadable = (
      <a aria-label="Download Machine Readable Resume" className="button" href={'/download/' + props.data.resumeMachineReadable} target="_blank">
        <span className="button_icon fa fa-file-word"></span>
        <span className="button_label">Resume</span>
        <span className="button_sublabel">Machine Readable</span>
      </a>
    )
  }
  if(props.data.coverLetterHumanReadable != undefined) {
    coverLetterHumanReadable = (
      <a aria-label="Download Human Readable Cover Letter" className="button" href={'/download/' + props.data.coverLetterHumanReadable} target="_blank">
        <span className="button_icon fa fa-file-pdf"></span>
        <span className="button_label">Cover Letter</span>
        <span className="button_sublabel">Human Readable</span>
      </a>
    )
  }
  if(props.data.coverLetterMachineReadable != undefined) {
    coverLetterMachineReadable = (
      <a aria-label="Download Machine Readable Cover Letter" className="button" href={'/download/' + props.data.coverLetterMachineReadable} target="_blank">
        <span className="button_icon fa fa-file-word"></span>
        <span className="button_label">Cover Letter</span>
        <span className="button_sublabel">Machine Readable</span>
      </a>
    )
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
          {resumeHumanReadable}
          {resumeMachineReadable}
          {coverLetterHumanReadable}
          {coverLetterMachineReadable}
        </div>
        <div className={styles.jobs}>
          {props.data.jobs.slice(0,3).map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
        <div className={styles.button_all} onClick={toggle} style={{display: showMe?"none":"block"}}>
          <i className="button_icon fa-solid fa-maximize"></i>
          <span aria-label="See All Job History" className="button_label">See All</span>
        </div>
        <div className={styles.jobs_all} style={{display: showMe?"block":"none"}}>
          {props.data.jobs.slice(3,props.data.jobs.length).map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
