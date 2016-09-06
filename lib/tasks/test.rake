require 'cucumber/rake/task'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec) do |t|
  t.rspec_opts = "--color"
end

Cucumber::Rake::Task.new(:features) do |t|
  t.cucumber_opts = "--format progress"
end

task :test do
  exec 'rake features'
end
