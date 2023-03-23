const a = document.querySelector("a");
console.log(a);
a.setAttribute("href", "http://google.co.th");
a.setAttribute("target", "_blank");

const result = { firstName: "John", lastName: "Doe" };
const fullName = "${result.firstName} ${result.lastName}";

const p = document.querySelector("p");
p.innerHTML = fullName;
