import React from "react";
import FotoPerfil from "./FotoPerfil";

function Cabecalho({titulo}) {
  return (
    <header className="header">
      <FotoPerfil/>
      <div>
        <h1>{titulo}</h1>
        
        <address>
          <p>(32) 98482-3482 | 

          <a href="mailto:pedrosilvajf@gmail.com"> pedrosilvajf@gmail.com &nbsp;| </a>
          
          <a href="https://linkedin.com/in/pedronascimentosilva/" 
             target="_blank" >
            LinkedIn
          </a>
          </p>
   
        </address>
      </div>
    </header>
  );
}

export default Cabecalho;
