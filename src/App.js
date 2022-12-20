
import './App.css';
import ItemListContainer from "./components/itemListContainer";
import { Layout } from "./components/Layout";
import Portada from './components/portada';
import Banner from './components/banner';
import Footer from './components/Footer';
import FooterInferior from './components/FooterInferior';
import { cartContext } from './context/cartContext';

function App() {
  return (
        <Layout>
          <Banner />
          <ItemListContainer/>
          <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
          <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"crossorigin></script>
          <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
          <script>var Alert = ReactBootstrap.Alert;</script>
          <script src="sweetalert2.all.min.js"></script>
        </Layout>    
  );
}

export default App;


