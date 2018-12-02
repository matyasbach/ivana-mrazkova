module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/o-mne': { page: '/o-mne' },
      '/portfolio': { page: '/portfolio' },
      '/vystavy': { page: '/vystavy' },
    }
  }
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS()
