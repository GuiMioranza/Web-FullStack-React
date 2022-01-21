import './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'

//export function Menu(props) {
//  const {perfil} = props 

export class Menu extends React.Component {

  constructor(props){
    super()
    //this.state = {logado: props.perfil ? true : false} é a mesma coisa que a linha de baixo
    this.state = {logado: !!props.perfil, perfil: props.perfil}
  }

  render() {
    //const {perfil} = this.props
    
    const handleSignOut = () => {
      this.setState({logado: false, perfil: undefined})
    }

    const handleAnonymousSignIn = () => {
      this.setState({
        logado: true,
        perfil: {
          nome:'Anônimo',
          avatarUrl: 'https://source.unsplash.com/random/?profilepicture'
        }
      })
    }

    return(
      <header className="menu">
        <nav>
          <ul>
            <li><a href="">Home</a> </li>
            <li><a href="">Sobre Nos</a> </li>
            <li><a href="">Trabalhe Conosco</a> </li>
          </ul>

          {this.state.logado ? (
            <aside>
              <figure>
                <img src={this.state.perfil.avatarUrl} alt={this.state.perfil.nome}/>
                <figcaption>{this.state.perfil.nome}</figcaption>
              </figure>
              
              <button onClick={handleSignOut}>
              <FaSignOutAlt />
              </button>
            </aside>           
          )
          :
          (
            <aside>
              <button onClick={handleAnonymousSignIn}>
              <FaSignInAlt />
              Fazer login como usuário anônimo
              </button>
            </aside>  
          )
          }
        </nav>
      </header>
    )
  }
}

Menu.propTypes = {
  perfil: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  })
}

//Menu.defaultPropTypes = {
//  perfil: {
//    nome: 'Guilherme Piccin',
//    avatarUrl: 'https://github.com/GuiMioranza.png',
//  }
//