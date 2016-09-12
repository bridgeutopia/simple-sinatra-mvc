require './dependencies'
(Dir['./lib/*.rb'].sort).each do |file|
  load file
end

class Main < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, Proc.new { File.join(root, 'public') }

  Slim::Engine.options[:disable_escape] = true

  YAML.load(ERB.new(File.read('./config/database.yml')).result)[$env].each do |key, value|
    set key, value
  end

  configure $env.to_sym do
    enable :raise_errors, :sessions, :logging

    ActiveRecord::Base.establish_connection(adapter: settings.adapter,
                                            username: settings.username,
                                            password: settings.password,
                                            host: settings.host,
                                            database: settings.database)
  end


  (Dir['./app/helpers/*.rb'].sort + Dir['./app/models/**/*.rb'].sort  + Dir['./app/controllers/*/*.rb'].sort).each do |file|
    require file
  end
end
