/** @type {import('tailwindcss').Config} */
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Product ramp
        canvas: c("canvas"),
        surface: c("surface"),
        raised: c("raised"),
        sunken: c("sunken"),
        line: c("line"),
        fg: {
          DEFAULT: c("fg"),
          2: c("fg-2"),
          3: c("fg-3"),
        },
        ember: {
          DEFAULT: c("ember"),
          strong: c("ember-strong"),
          fill: c("ember-fill"),
        },
        positive: c("positive"),

        // shadcn aliases, mapped onto the ramp
        border: c("border"),
        input: c("border"),
        ring: c("ember"),
        background: c("canvas"),
        foreground: c("fg"),
        primary: { DEFAULT: c("fg"), foreground: c("surface") },
        secondary: { DEFAULT: c("raised"), foreground: c("fg") },
        destructive: { DEFAULT: c("negative"), foreground: "255 255 255" },
        muted: { DEFAULT: c("raised"), foreground: c("fg-3") },
        accent: { DEFAULT: c("raised"), foreground: c("fg") },
        popover: { DEFAULT: c("surface"), foreground: c("fg") },
        card: { DEFAULT: c("surface"), foreground: c("fg") },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["12px", "16px"],
        xs: ["13px", "20px"],
        sm: ["14px", "20px"],
        base: ["15px", "24px"],
      },
      borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        rise: "rise 420ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
