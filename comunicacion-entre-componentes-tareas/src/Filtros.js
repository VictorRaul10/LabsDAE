import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Filtros({ filtrarTareas }) {
  return (
    <div className="mt-4">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Todas")}>
          Todas
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Pendientes")}>
          Pendientes
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Completadas")}>
          Completadas
        </button>
      </div>
    </div>
  );
}

export default Filtros;

