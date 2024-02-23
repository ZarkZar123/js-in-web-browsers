



// handles click

function handleClick(event){
    console.log('button clicked',event);
}

function handleInput(){
    console.log('change occured');
}

// function handleForm(event){
//     event.stopPropagation()
//     event.preventDefault()
//     alert('form submitted')

// }

// 


const btn = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const submit = document.querySelector('#formbtn')


submit.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    alert('form submitted')
})


// btn.addEventListener('click',  
// function(event){
//     event.stopPropagation()
//     console.log('button2 clicked')
// })

const handleBtnEvent =(event)=>{
    event.stopPropagation()
    console.log('button2 clicked')
}

btn.addEventListener('click',handleBtnEvent)

btn3.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.target.parentNode.removeChild(btn)
    window.removeEventListener('click',handleBtnEvent)
})