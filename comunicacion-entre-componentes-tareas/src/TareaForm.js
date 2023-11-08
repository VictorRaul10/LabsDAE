import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (texto.trim() === "") {
      setError("La tarea no puede estar en blanco.");
      return;
    }

    if (texto.length > 50) {
      setError("La tarea es demasiado larga. Por favor, usa menos de 50 caracteres.");
      return;
    }

    agregarTarea(texto);
    setTexto("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            setError(null); // Limpiar el mensaje de error al modificar el texto
          }}
        />
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </form>
  );
}

export default TareaForm;

