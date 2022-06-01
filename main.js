//getting html items
const categories = document.querySelectorAll('.categories');
const reset = document.querySelectorAll('.reset');

const note = document.querySelector('.note');
const input = document.querySelector('.input');
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const fruits = document.querySelector('.fruits');
const animals = document.querySelector('.animals');
const places = document.querySelector('.places');
const movies = document.querySelector('.movies');
const keypad = document.querySelector('.keypad');
const word = document.querySelectorAll('.word');

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const i = document.querySelector('.i');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');
const m = document.querySelector('.m');
const n = document.querySelector('.n');
const o = document.querySelector('.o');
const p = document.querySelector('.p');
const q = document.querySelector('.q');
const r = document.querySelector('.r');
const s = document.querySelector('.s');
const t = document.querySelector('.t');
const u = document.querySelector('.u');
const v = document.querySelector('.v');
const w = document.querySelector('.w');
const x = document.querySelector('.x');
const y = document.querySelector('.y');
const z = document.querySelector('.z');


//adding functionality to keys
a.addEventListener('click', keys);
b.addEventListener('click', keys);
c.addEventListener('click', keys);
d.addEventListener('click', keys);
e.addEventListener('click', keys);
f.addEventListener('click', keys);
g.addEventListener('click', keys);
h.addEventListener('click', keys);
i.addEventListener('click', keys);
j.addEventListener('click', keys);
k.addEventListener('click', keys);
l.addEventListener('click', keys);
m.addEventListener('click', keys);
n.addEventListener('click', keys);
o.addEventListener('click', keys);
p.addEventListener('click', keys);
q.addEventListener('click', keys);
r.addEventListener('click', keys);
s.addEventListener('click', keys);
t.addEventListener('click', keys);
u.addEventListener('click', keys);
v.addEventListener('click', keys);
w.addEventListener('click', keys);
x.addEventListener('click', keys);
y.addEventListener('click', keys);
z.addEventListener('click', keys);


//function for taking key values and retrieving letter guesses; check() for correct guesses and fail() incoreect ones; keys are disabled after use
function keys(e) {
  let key = e.target.textContent;
  check(key);
  fail(key);
  e.target.disabled = true;
  e.target.style.backgroundColor = 'var(--grey)';
}

//Ensuring that the category buttons are disabled after clicking any one of them and the note is shown
fruits.addEventListener('click', disableCategories);
animals.addEventListener('click', disableCategories);
places.addEventListener('click', disableCategories);
movies.addEventListener('click', disableCategories);

function disableCategories() {
  for(let i=0; i<categories.length; i++) {
    categories[i].disabled = true;
    categories[i].style.backgroundColor = 'var(--grey)';
  }
  note.textContent = 'Make sure you get it right👌';
}


//listing the arrays
const fruitsArray = ['mango', 'orange', 'banana', 'apple', 'cherry', 'watermelon', 'cucumber', 'grape', 'avocado', 'strawberry'];
const animalsArray = ['bear', 'lion', 'snake', 'elephant', 'rhinoceros', 'seahorse', 'dog', 'urchin', 'eagle', 'hawk'];
const placesArray = ['paris', 'america', 'europe', 'england', 'norway', 'london', 'nigeria', 'india', 'egypt', 'australia'];
const moviesArray = ['naruto', 'spiderman', 'sonic', 'bleach', 'pacifier', 'moonknight', 'familyguy', 'tmnt', 'johnnytest', 'loudhouse'];


//taking values from an array depending on the selected category and consequently displaying their placeholders along with the keypad
fruits.addEventListener('click', (e) => {
  let i = Math.floor(Math.random() * 11);
  let item = fruitsArray[i].toString().toUpperCase().split('');
  for(let j=0; j<item.length; j++) {
    let field = document.createElement('p');
    field.title = item[j];
    field.textContent = '__';
    input.appendChild(field);
  }
  e.target.style.borderColor = 'var(--green)';
  keypad.style.display = 'block';
});

animals.addEventListener('click', (e) => {
  let i = Math.floor(Math.random() * 11);
  let item = animalsArray[i].toString().toUpperCase().split('');
  for(let j=0; j<item.length; j++) {
    let field = document.createElement('p');
    field.title = item[j];
    field.textContent = '__';
    input.appendChild(field);
  }
  e.target.style.borderColor = 'var(--green)';
  keypad.style.display = 'block';
});

places.addEventListener('click', (e) => {
  let i = Math.floor(Math.random() * 11);
  let item = placesArray[i].toString().toUpperCase().split('');
  for (let j = 0; j < item.length; j++) {
    let field = document.createElement('p');
    field.title = item[j];
    field.textContent = '__';
    input.appendChild(field);
  }
  e.target.style.borderColor = 'var(--green)';
  keypad.style.display = 'block';
});

movies.addEventListener('click', (e) => {
  let i = Math.floor(Math.random() * 11);
  let item = moviesArray[i].toString().toUpperCase().split('');
  for (let j = 0; j < item.length; j++) {
    let field = document.createElement('p');
    field.title = item[j];
    field.textContent = '__';
    input.appendChild(field);
  }
  e.target.style.borderColor = 'var(--green)';
  keypad.style.display = 'block';
});


//canvas initializer for hangman
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#000000';
ctx.beginPath();
ctx.moveTo(30, 140);
ctx.lineTo(30, 20);
ctx.lineTo(140, 20);
ctx.lineTo(140, 30);
ctx.stroke();


