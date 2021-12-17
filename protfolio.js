// Get the modal
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}