const header=document.querySelector("#header");

const sticky=header.offsetTop;
// console.log(sticky);

window.addEventListener("scroll",function() {
    // console.log(window.pageYOffset);
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
    
    
});



