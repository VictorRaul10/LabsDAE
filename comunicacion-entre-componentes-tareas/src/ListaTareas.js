import React from 'react';
import Tarea from './Tarea';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, ordenarTareas }) {
  return (
    <div className="mt-4">
      <button className="btn btn-primary mb-3" onClick={ordenarTareas}>
        Ordenar por fecha de creación 
      </button>
      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li className="list-group-item" key={index}>
            <Tarea
              tarea={tarea.texto}
              completada={tarea.completada}
              onDelete={() => eliminarTarea(index)}
              onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
              onToggleCompletada={() => toggleCompletada(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;



