import React from "react";
import "./SobreMim.css";
import "../../Responsivo.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import BottonTop from "../../components/buttonTop/BottonTop";

// icons
import HtmlIcon from "@mui/icons-material/Html";
import { SiCsswizardry } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";

const SobreMim = () => {
  return (
    <div className="sobre-mim-container">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Meu nome é [Seu Nome], sou apaixonado por tecnologia e estou
        trilhando o caminho para me tornar um desenvolvedor full stack, com foco
        inicial no front-end.
      </p>
      <p>
        Atualmente, estou dedicando meu tempo para aprimorar minhas habilidades
        em HTML, CSS, JavaScript e React, buscando criar interfaces web modernas
        e funcionais que ofereçam uma excelente experiência do usuário.
      </p>
      <p>
        Meu objetivo é dominar as tecnologias front-end e expandir para o
        back-end, utilizando frameworks como Node.js, e trabalhando com bancos
        de dados como MySQL e MongoDB para desenvolver aplicações completas e
        escaláveis.
      </p>
      <p>
        Além das habilidades técnicas, também valorizo a colaboração em equipe e
        estou aberto a novas oportunidades de aprendizado e crescimento
        profissional. Estou animado para contribuir com projetos inovadores e
        fazer parte de uma equipe dinâmica.
      </p>
      <hr />
      <div className="sobre-mim-tecnologias">
        <h3>Linguagens e Tecnologias:</h3>
        <div className="linguagens-container">
          <img src="https://img.icons8.com/?size=100&id=zRvbzAjx4VWY&format=png&color=000000" alt="" />
          <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="" />
          <img src="https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000" alt="" />
          <img src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" alt="" />
          <img src="https://img.icons8.com/?size=100&id=hKw7Mn8TNTuz&format=png&color=000000" alt="" />
        </div>
      </div>
      <br />
      <p>
        <strong>Vamos trabalhar juntos para criar algo incrível?</strong>
      </p>
      
      <div className="sobre-mim-icons">
        <a
          href="https://linkedin.com/in/lucas-santos-8245aa248"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={30}  color="white"/>
        </a>
        <a
          href="https://github.com/lucas3324k0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={30} color="white" />
        </a>
        <a href="lucas2019santos25@gmail.com">
          <AiOutlineMail size={30} color="white" />
        </a>
      </div>
      <BottonTop />
    </div>
  );
};

export default SobreMim;
