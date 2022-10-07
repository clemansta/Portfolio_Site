var n = "";

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
  console.log(n,s_size);
  if(s_size < 650) {
    n = n.concat("_M");
  }
  console.log(n);
  for (i = 0; i < idList.length; i++) {
    for (j = 0; j < idList[i].length; j++) {
      if(n == idList[i][j]) {
        console.log(i,j);
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