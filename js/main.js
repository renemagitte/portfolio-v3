
(function(){

  var _aboutButton = document.getElementById('personal-openButton');
  var _about = document.querySelector('.about');
  var _aboutContent = document.querySelector('.about-content');

  _aboutButton.addEventListener('click', openAbout);


  function openAbout(){
    _about.classList.add('about-open');
    _aboutContent.classList.add('about-content-open');
    lastFm();
  }

})();



  


