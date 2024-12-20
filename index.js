const btn1 = document.querySelector('#btn1');
const inp1 = document.querySelector('#inp1');
const btn2 = document.querySelector('#btn2');
const inp2 = document.querySelector('#inp2');
const div1 = document.querySelector('#place');
const list1 = document.querySelector('#categories');
const liCount = list1.querySelectorAll('.item');
let show;
let isHidden = false;
let isClicked = false;
btn1.addEventListener('click',()=>{
show = inp1.value;
console.log(show);
});

btn2.addEventListener('click',()=>{
if(!isHidden){
    inp2.dataset.realValue = inp2.value;
    inp2.value = '*'.repeat(inp2.value.length);
    inp2.disabled = true;
    btn2.textContent = 'Розкрити';
} else{
    inp2.value = inp2.dataset.realValue || '';
    inp2.disabled = false;
    btn2.textContent = 'Приховати';
}
isHidden = !isHidden;
    });

window.addEventListener('click',(event)=>{
if(event.target == div1){
    console.log(true);
} else console.log(false);

});

liCount.forEach(element => {
  const output = element.querySelector('h2');
  const numOfItem = element.querySelectorAll('ul li').length;
  console.log(`Category: ${output.textContent}`);
  console.log(`Elements: ${numOfItem}`);
});
console.log(`Number of categoies: ${liCount.length}`);



const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit',(event)=>{
event.preventDefault();
const{email,password} = loginForm.elements;
if(email.value.trim()===''||password.value.trim()===''){
    alert('All form fields must be filled in');
    return;
}
const User ={
    email:email.value.trim(),
    password:password.value.trim(),
}
console.log(User);
loginForm.reset();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newbtn = document.querySelector('.change-color');
const span = document.querySelector('.color');
newbtn.addEventListener('click',()=>{
span.textContent = getRandomHexColor();
document.body.style.backgroundColor =span.textContent;

});



function createBoxes(amount){
    const elements = [];
    let size = 30;

    for(let i=1; i<=amount;i++){
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        size +=10;
        elements.push(div);
    }
    boxes.innerHTML = '';
    boxes.append(...elements)
} 



const boxes = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const crtbtn = document.querySelector('[data-create]');
const dstbtn = document.querySelector('[data-destroy]');

crtbtn.addEventListener('click',()=>{
    if(input.value>=1 && input.value<=100){
    createBoxes(input.value)
    input.value ='';
    }else alert('Please enter a number between 1 and 100');
});
dstbtn.addEventListener('click',()=>{
    boxes.innerHTML = '';
});
