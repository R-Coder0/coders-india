// tailwind.config.js
module.exports = {
    darkMode: "class",
    theme: {
      extend: {
        keyframes: {
          fontFamily: {
            poppins: ['var(--font-poppins)', 'sans-serif'],
            rubik: ['var(--font-rubik)', 'sans-serif'],
            mono: ['var(--font-fira-code)', 'monospace'],
          },
          
            zoomIn: {
              '0%': { transform: 'scale(0.5)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            },
          },
          animation: {
            zoomIn: 'zoomIn 0.4s ease-out',
          },
        colors: {
          // Light mode (unchanged)
          background: "#ffffff",
          foreground: "#000000",
          card: "#ffffff",
          "card-foreground": "#000000",
          // Dark mode (red background, white text)
          "dark-background": "#ff0000", // Red [[6]]
          "dark-foreground": "#ffffff", // White
          "dark-card": "#ff0000",
          "dark-card-foreground": "#ffffff",
        },
      },
    },
  };