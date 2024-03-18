let marks=[10,30,50,20,77];
let student=["nikita","bhavya","rani","niki","nik"];
console.log(marks);
console.log(student);
marks[0]=76;
console.log(marks);
//string are immutable in js array are mutable


for(let index=0; index<student.length; index++)
{
    console.log(student[index]);
}

for(let item of marks){
    console.log(item);
}


for(let itemm of student)
{
    console.log(itemm.toUpperCase());
}

//practice 6
let m=[85,97,44,37,76,60];
let sum=0;
let avg=0;
for(let i of m){
    sum=sum+i;
}
console.log("sum is:",sum);
avg=sum/6;
console.log(`avarge is ${avg}`);


//practice 7
let price=[250,645,300,900,50];
console.log(price);

for( let i=0;i<price.length;i++){
   
    let offer=price[i]/10;
    price[i]=price[i]-offer;
}
console.log(`after applying offer price is ${price}`);

//
let food=["gobi","apple","potato"];
console.log(food);

//adds to ends
food.push("manchurian");
console.log(food);
food.push("momo","chinese");
console.log(food);

food.pop();
console.log(food);

//adds to first 
food.unshift("vegetable");
console.log(food);

food.shift();
console.log(food);

//slice and pslice (add{new one},remove{how many and which one},replace{with new value})
console.log(food.slice(1,3));
console.log(food.splice(2,1,"nikita"));
console.log(food);

//practice 8
let comp=["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log("compeny are",comp);
//a
comp.shift();
console.log(comp);
//b
comp.splice(1,1);
console.log(comp);
//c
comp.push("amazon");
console.log(comp);

//functions
function my_fun(msg){
    console.log("hello this is funtion");
}

my_fun("hello");
my_fun();

//arrow fun


function summ(a,b){
    return a+b;
}
const arrow=(a,b)=>{
console.log(a+b);
}

//practice 8
function countVowel(string){
   let count=0;
for(let char of string){
    console.log(char);
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
return count;
}

//foreach
let arr=["ji","hi","ki","mi","ni"];
arr.forEach(function myFunction(val){
    console.log(val);
});

//higher order function:forEach:it takes another fun as paratmeter or returns fun as value 
arr.forEach((val,index,arr) => {
    console.log(val.toUpperCase(),index,arr);
});

//practice 9
let array=[1,2,3,4,5];
array.forEach(function square(val){
console.log(val*val);
});

