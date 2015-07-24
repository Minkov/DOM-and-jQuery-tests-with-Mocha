/* Task Description */
/* 
* Create a function that fills a container with divs with the provided contents
*/

function solve() {
  return function(container, contents){
    var $container = $(container);
    if(!container || !$container.length){
      throw new Error('The function MUST take either an HTMLElement or id for existing element');
    }
    var $tmpContainer = $('<div />');
    contents.forEach(function(content){
      if(typeof content !== 'string' &&
          typeof content !== 'number'){
        throw new Error('Content MUST be a string or a number');
      }
      $tmpContainer.append($('<div/>').html(content));
    });
    $container.html($tmpContainer.html());
  };
}

module.exports = solve;
