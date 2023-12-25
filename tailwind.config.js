/** @type {import('tailwindcss').Config} */

const defaultColors = require('tailwindcss/colors');

delete defaultColors['lightBlue'];
delete defaultColors['warmGray'];
delete defaultColors['trueGray'];
delete defaultColors['coolGray'];
delete defaultColors['blueGray'];

const colors = {
  ...defaultColors,
  primary: '#2c5ae9',
  secondary: '#878d91',
  danger: '#dc4c64',
};

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
    backgroundColor: {
      ...colors,
    },
    textColor: {
      ...colors,
    },
    borderColor: {
      ...colors,
    },
  },
};
