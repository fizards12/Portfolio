/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        "heavy-1200": 700,  
        "heavy-576": 600,
        "heavy-0": 500,
      },
      fontSize: {
        "dis-lg-1200": [
          "69px",
          {
            lineHeight: "76px",
          },
        ],
        "dis-lg-576": [
          "51px",
          {
            lineHeight: "56px",
          },
        ],
        "dis-lg-0": [
          "41px",
          {
            lineHeight: "48px",
          },
        ],
        "dis-sm-1200": [
          "57px",
          {
            lineHeight: "64px",
          },
        ],
        "dis-sm-576": [
          "44px",
          {
            lineHeight: "48px",
          },
        ],
        "dis-sm-0": [
          "36px",
          {
            lineHeight: "40px",
          },
        ],
        "h1-1200": [
          "48px",
          {
            lineHeight: "52px",
          },
        ],
        "h1-576": [
          "38px",
          {
            lineHeight: "44px",
          },
        ],
        "h1-0": [
          "32px",
          {
            lineHeight: "36px",
          },
        ],
        "h3-1200": [
          "33px",
          {
            lineHeight: "36px",
          },
        ],
        "h3-576": [
          "28px",
          {
            lineHeight: "32px",
          },
        ],
        "h3-0": [
          "26px",
          {
            lineHeight: "32px",
          },
        ],
        "h4-1200": [
          "28px",
          {
            lineHeight: "32px",
          },
        ],
        "h4-576": [
          "24px",
          {
            lineHeight: "28px",
          },
        ],
        "h4-0": [
          "23px",
          {
            lineHeight: "24px",
          },
        ],
        "lnk-lg": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        "lnk-md": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "lnk-sm": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "small": [
          "16px",
          {
            lineHeight: "24px",
          }
        ],
        "large": [
          "24px",
          {
            lineHeight: "32px",
          }
        ],
      },
      colors: {
        primary: {
          default: "#5E3A9E",
          10: "#0F0324",
          95: "#1C0C38",
          9: "#29154D",
          85: "#361F61",
          8: "#432876",
          7: "#5E3A9E",
          6: "#784DC7",
          5: "#925FF0",
          4: "#A87FF3",
          3: "#BE9FF6",
          2: "#D3BFF9",
          15: "#DECFFA",
          1: "#E9DFFC",
          "05": "#F4EFFD",
        },
        secondary: {
          "05": "#EBF6FF",
          1: "#D7EDFF",
          15: "#C2E5FF",
          2: "#AEDCFF",
          3: "#86CAFF",
          4: "#5DB9FF",
          5: "#35A7FF",
          6: "#2A87CE",
          7: "#20679E",
          8: "#15476D",
          85: "#103755",
          9: "#0B273D",
          95: "#051724",
          10: "#00070C",
        },
      },
    },
  },
  safelist: [
    {
      pattern: /(text|border)-(.*)-(.*)/,
    },
  ],
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
      });
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#5E3A9E",
          "primary-content": "#FFF",
          secondary: "#15476D",
          "secondary-content": "#FFF",
          accent: "#35A7FF",
          "accent-content": "#FFF",
          error: "#EF4444",
        },
      },
    ],
  },
};
