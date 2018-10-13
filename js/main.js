


var _theImg;
var _container;
var _skillsContainer;
var _skills = [];
var _openPersonalButton;
var _closePersonalButton;
var _personal;

// var skills = [ 'HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Ruby On Rails', 'HAML', 'Wordpress' ]

var skills = [ 
          { 'skill': 'HTML', 'rate': 3 }, 
          { 'skill': 'CSS', 'rate': 2 },
          { 'skill': 'SASS', 'rate': 2 },
          { 'skill': 'JavaScript', 'rate': 3 },
          { 'skill': 'React', 'rate': 2 },
          { 'skill': 'Ruby on rails', 'rate': 1 },
          { 'skill': 'HAML', 'rate': 1 },
          { 'skill': 'Wordpress', 'rate': 1 }
        ];


_theImg = document.getElementById('computer');
_view = document.querySelector('.container');
_skillsContainer = document.querySelector('.skillsContainer');
_openPersonalButton = document.getElementById('personal-openButton');
_closePersonalButton = document.getElementById('personal-closeButton');
_personal = document.querySelector('.personal');
_personalContent = document.querySelector('.personalContent');
_container = document.querySelector('.container');


// skills.map((skill) => {
//   let skillDiv = `<div class="skill">${skill}</div>`;
//   _skillsContainer.insertAdjacentHTML('beforeend', skillDiv);
// })

skills.map((skill) => {
  let skillDiv = `<div class="skill ${decideColor(skill.rate)}">${skill.skill}</div>`;
  _skillsContainer.insertAdjacentHTML('beforeend', skillDiv);
})


_skills = document.querySelectorAll('.skill');


_skills.forEach(skill => {
  skill.addEventListener('mouseover', skillGlisten);
})

_theImg.addEventListener('mouseover', startMousemove)

function startMousemove(){
  window.addEventListener('mousemove', mousemove);
}

function mousemove(e) {
  // on = true;
  _theImg.style.position='absolute';
  _theImg.style.top=e.pageY + 'px';
  _theImg.style.left=e.pageX + 'px';
  addStopListener();
}  

function addStopListener(){
  _theImg.addEventListener('click', stopMousemove);
  window.addEventListener('click', stopMousemove);
}

function stopMousemove(){
  window.removeEventListener('mousemove', mousemove);
  // hoverTheImg();
}



function skillGlisten(){
  console.log("hej");
}

function decideColor(rating){
  if(rating === 1){
    return 'skill-lightgreen';
  }
  if(rating === 2){
    return 'skill-lightblue';
  }
  if(rating === 3){
    return 'skill-pink';
  }
}

_openPersonalButton.addEventListener('click', openPersonal);
_closePersonalButton.addEventListener('click', closePersonal);

function openPersonal(){
  _personal.classList.add('personal-open');
  // _container.classList.add('hide');
  // _personalContent.classList.add('visible');
  _theImg.classList.add('hide');

  // _personal.classList.add('personal-frame');
}

function closePersonal(){
  _personalContent.classList.remove('visible');
  _container.classList.remove('hide');
  _personal.classList.remove('personal-open');
}



  


