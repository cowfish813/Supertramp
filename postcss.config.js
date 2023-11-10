
// const { join } = require('path');

// module.exports = {
//   plugins: {
//     tailwindcss: {
//       config: join(__dirname, 'tailwind.config.js'),
//     },
//     autoprefixer: {},
//   },
// };

const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss
  ],
};