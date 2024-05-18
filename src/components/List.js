import React, { useState, useEffect } from 'react';
import './List.css'

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://estudianteapi-1.onrender.com/api/list/');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <h2>Datos de estudiantes</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Carnet</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grado</th>
              <th>Sección</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.carnet}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.grado}°</td>
                <td>{item.seccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataList;