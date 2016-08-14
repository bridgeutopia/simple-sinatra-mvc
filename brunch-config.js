exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: 'javascripts/app.js'
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css',
      order: {
        after: ['app/assets/stylesheets/app.css']
      }
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to '/app/assets/files'. Files in this directory
    assets: /^(app\/assets\/files)/
  },

  paths: {
    // Dependencies and current project directories to watch
    watched: [
      'app/assets'
    ],

    // Where to compile files to
    public: 'public/assets'
  },

  // Configure your plugins
  plugins: {
    babel: {
      ignore: [/node_modules/]
    },
    sass: {
      options: {
        mode: 'native',
        includePaths: ['node_modules/bootstrap/scss'],
        precision: 8,
        allowCache: true,
        sourceMapEmbed: true
      }
    }

  },

  modules: {

  },

  npm: {
    enabled: true
  }
};
