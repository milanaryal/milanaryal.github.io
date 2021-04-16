# A detailed description of the rules is available at
# https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md
all
exclude_rule "MD002"
rule "MD003", :style => :atx
rule "MD004", :style => :dash
exclude_rule "MD006"
rule "MD007", :indent => 2
rule "MD012", :maximum => 2
exclude_rule "MD013"
exclude_rule "MD026"
rule "MD029", :style => :ordered
exclude_rule "MD033"
rule "MD035", :style => "---"
exclude_rule "MD041"
rule "MD046", :style => :fenced
