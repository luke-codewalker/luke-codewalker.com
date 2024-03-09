import React from "react";
import { COLORS } from "./src/styles/colors";

const ColorScriptTag = () => {
  const styleCommands = Object.keys(COLORS.light).map(key => `root.style.setProperty(
    '--${key}-color',
    darkThemeActive ? "${COLORS.dark[key]}" : "${COLORS.light[key]}"
  );`).join('')
  const codeToRunOnClient = `
    (function() {
      let darkThemeActive = false;
      const savedThemePreference = JSON.parse(window.localStorage.getItem("darkThemeOn"));
      if (savedThemePreference !== null) {
        darkThemeActive = savedThemePreference;
      } else {
        darkThemeActive = !!window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      const root = document.documentElement;
      ${styleCommands}
    })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}

const DefaultStyles = () => {
  const properties = Object.keys(COLORS.light).map(key => `--${key}-color: ${COLORS.light[key]};`).join('')
  return <style>
    {`html {
        ${properties}
    }`}
  </style>
}


export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<DefaultStyles />);
  setPreBodyComponents(<ColorScriptTag />);
};