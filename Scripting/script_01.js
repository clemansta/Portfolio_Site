const dt = new Date();

var pageIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
var dotId = ["myDots1", "myDots2", "myDots3", "myDots4"];
var picChange = ["changePic1", "changePic2", "changePic3", "changePic4"];
var n = "";

showSlides(1, 0);
showSlides(2, 1);
showSlides(3, 2);
showSlides(4, 3);


function profile_script() {
  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

  portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.add('image-blur');
    });

    portfolioItem.addEventListener('mouseout', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.remove('image-blur');
    });
  });
}

function overlayOnOff(n,s_size) {
  var classId;
  var i,j;
  var idList1 = ['Education','Chemistry','Geology'];
  var idList2 = ['Controls','Engineering','Programming'];
  var idList3 = ['Project','Regulations','Other'];
  var idList4 = ['Education_M','Chemistry_M','Geology_M','Controls_M','Engineering_M','Programming_M','Project_M','Regulations_M','Other_M'];
  var idList = [idList1, idList2, idList3, idList4];
  if(s_size < 650) {
    n = n.concat("_M");
  }
  for (i = 0; i < idList.length; i++) {
    for (j = 0; j < idList[i].length; j++) {
      if(n == idList[i][j]) {
        classId = document.getElementById(idList[i][j]);
        if(classId.style.display == "none" || classId.style.display == "") {
          classId.style.display = "grid";
        } else {
          classId.style.display = "none";
        }
      } else {
        classId = document.getElementById(idList[i][j]);
        classId.style.display = "none";
      }
    }
  }
}

function plusSlides(n, no) {
  showSlides(pageIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(pageIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  var dotsClass = dots + " active";

  if(n > slides.length) {pageIndex[no] = 1}
  if(n < 1)  {pageIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
     dots[i].className = dotId[no];
  }

  slides[pageIndex[no]-1].style.display = "block";
  dots[pageIndex[no]-1].className += " active";
  picChange[no] = dt.getTime();
}

function autoSlides() {
  setTimeout(autoSlides, 5000);
}

function getViewport() {

  var viewPortWidth;
  var viewPortHeight;

  viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
  viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  
  return [viewPortWidth, viewPortHeight];
}

function iframeChange(n) {
  if(n == 2) {
    document.getElementById("FR1").style.display = "none";
    document.getElementById("FR2").style.display = "none";
    document.getElementById("FR3").style.display = "block";
    document.getElementById("FR3").style.height = (document.getElementById("FR3").contentWindow.document.body.scrollHeight + 50 + 'px');
  } else if(n == 1) {
    document.getElementById("FR1").style.display = "none";
    document.getElementById("FR3").style.display = "none";
    document.getElementById("FR2").style.display = "block";
    document.getElementById("FR2").style.height = (document.getElementById("FR2").contentWindow.document.body.scrollHeight + 50 + 'px');
  } else {
    document.getElementById("FR2").style.display = "none";
    document.getElementById("FR3").style.display = "none";
    document.getElementById("FR1").style.display = "block";
    document.getElementById("FR1").style.height = (document.getElementById("FR1").contentWindow.document.body.scrollHeight + 50 + 'px');
    console.log()
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
    SecureToken: "",
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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cName) {
  let name = cName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cName) {
  let cValue = getCookie(cName);
  if (cValue != "") {
    return cValue;
  } else {
    return 0;
  }
}