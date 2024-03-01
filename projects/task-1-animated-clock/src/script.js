(function updateClock(){

//select cloc hands
const secondsHand = document.querySelector('#seconds')
const minutesHand = document.querySelector('#minutes')
const hoursHand = document.querySelector('#hours')

// get current time
const currentDateTime = new Date()
const seconds = currentDateTime.getSeconds()
const minutes =currentDateTime.getMinutes() + seconds / 60
const hours = (currentDateTime.getHours() % 12) + minutes /60

// hour hand should move 30deg per hour
// minute hand should move 6deg per munite
// second hand should move 6deg per second

// set rotation for clock hands
const secondsAngle = seconds * 6
const minutesAngle =minutes * 6
const hoursAngle  = hours * 30

//style the clock hands to get animation

// secondsHand.style.transform= `rotate(${secondsAngle}deg)`
// minutesHand.style.transform = `rotate(${minutesAngle}deg)`
// hoursHand.style.transform =`rotate(${hoursAngle}deg)`

// secondsHand.style.transformOrigin = '243.5px 251px'
// minutesHand.style.transformOrigin = '243.5px 251px'
// hoursHand.style.transformOrigin = '243.5px 251px'

//optimised clock styles

secondsHand.setAttribute("transform",`rotate(${secondsAngle}, 243.5, 251)`)
minutesHand.setAttribute("transform",`rotate(${minutesAngle}, 243.5, 251)`)
hoursHand.setAttribute("transform",`rotate(${hoursAngle}, 243.5, 251)`)





// adding audio to clock

const tick =new Audio('./media/tick.mp3')
tick.currentTime =0 
tick.play()

setTimeout(updateClock ,1000)
})()

