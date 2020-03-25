"use strict"

// var sentense = prompt('Enter a sentence');
// var left = 140 - sentense.length;
// alert('Your sentence cutted to 140 characters!' + sentense.slice(0, 140));
// alert('You have writen ' + sentense.length + ' characters. ' + 'It\'s left ' + left + ' charakters to type!')

// var name = prompt("What is your name?");
// // name = name[0].toUpperCase() + name.substring(1);
// name = name.slice(0,1).toUpperCase()+name.slice(1, name.length).toLowerCase();
// alert("Hello, " + name);

// var dogAge = prompt("What is your dog age?");
// var humanAge = (((dogAge - 2)*4)+21);


// alert('Your dog age in dog years is: ' + humanAge + '. ' + 'Please love your dog.');

// console.log('----------------');


// function getMilk(money) {   
//   var amountOfBottles = Math.floor(money / 1.5);
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   console.log("You gave me only "+ money + " dollars. 1 bottle of milk cost 1.5 dollar. So I bought only " + amountOfBottles + " bottles of milk!");
  
// }
// getMilk(5);

// console.log('----------------');


// function lifeInWeeks(age) {
    
//   /************Don't change the code above************/    
//       //Write your code here.
//       var days = age * 365;
//       var weeks = age * 52;
//       var months = age * 12;
//       console.log("You have " + days + " days, " + weeks + "weeks, and " + months +" left.")
//   /*************Don't change the code below**********/
//   }
// lifeInWeeks(51);  

// console.log('----------------');


// function getMilk(money) {
//   return money % 1.5;
// }
// // var change = getMilk(5);
// // console.log(change);

// console.log('----------------');


// function bmiCalculator(weight, height){
//   var bmi = weight / Math.sqrt(height);
//   return bmi;
// }
// console.log(bmiCalculator());
// alert("This is love calculator!");
// var firstName = prompt("Enter first name:");
// var secondName = prompt("Enter second name:");
// var calculator = Math.random();
// calculator = (calculator * 100) + 1;
// calculator = Math.floor(calculator);
// alert("Your love is " + calculator + "% true!");

// console.log('----------------');


// function bmiCalculator (weight, height) {
//     let bmi = weight / (height * height);
//     let firstBmi = 24.9;
//     let secondBmi = 18.5;
//     let bmi2 = Math.floor(bmi);
//     if (bmi > firstBmi) {
//         return console.log("Your BMI is " + bmi2 + ", so you are overweight.");
//     }
//     if (bmi > secondBmi || bmi >= firstBmi ) {
//         return console.log("Your BMI is " + bmi2 + ", so you have a normal weight.");
//     } 
//     if (bmi < secondBmi) {
//         return console.log("Your BMI is " + bmi2 + ", so you are underweight.");
//     }
//     else {
//     }
// }
// bmiCalculator(60, 2);

// console.log('----------------');


// function guestList(name) {
//     var guest = prompt('What is your name: ');
//     var guestNameList = ['Katarzyna', 'Tadeusz', 'Justyna', 'Ryo', 'Honorata', 'Bumbelka'];
//    if (guestNameList.includes(guest) === true) {
//        return alert('Welcome ' + guest) + console.log(guest);
//    } else {
//        return alert ('Your not on a list.') + console.log(guest);
//    }
// }
// guestList();

// console.log('----------------');


// var output = [];
// var count = 1;
// function fizzBuzz() {
//     // output.push(count);
//     while(count <= 120){
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBuzz')
//     } else if (count % 3 === 0) {
//         output.push('Fizz');
//     } else if (count % 5 === 0) {
//         output.push('Buzz');
//     } else {
//         output.push(count)
//     }
//         count++;
//     }
//     console.log(output);
// }
// fizzBuzz();

// console.log('----------------');


// function whosPaying(names) {
    //     var calculator = names[Math.floor(Math.random()*names.length)];
    //     return calculator + " is going to buy lunch today!";
    // }
    
    // console.log('----------------');
    
    // var bottle = [];
    // var count = 99;
    
    // function bottlesSong(bottles) {
        //     while(count > 0) {
//         console.log(count + ' bottles of beer on the wall, ' + count + ' bottles of the beer. Take one bottle down and pass it around, ' + (count - 1) + ' bottles of the beer on the wall.');    
//         count--
//         if (count === 1) {
//             console.log(count + ' bottles of beer on the wall, ' + count + ' bottles of the beer. Take one bottle down and pass it around, no more bottles of the beer on the wall.');
//         }
//         if (count === 0) {
//             console.log('No more bottles of beer on the wall, no more bottles of the beer. Go to the store and buy some more, 99 bottles of the beer on the wall')
//         }
//     }
// }
// bottlesSong();
                    
// console.log('----------------');

// var output = [];
// function fizzBuzz() {
//     for (var count = 1; count <= 20; count++){
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBuzz')
//     } else if (count % 3 === 0) {
//         output.push('Fizz');
//     } else if (count % 5 === 0) {
//         output.push('Buzz');
//     } else {
//         output.push(count)
//     }
//     }
//     console.log(output);
// }
// fizzBuzz();

// console.log('----------------');
function fibonacciGenerator (n) {
    var output = [];
    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0, 1);
    } else if (n <= 0) {
        console.log('Wrong number. You can use only numbers > 0.');
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            let sum1 = output[output.length - 2] + output[output.length - 1];
            output.push(sum1);
        }
    }
    return console.log(output);    
}
fibonacciGenerator(10);