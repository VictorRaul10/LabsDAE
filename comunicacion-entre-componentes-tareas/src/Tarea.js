
import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item">
      <input type="checkbox" checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSaveClick}>
            Guardar
          </button>
        </>
      ) : (
        <>
          {tarea}
          <button className="btn btn-danger" onClick={onDelete}>
            Eliminar
          </button>
          <button className="btn btn-info" onClick={handleEditClick}>
            Editar
          </button>
        </>
      )}
    </li>
  );
}

export default Tarea;


