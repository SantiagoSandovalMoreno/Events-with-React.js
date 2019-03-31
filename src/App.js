import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Events from './components/Events';
class App extends Component {

  token = 'TVUWQPZCIXWBPN3T7TH4';
  ordenar = 'date'
  state = {
    categorias: [],
    eventos : []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

    await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories
        })
      })
  }
  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=${this.ordenar}&categories=${busqueda.categoria}&token=${this.token}&locale=es_ES`

    await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(eventos => {
        this.setState({
          eventos : eventos.events
        })
      })
   
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Form
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />
          <Events 
            eventos={this.state.eventos}
          />
        </div>
      </div>
    );
  }
}

export default App;
