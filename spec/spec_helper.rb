ENV['RACK_ENV'] = 'test'

require File.expand_path(File.dirname(__FILE__) + '/../main.rb')
require 'capybara/dsl'

RSpec.configure do |conf|
  conf.include Capybara::DSL
end
