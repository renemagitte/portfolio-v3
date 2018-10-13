


var _theImg;
var _container;
var _skillsContainer;
var _skills = [];
var _openPersonalButton;
var _closePersonalButton;
var _personal;

var skills = [ 'HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Ruby On Rails', 'HAML', 'Wordpress' ]

// var skills = [ {'HTML', 3}, {'CSS', 3}, {'SASS', 2}, {'JavaScript', 3}, {'React', 2}, {'Ruby On Rails', 1} {'HAML', 1}, {'Wordpress', 1} ]


_theImg = document.getElementById('computer');
_view = document.querySelector('.container');
_skillsContainer = document.querySelector('.skillsContainer');
_openPersonalButton = document.getElementById('personal-openButton');
_closePersonalButton = document.getElementById('personal-closeButton');
_personal = document.querySelector('.personal');
_personalContent = document.querySelector('.personalContent');
_container = document.querySelector('.container');


skills.map((skill) => {
  let skillDiv = `<div class="skill">${skill}</div>`;
  _skillsContainer.insertAdjacentHTML('beforeend', skillDiv);
})


_skills = document.querySelectorAll('.skill');

console.log(_skills);

_skills.forEach(skill => {
  skill.addEventListener('mouseover', skillGlisten)
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
  window.addEventListener('click', stopMousemove);
}

function stopMousemove(){
  window.removeEventListener('mousemove', mousemove);
  // hoverTheImg();
}



function skillGlisten(){
  console.log("hej");
}

_openPersonalButton.addEventListener('click', openPersonal);
_closePersonalButton.addEventListener('click', closePersonal);

function openPersonal(){
  _personal.classList.add('personal-open');
  _container.classList.add('hide');
  _personalContent.classList.add('visible');
}

function closePersonal(){
  _personalContent.classList.remove('visible');
  _container.classList.remove('hide');
  _personal.classList.remove('personal-open');
}



  


