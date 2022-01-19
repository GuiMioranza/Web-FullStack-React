import React from 'react';
import './App.css';
import { Cover } from './Components/Cover/index.jsx';
import { Title } from './Components/Title/index.jsx';
import { Products } from './Components/Products/index.jsx';
import { MdSearch } from 'react-icons/md';
import { Menu } from './Components/Menu/index.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.titulo = "Programando meu primeiro app React"
    const formatadorDePreco = Intl.NumberFormat(
      'pt-BR', {currency: 'BRL', style: 'currency'}
    )

    this.lapis = {
      nome: 'lápis b2',
      valor: 5,
      preco: formatadorDePreco.format(5)
    }
  }

  render(){
    return (
      <>
        <Menu
          perfil = {{
            nome: 'Fulano de Tal',
            avatarUrl: 'https://source.unsplash.com/random/?profile picture'
          }}
        />
        <Cover />
        <Title 
          id="main-title"
          texto="Título da pagina" 
          tamanho={'xl'} 
          style={{color: 'green'}}
        />
        <Search />
        {10*5}

        {/* <strong>{this.lapis.nome}</strong>
        <p>{this.lapis.preco}</p> */}

        <Products />

        <footer style={{backgroundColor:'steelblue'}}>
          <Title 
            tamanho={'md'}
            texto="footer da pagina criada durante curso de Web FullStack"
          />
        </footer>


      </>
  )}
}

function Search() {
  return (
    <div>
      <form>
        <label htmlFor='search'></label>
        <input id='search' />
        <button>
          <MdSearch />
        </button>
      </form>
    </div>
  )
}

// function App() {
//   const titulo = "Programando meu primeiro app React"
//   const formatadorDePreco = Intl.NumberFormat(
//     'pt-BR', {currency: 'BRL', style: 'currency'}
//   )
//   const lapis = {
//     nome: 'lápis hb2',
//     valor: 2,
//     preco: formatadorDePreco.format(2)
//   }
//   return (
//     <>
//       <h1>{titulo}</h1>
//       <h2>Lojinha virtual</h2>
//       <strong>{lapis.nome}</strong>
//       <p>{lapis.preco}</p>
//     </>
//   );
// }

export default App;