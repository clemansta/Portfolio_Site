function getViewport() {

  var viewPortWidth;
  var viewPortHeight;

  viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
  viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  
  return [viewPortWidth, viewPortHeight];
}

function iframeChange(n) {
  if(n == 1) {
    document.getElementById("FR1").style.display = "none";
    document.getElementById("FR2").style.display = "block";
  } else {
    document.getElementById("FR2").style.display = "none";
    document.getElementById("FR1").style.display = "block";
  }
}

function myEmail(fName, lName, cTitle, cName, cNumb, cEmail) {
  console.log("Email Sending");
  var subject = "Webpage File Download";
  Email.send({
    Host: "smtp.gmail.com",
    Username: cEmail,
    Password: "Enter your password",
    To: 'clemansta@gmail.com',
    From: cEmail,
    Subject: "Email for Web Resume",
    Body: fName.concat(" ", lName, " a, ", cTitle, " from ", cName, " and they can be reached at:\n ", cNumb, "")
  })
  .then(function (message) {
    alert("Thanks for registering with me!\nMail sent successfully")
  });
  console.log("Email Sent");
}