module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          accent1: "var(--bg-accent-1)",
          accent2: "var(--bg-accent-2)",
          overlay1: "var(--bg-overlay-1)",
          overlay2: "var(--bg-overlay-2)",
          overlay3: "var(--bg-overlay-3)",
          purple: "var(--bg-purple)",
          gray1: "var(--bg-gray-1)",
          gray2: "var(--bg-gray-2)",
          gray3: "var(--bg-gray-3)",
          light1: "var(--bg-light-1)",
          light2: "var(--bg-light-2)",
          light3: "var(--bg-light-3)",
          light4: "var(--bg-light-4)",
          light5: "var(--bg-light-5)",
          light6: "var(--bg-light-6)",
          white: "var(--bg-white)"
        },
        text: {
          primary: "var(--text-primary)",
          dark1: "var(--text-dark-1)",
          dark2: "var(--text-dark-2)",
          success: "var(--text-success)",
          dark3: "var(--text-dark-3)",
          blue: "var(--text-blue)",
          dark4: "var(--text-dark-4)",
          green: "var(--text-green)",
          muted1: "var(--text-muted-1)",
          muted2: "var(--text-muted-2)",
          muted3: "var(--text-muted-3)",
          accent: "var(--text-accent)",
          white: "var(--text-white)"
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)"
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
};