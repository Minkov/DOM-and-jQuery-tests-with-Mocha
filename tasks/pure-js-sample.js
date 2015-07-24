/* Task Description */
/* 
* Create a function that fills a container with divs with the provided contents
*/

function solve() {
  var divTemplate = document.createElement('div');

  function clear(element){
    while (element.firstChild){
      element.removeChild(element.firstChild);
    }
  }

  return function(container, contents){
    if(typeof container === 'string'){
      container = document.getElementById(container);
    }
    if(!(container instanceof window.HTMLElement)){
      throw new Error('The function MUST take either an HTMLElement or id for existing element');
    }
    var fragment = document.createDocumentFragment();
    clear(container);
    contents.forEach(function(content){
      if(typeof content !== 'string' &&
          typeof content !== 'number'){
        throw new Error('Content MUST be a string or a number');
      }
      divTemplate.innerHTML = content;
      fragment.appendChild(divTemplate.cloneNode(true));
    });
    container.appendChild(fragment);
  };
}

module.exports = solve;
