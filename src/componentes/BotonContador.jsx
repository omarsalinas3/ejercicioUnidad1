function BotonContador({ contador, alIncrementar, nombre }) {
  return (
    <div style={{ margin: '10px' }}>
      <button 
        onClick={alIncrementar}
        style={{
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px'
        }}
      >
        {nombre}: {contador}
      </button>
    </div>
  );
}

export default BotonContador;