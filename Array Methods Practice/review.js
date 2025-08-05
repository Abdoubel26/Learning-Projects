 const names = ["Elon", "Ada", "Abdou"];
const newNames = names.map(name => "Hello " + name);
console.log(newNames);

const numbers = [1, 2, 3, 4];
const string = numbers.map(n => n % 2 === 0 ?
    `${n} is even` :
    `${n} is odd`
)
console.log(string); 

const string2 = numbers.map(number => number % 2 ? number.toString() + " is odd" : number + " is even");


const names2 = ["Ada", "John", "Abdou", "Elon"];
const longNames = names2.filter(name => name.length >= 4).map(name => `Hello, ${name}`);

const nums = [4, -2, 7, -5, 0];
nums.forEach(num => {
    switch(true){
        case num > 0:
            console.log(`${num} is positive`)
            break;
        case num < 0:
            console.log(`${num} is negative`)
            break;
        default:
            console.log(`${num} is neither positive nor negative`) 
    }
})

const words = ["I", "love", "React"];
const sentence = words.reduce((acc, curr, index) => {
    let updateACC = acc === "" ? curr : acc + ' ' + curr;
    if(index === words.length - 1){
        updateACC += '!';
    }
    return updateACC;
}, "");
console.log(sentence);

const numbers2 = [1, 2, 3, 4];
const NumString = numbers2.reduce((acc, curr, index) => {
    let result = acc === "" ? curr : acc + ', ' + curr;
    if(index === numbers2.length - 1){
        result = acc + ', ' + curr;
    }
    return result;

}, "")
console.log(NumString); 


const colors = ['red', 'green', 'blue', 'yellow'];
colors.splice(1, 1, 'purple', 'orange');
console.log(colors); 


const nums3 = [10, 20, 30, 40];
const lastNum = nums3.pop();
console.log(lastNum);



const nums4 = [20, 30, 40];
const Newlength = nums4.unshift(10);
console.log(nums4);
console.log(Newlength);

/* summary 
push(item1, item2, ...)
Adds items to the end of the array.
Returns: new length of the array.

pop()
Removes the last item from the array.
Returns: the removed item.

unshift(item1, item2, ...)
Adds items to the start of the array.
Returns: new length of the array.

shift()
Removes the first item from the array.
Returns: the removed item.

splice(startIndex, deleteCount, item1, item2, ...)
Removes deleteCount items starting at startIndex and optionally inserts new items (item1, item2, ...).
Modifies: original array.
Returns: array of removed items.

slice(startIndex, endIndex)
Returns a new array copying items from startIndex up to but not including endIndex.
Does NOT modify the original array.

map(callback)
Returns a new array where each item is the result of applying callback to each original item.

filter(callback)
Returns a new array containing only items where callback returns true.

forEach(callback)
Executes callback for each item. Does NOT return a new array.

reduce(acc, curr, index, callback, initialValue)
acc is what it will returns at the end, curr is the current value being processed and index is the index of the curr 
Applies callback cumulatively to array items to produce a single value.
initialValue is optional but recommended.

join(separator)
Returns a string by concatenating array items separated by separator (default is comma).
*/




