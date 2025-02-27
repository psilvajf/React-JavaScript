import React from "react"; // Importa a biblioteca React

function Secao({ title, children }) { // Declaração do componente funcional "Secao" que recebe "title" e "children" como props
  return (
    <section className="section"> {/* Define uma seção com a classe CSS "section" */}
      <h2>{title}</h2> {/* Exibe o título da seção */}
      {children} {/* Renderiza os elementos filhos passados para o componente */}
    </section>
  );
}

export default Secao; // Exporta o componente Secao para ser utilizado em outros arquivos
