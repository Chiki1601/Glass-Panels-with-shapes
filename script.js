const divs = document.querySelectorAll('div')
function fillPanels() {
  var elementCount = document.querySelector('input').value
  divs.forEach(function(el){
    el.innerHTML = ''
    function addElement() {
      var d = document.createElement('div')
      var shape = Math.random() < .5 ? 'triangle' : 'circle'
      d.className = Math.random() < .5 ? shape : 'square'
      var size = Math.ceil(Math.random()*7) + 'vw';
      d.style.width = size
      d.style.height = size
      var color = 'hsl('+(Math.random()*360)+'deg, 100%, 60%)'
      if(Math.random() < .5) {
        d.style.backgroundColor = color 
      } else {
        d.style.backgroundImage = 'linear-gradient(to bottom, transparent 4px , '+color+' 4px, '+color+' 5px, transparent 5px)'
      }      
      d.style.backgroundSize = '100% 6px'
      d.style.left = Math.random()*100 + '%'
      d.style.top = Math.random()*100 + '%'
      d.style.transform = 'rotate('+Math.random()*360+'deg)'
      el.appendChild(d)
    }

    for(var i=0;i<elementCount;i++) {
      addElement()  
    }
  })  
}

fillPanels()

window.addEventListener('click', fillPanels)
document.querySelector('input').addEventListener('change', fillPanels)