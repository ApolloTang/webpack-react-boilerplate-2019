const presets = [
  [
    '@babel/env',
    {
      targets: { IE: '11'},
      useBuiltIns: 'usage'
    },
  ],
  '@babel/preset-react'
];

const plugins = [
  "@babel/plugin-proposal-class-properties"
]

module.exports = {
  presets
};
