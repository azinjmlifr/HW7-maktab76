/*Ex.2
Create a function that identifies the very first item that has recurred
 in the string argument passed. It returns the identified item with
  the index where it first appeared and the very next index where 
  it resurfaced -- entirely as an object; or as an empty object 
  if the passed argument is either null, undefined, empty string,
   or no recurring item exists.
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}
*/
function recurIndex(str) {
  if (str) {
    let arr = str.split("");
    console.log(arr);
    const filter1 = arr.filter((item, index) => index !== arr.indexOf(item));
    let result = [];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === filter1[0]) {
        result.push(index);
      }
    }
    let obj = {};
    obj[filter1[0]] = [result[0], result[1]];
    return obj;
  } else {
    return {};
  }
}

console.log(recurIndex(null));
