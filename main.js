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

//Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input){
    if(!input || input.length == 0){
        return [];
    } else {
    let final =[];
    function posOnly(input){
        let i = 0;
        let n = 0;
       input.forEach(element => {
           element>0 ? i++ : n++;
       });
        return i
    }
    function negOnly(input){
        let neg = input.filter(item=>item<0)
        neg = neg.reduce((passedIn, item)=>{
            return passedIn+item
        })
        return neg
    }

    final.push(posOnly(input))
    final.push(negOnly(input))
    return final
}
}

// Kyu 7: Move every letter in the provided string forward 10 letters through the alphabet. If it goes past 'z', start again at 'a'. Input will be a string with length > 0.

function moveTen(s){
    function letterToNum(s){
    let codesPlusTen=[]; 
//seperate every string letter into seperate array parts
  s=s.split("")
  //Loop thru each letter in this new array and add 10 to each character count
  let codes = s.map(letter=>letter.charCodeAt(0))
codes.forEach(char => {
  if(char === 122){
        codesPlusTen.push(106)
    }
  else if(char<=112){
    codesPlusTen.push(char+10)
  }else if(char>=113 && char<122) {
      let x = 122 - char;
      let numRemianing = -(x - 10);
      let newChar = numRemianing + 96;
      codesPlusTen.push(newChar)
    }
})
return codesPlusTen
}
newCodes= letterToNum(s)
let letters = newCodes.map(num=> String.fromCharCode(num))
return letters.join("")
}
//Way shorter way of doing it:
function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}