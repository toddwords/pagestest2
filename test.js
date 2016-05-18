var counter = 0;

document.getElementByTagName("Body").addEventListener('click', function(){
  counter++;
  document.getElementByTagName("H6")[0].innerHTML = counter.toString()
})
