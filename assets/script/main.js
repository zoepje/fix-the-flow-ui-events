let frontend = document.querySelector('a:nth-of-type(1)');
let design = document.querySelector('a:nth-of-type(2)');
let and = document.querySelector('a:nth-of-type(3)');
let development = document.querySelector('a:nth-of-type(4)');
let sprint5 = document.querySelector('a:nth-of-type(5)');
let fix = document.querySelector('a:nth-of-type(6)');
let the = document.querySelector('a:nth-of-type(7)');
let flow = document.querySelector('a:nth-of-type(8)');
let user = document.querySelector('a:nth-of-type(9)');
let interface = document.querySelector('a:nth-of-type(10)');
let events = document.querySelector('a:nth-of-type(11)');
let interaction = document.querySelector('a:nth-of-type(12)');

let body = document.querySelector('body');

frontend.addEventListener('dblclick', colorChange1);
function colorChange1(){
  frontend.classList.toggle('colorChange');
}

design.addEventListener('keydown', bibberHandler);
design.addEventListener('animationend', bibberHandler);
function bibberHandler(){
  design.classList.toggle('bibber');
}


and.addEventListener('mouseenter', shakeHandler1);
and.addEventListener('animationend', shakeHandler1);
function shakeHandler1(){
  and.classList.toggle('shake');
}

development.addEventListener('mouseleave', colorChange2);
function colorChange2(){
  development.classList.toggle('colorChange');
}

sprint5.addEventListener('pointerenter', hover1);
function hover1(){
  sprint5.classList.toggle('hover');
}

fix.addEventListener('mousedown', hover2);
function hover2(){
  fix.classList.toggle('hover');
}

the.addEventListener('mousemove', shakeHandler2);
the.addEventListener('animationend', shakeHandler2);
function shakeHandler2(){
  the.classList.toggle('shake');
}

flow.addEventListener('wheel', coloreChange3);
function coloreChange3(){
  flow.classList.toggle('colorChange');
}

user.addEventListener('blur', blurHandler);
user.addEventListener('focus', focusHandler);
function focusHandler(){
  user.classList.remove('blur');
}
function blurHandler(){
  user.classList.add('blur');
}

// interface.addEventListener();

// events.addEventListener();

interaction.addEventListener('click', jumpHandler);
interaction.addEventListener('animationend', jumpHandler);
function jumpHandler() {
  interaction.classList.toggle('jump');
}