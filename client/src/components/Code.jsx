import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code2({ code, language }) {
  const [formattedCode, setFormattedCode] = useState(code)

  useEffect(() => {
    const generateCode = async () => {
      await setFormattedCode(code.replace(/\\n/g, '\n'))
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