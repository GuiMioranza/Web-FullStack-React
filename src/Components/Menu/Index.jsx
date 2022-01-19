import './index.css'

export function Menu(props) {
  const {perfil} = props
  
  return(
    <header className="menu">
      <nav>
        <ul>
          <li><a href="">Home</a> </li>
          <li><a href="">Sobre Nos</a> </li>
          <li><a href="">Trabalhe Conosco</a> </li>
        </ul>
      
        {perfil && (
          <figure>
            <img src={perfil.avatarUrl} alt={perfil.nome}/>
            <figcaption>{perfil.nome}</figcaption>
          </figure>
        )}
      </nav>
    </header>
)

}