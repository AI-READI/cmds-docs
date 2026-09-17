import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CMDS Specification",
  tagline:
    "A simple and intuitive way to organize and describe clinical multimodal research datasets",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://cmds.aireadi.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ai-readi", // Usually your GitHub org/user name.
  projectName: "cmds-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/AI-READI/cmds-docs/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: "current",
          versions: {
            "0.1.0": {
              label: "Version 0.1.0",
              path: "0.1.0",
            },
            current: {
              label: "Version 0.1.1",
              path: "0.1.1",
            },
          },
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/android-chrome-512x512.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "CMDS Specification",
      logo: {
        alt: "CMDS Specification",
        src: "img/android-chrome-192x192.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/AI-READI/cmds-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/0.1.1/",
            },
            {
              label: "Specification",
              to: "/docs/0.1.1/specification/general-principles",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "AI-READI",
              href: "https://aireadi.org",
            },
            {
              label: "AI-READI Docs",
              href: "https://docs.aireadi.org",
            },
            {
              label: "Contact",
              href: "mailto:contact@aireadi.org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/AI-READI/cmds-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-READI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
