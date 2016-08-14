require './dependencies'
require './main'

# GZip compession
use Rack::Deflater

map '/' do
  run Sinatra::Application
end
