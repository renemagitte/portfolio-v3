
(function(){

  const pressed = [];
  const commando = 'exit';


  var _about = document.querySelector('.about');
  var _aboutContent = document.querySelector('.about-content');

  var _visitorInput = document.querySelector('.visitorInput');


  window.addEventListener('keyup', (e) => {
    pressed.push(e.key);

  visitorTyping(e.key);


    pressed.splice(-commando.length -1, pressed.length - commando.length);

    if(pressed.join('').includes(commando)){
      _about.classList.remove('about-open');
      _aboutContent.classList.remove('about-content-open');
    }
  })

  function visitorTyping(letter){
    if(letter.length == 1){
      _visitorInput.insertAdjacentText('beforeend', letter);
    }
  }



})();



  


