$ = require 'jquery'

do fill =(item = 'The Title Is Bigger than ever') ->
    $('.tagline').append '#{item}'
fill