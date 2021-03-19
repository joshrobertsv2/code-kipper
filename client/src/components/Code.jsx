import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import axios from 'axios'

import "prismjs/themes/prism-okaidia.css";

export default function Code2({ code, language }) {
  const [formattedCode, setFormattedCode] = useState(code)
  

  useEffect(() => {
    const generateCode = async () => {
      await setFormattedCode(code.replace(/\\n/g, '\n'))
      // axios.get("prismjs/themes/prism-twilight.css")
      Prism.highlightAll()
     
    }
    generateCode()
  }, [formattedCode]);

  return (
    <pre>
      <code className={`language-${language}`}>{formattedCode ||  'Error: "Error loading code, please try again "'} </code>
    </pre>
  );
}