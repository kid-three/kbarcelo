import React from "react";

const CodeLines = ({ text }:any) => {
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + " " + lines[i];
  }
  text = lines.join("\n");

  return <div>{text}</div>;
};

export default CodeLines;
