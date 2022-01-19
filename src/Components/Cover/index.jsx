import { MdFirstPage } from 'react-icons/md'
import './index.css'
import propTypes from 'prop-types'
import React from 'react'

export function Cover({cor}) {
  const titulo = "Programando meu primeiro app React"

  return(
    <>
      <div data-cover style={{backgroundColor: cor ?? 'steelblue'}}>
        <MdFirstPage />
        <h1>{titulo}</h1>
        <h2>Lojinha virtual</h2>
      </div>
      
      <footer>
        <button>Deixar capa vermelha</button>
        <button>Deixar capa verde</button>
      </footer>
    </>
  )
}