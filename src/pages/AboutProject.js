import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Melek_Data } from "../utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination,Autoplay]);

export default function AboutProject() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const Project = Melek_Data.projects.find((pr) => pr.id === projectId);
  const navigate = useNavigate();
  
  return (
    <div className="main-content">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button
              className={`navbar-link
            }`}
              onClick={() => navigate(-1)}
              data-nav-link
            >
              Go back
            </button>
          </li>
        </ul>
      </nav>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">{Project?.name}</h2>
          <img
            src={Project?.logo}
            alt={Project?.name}
            height="120"
            width="120"
            style={{
              display: "block",
              margin: "auto",
              // Add any additional styles if needed
            }}
          />
        </header>
        <br/>

        <div>
          <p style={{ color: "white" }}>
            {Project.moreDesc} <br />
          </p>
          <br />
          <p style={{ color: "white" }}>
            {Project.descreption} <br />
          </p>
          <br />
          <p style={{ color: "white" }}>
            KeyWords :{" "}
            <strong style={{ color: "#ffdb70" }}>
              {" "}
              {Project.keyWords.join("  ,  ")}
            </strong>
            {"  "} <br />
          </p>
        </div>
        <br />
        <div>
          <Swiper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
          >
            {Project.images?.map((image, key) => {
              return (
                <SwiperSlide key={key} style={{ textAlign: "center" }}>
                  <img
                    src={image}
                    alt={`Image ${key}`}
                    width={"70%"}
                    style={{ margin: "0 auto" }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </article>
    </div>
  );
}
