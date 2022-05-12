/*Ex.4 Create a function that takes an array of strings and returns 
an array with only the strings that have numbers in them. If there are
 no strings containing numbers, return an empty array.
 */
const fun1 = (arr) => {
  let newArr = [];
  let map1 = arr.map((item) => {
    if (/[0-9]/.test(item)) {
      return newArr.push(item);
    } else {
      return [];
    }
  });
  return newArr;
};
console.log(fun1(["a", "b", "1", "gg453", "az"]));
