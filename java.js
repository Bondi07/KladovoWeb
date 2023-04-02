 let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600:{
            items: 4,
            gutter: 20
        },
        1024:{
            items: 3,
            gutter: 20 
        },
        768:{
            items: 2,
            gutter: 20
        },
        480:{
            items: 1,
            gutter: 20
        }
    }
 })

 /*slider za slike */
 /*ne znam uraditi*/ 

/*za collspan box*/ 
var coll = document.getElementsByClassName("open");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}