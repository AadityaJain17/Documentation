import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample, TopBar } from "./components";

const Codeblock = () => {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);

  return (
    <div className="container mx-auto p-4 bg-transparent ">
      <TopBar
        language={{
          value: language,
          onChange: (e) => {
            changeDemo(sample[e.target.value]);
            changeLanguage(e.target.value);
          },
          options: Object.keys(sample).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          )),
        }}
        toggle={{
          checked: lineNumbers,
          onChange: () => toggleLineNumbers(!lineNumbers),
        }}
      />
      <div className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
        <CopyBlock
          language="javascript"
          text={`v := Vertex{X: 1, Y: 2}`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        />
      </div>
    </div>
  );
};

export default Codeblock;
