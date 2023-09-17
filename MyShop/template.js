function becomeMember(){
    console.log("Welcome! You are a member now.")
}

var randomNumb = Math.random(Math.random()) * 101;
var rounded = Math.floor(randomNumb)
console.log(rounded)

if(rounded < 50){
     console.log("I failed the exam.")
    }

else if(rounded < 75){
    console.log("I passed the exam with an average mark.")
} 
else{
     console.log("I passed the exam with a great mark :D.")
    }

