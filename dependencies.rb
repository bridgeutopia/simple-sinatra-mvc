ENV['RACK_ENV'] ||= 'development'

require 'rubygems'
require 'bundler'

%w(
  active_record
  active_support
  kramdown
  pg
  sinatra
  sinatra/flash
  sinatra/static_assets
  slim
).each { |d| require d }

$env = ENV['RACK_ENV']
# Bundler.require :default, $env.to_sym
# You probably should not do that.
# See http://myronmars.to/n/dev-blog/2012/12/5-reasons-to-avoid-bundler-require
