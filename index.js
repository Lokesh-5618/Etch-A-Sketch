document.addEventListener("DOMContentLoaded", () => {
const maincontainer=document.querySelector(".gridcontainer");
const resbut=document.querySelector(".resbut");
function creategrid(size)
{   maincontainer.textContent=" ";
    const ss=640/size;
    for(let i=0;i<size*size;i++)
        {
            const sqr=document.createElement("div");
            sqr.classList.add("gridelmt");
            sqr.style.width = `${ss}px`;
            sqr.style.height = `${ss}px`;
            maincontainer.appendChild(sqr);
             sqr.addEventListener("mouseover",()=>{
            sqr.style.backgroundColor="green"
         })
        }
}   
creategrid(16);
resbut.addEventListener("click",()=>
{
    let size=parseInt(prompt("Enter size of grid"));
    if(size<100&&size>1)
        {
            creategrid(size);
        }
    else{
       alert("u fuckin with me?")
    }
})
})
