import "./Home.css";
import "../../Responsivo.css";
import minhaImagem from "../../assets/MinhaImagem/minh_imagem.jpg";
import curriculo from "../../assets/curriculo/LUCAS-SANTOS-NASCIMENTO (1) (1) (1).pdf";
import { useState } from "react";

const Home = () => {
  const [carregando, setCarregando] = useState(false);
  const [redirecionando, setRedirecionando] = useState(false);

  const mudar = () => {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  };

  const redirecionar = () => {
    setRedirecionando(true);
    setTimeout(() => {
      setRedirecionando(false);
      window.open(
        "https://api.whatsapp.com/send?phone=5519987340162",
        "_blank"
      );
    }, 2000);
  };

  console.log(carregando);
  return (
    <div className="home-container">
      <div className="home-conteudo">
        <div className="home-foto">
          <img src={minhaImagem} alt="minhaImagem" />
        </div>
        <h2>Bem-vindo(a) ao Meu Portfólio</h2>
        <p>
          Desenvolvedor iniciante com o objetivo de me tornar full stack. Estou
          começando pelo front-end e aqui estão alguns dos meus primeiros
          projetos. Confira e entre em contato!
        </p>
        <div className="home-btn">
          <a onClick={redirecionar} className="btn" target="_blank">
            {redirecionando === true ? "Redirecionando..." : "Fale comigo"}
          </a>

          <a onClick={mudar} className="btn" download href={curriculo}>
            {carregando === true ? "Carregando..." : "Download CV"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
