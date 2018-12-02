module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/o-mne': { page: '/o-mne' },
      '/about': { page: '/o-mne' },
      '/portfolio': { page: '/portfolio' },
      '/vystavy': { page: '/vystavy' },
      '/exhibitions': { page: '/vystavy' },
    }
  }
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS()
