

// const signinBtn =document.querySelector('#signin-btn')
// const getCookiesBtn =document.querySelector('#get-cookies')

//cookies

// function handleSignIn(event){
//     event.preventDefault()

//     alert('Success User Signed in')

//     document.cookie = 'token=user-001; max-age=2000'

// }

// function handleGetCookies(){
//     const cookies =document.cookie
//     document.querySelector('#cookies').innerText =cookies
// }

// signinBtn.addEventListener('click', (event)=>handleSignIn(event) )

//locaLstorage

// function handleSignIn(event){
//     event.preventDefault()

//     const email =document.querySelector('#email').value
//     const password =document.querySelector('#password').value

//     const user ={email,password }

//     console.log(user)
//     const data = JSON.stringify(user)

//    localStorage.setItem('user',data)
//    localStorage.setItem('dark-mode','false')

// }

// function handleGetLocalstorage(){
//     const storage = localStorage.getItem('user')
//     const data = JSON.parse(storage)
//     console.log(data);
//     document.querySelector('#cookies').innerText =storage

//     localStorage.clear()
// }

// indexDB

// function handleSignIn(event){
//     event.preventDefault()

//     const email =document.querySelector('#email').value
//     const password =document.querySelector('#password').value

//     const user ={email,password }

//     console.log(user)

//     let db = indexedDB.open('user',1)
//     console.log(db);

// }





