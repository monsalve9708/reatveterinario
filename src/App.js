import './App.scss';
import {Outlet} from"react-router-dom"
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
      <>
          <Navbar/>
          <Outlet/>
    </>
  );
}

export default App;
