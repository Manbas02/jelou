document.querySelector('#si').addEventListener("click", (e) =>{
    e.preventDefault();

    let insertarP = `
        Sabia que dirias si jksjskjs te quiero &#129392;
    `;

    campos = document.querySelector('#texto');
    campos.innerHTML=insertarP;
});

document.querySelector('#no').addEventListener("mouseenter",(e)=>{
    e.preventDefault();
    var no = document.querySelector('#no');
    no.style.background = "#fdfd96";
    no.style.color = "black";
    let opcion =    `Siiiiiiuuu`;

    no = document.querySelector('#no');
    no.innerHTML=opcion;
});
document.querySelector('#no').addEventListener("mouseleave",(e)=>{
    e.preventDefault();
    var no = document.querySelector('#no');
    no.style.background = "#e2504c";
    no.style.color = "white";
    let opcion =    `Yesn't :(`;

    no = document.querySelector('#no');
    no.innerHTML=opcion;
});

document.querySelector('#no').addEventListener("click",(e)=>{
    e.preventDefault();
    let insertarP = `
        Sabia que dirias si jksjskjs te quiero &#129392;
    `;

    texto = document.querySelector('#texto');
    texto.innerHTML=insertarP;
});