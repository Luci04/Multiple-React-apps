import React from 'react';
import "./App.css";
import { useState } from 'react';
import marked from 'marked';



export default function App() {

  const [markdown, setMarkdown] = useState("# sup");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={e => handleChange(e)} value={markdown} />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
      {/* <ReactMarkdown className="preview" rawSourcePos={markdown} /> */}

    </div >
  );
}
