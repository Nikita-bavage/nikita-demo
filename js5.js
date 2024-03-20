
//practice 8
let newbtn=document.createElement("button");
newbtn.innerText="clickme!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend("newbtn");


let div=document.querySelector("div");
//div.append(newbtn);
//div.prepend(newbtn);
div.before(newbtn);


let heading=document.createElement("h1");
heading.innerHTML="<i>hello this heading added in JS</i>";
console.log(heading);

document.querySelector("body").prepend(heading);




let id=div.getAttribute("id");
console.log(id);
let name=div.getAttribute("name");
console.log(name);

let paraa=document.querySelector("p");
console.log(paraa.setAttribute("class","nikita"));

let paraaa=paraa.getAttribute("class");
console.log(paraaa);

let change=paraa.setAttribute("class","nikita");
console.log(change);

//practice 9

