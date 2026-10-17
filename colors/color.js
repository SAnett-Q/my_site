// const btn1=document.getElementById("btn-red")
// console.log(btn1)
// const btn2=document.querySelector("#btn-orang")
// console.log(btn2)
const words=document.querySelectorAll(".btn");
const colors=document.querySelectorAll(".color");
let box=null

words.forEach((btn) =>{
btn.addEventListener("click",()=>{
if(box!=null){
    box.classList.remove("active")
}
box=btn
btn.classList.add("active")
});
});

colors.forEach((color)=>{
color.addEventListener("click",()=>{
    if(box.dataset.color==color.dataset.color){
        box.classList.remove("active");
        box.style.color=box.dataset.color;
        box.style.pointerEvents="none";
        box=null
    }else{
    alert("try again")
    }
})
});