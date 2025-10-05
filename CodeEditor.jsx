"use client";
import React, { useEffect, useRef } from 'react';
import { CodeJar } from 'codejar';

const CodeEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const node = editorRef.current;
    if (!node) return;

    const highlight = (editor) => {
      const code = editor.textContent;
      editor.innerHTML = code.replace(/(const|let|var|function)/g, '<span style="color:aqua">$1</span>');
    };

    const jar = CodeJar(node, highlight);
    jar.updateCode(`function solve(input) {
  // เขียนโค้ดของคุณที่นี่
}`);

    return () => {
      jar.destroy();
    };
  }, []);

  return (
    <div
      ref={editorRef}
      className="editor bg-slate-700 text-white p-4 rounded-lg"
      style={{ minHeight: "1000px", fontSize: "16px", fontFamily: "monospace", overflowY:"auto", maxHeight:"1000px" }}
    >
    </div>
  );
};

export default CodeEditor;