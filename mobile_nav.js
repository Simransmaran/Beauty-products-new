
let navBar = document.getElementById('bar')
let close_cross = document.getElementById('cross')
let mobileNAv = document.querySelector('.sideBar')
let close=document.getElementById('header_mid')
console.log("hii")
navBar.addEventListener('click',()=>{
 mobileNAv.classList.toggle('active')
 if(mobileNAv.classList.contains("active")){
   close_cross.style.display = "block"
   document.getElementById('menu_bar').style.display = "none"
 }else{
   close_cross.style.display = "none"
   document.getElementById('menu_bar').style.display = "block"
 }
});
close.addEventListener('click',()=>{

    document.getElementById('header_mid').style.display="none"
})
