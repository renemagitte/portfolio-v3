
(function(){

  var _skillsContainer = document.querySelector('.skillsContainer');

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

  createSkillDivs();

  function createSkillDivs(){
    skills.map((skill) => {
      let skillDiv = `<div class="skill ${decideColor(skill.rate)}">${skill.skill}</div>`;
      _skillsContainer.insertAdjacentHTML('beforeend', skillDiv);
    })
  }

  function decideColor(rating){
    if(rating === 1){ return 'skill-lightgreen' }
    if(rating === 2){ return 'skill-lightblue' }
    if(rating === 3){ return 'skill-pink' }
  }

})();



  


