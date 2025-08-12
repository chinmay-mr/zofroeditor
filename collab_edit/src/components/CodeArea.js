import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const CodeArea = () => {
  const [code, setCode] = useState("// Start typing your code here...");

  const onChange = (value) => {
    console.log("Current code:", value);
    setCode(value);
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
      <CodeMirror
        value={code}
        height="100vH"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};

export default CodeArea;
