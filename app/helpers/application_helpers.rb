class Main
  module ApplicationHelpers
    def link_to(text, url, opts = {})
      attributes = ''
      opts.each do |k, v|
        attributes << k.to_s << "=\"" << v << "\" " if k && v
      end
      %(<a href="#{url}" #{attributes}>#{text}</a>)
    end
  end
end

helpers Main::ApplicationHelpers
