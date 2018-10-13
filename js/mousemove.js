
(function(){

  var _theImg = document.getElementById('computer');

  _theImg.addEventListener('mouseover', startMousemove)

  function startMousemove(){
    window.addEventListener('mousemove', mousemove);
  }

  function mousemove(e) {
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
  }



})();



  


