console.log("Testing my understanding of data types.");

//create an object
let studentObj = {
  name: "bernice",
  email: "zbernyx@gmail.com",
  course: "software engineering",
};

let studentArr = Object.entries(studentObj);

console.log(studentArr);
console.log("High Level Sorted Student Arr:", studentArr.sort());

let studentArr_values = Object.values(studentObj);
console.log("student object values:", studentArr_values);
console.log("sorted student object values:", studentArr_values.sort());

let studentArr_keys = Object.keys(studentObj);
console.log("student object keys:", studentArr_keys);
console.log("sorted student object keys:", studentArr_keys.sort());

let key_value_arr = [...studentArr_keys, ...studentArr_values];
console.log("Key and values together: ", key_value_arr);
console.log(key_value_arr.sort());
