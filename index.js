var togglebtn;
var bigwrapper;
var hamburgermenu;

function declare(){
    togglebtn=document.querySelector(".toggle-btn");
    bigwrapper=document.querySelector(".big-wrap");
    hamburgermenu=document.querySelector(".hamburgermenu");

}
const main =document.querySelector("main");
declare();
let dark=false;

function toggleanimation(){
    dark=!dark;
    let clone =bigwrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");

    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");

    }
    clone.classList.add("copy");
    main.appendChild(clone);
    document.body.classList.add("stop-scrolling");
    clone.addEventListener("animationend",()=>{
        document.body.classList.remove("stop-scrolling");
        bigwrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}
function events(){
    togglebtn.addEventListener("click",toggleanimation);
    hamburgermenu.addEventListener("click",()=>{
        bigwrapper.classList.toggle("active");
    });
}
events();