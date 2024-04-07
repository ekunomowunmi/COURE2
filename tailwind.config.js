/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1408px",
        "2xl": "1408px",
      },
    },
    borderWidth: {
      DEFAULT: "1.9px",
      x: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        "w-31": "31rem",
        21: "21px",
        136: "136px",
      },
      minHeight: {
        24: "302px",
      },
      maxWidth: {
        340: "340px",
      },
      height: {
        253: "253px",
        21: "21px",
        fit: "fit-content",
      },
      margin: {
        6.25: "6.25rem",
        6.7: "6.6875rem",
        36: "36px",
        30: "30px",
        25: "25px",
        21: "21px",
        18: "18px",
        13: "13px",
      },
      padding: {
        4.4: "4.4rem",
        2.7: "2.6875rem",
        30: "30px",
        25: "25px",
      },
      gap: {
        135: "8.4375rem",
        152: "9.6875rem",
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        light: "#ffffff33",
        gray: {
          500: "#d8d8d8",
          400: "#6F7278",
          300: "#E4E6EB",
          200: "#FDFCFC",
          100: "#f3f3f2",
        },
        primary: {
          500: "#990d81",
          400: "#a3268e",
          300: "#d192c7",
          100: "#EAF2F1",
        },
        secondary: {
          500: "#111C44",
        },
        accent: {
          500: "#E3D985",
        },
        neutral: {
          500: "#1B1C1E",
          400: "#C1C1C1",
          300: "#A0A3BD",
          200: "#757886",
          100: "#CCCCCC",
        },
        dark: {
          700: "#102023",
          600: "#4B4543",
          500: "#FBFBFB",
          400: "#878682",
          300: "#9a9eb01a",
          200: "#F5F5F5",
          100: "#F5F6F8",
        },
        success: "#56BC7C",
        error: {
          main: "#D45757",
        },
        warning: {
          500: "#FEF5DC",
        },
        link: {
          active: "#D7A81E",
          hover: "#30519C",
        },
        main: "#FBFBFD",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      "heading-2xl": [
        "84px",
        {
          fontWeight: "bold",
          lineHeight: "96px",
        },
      ],
      "heading-xl": [
        "64px",
        {
          fontWeight: "bold",
          lineHeight: "76px",
        },
      ],
      "heading-lg": [
        "48px",
        {
          fontWeight: "bold",
          lineHeight: "60px",
        },
      ],
      "heading-md": [
        "40px",
        {
          fontWeight: "semi-bold",
          lineHeight: "52px",
        },
      ],
      "heading-sm": [
        "32px",
        {
          fontWeight: "semi-bold",
          lineHeight: "44px",
        },
      ],
      "heading-xs": [
        "24px",
        {
          fontWeight: "semi-bold",
          lineHeight: "36px",
        },
      ],

      "body-2xl": [
        "20px",
        {
          fontWeight: "medium",
          lineHeight: "30px",
        },
      ],
      "body-xl": [
        "18px",
        {
          fontWeight: "medium",
          lineHeight: "28px",
        },
      ],
      "body-lg": [
        "16px",
        {
          fontWeight: "normal",
          lineHeight: "26px",
        },
      ],
      "body-md": [
        "14px",
        {
          fontWeight: "normal",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "12px",
        {
          fontWeight: "normal",
          lineHeight: "22px",
        },
      ],
      "body-xs": [
        "10px",
        {
          fontWeight: "normal",
          lineHeight: "20px",
        },
      ],
      "button-lg": [
        "16px",
        {
          fontWeight: "medium",
          lineHeight: "26px",
        },
      ],
      "button-md": [
        "14px",
        {
          fontWeight: "normal",
          lineHeight: "24px",
        },
      ],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.primary.200", "currentColor"),
    }),
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
