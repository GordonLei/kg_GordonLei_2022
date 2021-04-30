//some "global" variables 

//slice starting from the 2nd index as the first 2 indexes would be 'node' and 'main.js'
const args = process.argv.slice(2);
//use a dictionary so you can refer to the dictionary to get the phonetic equivalent of the digit
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
    let digitsAsStr = []
    while(currInt > 0){
        digitsAsStr.push(numbers[currInt % 10]);
        currInt = Math.floor(currInt / 10);
    }
    //reverse the array to get the correct order then join the array without a comma 
    return digitsAsStr.reverse().join('');
}

let ans = args.map(intToPhonetic);
for (i = 0; i < ans.length - 1; i++){
    process.stdout.write(ans[i] + ', ')
}
//print the last element without adding a comma like the previous elements
process.stdout.write(ans[ans.length - 1])