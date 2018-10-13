
(function(){

  var _aboutButton = document.getElementById('personal-openButton');
  var _about = document.querySelector('.about');
  var _aboutContent = document.querySelector('.about-content');

  _aboutButton.addEventListener('click', openAbout);


  function openAbout(){
    _about.classList.add('about-open');
    _aboutContent.classList.add('about-content-open');
  }



//   var _container;

//   var _openPersonalButton;
//   var _closePersonalButton;
//   var _personal;

//   _view = document.querySelector('.container');

//   _openPersonalButton = document.getElementById('personal-openButton');
//   _closePersonalButton = document.getElementById('personal-closeButton');
//   _personal = document.querySelector('.personal');
//   _personalContent = document.querySelector('.personalContent');
//   _container = document.querySelector('.container');

// _openPersonalButton.addEventListener('click', openPersonal);
// _closePersonalButton.addEventListener('click', closePersonal);

// function openPersonal(){
//   _personal.classList.add('personal-open');
//   // _container.classList.add('hide');
//   // _personalContent.classList.add('visible');
//   _theImg.classList.add('hide');

//   // _personal.classList.add('personal-frame');
// }

// function closePersonal(){
//   _personalContent.classList.remove('visible');
//   _container.classList.remove('hide');
//   _personal.classList.remove('personal-open');
// }



})();



  


