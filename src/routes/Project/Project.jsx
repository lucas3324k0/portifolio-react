import React, { useContext, useEffect, useState } from "react";
import "./Project.css";
import '../../Responsivo.css'
import { MeuContexto } from "../../context/MeuContexto/MeuContexto";
import BottonTop from "../../components/buttonTop/BottonTop";

const Project = () => {
  const { date } = useContext(MeuContexto);

  if (!date) {
    return <div>Loading...</div>;
  }

  const limitedData = date.slice(0, 8);

  return (
    <div className="project-container">
      <h2 className="h2">Projetos</h2>
      <div className="container-block">
        {limitedData.map((item, index) => (
          <div className="projects" key={index}>
            <div className="project-img">
              <img
                src={
                  item.language === "JavaScript"
                    ? "https://img.icons8.com/?size=300&id=108784&format=png&color=000000"
                    : "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png"
                }
              />
            </div>

            <div className="project-info">
              <div className="info">
                <p>Criador: {item.owner["login"]}</p>
                <h3>{item.name}</h3>
              </div>
              <div className="btn-info">
                <a target="_blank" href={`${item.html_url}`}>
                  <img
                    className="img-info"
                    src="https://img.icons8.com/?size=100&id=100698&format=png&color=FFFFFF"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottonTop />
    </div>
  );
};

export default Project;
