import './styles.css'

//export function Title (props) {
//  
//  console.log(props)
//  
//  return (
//    <div>
//      
//      <h1 className={`texto-${props.tamanho}`} style={props.style}>Olá</h1>
//    
//    </div>


export function Title (props) {

const {tamanho, texto, ...rest} = props
//console.log(rest)
  
return (
  <div>
    <h1 
      className={`texto-${tamanho ?? 'md'}`} 
      {...rest} 
    >
      {texto} 
    </h1>
  
  </div>



  )
}