

// const div =document.querySelector('#mylinks')
// const result = div.textContent
// const result = div.innerText
// const result = div.innerHTML

// console.log(result);



// styling with js

const div =document.querySelector('#mylinks')


// div.style.color ='red'
// div.style.backgroundColor = 'yellow'
// div.style.padding= '10px'

// div.style.cssText =`
// color:red; 
// background-color:yellow;
// padding:10px;`

const num = `${200} votes`

    // function handleStyle(element,horizontalPosition,verticalPosition){
    //     element.style.display="block";
    //     element.style.position= 'absolute';
    //     element.style.left=`${horizontalPosition}px`
    //     element.style.top=`${verticalPosition}px`

    // }
    // function handleStyle(element,horizontalPosition,verticalPosition){
    //     element.style.cssText=`
    //     display:block;
    //     position:absolute;
    //     left:${horizontalPosition}px;
    //     top:${verticalPosition}px;
    //     `;

    // }

    // document.querySelector('button').addEventListener('click',()=>handleStyle(div,50,100))
   
    let name = "User";
    let age = 102;
    let items = [2,3,4]
    console.log(...items);

    // This is a tagged template literal

    const html = (strings, ...values) => {
        console.log('strings:',strings);
        console.log('values:',values);
    let str = "";
    strings.forEach((string, i) => {
    str += string + (values[i] || "");
    });
    return str;
    };
    // Some formatters will format this literal's content as HTML
   div.innerHTML= `<!DOCTYPE html>
    <html lang="en-US">
    <head>
    <title>Hello ${name}</title>
    </head>
    <body>
    <h1>Hello ${name}!</h1>
    <p>You are ${age} years old.</p>
    </body>
    </html>`;
