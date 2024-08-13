function loader(){
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.innerHTML = ` <h1>Welcome</h1>`
    }, 500);
    setTimeout(() => {
        loader.innerHTML = ` <h1>To</h1>`
    }, 1000);
    setTimeout(() => {
        loader.innerHTML = ` <h1>Korba</h1>`;
        loader.style.fontSize = `5vw`;
    }, 2000);
    setTimeout(() => {
        loader.innerHTML = ` <h1>Computer</h1>`;
        loader.style.fontSize = `6vw`;
    }, 2500);
    setTimeout(() => {
        loader.innerHTML = ` <h1>College</h1>`;
        loader.style.fontSize = `8vw`;
    }, 3000);
    setTimeout(() => {
        loader.style.fontSize = `0vw`;
        loader.style.height = `0vh`;
    }, 3500);
}
loader();

gsap.to("nav",{
    backgroundColor : "#000",
    duration : 3,
    height : "100px",
    scrollTrigger : {
        trigger : "body",
        start : "top -30",
        end : "bottom top",
        scrub : true
    }
})

gsap.to("main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : ".page1",
        start : "center top",
        end : "bottom top",
        scrub : true
    }
})

gsap.from(".about-section img,.about-section .about-us p,.about-us h3",{
    y:50,
    opacity : 0,
    Stagger :0.1,
    scrollTrigger:{
        trigger: ".about-section",
        start: "top 50%",
        end : "top top",
        scrub : true
    }
})

gsap.to(".lower-quatation",{
    top : "65%",
    left : "78%",
    scrollTrigger : {
        trigger : ".page3",
        start : "top 35%",
        end : "top top",
        scrub : true
    }
})
gsap.to(".upper-quatation",{
    top : "35%",
    left : "22%",
    scrollTrigger : {
        trigger : ".page3",
        start : "top 35%",
        end : "top top",
        scrub : true
    }
})


var cur = document.querySelector("coursor");
var blur = document.querySelector("blur");
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x-10 + "px";
    cur.style.top = dets.y-10 + "px";    

    blur.style.left = dets.x-200 + "px";
    blur.style.top = dets.y-200 + "px";
})


document.querySelectorAll("nav h4").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.border = "1px solid #fff";
        cur.style.scale = 3;
        cur.style.backgroundColor = "transparent";
        cur.style.transitionDuration = "0.2s";
    })
    elem.addEventListener("mouseout",function(){
        cur.style.transitionDuration = "";
        cur.style.border = "none";
        cur.style.scale = 1;
        cur.style.backgroundColor = "aqua";
        cur.style.transitionDuration = "";
    })
})

const loading = document.querySelector(".loading-page");
const loadingText = document.querySelector(".loading-page > h1");