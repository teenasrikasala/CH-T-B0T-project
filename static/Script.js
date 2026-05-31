const inputbox=document.querySelector('.search-bar');
const sendbutton=document.querySelector('.send-bar');
const messages=document.querySelector('.message');
const welcome = document.querySelector('.welcome-text');
async function sendmessage(){
    const message=inputbox.value.trim();
    if(message===''){
        return;
    }
    if(welcome){
    welcome.style.display='none';
    }
    createmessage(message,'user');
    inputbox.value='';
   const thinkingdiv= createmessage('Thinkingggg🤔🤔....','bot');
try{    
    const response=await fetch('/chat',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            message:message
        })
    });
    const data=await response.json();
    thinkingdiv.remove();
    createmessage(data.reply ,'bot');
}catch(error){
     console.log(error);
      thinkingdiv.remove();
     createmessage("server error",'bot');
}}

function createmessage(text,sender){

const divmessage=document.createElement('div');

divmessage.innerText=text;
divmessage.style.width='fit-content';
divmessage.style.borderRadius='10px';
divmessage.style.maxWidth='300px';
divmessage.style.margin='10px';
divmessage.style.padding='10px';

if(sender === 'user'){

divmessage.style.color='white';
divmessage.style.backgroundColor='black';
divmessage.style.marginLeft='auto';

}
else{

    divmessage.style.color='black';
    divmessage.style.backgroundColor='#e5e5e5';
    divmessage.style.marginRight='auto';
}
messages.appendChild(divmessage);
messages.scrollTop=messages.scrollHeight;
return divmessage;
}

sendbutton.addEventListener('click',sendmessage);
inputbox.addEventListener('keypress',function (event){
    if(event.key==='Enter'){
        sendmessage();
    }
});

