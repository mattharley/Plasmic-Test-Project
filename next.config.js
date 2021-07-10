
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['4EHVSehbm3TKFx8oh6hdKf'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  