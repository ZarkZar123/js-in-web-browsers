
//Example1 
//select body elemnt in html //
// const body = document.querySelector('body')

// create h1 element //
// const heading1 = document.createElement('h1')
// const heading2 = document.createElement('h2')
// const heading3 = document.createElement('h3')

// Add text to h1 elemnt //
// const headings =[heading1,heading2,heading3]


// headings.forEach(heading => {
// const text = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla ratione libero molestias error doloremque tempora ex dolore voluptate voluptatibus dolor eligendi repellendus labore natus laborum, aut debitis. Laboriosam, corrupti.'
  // heading.innerHTML = 'JS in web'
// document.createTextNode(text)
  
  // heading.innerText=text
  // add h1 as a child to the body element
  // body.appendChild(heading)
  
// });



const body = document.querySelector('body')

const list = document.createElement('ul')

const data =['car','toy',20,'guy','ladies']

data.forEach(item=>{
  let listItem = document.createElement('li')

  listItem.innerText = item

  list.appendChild(listItem)

})

body.appendChild(list)


const allLis = document.querySelectorAll('ul')
const Li = document.querySelector('li')
console.log(allLis);
console.log(Li);