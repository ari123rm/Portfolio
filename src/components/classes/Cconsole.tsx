import React, { useState } from 'react';
import consoleProps from '../interfaces/consoleProps';
import sudoku from "../../assets/projects/ProjetosC/Projetos/Sudoku/main.c"
const CConsole: React.FC<consoleProps> = (props) => {
  const [output, setOutput] = useState<string>('');

    const handleRunCode = async () => {
      try {
        const response = await fetch('/v1/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            script: require("../../assets/projects/ProjetosC/Projetos/Sudoku/main.c"),
            language: props.linguagens,
            versionIndex: '0',
            clientId: 'c8058669a3b2af61eea7659023ca55c1',
            clientSecret: '3e5c005a9b7d587ead9e905a406c61dc5b78b2ce5a5468bac652dece2beaa49f',
          }),
        });
    
        const data = await response.json();
        setOutput(data.output);
      } catch (error) {
        setOutput('Erro ao executar o código.');
      }
    };
  return (
    <div className='console'>
      {props.url == "../../assets/projects/ProjetosC/Projetos/Sudoku/main.c"?(
        <>
        <div data-pym-src="https://www.jdoodle.com/embed/v1/ddfdd31bdfa987ce"></div>
        <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"> </script>
        </>
        ):(<></>)

      }
    </div>
  );
};

export default CConsole;
