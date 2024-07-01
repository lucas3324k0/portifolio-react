import "./Home.css";
import '../../Responsivo.css'
import minhaImagem from "../../assets/MinhaImagem/minh_imagem.jpg";

const Home = () => {
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
          <a
            className="btn"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519987340162"
          >
            Fale comigo
          </a>
          <a className="btn">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
