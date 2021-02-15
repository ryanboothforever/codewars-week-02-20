//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

function abbrevName(name){
    //isolate the first letter of the first word
   let first =  name.charAt(0).toUpperCase()
    //find word after " "
    let last = name.charAt(name.indexOf(" ")+1).toUpperCase()
    return `${first}.${last}`
}

//Given an array of integers, return a new array with each value doubled.

const maps = x => x.map(int=>int*2)

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = (array) => array.map(int=> int===0 ? 0 : -(int))

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!"
    } else {
  return "Hello, " + name + "!";
    }
}

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
  let sum = marks.reduce((passedIn, item) =>{
    return passedIn+item
}, 0);
return Math.floor(sum/marks.length);
}

