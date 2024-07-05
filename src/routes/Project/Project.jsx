import React, { useContext, useState } from "react";
import "./Project.css";
import "../../Responsivo.css";
import { MeuContexto } from "../../context/MeuContexto/MeuContexto";
import BottonTop from "../../components/buttonTop/BottonTop";
import ComponentModal from "../../components/Modal/ComponentModal";

const Project = () => {
  const { date } = useContext(MeuContexto);
  const [isOpenModal, setOpenModal] = useState(false);
  const [openModals, setOpenModals] = useState({});
  if (!date) {
    return <div>Loading...</div>;
  }

  const handleOpenModal = (index) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [index]: true, // Abre o modal do item específico pelo índice
    }));
  };

  const handleCloseModal = (index) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [index]: false, // Fecha o modal do item específico pelo índice
    }));
  };

  console.log(isOpenModal);
  const limitedData = date.slice(0, 8);
  return (
    <>
      <div className="project-container">
        <h2 className="h2">Projetos</h2>
        <div className="container-block">
          {limitedData.map((item, index) => (
            <>
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
                    {/* <a target="_blank" href={`${item.html_url}`}> */}
                    <a onClick={() => handleOpenModal(index)}>
                      <img
                        className="img-info"
                        src="https://img.icons8.com/?size=100&id=100698&format=png&color=FFFFFF"
                      />
                    </a>
                  </div>
                  {openModals[index] && (
                    <ComponentModal
                      isOpen={true}
                      onClose={() => handleCloseModal(index)}
                    >
                      <h1>{item.name}</h1>
                      <p>
                        Linguagem mais ultilizada:{" "}
                        <strong>{item.language}</strong>
                      </p>
                      {/* <p>{item.id}</p> */}
                      <div
                      
                      >
                        <h1>Em andamento...</h1>
                      </div>
                      <h4>
                        Link para acesso
                        {item.html_url ? (
                          <a
                            target="_blank"
                            style={{ color: "gray" }}
                            href={`${item.html_url}`}
                          >
                            Navigate Link
                          </a>
                        ) : (
                          "Nao encontrado"
                        )}
                      </h4>
                    </ComponentModal>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
        <BottonTop />
      </div>
    </>
  );
};

export default Project;
