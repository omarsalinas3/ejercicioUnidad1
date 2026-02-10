import { useState } from 'react';

function BotonInteractivo() {
  const [textoBoton, setTextoBoton] = useState('Haz clic aquí');

  const manejarClic = () => {
    setTextoBoton('Ya me presionaste');
  };

  return (
    <div>
      <button 
        onClick={manejarClic}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px'
        }}
      >
        {textoBoton}
      </button>
    </div>
  );
}

export default BotonInteractivo;