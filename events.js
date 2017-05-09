console.log("Hello event-handlers");

var sections = document.getElementsByClassName("article-section");
var outputtarget = document.getElementById("output-target");
for ( var i = 0; i < sections.length; i++){

			sections.item(i).addEventListener("click", testfunction);


function testfunction(event){
	document.getElementById.innerHTML = outputtarget.innerHTML;//"test";
alert(event.target.innerHTML);
}
}
var head = document.getElementById("page-title");

head.addEventListener("mouseover", myFunction);
function myFunction() {
    document.getElementById("page-title").innerHTML += "You mouseover the h1 tag"
   //alert("you mouseover the h1 tag");
}


document.getElementById("page-title").onmouseleave = function() {mouseLeave()};
function mouseLeave() {
    document.getElementById("page-title").innerHTML = "You left me!!";
}
document.getElementById("keypress-input").addEventListener("keyup", function(event) {
	document.getElementById("output-target").innerHTML = event.target.value;
})

//var divdocument = document.getElementById("guinea-pig");
//document.getElementById("divdocument").addEventListener("click", function(){
   // getElementById("output-target").style.color = "blue";
//});
var guinpig = document.getElementById("guinea-pig");

document.getElementById("add-color")
  .addEventListener("click", function() {
  guinpig.classList.toggle("blue");
});var guinpig = document.getElementById("guinea-pig");

document.getElementById("make-large")
  .addEventListener("click", function() {
  guinpig.classList.toggle("large");
});
  document.getElementById("add-border").addEventListener("click", function(){
  	guinpig.classList.toggle("border");
  });

 document.getElementById("add-rounding").addEventListener("click", function(){
  	guinpig.classList.toggle("round");
  });