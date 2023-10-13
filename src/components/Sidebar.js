import React, { useState } from "react";
import avatar from "../assets/images/my-avatar.png";
import { ChevronDownCircle } from "react-ionicons";
import { MailOutline } from 'react-ionicons'
import { PhonePortraitOutline } from 'react-ionicons'
import { CalendarOutline } from 'react-ionicons'
import { LocationOutline } from 'react-ionicons'
import { LogoFacebook } from 'react-ionicons'
import { LogoDiscord } from 'react-ionicons'
import { LogoGithub } from 'react-ionicons'
import { Link } from 'react-ionicons'
import Melek from "../assets/images/melek/melek-1 (1).png"

import "./sidebar.css"
import { Melek_Data } from "../utils/util";

import filePDF from "../assets/melekSaadi.pdf"
export default function Sidebar() {
  const info = Melek_Data.contact
  const [active, setActive] = useState("")

  function toggleActive () {
    if (active === "") {
      setActive("active")
    } else {
      setActive("")
    }
  }

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = filePDF ;
    a.download = 'Melek-Saadi_CV.pdf';
    a.click();
  };
  
  return (
    <aside className={`sidebar ${ active}`} data-sidebar>  
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Richard hanrick" width="80" className="image-front"/>
          <div className="avatar-image"></div>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
           {info.fullName}
          </h1>

          <p className="title">{info.title} </p>
        </div>  

        <button className="info_more-btn" data-sidebar-btn>
          {/* <span>Show Contacts</span> */}

          <ChevronDownCircle  color="#ffdb70" onClick={toggleActive}  />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline color="#ffdb70"/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${info.email}`} className="contact-link">
              {info.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutline color=""/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${info.phone}`} className="contact-link">
                + (216){info.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarOutline color=""/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime={info.birthday}>{info.birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
             <LocationOutline color=""/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{info.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={info.facebook} className="social-link"  target="_blank"  >
            <LogoFacebook color={"white"}/>
            </a>
          </li>

          <li className="social-item">
            <a href={info.discord} className="social-link"  target="_blank">
              <LogoDiscord color={"white"}/>
            </a>
          </li>

          <li className="social-item">
            <a href={info.github}className="social-link"  target="_blank">
              <LogoGithub color={"white"} />
            </a>
          </li>
          <li className="social-item">
            <a href="#"className="social-link" onClick={handleDownload}  target="_blank">
              <Link color={"white"} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
