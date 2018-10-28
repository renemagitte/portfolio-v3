
(function(){

  var _skillsContainer = document.querySelector('.skillsContainer');

  var skills = [ 
    { 'skill': 'HTML', 'rate': 3 }, 
    { 'skill': 'CSS', 'rate': 2 },
    { 'skill': 'SASS', 'rate': 2 },
    { 'skill': 'JavaScript', 'rate': 3 },
    { 'skill': 'React', 'rate': 2 },
    { 'skill': 'Ruby on Rails', 'rate': 1 },
    { 'skill': 'HAML', 'rate': 1 },
    { 'skill': 'PHP', 'rate': 2 },
    { 'skill': 'Wordpress', 'rate': 1 },
    { 'skill': 'GIT', 'rate': 2 }
  ];

  createSkillDivs();

  function createSkillDivs(){
    skills.map((skill) => {
      let skillDiv = `<div class="skill ${decideColor(skill.rate)}">${skill.skill}</div>`;
      _skillsContainer.insertAdjacentHTML('beforeend', skillDiv);
    })
  }

  function decideColor(rating){
    if(rating === 1){ return 'skill-light' }
    if(rating === 2){ return 'skill-medium' }
    if(rating === 3){ return 'skill-dark' }
  }

})();



  


