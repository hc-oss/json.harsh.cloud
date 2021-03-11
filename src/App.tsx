import "./styles.css";

import Editor from "@monaco-editor/react";
import jsonabc from "jsonabc";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [value, setValue] = useState<any>();

  const handleOnSort = () => {
    setValue(JSON.stringify(jsonabc.sortObj(JSON.parse(value)), null, 2));
  };

  const handleOnFormat = () => {
    setValue(JSON.stringify(JSON.parse(value), null, 2));
  };


  return (
    <>
      <header>
        <h1>JSON Viewer</h1>
        <div className="actions">
          <button
            className="btn"
            onClick={handleOnSort}
            title="Sort and Format JSON"
          >
            Tidy Up
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleOnFormat}
            title="Format JSON"
          >
            Format
          </button>
        </div>
      </header>
      <Editor
        height="var(--editor-height)"
        value={value}
        onChange={(v) => setValue(v)}
        defaultLanguage="json"
        theme="vs-dark"
      />
    </>
  );
}

export default App;
