
import './App.css';
import ItemListContainer from "./components/itemListContainer";
import { Layout } from "./components/Layout";

function App() {
  return (
    
    <main className='flex flex-col h-screen'>
      <Layout>
        <ItemListContainer />
      </Layout>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
    </main>
    
  );
}

export default App;


