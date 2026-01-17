import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const description =
    frontMatter?.description || "Pinnacle Roleplay documentation";
  const pageTitle = title || "Pinnacle Roleplay";
  const siteUrl = "https://pinnacle-rp-docs.vercel.app";
  const url = `${siteUrl}${asPath}`;
  const ogImage = `${siteUrl}/pinnacle-logo.png`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/pinnacle-logo.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="theme-color" content="#8a8f98" />
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
