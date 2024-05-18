let modal1 = document.getElementById("myModal1");
let img = document.getElementById("myImg1");
let img2 = document.getElementById("myImg2");
let img3 = document.getElementById("myImg3");
let img4 = document.getElementById("myImg4");
let img5 = document.getElementById("myImg5");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption1");

img.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.style.overflow = "hidden"
}
img2.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.style.overflow = "hidden"
}
img3.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.style.overflow = "hidden"
}
img4.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.style.overflow = "hidden"
}
img5.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.style.overflow = "hidden"
}

var span1 = document.getElementsByClassName("close")[0];

span1.onclick = function () {
    modal1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        body.style.overflow = "auto"
    }
}