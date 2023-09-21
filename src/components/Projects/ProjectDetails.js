import React from 'react'

export default function ProjectDetails({project}) {
  return (
    <div>
   <article
        className={`about ${activeButton === "About" ? "active" : ""}`}
        data-page="about"
      >
           <header>
    <h2 className="h2 article-title">{project.name}</h2>
  </header>

  <section className="about-text">
    <p>
      {about.descreption}
    </p>

    <p>
    Key Words : {project?.keyWords}
    </p>
  </section>
  <section className="service">
      <h3 className="h3 service-title">Pictures</h3>

      <ul className="service-list">
        {project?.images?.map((image) => {
          return (
            <li className="service-item" key={image}>
              <div className="service-icon-box">
                <img
                  src={image}
  
                  alt="design icon"
                  width="120"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service?.title}</h4>

                <p className="service-item-text">
                  {service.descreption}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
      </article>

    </div>
  )
}
