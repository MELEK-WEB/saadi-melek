import React, { useState } from "react";

import iconQt from "../assets/images/icon-quote.svg";
import { CloseOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
export default function Modal({ Project, active, OnClose }) {
  const [See, setSee] = useState(false);
  const toggleSee = () => {
    setSee((prev) => !prev);
  };
  const navigate = useNavigate()

  function goToDetails (){
    navigate(`/Project/about/${Project.id}`)
  }
  return (
    <div className={`modal-container ${active}`} data-modal-container>
      <div className="overlay" data-overlay></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn>
          <CloseOutline color="" onClick={OnClose} />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src={Project?.logo}
              alt="Daniel lewis"
              width="80"
              data-modal-img
            />
          </figure>

          <img src={iconQt} alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {Project.name}
          </h4>
      
          <time datetime="2021-06-14">{Project.type.join(" , ")}</time>

          <div data-modal-text>
            <p>
              {Project.moreDesc} <br />
            </p>
          </div>
          {See && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 2fr)",
                gap: "2px",
              }}
            >
              {Project.images.map((image) => {
                return (
                  <img src={image} alt={image} style={{ width: "100%" }} />
                );
              })}
            </div>
          )}
          <div>
            <button
              style={{ color: "#ffdb70", marginTop: "1rem" }}
              onClick={goToDetails}
            >
              {See ? "hide" : "See"} More ...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
