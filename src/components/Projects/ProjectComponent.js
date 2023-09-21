import React, { useState } from 'react'
import { EyeOutline } from 'react-ionicons'
import Modal from '../Modal'

export default function ProjectComponent({projects}) {
  const [active, setActive] = useState("")
  const onClose = ()=>setActive("")
  const [ActiveProject, setActiveProject] = useState(null)
  
function setActiveFn(project){
  console.log("Project *** ",project)
  setActiveProject(project)
  setActive("active")

} 
  return (
    <ul className="project-list">
            {projects.map((project)=>{
              return(

            <li className="project-item  active" data-filter-item data-category="web development" key={project.id}>
              <a >

                <figure className="project-img" onClick={()=>setActiveFn(project)}>
                  <div className="project-item-icon-box">
                    <EyeOutline color="" />
                  </div>

                  <img src={project.eye_catch} alt={project.eye_catch} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.name}</h3>

                <p className="project-category">{project.type.join(", ")}</p>

              </a>
            
            </li>
              )
            })}

          
          
               {ActiveProject && <Modal active={active} OnClose={onClose} Project={ActiveProject}/>}


          </ul>
  )
}
