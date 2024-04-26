const json = '{"name":"Mango","age":3,"isHappy":true}';
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.name === "Mango"); // true
console.log(obj.age === 3); // true
console.log(obj.isHappy === true); // true