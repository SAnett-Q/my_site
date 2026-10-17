const wordParts=document.querySelectorAll(".btn");
let firstword=null
wordParts.forEach((part)=>{
    part.addEventListener("click", function () {
    if(firstword==null){
        firstword=part
        firstword.classList.add("active")
    }else{
        if(firstword.dataset.word==part.dataset.word){
            const img=document.getElementById(`${firstword.dataset.word}`)
            img.style.opacity="1"
        }
        firstword.classList.remove("active")
        firstword=null
    }
    })
})