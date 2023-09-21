import React, { useMemo, useState } from "react";
import { Melek_Data } from "../utils/util";
import ProjectComponent from "./Projects/ProjectComponent";
import { ChevronDownOutline } from "react-ionicons";

export default function Portfolio() {
  const projects = Melek_Data.projects;
  const [category, setCategory] = useState("all")

  const filteredItems = useMemo(() => {
    if (category === "all") {
      return projects; 
    }
  
    return projects.filter(item =>
      item?.type.includes(category)
    );
  }, [projects, category]);
  
  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio </h2>

      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active"  onClick={()=>setCategory("all")}>
              All
            </button>
          </li>

          <li className="filter-item">
            <button   onClick={()=>setCategory("Web dev")}>Web Dev</button>
          </li>

          <li className="filter-item">
            <button  onClick={()=>setCategory("Mobile dev")}>Mobile Dev</button>
          </li>
          <li className="filter-item">
            <button  onClick={()=>setCategory("Game dev")}>Game Dev</button>
          </li>

          <li className="filter-item">
            <button  onClick={()=>setCategory("IOT")}>Internet Of Things</button>
          </li>
          <li className="filter-item">
            <button  onClick={()=>setCategory("Machine Learning")}>Machine Learning</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ChevronDownOutline color="" />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ProjectComponent projects={filteredItems} />
      </section>
    </>
  );
}
