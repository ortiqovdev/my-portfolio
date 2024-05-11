let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let body = document.querySelector('body')


btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden"
}

span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto"

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  body.style.overflow = "auto"

  }
}