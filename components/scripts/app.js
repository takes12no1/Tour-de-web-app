var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append('#{item}');
})('The Title Is Bigger than ever');

fill;
