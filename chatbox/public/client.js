const socket = io()
const button = document.getElementById('sendbutton')

let name;
let textarea =  document.querySelector('#textarea')
let messageArea = document.querySelector('.message_area') 


do{
    name=prompt('please enter your name')
}while(!name)

textarea.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        sendMessage(e.target.value)
    }
})

function sendMessage(msg){
    let mssg={
        user:name,
        message:mssg
    }

    appendMessage(msg,'outgoing')
}

button.addEventListener('cilck',function(){
    console.log('button clicked');
})

function appendMessage(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className,'message')
    

    let markup =`<h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `

    mainDiv.innerHTML =markup
    
    messageArea.appendChild(mainDiv)
}

