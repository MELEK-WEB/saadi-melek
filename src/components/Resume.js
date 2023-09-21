import React from "react";
import { BookOutline } from "react-ionicons";
import { CodeWorkingOutline } from 'react-ionicons'
import { Melek_Data } from "../utils/util";
import AnglaisSVG from '../assets/images/Anglais.svg'

export default function Resume() {
  const educations = Melek_Data.resume.education
  const experiences = Melek_Data.resume.experience
  const frameworks = Melek_Data.resume.skills.frameworks
  const languages = Melek_Data.resume.skills.languages
  const databases = Melek_Data.resume.skills.databases

  return (
    <>
      <header>
        <h2 className="h2 article-title">Resume</h2>
        
      </header>

      <section className="timeline">
      
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline color="" />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {educations.map((education)=>{
            return(
          <li className="timeline-item" key={education.id}>
            <h4 className="h4 timeline-item-title">
              {education.diploma}   at <stong style={{color:"#ffdb70"}} >{education.university}</stong>
            </h4>

            <span>{education.fromTo}</span>

            
          </li>

            )
          })}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <CodeWorkingOutline color="#ffdb70"/>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((experience)=>{
            return(

          <li className="timeline-item" key={experience.id}>
            <h4 className="h4 timeline-item-title">
      
              {experience.title}   at <stong style={{color:"#ffdb70"}}>{experience.company}</stong>

              </h4>

            <span>{experience.fromTo}</span>

            <p className="timeline-text"> 
             {experience.descreption}
            </p>
           
            <span >Technologies :   <p style={{color:"white"}}>{experience?.techs?.join(", ")}</p> </span>
          </li>
            )
          })}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        
          <h4 className="h5 skills-title"  style={{marginTop:"1rem"}}>frameworks</h4>
        <ul className="skills-list content-card" style={{display:"flex", justifyContent:"center"  ,gap:"20px" }}>
          {frameworks.map((framework)=>{
            return (
              <li className="skills-item" key={framework.skill}>
              <div className="title-wrapper">
                <h5 className="h5">{framework.skill}</h5>
                <data value={framework.perc}>{framework.perc}</data>
              </div>
  
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: framework.perc }}
                ></div>
              </div>
            </li>
            )
          })}
        
        </ul>

        <h4 className="h5 skills-title" style={{marginTop:"1rem"}}>Programming Languages</h4>
        <ul className="skills-list content-card" style={{display:"flex", justifyContent:"center" ,gap:"25px" ,alignContent:"center"}}>
          {languages.map((language)=>{
            return (
              <li className="skills-item" key={language.skill}>
              <div className="title-wrapper">
                <h5 className="h5">{language.skill}</h5>
                <data value={language.perc}>{language.perc}</data>
              </div>
  
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: language.perc }}
                ></div>
              </div>
            </li>
            )
          })}
        
        </ul>

        <h4 className="h5 skills-title" style={{marginTop:"1rem"}}>Databases</h4>
        <ul className="skills-list content-card" style={{display:"flex", justifyContent:"center" ,gap:"20px" }}>
          {databases.map((database)=>{
            return (
              <li className="skills-item" key={database.skill}>
              <div className="title-wrapper">
                <h5 className="h5">{database.skill}</h5>
                <data value={database.perc}>{database.perc}</data>
              </div>
  
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: database.perc }}
                ></div>
              </div>
            </li>
            )
          })}
        
        </ul>
      </section>
    </>
  );
}
