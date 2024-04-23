module.exports = {
    jsc: {
      parser: {
        syntax: 'ecmascript',
        jsx: true,
      },
      target: 'es2017',
    },
    env: {
      test: {
        plugins: [['@swc/plugin-transform-react', { runtime: 'automatic' }]],
      },
    },
  };