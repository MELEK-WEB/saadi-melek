import React from "react";
import { Melek_Data } from "../utils/util";

export default function Services() {
  const services = Melek_Data.services;
  return (
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {services?.map((service) => {
          return (
            <li className="service-item" key={service.id}>
              <div className="service-icon-box">
                <img
                  src={service.icon}
  
                  alt="design icon"
                  width="40"
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
  );
}
