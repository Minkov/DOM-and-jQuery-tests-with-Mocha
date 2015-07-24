function solve() {
  return function(container){
    if(typeof container === 'string'){
      container = document.getElementById(container);
    }
    if(!(container instanceof window.HTMLElement)){
      throw new Error('The function MUST take either an HTMLElement or id for existing element');
    }
    
    var button = document.createElement('a');
    button.href="#";
    button.className = 'button';
    button.innerHTML = 'hide';
    
    var content = document.createElement('div');
    content.innerHTML = 'Content';
    content.className = 'content';
    
    var isVisible = true;
    
    button.addEventListener('click', function(){
      if(isVisible){
        content.style.display = 'none';
        button.innerHTML = 'show';
      }
      else{
        content.style.display = '';
        button.innerHTML = 'hide';
      }
      isVisible = !isVisible;
    });
    
    container.appendChild(button);
    container.appendChild(content);
  };
}

module.exports = solve;