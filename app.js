// let num= +prompt("Enter Number")
// let num1= +prompt("Enter Number")
// if(num % 5 === 0)
// {document.write("Your Number is Even")
// }else{
//     document.write("Your Number is ODD")
// }

let score= +prompt("Enter your Percentage");
let grade;
if(score>= 80 && score<=100){
    grade="A+"
    document.write(grade)
}
else if(score>= 70 && score<=79){
    grade="A"
    document.write(grade)
}
else if(score>= 60 && score<=69){
    grade="B"
    document.write(grade)
}
else if(score>= 50 && score<=59){
    grade="C"
    document.write(grade)
}
else if(score>= 0 && score<=49){
    grade="Fail"
    document.write(grade)
}else{alert("Your Percentage is invalid")

}
