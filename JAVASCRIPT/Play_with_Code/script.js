
document.getElementById("changeTextButton")
.addEventListener("click",function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "you clicked on button";
})


document.getElementById("highlightFirstCity")
.addEventListener("click",function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
})


document.getElementById("changeOrder")
.addEventListener("click",function () {
     let cofeeType = document.getElementById("coffeeOrder");
     cofeeType.textContent
})

