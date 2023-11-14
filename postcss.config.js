
const { join } = require('path');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: {
    tailwindcss: {
      // config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};

// module.exports = {
//   plugins:{ 
//     'postcss-preset-env',
//     tailwindcss
//   },
// };