var counter = 0;

document.click(function(){
  counter++;
  document.getElementByTagName("H6")[0].innerHTML = counter.toString()
})
