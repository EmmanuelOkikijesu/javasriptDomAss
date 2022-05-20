//Design a loop that returns an array of evenNumbers from 1-100
let array1=[];
for(let i=1; i<=100; i++){
    if(i%2==0){
    
        array1.push(i);
    
    }
    console.log(array1)
}
//Design a function that returns evenNumbers between two numbers A and B
function evenNumbers(A,B){
    for(let x=A; x < B; x++){
        if(x %2===0){
            console.log(x)
        }   
    }

}
evenNumbers(100,200)

//When do we use a conditional statement?
//Answer : D- When you want to loop through a group of statement.


//Design a function with a function name firstFunction() that returns the some of two integers.

function firstFunction(Num1,Num2){
    let results = Num1+Num2
    return results
}


//Create a function with a function name printSum() that prints the sum of two numbers
 function printSum(num1,num2){
     console.log(num1+num2)

 }




//Create a function that returns an array of the names of 10 of my course mates
let names =["okiki","bukola","kemi","femi","dayo","happy","favor","erik",'twoThugs',"2pac","segun","dare"]
function returnNames(){
    var courseMates =[]
    for(i=0;i<10;i++){
        courseMates.push(names[i])

    }
return courseMates

}


//Add an element to this array
let array3 = [1,2,4]
array3.push(5)
console.log(array3)
//Remove the last element of this array
let array4=[1,2,3,8]
array4.pop()
console.log(array4)
//Remove the first Element in this Array
let array5=[23,77,80,45]
array5.shift()
console.log(array5)
//Add an element to the begining of this array
let array6=[[20,30,80],[10,50,55]]
array6.unshift([5])
console.log(array6)


