/* =========================
   AOS INITIALIZATION
========================= */

AOS.init({

    duration:1200,
    once:true

});





/* =========================
   LOADING SCREEN
========================= */


window.addEventListener("load",()=>{


    setTimeout(()=>{

        document.querySelector(".loader").style.opacity="0";


        setTimeout(()=>{

            document.querySelector(".loader").style.display="none";

        },1000);


    },2000);


});








/* =========================
   FLOATING HEARTS
========================= */


const heartContainer =
document.querySelector(".hearts-container");



function createHeart(){


    const heart=document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.fontSize =
    (Math.random()*20+15)+"px";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";



    heartContainer.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);


}



setInterval(createHeart,500);









/* =========================
   LETTER TYPE EFFECT
========================= */


const textElement =
document.getElementById("typing-text");



const originalText =
textElement.innerHTML;



textElement.innerHTML="";



let index=0;



function typeWriter(){


    if(index < originalText.length){


        textElement.innerHTML += 
        originalText.charAt(index);


        index++;


        setTimeout(typeWriter,35);


    }


}




setTimeout(typeWriter,2500);









/* =========================
   OPEN LETTER BUTTON
========================= */


function openLetter(){


    document
    .querySelector("#letter")
    .scrollIntoView({

        behavior:"smooth"

    });



}








/* =========================
   SURPRISE HEART EFFECT
========================= */


function createHearts(){



    for(let i=0;i<40;i++){


        const heart =
        document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";


        heart.style.left="50%";


        heart.style.top="50%";


        heart.style.fontSize=
        Math.random()*30+20+"px";


        heart.style.zIndex="9999";



        document.body.appendChild(heart);




        const x =
        (Math.random()-0.5)*600;


        const y =
        (Math.random()-0.5)*600;




        heart.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {

                transform:
                `translate(${x}px,${y}px)`,

                opacity:0

            }


        ],{


            duration:1500,
            easing:"ease-out"


        });



        setTimeout(()=>{

            heart.remove();

        },1500);



    }



}









/* =========================
   SMOOTH NAVIGATION
========================= */


document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();


        document
        .querySelector(
            this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });



    });


});








/* =========================
   CURSOR GLOW EFFECT
========================= */


const glow =
document.createElement("div");


glow.style.position="fixed";

glow.style.width="30px";

glow.style.height="30px";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(255,150,180,.35)";

glow.style.pointerEvents="none";

glow.style.zIndex="9999";

glow.style.filter="blur(10px)";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX-15+"px";


glow.style.top =
e.clientY-15+"px";


});









/* =========================
   PHOTO CLICK EFFECT
========================= */


document
.querySelectorAll(".photo-card")
.forEach(photo=>{


photo.addEventListener("click",()=>{


photo.classList.toggle("active");


});


});
