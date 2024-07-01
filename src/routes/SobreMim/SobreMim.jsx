import React from "react";
import "./SobreMim.css";
import "../../Responsivo.css";
import { Link } from "react-router-dom";

import BottonTop from "../../components/buttonTop/BottonTop";

const SobreMim = () => {
    
  return (
    <div className="sobre-mim-container">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Sou apaixonado por tecnologia e estou trilhando o caminho para me
        tornar um desenvolvedor full stack, começando pelo front-end.
      </p>
      <p>
        Atualmente, estou focado em aprimorar minhas habilidades em HTML, CSS,
        JavaScript, e React para criar interfaces web modernas e funcionais.
      </p>
      <p>
        Meu objetivo é dominar as tecnologias front-end e expandir para o
        back-end com Node.js e bancos de dados como MySQL e MongoDB.
      </p>
      <p>
        Tenho interesse em UX/UI design e em projetos que combinam arte digital
        e tecnologia para melhorar a usabilidade das aplicações.
      </p>
      <p>
        <strong>
          Estou aberto a novas oportunidades de aprendizado e colaboração. Vamos
          trabalhar juntos?
        </strong>
      </p>
      <div>
        <Link to={"/projects"}>Ver Projetos...</Link>
        <Link to={"/contact"}>Enviar mensagem</ Link>
      </div>
      <BottonTop />
    </div>
  );
};

export default SobreMim;
