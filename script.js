"use strict"

/*
// window.document.documentElement.body
// Поиск элементов
// ----------Устаревшие методы
/*
let coffeeMachine = document.getElementById("Coffee");// Поиск по id
console.log(coffeeMachine);

let images = document.getElementsByTagName("img");// Поиск по тегам
console.log(images);

let coffeeItems = document.getElementsByClassName("coffee-item");// Поиск поклассам
console.log(coffeeItems);

let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);


// ----------------------------

// ------- Современные методы----
/* 
 let coffeeMachine = document.querySelector("#Coffee");
 console.log(coffeeMachine);
 
 let image = document.querySelector("img");
 console.log(image); // первый элемент покажет
 
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);

let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);

let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);


// ----------------------------------------

// ------------Работа с элементами------------
// Изменение CSS свойств------
/*
let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";

let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );


// Изменение аттрибутов ------

//let balance = document.querySelector("input[type='text']");

/*let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");


balance.value = 500; // == balance.setAttribute('value', 500);
console.log(balance.value); // == balance.getAttribute('value');


// Изменение классов
/*
let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");
//changeButton.classList.toggle("ml-5"); // вкл - выкл
*/

// Изменение содержимого элементов

/*let displayText = document.querySelector (".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
//displayText.innerHTML = "<b>Готовим кофе</b>";
displayText.innerText = "<b>Готовим кофе</b>";


// События и слушателисобытий

// Мышь - click mouserover mouseup mousedown mousemove
// для input - focus change

// 1 . с помощью аттрибутов
*/



// -------Плаирование---------------
// таймаут


/*
let timeout = setTimeout(paintBody, 5000, "paleturquoise");


let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}
/*setTimeout(function (){
  paintBody("aqua");
}, 5000);


function paintBody(color) {
  document.body.style.background = color;
}
*/
/*
let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearInterval(interval);
}

function trashConsole() {
  console.log(Math.random());
}




  //changeBox.append(coin); // Добавляем в конец(внутри снизу)
  //changeBox.prepend(coin); // Добавляем в начало(внутри сверху)
  //changeBox.before(coin); // перед элементом(снаружи сверху)
  //changeBox.after(coin); // после элемента(снаружи снизу)
  //changeBox.replaceWith(coin); // заменяет одно другим(один раз)

*/










