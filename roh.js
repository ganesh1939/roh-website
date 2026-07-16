const text = "Hello 😊";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();

document.getElementById("btn").onclick = ()=>{

document.getElementById("message").innerHTML=
"✨ You have one of the brightest smiles. Keep being awesome! 🌸";

}

function createHeart(){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,300);