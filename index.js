function toss() {
  var i=Math.floor(Math.random()*2);
  document.querySelector(".flip-inner").style.animation="none";
  if (i===0)
  {
    document.querySelector(".flip-inner").style.animation="flip-head 3s forwards";
  }
  else
  {
    document.querySelector(".flip-inner").style.animation="flip-tail 3s forwards";
  }
}
