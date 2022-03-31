const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
}
