console.log("Testing my understanding of data types.");
console.log("\n");

//create an object
let studentObj = {
  name: "bernice",
  email: "zbn@gmail.com",
  course: "software engineering",
};

let studentArr = Object.entries(studentObj);
console.log("student Arr");
console.log(studentArr);
console.log("sorted:", studentArr.sort());
console.log("\n");

let studentArr_values = Object.values(studentObj);
console.log("student object values:");
console.log(studentArr_values);
console.log("sorted:", studentArr_values.sort());
console.log("\n");

let studentArr_keys = Object.keys(studentObj);
console.log("student object keys:");
console.log(studentArr_keys);
console.log("sorted:", studentArr_keys.sort());
console.log("\n");

let key_value_arr = [...studentArr_keys, ...studentArr_values];
console.log("Key and values together: ");
console.log(key_value_arr);
console.log("sorted:", key_value_arr.sort());
