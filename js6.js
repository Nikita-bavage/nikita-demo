let btn=document.querySelector("#btn1");
btn.onclick=(e)=>{
    console.log(e);//to know detailed thing in the click code
    let a=25;
    a++;
    console.log(a);
}

let box=document.querySelector(".box");
box.onmouseover=() =>{
console.log("hello from div");
}

btn.addEventListener("click",() =>{
console.log("btn1 was clicked first time");
});

btn.addEventListener("click",() =>{
    console.log("btn1 was clicked second time");
    });

   const btn3=() =>{
    console.log("btn1 was clicked third time");
    };


    btn.addEventListener("click",btn3);


btn.removeEventListener("click",btn3);



//practice 10
let body=document.querySelector("body");

let modebtn=document.querySelector(".mode");
let currmode="light";
modebtn.addEventListener("click",() =>{
if(currmode==="light"){
    currmode="dark";
    document.querySelector("body").classList.add("dark");
   
}
else{
    currmode="light"
    body.classList.add("light");
    body.classList.remove("dark");
    
}
console.log(currmode);

});
    