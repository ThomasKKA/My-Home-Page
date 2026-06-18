const button = document.getElementById("myButton");
button.addEventListener("click", function () {
    window.open("NextPage.html", "_blank");
    
});



const button = document.getElementById("goBackButton");
button.addEventListener("click", function () {
    window.location.href = "index.html";

});