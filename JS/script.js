let slider = document.querySelector(".slidegrid");
let leftbtn = document.querySelector("#left");
let rightbtn = document.querySelector("#right");

slider.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    slider.scrollLeft += evt.deltaX;
});

rightbtn.addEventListener("click", ()=>{
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft += 900;
});

leftbtn.addEventListener("click", ()=>{
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft -= 900;
});

// STOP PLAY VIDEO 

let video=document.querySelector("#food");
let play=document.querySelector(".stopplay");

play.addEventListener("click",()=>{
    if(video.paused){
        video.play();
        play.style.opacity="0";
    }
    else{
        video.pause();
        play.style.opacity="1";
    }
});

// MODAL

let cart = document.querySelector("#bag");
let modal1 = document.querySelector(".modal1");
let backbtn = document.querySelector(".menu-btn");
let body = document.body;
let maincontent = document.querySelector(".navbar, landing-sec");

cart.addEventListener("click",()=>{
    modal1.classList.add("popup");
    body.classList.add("no-scroll");
    maincontent.classList.add("blur-bg");
})

backbtn.addEventListener("click",()=>{
    modal1.classList.remove("popup");
    body.classList.remove("no-scroll");
    maincontent.classList.remove("blur-bg");
})

// MODAL 

let request = document.querySelector(".requestbtn");
let modal2 = document.querySelector(".modal2");
let cancel = document.querySelector(".btns1");
let submit = document.querySelector(".btns2")

request.addEventListener("click",()=>{
    modal2.classList.add("popup2");
    body.classList.add("no-scroll");
    maincontent.classList.add("blur-bg");
    modal2.scrollIntoView({behavior: "smooth",block:"center"});

})

cancel.addEventListener("click",()=>{
    modal2.classList.remove("popup2");
    body.classList.remove("no-scroll");
    maincontent.classList.remove("blur-bg");
})

submit.addEventListener("click",()=>{
    modal2.classList.remove("popup2");
    body.classList.remove("no-scroll");
    maincontent.classList.remove("blur-bg");

})