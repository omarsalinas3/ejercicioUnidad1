function ListaTecnologias() {
  const tecnologias = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'Node.js' },
    { id: 4, nombre: 'SQL Server' },
    { id: 5, nombre: 'C#' },
    { id: 6, nombre: 'ASP.NET MVC' }
  ];

  return (
    <div>
      <h3>Tecnologías que manejo:</h3>
      <ul>
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia.id}>{tecnologia.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTecnologias;