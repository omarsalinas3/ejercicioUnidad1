import UserProfile from './componentes/UserProfile';
import ListaTecnologias from './componentes/ListaTecnologias';
import BotonInteractivo from './componentes/BotonInteractivo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio Práctico Unidad 1 - React</h1>
      
      <section>
        <h2>Desafío 1: Creación y Anidación de Componentes</h2>
        <UserProfile />
      </section>

      <section>
        <h2>Desafío 2: Renderizado de Listas</h2>
        <ListaTecnologias />
      </section>

      <section>
        <h2>Desafío 3: Estado e Interacción</h2>
        <BotonInteractivo />
      </section>
    </div>
  );
}

export default App;