import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <div className="header">
        <h1 className="title">Don't Burn Brazil</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="https://github.com/willianctti/dont-burn">Code</a>
            <a href="https://g1.globo.com/meio-ambiente/noticia/2024/09/02/68-mil-focos-brasil-pior-mes-de-agosto-desde-2010.ghtml">G1 Local News</a>
        </div>
    </div>
  )
}

export default Header
