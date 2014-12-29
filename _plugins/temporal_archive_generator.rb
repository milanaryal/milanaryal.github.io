# encoding: utf-8
#
# Yearly and Monthly Archive Generator for Jekyll
# https://github.com/edelabar/jekyll-temporal-archive-generator
#
# Version: 0.1.0
#
# Copyright (c) 2014 Eric DeLabar, http://ericdelabar.com/
# Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
#
# A generator that creates yearly and monthly index pages for jekyll sites.
#
# This generator was built to migrate my website from Wordpress to Jekyll but maintain 
# the existing permalink structure.  I'm incredibly anal when it comes to nice URLs, so
# I needed an index page for each segment of my permalinked URLs.
#
# This Generator is based on code from the Jekyll category page generator 
# (http://recursive-design.com/projects/jekyll-plugins/) by Dave Perrett 
# (http://recursive-design.com/) and the Monthly archive plugin for Jekyll 
# (https://github.com/shigeya/jekyll-monthly-archive-plugin) by Shigeya Suzuki 
# (https://github.com/shigeya) I'm not much of a Ruby dev, so this would not have 
# been possible without their working examples.
#
# To use it, simply drop this script into the _plugins directory of your Jekyll site. You should
# also create a file called 'monthly_index.html' in the _layouts directory of your jekyll site
# with the following contents (note: you should remove the leading '# ' characters):
#
# ================================== COPY BELOW THIS LINE ==================================
# ---
# layout: default
# ---
# <div class="monthly-archive">
#   <div>
#     <span class="title">Monthly archive for {{page.year}}/{{page.month}}</span>
#   </div>
#   <div>
#     <ul>
# 	  {% for post in page.posts %}
# 	    <li><a href="{{ post.url }}"><span>{{ post.title }}<span></a></li>
#       {% endfor %}
#     </ul>
#   </div>
# </div>
# ================================== COPY ABOVE THIS LINE ==================================
#
# and a file called 'yearly_index.html' in the _layouts directory of your jekyll site
# with the following contents (note: you should remove the leading '# ' characters):
#
# ================================== COPY BELOW THIS LINE ==================================
# ---
# layout: default
# ---
# <div class="yearly-archive">
#   <div>
#     <span class="title">Yearly archive for {{page.year}}</span>
#   </div>
#   <div>
#     <ul>
# 	  {% for post in page.posts %}
# 	    <li><a href="{{ post.url }}"><span>{{ post.title }}<span></a></li>
#       {% endfor %}
#     </ul>
#   </div>
# </div>
# ================================== COPY ABOVE THIS LINE ==================================
#
# You can change the HTML above as you see fit.
#
# When you compile your jekyll site, this plugin will loop through your posts, and use the 
# layouts above to generate a page for each year and month with a list of links to the
# individual posts.
# 
# For instance, if you have the following posts:
# 
# 2013-01-01-test-post-1.markdown
# 2014-01-01-test-post-2.markdown
# 2014-02-01-test-post-3.markdown
# 
# This plugin will create the following index files:
# 
# 2013/index.html
# 2013/01/index.html
# 2014/index.html
# 2014/01/index.html
# 2014/02/index.html
# 

module Jekyll

  # The MonthlyIndexPage class creates a single monthly index page for the specified year and month.
  class MonthlyIndexPage < Page

    # Initializes a new MonthlyIndexPage.
    #
    #  +template_path+ is the path to the layout template to use.
    #  +site+          is the Jekyll Site instance.
    #  +base+          is the String path to the <source>.
    #  +year+          is the numeric year for the index page.
    #  +month+         is the numeric month for the index page.
    #  +posts+         is the list of posts in the given month.
    def initialize(template_path, site, base, year, month, posts)
    
      @site  = site
      @base  = base
      @dir   = '%04d/%02d' % [year, month]
      @name  = "index.html"
      
      paddedMonth = '%02d' % [month]

      self.process(name)

      if File.exist?(template_path)
        @perform_render = true
        
        # Read the YAML data from the layout page.
        template_dir    = File.dirname(template_path)
        template        = File.basename(template_path)
        self.read_yaml(template_dir, template)
        
        # Set the title for this page.
        self.data['title'] = "Monthly archive for #{year}/#{paddedMonth}"
        
        # Set the data for the template to render with.
        self.data['posts'] = posts
        self.data['year'] = year
        self.data['month'] = paddedMonth
        self.data['date'] = Date.new(year, month)
        
      else
        @perform_render = false
      end
    end

    def render?
      @perform_render
    end

  end

  # The MonthlyIndexPage class creates a single monthly index page for the specified year and month.
  class YearlyIndexPage < Page

    # Initializes a new YearlyIndexPage.
    #
    #  +template_path+ is the path to the layout template to use.
    #  +site+          is the Jekyll Site instance.
    #  +base+          is the String path to the <source>.
    #  +year+          is the numeric year for the index page.
    #  +posts+         is the list of posts in the given year.
    def initialize(template_path, site, base, year, posts)
    
      @site  = site
      @base  = base
      @dir   = '%04d' % [year]
      @name  = "index.html"

      self.process(name)

      if File.exist?(template_path)
        @perform_render = true
        
        # Read the YAML data from the layout page.
        template_dir    = File.dirname(template_path)
        template        = File.basename(template_path)
        self.read_yaml(template_dir, template)
        
        # Set the title for this page.
        self.data['title'] = "Yearly archive for #{year}"
        
        # Set the data for the template to render with.
        self.data['posts'] = posts
        self.data['year'] = year
        self.data['date'] = Date.new(year)
        
      else
        @perform_render = false
      end
    end

    def render?
      @perform_render
    end

  end

  # The Site class is a built-in Jekyll class with access to global site config information.
  class Site

    # Loops through the posts and creates an index page for each year.
    def write_yearly_indexes
      if self.layouts.key? 'yearly_index'

        self.posts_group_by_year.each do |year, posts|
          
          template_path = File.join(self.source, '_layouts', 'yearly_index.html')
          index = YearlyIndexPage.new(template_path, self, self.source, year, posts)
          if index.render?
            index.render(self.layouts, site_payload)
            index.write(self.dest)
            
            # Record the fact that this pages has been added, otherwise Site::cleanup will remove it.
            self.pages << index
          end
        end

      # Throw an exception if the layout couldn't be found.
      else
        throw "No 'yearly_index' layout found."
      end
    end

    # Loops through the posts and creates an index page for each month.
    def write_monthly_indexes
      if self.layouts.key? 'monthly_index'

        self.posts_group_by_year_and_month.each do |yearAndMonth, posts|
          
          year = yearAndMonth[0]
          month = yearAndMonth[1]
          
          template_path = File.join(self.source, '_layouts', 'monthly_index.html')
          index = MonthlyIndexPage.new(template_path, self, self.source, year, month, posts)
          if index.render?
            index.render(self.layouts, site_payload)
            index.write(self.dest)
            
            # Record the fact that this pages has been added, otherwise Site::cleanup will remove it.
            self.pages << index
          end
        end

      # Throw an exception if the layout couldn't be found.
      else
        throw "No 'monthly_index' layout found."
      end
    end
      
    def posts_group_by_year_and_month
      self.posts.each.group_by { |post| [post.date.year, post.date.month] }
    end
      
    def posts_group_by_year
      self.posts.each.group_by { |post| post.date.year }
    end

  end


  # Jekyll hook - the generate method is called by jekyll, and generates all of the archive pages.
  class TemporalArchiveGenerator < Generator
    safe true
    priority :low

    def generate(site)
      site.write_yearly_indexes
      site.write_monthly_indexes
    end

  end

end