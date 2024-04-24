let file = document.querySelector('.file1')
console.log(file1)
var lines;
let point=document.querySelector('.co-info h3')
console.log(point);
let posDescript = document.querySelector('.form-h2')
console.log(posDescript)

function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // let fileText=
    // document.getElementById("file").innerHTML = this.responseText;
    let fileContent=this.responseText;
      // console.log(fileContent);
    lines=fileContent.split(/\r\n|\n/);
    // console.log(lines);
// file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
//     console.log(lines[4]);
    // here is where CloseDescription Button have to be...
//    for(line of lines){
// file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');

   const newP=document.createElement('a');   
   newP.setAttribute('id','show-id');
   newP.classList.add('show-hide_details')
   newP.textContent=lines[0];
    point.appendChild(newP);
// console.log(newP.textContent);
let linesWithoutFirst=lines.shift();
// console.log(lines);
for(li of lines){
   const newSmall=document.createElement('h6');
   newSmall.classList.add('descR')
  newSmall.textContent=li;
    point.appendChild(newSmall);
    
// console.log(newSmall.textContent);
// =====end of appends
// ==========start of eventListeners - to show-hide details
// newSmall.removeAttribute('class','descR');
function toggleDetails(){
  // newSmall.removeAttribute('class','descR');
  if(newSmall.hasAttribute('class','descR')){
  newSmall.removeAttribute('class','descR');
  }
else{
   newSmall.setAttribute('class','descR');
}
}

newP.addEventListener('click',toggleDetails);
}
    // newP.textContent=fileContent.split(/n/);
    // ttx=fileContent.split(/\r\n|\n/);
    // console.log(ttx);
 
   
    }
  xhttp.open("GET", "hrDescription.txt", true);
  xhttp.send();


}
loadDoc2();
// ====Form open/close START
const anketaOpenBtn=document.querySelector('.form-open_btn');
const cvForm=document.querySelector('.form-container');
const coInfo2=document.querySelector('.co-info');
let backdrop1=document.querySelector('.backdrop1');
const closeFormBtn=document.querySelector('.form-closer_btn');
console.log(anketaOpenBtn);
console.log(cvForm);
  let x=cvForm.classList.contains('showModal');
  console.log(x);
// ===========
function cvFormToggle(){
    console.log(x);
     backdrop1.style.display='block';
            cvForm.classList.add('showModal')
  // return `get clicked`
// cvForm.setAttribute('class','showModal');
  // console.log('it is clicked')
  // cvForm.classList.add('showModal');
  // let x=cvForm.hasAttribute('class','showModal');
  // console.log(x);
  // if(x==false){
  // backdrop1.style.display='block';
        // cvForm.setAttribute('class','showModal');
  //       cvForm.classList.add('showModal')
  //         console.log(x);

  // } else {
// backdrop1.style.display='block';
        // cvForm.removeAttribute('class','showModal');
        //   console.log(x);
//         cvForm.classList.add('showModal')
  // }
        // cvForm.classList.remove('showModal');
        //   backdrop1.style.display='none';
        //   console.log(x);
  
}
          console.log(x);
  function backdrop1Close(){
              console.log(x);
            cvForm.removeAttribute('class','showModal');
    // cvForm.style.display='none';
    backdrop1.style.display='none';
    console.log('backdrop get clicked')
              console.log(x);
  }

  function formClose(){
      backdrop1.style.display='none';
      cvForm.removeAttribute('class','showModal');
  }


anketaOpenBtn.addEventListener('click',cvFormToggle)
backdrop1.addEventListener('click',backdrop1Close);
closeFormBtn.addEventListener('click',formClose)

// ====Form open/close END
// ================================================

// let descript1=document.getElementsByTagName('button');



//     let fileContent=this.responseText;
//       console.log(fileContent);
//     let lines=fileContent.split(/\r\n|\n/);

//     console.log(lines);
//    for(line of lines){
// file.insertAdjacentHTML('beforebegin','<br><a href="#">'+line+'</a><br>')
//     }
//     }
//   xhttp.open("GET", "hrPositions.txt", true);
//   xhttp.send();
// }
// loadDoc();

// ===================================