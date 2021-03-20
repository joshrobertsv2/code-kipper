import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'


const CodeBlock = ({ code, language, theme }) => {
  const themeOpts = {
    'Dark': dark, 
    'Coy': coy, 
    'Okaidia': okaidia, 
    'Twilight': twilight, 
    'Tomorrow': tomorrow, 
    'Solarized Light': solarizedlight,
  }
  return (
    <div style={styling}>
      <SyntaxHighlighter language={language.toLowerCase()} style={themeOpts[theme]} showLineNumbers={true} wrapLines={true} wrapLongLines={true}>
      {code}
     </SyntaxHighlighter>
    </div>

  );
}

const styling = {
  height: 'auto',
  minHeight: '6rem',
  maxHeight: '12rem',
  overflowY: 'auto',
  margin: '1rem 0',
}



export default CodeBlock