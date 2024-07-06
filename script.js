const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey I'm red!";
content.style.color = "red";

container.appendChild(content);


const content1 = document.createElement("h3");
content1.classList.add("content1");
content1.textContent = "I'm a blue h3!";
content1.style.color = "blue";

container.appendChild(content1);


const content2 = document.createElement("div");
content2.classList.add("content2");
content2.setAttribute("style", "border: 5px solid red; background: pink");


const content3 = document.createElement("h1");
content3.classList.add("content3");
content3.textContent = "I'm in a div";

content2.appendChild(content3);


const content4 = document.createElement("p");
content4.classList.add("content4");
content4.textContent = "ME TOO!";

content2.appendChild(content4);



container.appendChild(content2);
