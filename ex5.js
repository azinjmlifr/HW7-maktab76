//Ex.5 Implementation filter-find-slice-splice-some

//filter
// const arr = ["hi", "bye", "population", " satisfies"];
// const filtering = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < 5) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(filtering(arr));

//find
// const array1 = [5, 12, 8, 130, 44];
// const found = (array) => {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 10) {
//       arr.push(array[i]);
//     }
//   }
//   return arr[0];
// };

// console.log(found(array1));

//slice
// function Slice(array, begin, end) {
//   let Array = [];
//   if (end === undefined || end > array.length) end = array.length;
//   for (let i = begin; i < end; i++) {
//     Array.push(array[i]);
//   }
//   return Array;
// }
// console.log(Slice([8, 3, 4, 5, 4], 1, 3));

//splice
// function Splice(array, begin, count, char) {
//   if (count == 0) array.insert(begin, char);
// }
// console.log(Splice([8, 3, 4, 5, 4], 1, 0, "azin"));
// let arr = ["A", "B", "D", "E"];
// let a = arr.insert(2, "C");
// console.log(a);

//some
// const arr = ["hi", "bye", "population", " satisfies"];
// const filtering = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < 1) {
//       result.push(array[i]);
//     }
//   }
//   if (result[0]) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(filtering(arr));
