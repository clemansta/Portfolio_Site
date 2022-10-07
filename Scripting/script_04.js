function prodChange(n) {
  if(n == 3) {
    document.getElementById("PR1").style.display = "none";
    document.getElementById("PR2").style.display = "none";
    document.getElementById("PR3").style.display = "none";
    document.getElementById("PR4").style.display = "block";
  } else if(n == 2)  {
    document.getElementById("PR1").style.display = "none";
    document.getElementById("PR2").style.display = "none";
    document.getElementById("PR3").style.display = "block";
    document.getElementById("PR4").style.display = "none";
  } else if(n == 1) {
    document.getElementById("PR1").style.display = "none";
    document.getElementById("PR2").style.display = "block";
    document.getElementById("PR3").style.display = "none";
    document.getElementById("PR4").style.display = "none";
  } else {
    document.getElementById("PR1").style.display = "block";
    document.getElementById("PR2").style.display = "none";
    document.getElementById("PR3").style.display = "none";
    document.getElementById("PR4").style.display = "none";
  }
}