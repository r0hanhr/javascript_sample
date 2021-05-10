let name = ["a", "b", "c", "d", "e", "f", "g"];
let [a, b, c, d, e, f, g] = name;

let container = document.createElement("div");

let btn1 = document.createElement("button");
btn1.innerHTML = a;
let btn2 = document.createElement("button");
btn2.innerHTML = b;
let btn3 = document.createElement("button");
btn3.innerHTML = c;
let btn4 = document.createElement("button");
btn4.innerHTML = d;
let btn5 = document.createElement("button");
btn5.innerHTML = e;
let btn6 = document.createElement("button");
btn6.innerHTML = f;
let btn7 = document.createElement("button");
btn7.innerHTML = g;

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(btn4);
container.appendChild(btn5);
container.appendChild(btn6);
container.appendChild(btn7);
document.body.appendChild(container);
