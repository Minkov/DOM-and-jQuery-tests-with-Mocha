function solve() {
  return function(container){
    var $container = $(container);
    if(!container || !$container.length){
      throw new Error('The function MUST take either an HTMLElement or id for existing element');
    }   
        
    
    var $content = $('<div />')
      .addClass('content')
      .html('Content')
      .appendTo($container);
    var isVisible = true;
    
    
    var $button = $('<a/>')
      .attr('href', '#')
      .addClass('button')
      .html('hide')
      .appendTo($container)
      .on('click', function(){        
        if(isVisible){
          $content.css('display', 'none');
          $button.html('show');
        }
        else{
          $content.css('display', '');
          $button.html('hide');
        }
        isVisible = !isVisible;
      });
  };
}

module.exports = solve;