const faviconsContext = require.context(
  '!!file-loader?name=images/[name].[ext]!.',
  true,
  /\.(svg|png|jpg|jpeg)$/
);

faviconsContext.keys().forEach(faviconsContext);