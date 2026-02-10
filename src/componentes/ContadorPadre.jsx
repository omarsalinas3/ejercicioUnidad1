import { useState } from 'react';
import BotonContador from './BotonContador';

function ContadorPadre() {
  const [contador, setContador] = useState(0);

  const manejarIncremento = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador compartido: {contador}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <BotonContador 
          contador={contador} 
          alIncrementar={manejarIncremento} 
          nombre="Botón 1" 
        />
        <BotonContador 
          contador={contador} 
          alIncrementar={manejarIncremento} 
          nombre="Botón 2" 
        />
      </div>
    </div>
  );
}

export default ContadorPadre;