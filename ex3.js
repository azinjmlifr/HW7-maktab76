/*Ex. 3 The .length property on an array will return the number of elements 
in the array. For example, the array below contains 2 elements:
[1, [2, 3]] // 2 elements, number 1 and array [2, 3] Suppose we instead 
wanted to know the total number of non-nested items in the nested array.
 In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
 getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
*/
const givenArray = [1, [2, [3, [4, [5, 6]]]]];
const lengthOfNestedArray = (arr) => {
  const newArr = arr.flat(Infinity);
  return newArr.length;
};
console.log(lengthOfNestedArray(givenArray));
