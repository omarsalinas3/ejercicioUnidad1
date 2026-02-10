import UserProfile from './componentes/UserProfile';
import ListaTecnologias from './componentes/ListaTecnologias';
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
    </div>
  );
}

export default App;