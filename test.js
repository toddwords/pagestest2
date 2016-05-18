var counter = 0;

document.getElementByTagName("H6").addEventListener('click', function(){
  counter++;
  document.getElementByTagName("H6")[0].innerHTML = counter.toString()
})
