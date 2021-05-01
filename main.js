//some "global" variables 

//slice starting from the 2nd index as the 
//  first 2 indexes would be 'node' and 'main.js'
const args = process.argv.slice(2);
//use a dictionary so you can refer to the dictionary 
//  to get the phonetic equivalent of the digit
let numbers = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};
//split an int to its digit and return phonetic equivalent
function intToPhonetic(currInt){
    let digitsToWord = [];
    //check if the currInt (the arg) can be made into an int  
    currInt =  parseInt(currInt);
    if(Number.isInteger(currInt)){
        //if true, keep track that is was negative 
        const negative = currInt < 0;
        //change to absolute value to account for 
        //  no infinite loop when currInt is negative
        currInt = Math.abs(currInt)
        //get all the digits and add the phonetic to digitsToWord
        while(currInt > 0){
            digitsToWord.push(numbers[currInt % 10]);
            currInt = Math.floor(currInt / 10);
        }
        if(negative){
            //reverse the array to get the correct order 
            //  then join the array without a comma
            //  and add the negative sign
            return '-' + digitsToWord.reverse().join('');
        }
        else{
            return digitsToWord.reverse().join('');
        }
        
    }
    else{
        return "Not an integer"
    }
    
}

let ans = args.map(intToPhonetic);
for (i = 0; i < ans.length - 1; i++){
    //print out the integers as phonetic
    process.stdout.write(ans[i] + ', ')
}
//print the last element without adding a comma like the previous elements
process.stdout.write(ans[ans.length - 1])