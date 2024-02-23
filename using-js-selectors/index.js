
// select p and button using query selector

// const text = document.querySelector('.text')

// const btn =document.querySelector('#btn')

// console.log(btn);


// console.log(text);

// select p and button using query selectorall


// const allElements =document.querySelectorAll('.text,#btn')

// console.log(allElements);



// const btn = document.getElementById('btn')
// console.log(btn);

// const input =document.getElementsByName('username')

// const tags =document.getElementsByTagName('p')

// const texts =document.getElementsByClassName('user')

// console.log(texts);


// adding attributed to HTML elements

// getAttribute(), 

const btn = document.querySelector('#btn')
const text =document.querySelector('.text')

const attributeValue = btn.getAttribute('id')

// console.log(attributeValue);



// setAttribute(), 

// btn.setAttribute('class','new-btn')


// hasAttribute()

// const result = btn.hasAttribute('class')

// console.log(result);


// and removeAttribute()


// btn.removeAttribute('class')



// classlist method
btn.addEventListener('click',()=>{
         text.classList.toggle('color')
         const textAtt = text

         console.log(textAtt);
  
})






