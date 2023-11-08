import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false
    };
  }

  componentWillMount() {
    // Simulación de datos de ejemplo
    const ejemploDatos = [
      {
        codigo: 1,
        descripcion: "Coca cola",
        precio: 2.33
      },
      {
        codigo: 2,
        descripcion: "Fanta",
        precio: 1.7
      }
    ];

    // Establecer los datos de ejemplo en el estado y cambiar el estado de recuperado a true
    this.setState({ productos: ejemploDatos, recuperado: true });
  }

  mostrarTabla() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos.map(prod => {
              return (
                <tr key={prod.codigo}>
                  <td>{prod.codigo}</td>
                  <td>{prod.descripcion}</td>
                  <td>{prod.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.recuperado) {
      return this.mostrarTabla();
    } else {
      return <div>Recuperando datos...</div>;
    }
  }
}

export default App;

