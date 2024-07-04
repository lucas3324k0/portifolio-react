import logo from "../../assets/logo/image.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../Responsivo.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useReducer } from "react";

const Navbar = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "openClose":
        return { ...state, Menu: !state.Menu };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    Menu: false,
  });

  return (
    <div className="header-container">
      <div className="header-links-container">
        <Link className="logo-container" to={"/"}>
          <img className="logo" src={logo} />
        </Link>

        <div className={state.Menu ? "ul" : "ul-none"}>
          <ul className={state.Menu ? "" : ""}>
            <li>
              <Link className="a-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="a-link" to={"/projects"}>
                Projetos
              </Link>
            </li>
            <li>
              <Link className="a-link" to={"/SobreMim"}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link className="a-link" to={"/contacts"}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* -------- Botao menu hamburger ---------- */}
      <button
        className="menu-button"
        onClick={() => dispatch({ type: "openClose" })}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default Navbar;
