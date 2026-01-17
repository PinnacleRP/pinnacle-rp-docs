import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

function useHead() {
  const { frontMatter, title } = useConfig();
  const description =
    frontMatter?.description || "Pinnacle Roleplay documentation";
  const pageTitle = title || "Pinnacle Roleplay";
  const siteUrl = "https://pinnacle-rp-docs.vercel.app";
  const ogImage = `${siteUrl}/pinnacle-logo.png`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/pinnacle-logo.png" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Pinnacle Roleplay logo" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
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
