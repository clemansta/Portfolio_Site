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

function sendEmail() {
  alert("Thanks for registering with me!")
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let cTitle = "Undisclosed";
  let cName = "Undisclosed";
  console.log(document.getElementById("ctitle").value,document.getElementById("cname").value)
  if(document.getElementById("ctitle").value != "") {
    cTitle = document.getElementById("ctitle").value;
  }
  if(document.getElementById("cname").value != "") {
    cName = document.getElementById("cname").value;
  }
  let pNumb = document.getElementById("pnumb").value;
  let eMail = document.getElementById("email").value;

  var mySubject = "Webpage File Download";
  var intro = "Hello, \n\n";
  var myMessage = intro.concat(fName, " ", lName, ", has accessed your online profile site and requested your resume and or coverletter. This individual is a ", cTitle, " at ",cName, ". They can be reached at: \n\nPhone: ", pNumb,"\n\nE-Mail: ", eMail, "\n\nThanks, \n   Your Profile Site.")

  Email.send({
    Host: "smtp.gmail.com",
    Username: "need@email.??",
    Password: "Enter your password",
    To: 'clemansta@gmail.com',
    From: eMail,
    Subject: mySubject,
    Body: myMessage
  })
  .then(function (message) {
    alert("Thanks for registering with me!\nMail sent successfully")
  });
  console.log("Email Sent");
}