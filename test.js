var counter = 0;
window.onload = function(){
  document.getElementsByTagName("Body")[0].addEventListener('click', function(){
    counter++;
    document.getElementsByTagName("H6")[0].innerHTML = counter.toString();
  })
}
