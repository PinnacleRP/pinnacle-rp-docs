import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

function useHead() {
  const { frontMatter, title } = useConfig();
  const description =
    frontMatter?.description || "Pinnacle Roleplay documentation";
  const pageTitle = title || "Pinnacle Roleplay";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/pinnacle-logo.png" />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img
        src="/pinnacle-logo.png"
        alt="Pinnacle Roleplay"
        style={{ display: "block", height: "32px", width: "auto" }}
      />
      <span style={{ fontWeight: 700 }}>Pinnacle Roleplay</span>
    </span>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  color: {
    hue: 210,
    saturation: 6,
    lightness: {
      dark: 78,
      light: 40,
    },
  },
  backgroundColor: {
    dark: "18, 18, 18",
    light: "250, 250, 250",
  },
  head: useHead,
  footer: {
    content: "Pinnacle Roleplay",
  },
};

export default config;
