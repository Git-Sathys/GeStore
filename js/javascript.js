
function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n)
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}

x[slideIndex-1].style.display = "block";
}

function plusAvis(n) {
showAvis(slideAvis += n);
}

function showAvis(n)
{
  var i;
  var x = document.getElementsByClassName("myAvis");
  if (n > x.length) {slideAvis = 1}
  if (n < 1) {slideAvis = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}

x[slideAvis-1].style.display = "block";
}

function plusTests(n) {
showTests(slideTests += n);
}

function showTests(n)
{
  var i;
  var x = document.getElementsByClassName("myTests");
  if (n > x.length) {slideTests = 1}
  if (n < 1) {slideTests = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}

x[slideTests-1].style.display = "block";
}
