require 'html/proofer'
2 # rake test
3 desc "build and test website"
4 task :test do
5   sh "bundle exec jekyll build"
6   HTML::Proofer.new("./_site", {:href_ignore=> ['http://localhost:4000'], :verbose => true}).run
7 end
