//map :returns new array withn result of some opearation
let num=[1,7,5,4];
let newArr=num.map((val)=>{
return val*2;
});
console.log(newArr);

//filter

let newEven=num.filter((val)=>{
return val%2===0;
});
console.log(newEven);

let result=num.reduce((res,curr)=>{
return res+curr;
});
console.log(result);

//practice 10
let marks=[20,99,67,98,97,56];
let newMarks=marks.filter((val)=>{

    return val>90;
});
console.log(newMarks);


let n=prompt("enter a number");
let arrr=[];
for(let i=0;i<n;i++)
{
    arrr[i-1]=i;
}
console.log(arrr);

    let ress=arrr.reduce((res,cur)=>{
        return res+cur;
    });

 let divs=document.querySelectorAll(".box");
    console.log(divs[0]);