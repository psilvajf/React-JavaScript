import React from "react"; // Importa a biblioteca React
import Cabecalho from "./components/Cabecalho"; // Importa o componente de cabeçalho
import Secao from "./components/Secao"; // Importa o componente de seção
import "./index.css"; // Importa o arquivo de estilos CSS

function App() {
  return (
    <div className="bloco">
      <Cabecalho
      titulo={"Pedro Nascimento Silva"} // Passa o título para o componente de cabeçalho
      />

      <Secao title="Sobre"> {/* Seção "Sobre" com um título */}
        <p>
          Profissional formado em técnico em informática e redes de computadores. 
          Capacidades de análise e raciocínio, experiência em treinamentos de equipes, 
          reconhecimento de aprendizagem e resultados obtidos. Empenho de trabalho em equipe. 
          <br/>
          <br/>
        </p>
      </Secao>

      <Secao title="Experiência Profissional"> {/* Seção "Experiência Profissional" */}
        <p><strong>Técnico em Informática</strong> - Casa Kenedy (Janeiro 2018 - Atual)</p>
        <p>Suporte e treinamento ao usuário, gerenciamento de redes e servidores. </p>
        <br/>
        <p><strong>Analista de Suporte Técnico</strong> - GMUD Tecnologia (out de 2017 - dez de 2017)</p>
        <p>Planejamento junto com a T-Systems, no projeto de substituição de 150 desktops e 30 notebooks, na empresa Mercedez Benz-Juiz de Fora</p>
        <br/>
        <p><strong>Técnico em Informática</strong> - Frigo Urias (abr de 2013 - jul de 2016)</p>
        <p>Montagem, manutenção e prevenção de hardware, cabeamento de redes, configuração redes sem fio, rotina de backup, instalação e configuração de impressoras em rede.</p>
        <br/>
      </Secao>

      <Secao title="Formação Acadêmica"> {/* Seção "Formação Acadêmica" */}
        <p><strong>Bacharelado - Sistemas de Informação</strong></p>
        <p>UniAcademia - Centro Universitário (2024 - 2028)</p>
        <br/>
        <p><strong>Técnico em Informática</strong></p>
        <p>Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas (2011 - 2013)</p>
        <br/>
        <p><strong>Técnico em Redes de Computadores</strong></p>
        <p>Senac Minas (2014 - 2016)</p>
        <br/>
      </Secao>

      <Secao title="Habilidades e Competências"> {/* Seção "Habilidades e Competências" */}
        <ul>
        <li>Technical Support</li>
        <li>Help Desk Support</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Cabeamento</li>
        <li>Redes LAN-WAN</li>
        <li>DOS</li>
        <li>Microsoft Office</li>
        <li>Hardware</li>
        <li>Servidor Windows</li>
        <li>Sistemas operacionais</li>
        <li>Servidor Linux</li>
        <li>Conflict Resolution</li>
        <li>Problem Solving</li>
        <li>Critical Thinking</li>
        </ul>
        <br/>
      </Secao>

      <Secao title="Informações Adicionais"> {/* Seção "Informações Adicionais" */}
        <p>Idiomas: Português (Nativo), Inglês (Intermediário)</p>
        <br/>
      </Secao>
    </div>
  );
}

export default App; // Exporta o componente App para ser usado em outros arquivos
