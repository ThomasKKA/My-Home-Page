const myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", function () {
        window.open("NextPage.html", "_blank");
    });
}

const goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}