import LinkedList from "./linked-list.js";

console.log("")
console.log("")
console.log("")


const list = new LinkedList();


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("mouse");

console.log(list.toString());