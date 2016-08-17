exports.config = {
  // See http://brunch.io/#documentation for docs.
  modules: {
    wrapper: false
  },

  files: {
    javascripts: {
      joinTo: 'javascripts/app.js'
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css',
      order: {
        after: ['app/assets/stylesheets/app.css']
      }
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
        includePaths: ['node_modules/normalize.css', 'node_modules/bourbon/core', 'node_modules/bourbon-neat/app/assets/stylesheets'],
        precision: 8,
        sourceMapEmbed: true
      }
    }

  },
  npm: {
    enabled: true
  }
};
