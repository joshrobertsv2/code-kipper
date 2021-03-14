import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code2({ code, language }) {
  const [formattedCode, setFormattedCode]  = useState(code)




  useEffect(() => {
    (async () => {
      await setFormattedCode(code.replace(/\\n/g, '\n'))
      Prism.highlightAll();
    })()
  }, [formattedCode, code]);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{formattedCode}</code>
      </pre>
    </div>
  );
}