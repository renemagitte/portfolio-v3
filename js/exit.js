
(function(){

  const pressed = [];
  const commando = 'exit';
  const pressedAll = [];


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
      _visitorInput.innerHTML = '';
    }
  })

  function visitorTyping(letter){
    console.log(letter);

    if(letter.length == 1){
      pressedAll.push(letter);
      _visitorInput.insertAdjacentText('beforeend', letter);
    }
    if(letter == 'Backspace'){
      pressedAll.pop();
      _visitorInput.innerHTML = pressedAll.join('');
    }

  }



})();



  


