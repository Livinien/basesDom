// alert("hello");

// document.getElementById("title").style.color = "red";
// document.getElementById("title");

// document.querySelector("#title").style.color = "red";

document.querySelector(".today").style.color = "blue";
document.querySelector(".tomorow").style.color = "green";


let nom = prompt("Quel est ton nom ?"); 
let age = prompt("Quel est ton age ?"); 

switch(true) {

    case age >= 18 && age < 60 :
        console.log(`Tu est trop jeune pour rentrer dans ce site`);
        document.querySelector("#Welcome").innerHTML = `<h1 id="title">Salut ${nom}. Tu as ${age} ans et tu auras ta retraite dans ${65 - age} ans !!! Courage !!! </h1>`;
    break;

    case age >= 60 :
        console.log(`Tu as l'âge de Yoda, tu peux rentrer ${65 - age}`);
    break;

    default:
        console.log(`Dégage gamin !`);
        document.querySelector("body").innerHTML = `<h1>Reviens dans ${18 - age} ans !!!</h1>`;
}

//document.querySelectorAll("#title")[array].style.color = "red";
console.log(document.querySelectorAll("#title"));

const array = document.querySelectorAll("h1");
console.log(array);

// const array = [1, 2, 3];

array.forEach(toto => {
   console.log(toto);
   toto.style.color = "red"
});

document.querySelector(".btn").onclick = function(){
    document.querySelector("#forme").classList.add("active");
    // document.getElementById("forme").style.backgroundColor = "purple";
    // document.getElementById("forme").style.borderRadius = "100px";
    // document.getElementById("forme").style.transition = "2s";
    // document.getElementById("forme").style.transform = "translateX(100px)";

};



// document.querySelector(".btn").onmouseover = function(){document.getElementById("forme").style.backgroundColor = "yellow"};

