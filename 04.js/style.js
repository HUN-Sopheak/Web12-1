var event1 =document.querySelector(".box");
event1.addEventListener('click',()=>{
    var box =document.querySelector(".box");
    box.style.backgroundColor="red";
});
const hide=()=>{
    event1.style.display="none";
}
const show=()=>{
    event1.style.display="block";
}
i=true;
const toggle=()=>{
    if(i){
        event1.style.display="none";
       document.getElementById("tt").innerHTML="show";
    }else{
        event1.style.display="block";
       document.getElementById("tt").innerHTML="hide";

    }
    i=!i;
}