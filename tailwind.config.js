/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'one': 'repeat(1, 112px)',
        'two': 'repeat(2, 100px)',
        'five': 'repeat(5, 112px)',
        'twenty': 'repeat(20, minmax(0, 1fr))',
      },

      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s ease-out 1',
      },

    },
  },
  plugins: [],
}
