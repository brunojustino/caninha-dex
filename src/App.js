import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cachacas: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return {cachacas: users}
          },
          () => {
            console.log("a")
          }
        )
      )
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const {cachacas, searchField } = this.state
    const { onSearchChange } = this

    const filteredCachacas = cachacas.filter((cachaca) => {
      return cachaca.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='procurar cachaça' 
          onChange={onSearchChange} />
        {filteredCachacas.map( (cachaca) => {
          return (
          <div key={cachaca.id}>
            <h1>{cachaca.name}</h1>
          </div>)

        })
        }
      </div>
    );
  }
}

export default App;
