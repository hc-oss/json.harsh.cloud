import Editor from "@monaco-editor/react";
import jsonabc from "jsonabc/index";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState();

  const JSONParse = (js) => new Function("return (" + js + ")")();

  const handleOnSort = () => {
    setValue(JSON.stringify(jsonabc.sortObj(JSONParse(value)), null, 2));
  };

  const handleOnFormat = () => {
    setValue(JSON.stringify(JSONParse(value), null, 2));
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
