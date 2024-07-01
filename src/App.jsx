import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import './Responsivo.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
