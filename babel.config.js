const presets = [
  [
    '@babel/env',
    {
      targets: { IE: '11'},
      useBuiltIns: 'entry',
      modules: false
    },
  ],
  '@babel/preset-react'
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import"
]

module.exports = {
  presets,
  plugins
};