//replacing dashes with correct letters if keys are correct
function check(x) {
  const value = document.querySelectorAll('.input p');
  for(let val=0; val<value.length;val++) {
    if(x == value[val].title) {
      value[val].textContent = x;
    }
    else{
      continue;
    }
  }
  
  //if the word is guessed correctly before the man is hung, declare triumph🤘
  let text = '';
  for (let val = 0; val < value.length; val++) {
    text += value[val].textContent;
  }
  if (text.includes('__')) {
    console.log('keep going');
  }
  else {
    won.showModal();
    word[0].textContent = text;
  }
}


//checking for failed guesses to 'hang-man' 😆🤣 Call forth the execution after the sixth case ☠️⚰️
let guess=0;
function fail(y) {
  const value = document.querySelectorAll('.input p');
  let failText= '';
  for(let val=0; val < value.length; val++) {
    failText+= value[val].title;
  }
  if(failText.includes(y)) {
    console.log(failText.includes(y));
  }
  else {
    guess++;
    draw(guess);
    console.log(failText.includes(y));
    if(guess == 6) {
      setTimeout(end, 300);
      word[1].textContent = failText;
      //initialize guess
      return guess=0;
    }
  }
}


//hangman parts appear on each failed guess
function draw(z) {
  ctx.strokeStyle = '#a30016';
  switch(z) {
    case 1:
    ctx.beginPath(140, 30);
    ctx.arc(140, 40, 10, 0, 2*Math.PI, false);
    ctx.stroke();
    break;

    case 2:
    ctx.beginPath();
    ctx.moveTo(140, 50);
    ctx.lineTo(140, 100);
    ctx.stroke();
    break;
  
    case 3:
    ctx.beginPath();
    ctx.moveTo(140, 70);
    ctx.lineTo(120, 80);
    ctx.stroke();
    break;
  
    case 4:
    ctx.beginPath();
    ctx.moveTo(140, 70);
    ctx.lineTo(160, 80);
    ctx.stroke();
    break;
    
    case 5:
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(120, 120);
    ctx.stroke();
    break;
    
    case 6:
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(160, 120);
    ctx.stroke();
    break;
  }
}


//the man is officially hung
function end() {
  lost.showModal();
}


//time to restart the game 🎮😅
reset[0].addEventListener('click', restartGame);
reset[1].addEventListener('click', restartGame);

function restartGame() {
  //close modals
  won.close();
  lost.close();
  
  // enable category buttons and remove note
  for (let i = 0; i < categories.length; i++) {
    categories[i].disabled = false;
    categories[i].style.backgroundColor = 'var(--white)';
    categories[i].style.borderColor = 'black';
  }
  note.textContent = '';
  
  //enable alphabetical keys and revert their colors
  a.disabled = false;
  b.disabled = false;
  c.disabled = false;
  d.disabled = false;
  e.disabled = false;
  f.disabled = false;
  g.disabled = false;
  h.disabled = false;
  i.disabled = false;
  j.disabled = false;
  k.disabled = false;
  l.disabled = false;
  m.disabled = false;
  n.disabled = false;
  o.disabled = false;
  p.disabled = false;
  q.disabled = false;
  r.disabled = false;
  s.disabled = false;
  t.disabled = false;
  u.disabled = false;
  v.disabled = false;
  w.disabled = false;
  x.disabled = false;
  y.disabled = false;
  z.disabled = false;
  
  a.style.backgroundColor = 'var(--white)';
  b.style.backgroundColor = 'var(--white)';
  c.style.backgroundColor = 'var(--white)';
  d.style.backgroundColor = 'var(--white)';
  e.style.backgroundColor = 'var(--white)';
  f.style.backgroundColor = 'var(--white)';
  g.style.backgroundColor = 'var(--white)';
  h.style.backgroundColor = 'var(--white)';
  i.style.backgroundColor = 'var(--white)';
  j.style.backgroundColor = 'var(--white)';
  k.style.backgroundColor = 'var(--white)';
  l.style.backgroundColor = 'var(--white)';
  m.style.backgroundColor = 'var(--white)';
  n.style.backgroundColor = 'var(--white)';
  o.style.backgroundColor = 'var(--white)';
  p.style.backgroundColor = 'var(--white)';
  q.style.backgroundColor = 'var(--white)';
  r.style.backgroundColor = 'var(--white)';
  s.style.backgroundColor = 'var(--white)';
  t.style.backgroundColor = 'var(--white)';
  u.style.backgroundColor = 'var(--white)';
  v.style.backgroundColor = 'var(--white)';
  w.style.backgroundColor = 'var(--white)';
  x.style.backgroundColor = 'var(--white)';
  y.style.backgroundColor = 'var(--white)';
  z.style.backgroundColor = 'var(--white)';
  
  //getting rid of past input placeholders
  let paras = document.querySelectorAll('.input p');
  for(let para of paras) {
    para.parentNode.removeChild(para);
  }
  
  //removing keypad
  keypad.style.display = 'none';
  
  //initializing canvas
  //start by clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  //draw the hang pole
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(30, 140);
  ctx.lineTo(30, 20);
  ctx.lineTo(140, 20);
  ctx.lineTo(140, 30);
  ctx.stroke();
}