[![Dependency Status](https://gemnasium.com/katgironpe/simple-sinatra-mvc.svg)](https://gemnasium.com/katgironpe/simple-sinatra-mvc)

# Simple Sinatra MVC Template

## What's included
* Slim
* SASS
* PostgreSQL gem (pg)
* Pony
* Rubocop
* Brunch
* Bootstrap 4.0 (with Flexbox support)
* A lot more


``` bash
$ git clone --depth 1 git://github.com/katgironpe/simple-sinatra-mvc.git myapp
$ rm -r myapp/.git && rm myapp/README.md
```

## Use bundler to install gems

``` bash
$ bundle install --no-deployment
```

## Use npm to install some dependencies

### I personally prefer npm over bower for asset management

```bash
$ npm i
```

## Start the server

``` bash
$ rackup
```

or

``` bash
$ bundle exec shotgun config.ru
```

## Unit and acceptance tests

Use **RSpec** for unit tests and functional tests.

``` bash
$ bundle exec rake spec
```

For acceptance tests, some example is also provided. Use:

```bash
cucumber
```

Or use the rake task **lib/tasks/test.rake**:

```
rake features
```

## Configuration

``` bash
$ cp config/database.yml.example config/database.yml
```

Update database.yml


By default, we use PostgreSQL.

To install PostgreSQL on a Mac, you might need homebrew.

```bash
$ brew install postgresql
```

Creating a database should be as simple as:

```bash
$ createdb database_name
```

You may have to update `config.ru` and files on config directory as needed.

## Rake Tasks

``` bash
$ rake -T
```

rake assets:clean         # Clean assets
rake assets:precompile    # Precompile assets
rake db:create_migration  # create an ActiveRecord migration
rake db:migrate           # migrate the database (use version with VERSION=n)
rake db:rollback          # roll back the migration (use steps with STEP=n)
rake db:schema:dump       # dump schema into file
rake db:schema:load       # load schema into database
rake features             # Run Cucumber features

To create a database for a specific environment, do:

``` bash
$ rake db:create RACK_ENV=production
```

The default environment is "development"

To create a migration file called "create_pages", do:

``` bash
$ rake db:create_migration NAME=create_pages
```

To do migration:

``` bash
$ rake db:migrate RACK_ENV=production
```

To rollback:

``` bash
$ rake db:rollback RACK_ENV=production
```

The default is development so this should just work:

``` bash
$ rake db:migrate
```

To start the server, use `shotgun`:

```bash
$ bundle exec shotgun config.ru
```

## Asset Pipeline

**Update: I have decided to replace Sprockets with Brunch. Reasons include performance improvements, ease of use and flexibility.**

By default, we have the following supported directories:

* app/assets/javascripts
* app/assets/stylesheets
* app/assets/files

Your non-JavaScript and non-CSS files should go to `app/assets/files` directory.

I may work on another template that uses `Sprockets 4`.

### Why Brunch?

Brunch is great for most projects. It is currently the de facto choice for Phoenix developers.

### Configuring Brunch

Please take some time to read the [documentation](http://brunch.io/#documentation) before updating `brunch-config.js`.

## Pre-deployment

### Review Gitignore file

You likely have to remove some entries on the **.gitignore** file like **config/database.yml** if you are deploying on Heroku or OpenShift.
