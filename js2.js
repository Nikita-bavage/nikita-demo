let a=5;
let b=7;
console.log("a+b=",a + b);
console.log("a**b", a ** b);//exponenation
//unary operator
a++;
console.log("a=",a);
b--;
console.log("b=",b);

//=== compares date type

console.log("a===b",a === b);

//logical op
let c1=a>b;
let c2=a===6;
console.log("c1&&c2=",c1  && c2);

//conditional statement

/*let age = 18;
if ( age >= 18 ){
    console.log("you can vote");
} 


let agee= 12;
if(agee>=18){
    console.log("you can vote");
}
else{
    console.log("you can  not vote");
}

//ternery op

let result=age >= 30? "adult" : "not";
console.log(result);


//practice 2
let num = prompt("enter a number");

if(num%5==0)
{
    console.log(num,"yes it is");
}

else{
    console.log(num,"not it is");
}*/
   
//practice 3
/*let res=prompt("enter score");
if(res>=90 && res<=100)
{
    console.log("a");
}
else if(res>70 && res<=89)
{
    console.log("b");
}
else if(res>60 && res<=79)
{
    console.log(" c");
}
else if(res>50 && res<=69)
{
    console.log("d");
}
else{
    console.log("fail");
}
*/
//chapt 3

for(let i=0 ;i<10 ;i++)
{
    console.log("nikita" );
}

//sumof 1 to n

let sum=0;
for(let a=1;a<=5;a++){
    sum =sum+a;
}
console.log("sum=",sum);

//while loop
let i=1;
while(i<=5)
{
    console.log("nikita bavage");
    i++;
}

//do-while loop

let ii=20;
do{
    console.log("nikita");
    ii++;
}
while(ii<=10);

//for-of loop
let str="nikita";
let len=0;
for(let b of str)
{
    console.log("b=",b);
len++;
}
console.log("string len",len);
//for in loop
let stud={
    name:"nikita",
    age:20,
};
for(let c in stud)
{
    console.log("key",c ,"value",stud[c]);
}

//practice 3
for(let d=0;d<=10;d++)
{
    if(d%2==0)
    console.log("d=",d);
}

//practice 4

let gamenum=5;
let usernum=prompt("guess number:");
while(usernum != gamenum ){
    usernum=prompt("wrong number guessed");
}
console.log("ohh wow,guessed correct");

//strings

let str1="nikita baavge"
console.log(str1[3]);
console.log(str1.length);

//templet litrel
let str2={
item:"pen",
price:20,
};
let op=`price of ${str2.item} is ${str2.price} rupee`;
console.log(op);

//string  upper loewr cases
let str4="   nikitabavage    ";
 str4=str.toUpperCase();//not modify original string creates new string
console.log(str4);

//trim remove white spaces from start and end
str4=str.trim();
console.log(str4);

//slice cuts number bteween we mentioned
let str5="nikitabavage123";
str5=str.slice(2,6);
console.log(str5);

//concat

let str6= str4.concat(str5);
console.log(str6);
str5=str.replace("nikita","nandini");
console.log(str5);
//repalce

//practice 5
let userr=prompt("enter your name without space");
let userName="@"+userr+userr.length;

console.log(userName);
