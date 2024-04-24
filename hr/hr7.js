const posArr1=document.getElementById('hr_table_id');
console.dir(posArr1)
const posChildren=posArr1.children;
console.dir(posChildren.length);
// const posA=$('#hr_table_id')[0];// .tr-position_info
// console.log(posA.nextElementSibling)
// const hr3=$('.hr3')[0] //here all for all positions
// console.log(hr3)

posArr1.addEventListener('click',e=>{
    e.preventDefault();
    
console.dir(e.target);
const eCase=e.target.tagName==='A'?1:0;
console.log(eCase);
// const hrTag=e.target.classList.contains('[^hr]');
// console.dir(hrTag);
if(e.target.tagName==='A'){
  console.dir(e.target.parentElement);
  let eE=e.target.parentElement.nextElementSibling.nextElementSibling;
 e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle('pos_display'); 
}
if(e.target.tagName==='DIV'){
  eE=e.target;
  const eClasses=e.target.classList;
  console.log(eClasses);
  if(e.target.classList.length===2){
    eE=e.target.nextElementSibling.nextElementSibling;
     e.target.nextElementSibling.nextElementSibling.classList.toggle('pos_display');  
  }
  if(e.target.classList.length===3){
    eE=e.target.nextElementSibling
     e.target.nextElementSibling.classList.toggle('pos_display');  
  }
}

// =============ОТКЛИКНУТЬСЯ - начало====
// const anketaPopUP=document.querySelector('#form-open_btn_id');//btn to trigger Z-INDEX=-20 on Main
const anketaPopUP=eE.querySelector('.div-details button');
console.dir(anketaPopUP);
const mainBlock=document.querySelector('.co-contacts');//the class of Main
const coInfo2=document.querySelector('.co-info');//consist of btn = <button class="form-open_btn">
let backdrop1=document.querySelector('.backdrop1');
const hideFormBtn=document.querySelector('#form-closer_btn_id');// triger Main to Z=100 to hide Form
const formContainer=document.getElementsByClassName('form-container')[0];
console.log(anketaPopUP);
console.log(hideFormBtn);
console.log(formContainer);
  hideFormBtn.style.zIndex=-200;

hideFormBtn.addEventListener('click',function(){
  mainBlock.style.zIndex=10;
  anketaPopUP.style.zIndex=200;
  hideFormBtn.style.zIndex=-200;
  console.log(`${hideFormBtn} get clicked`);
});
anketaPopUP.addEventListener('click',function(){
  mainBlock.style.zIndex=10;
  // formContainer.classList.add('pos_display');
    formContainer.style.zIndex=200;
    formContainer.style.display='block'
  hideFormBtn.style.zIndex=400;
  hideFormBtn.classList.toggle('btn_visible');
  // hideFormBtn.classList.toggle('visibility')
  console.log(`${anketaPopUP} get clicked`);
});
setTimeout(mainBlock.style.zIndex=10,1000)
// =============ОТКЛИКНУТЬСЯ - конец====


});
// ===posArr1.addEventListener --END=========

const formContainer=document.getElementsByClassName('form-container')[0];
let allBtnHr=document.querySelectorAll('button[id^=btn]');
console.log(allBtnHr);
for(let i=0;i<allBtnHr.length;i++){
  allBtnHr[i].addEventListener('click',function(){
  console.clear();
  console.log('you clicked it all');  
  formContainer.style.zIndex=200;
    formContainer.style.display='block'
  hideFormBtn.style.zIndex=400;
  hideFormBtn.classList.toggle('btn_visible');  
  })

}