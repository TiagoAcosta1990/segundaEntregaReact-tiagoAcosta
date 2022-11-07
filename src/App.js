
import './App.css';
import NavbarApp from './components/navbar.js';
import ItemListContainer from "./components/itemListContainer";

function App() {
  return (
    
    <>
    <NavbarApp />
    <ItemListContainer greeting={"Estos son Nuestros Productos"} />
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
    <script>var Alert = ReactBootstrap.Alert;</script></>
  );
}

export default App;

