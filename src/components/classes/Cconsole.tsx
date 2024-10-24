import React, { useState } from 'react';
import consoleProps from '../interfaces/consoleProps';
const CConsole: React.FC<consoleProps> = (props) => {
  console.log(props);
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');

    const handleRunCode = async () => {
      try {
        const response = await fetch('/v1/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            script: code,
            language: 'c',
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
    <div>
      <textarea 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
        placeholder="Escreva seu código em C aqui" 
      />
      <button onClick={handleRunCode}>Executar</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CConsole;
