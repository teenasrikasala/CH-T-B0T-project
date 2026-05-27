const inputbox=document.querySelector('.search-bar');
const sendbutton=document.querySelector('.send-bar');
const messages=document.querySelector('.messages');
const welcome = document.querySelector('.welcome-text');
function sendmessage(){
    const message=inputbox.value.trim();
if(message===''){
    return;
}
if(welcome){
    welcome.style.display='none';
}
const divmessage=document.createElement('div');
divmessage.innerText=message;
divmessage.style.color='white';
divmessage.style.backgroundColor='black';
divmessage.style.padding='10px';
divmessage.style.margin='10px';
divmessage.style.marginLeft='auto';
divmessage.style.width='fit-content';
divmessage.style.borderRadius='10px';
divmessage.style.maxWidth='300px';
messages.appendChild(divmessage);
inputbox.value='';
messages.scrollTop=messages.scrollHeight;
}
sendbutton.addEventListener('click',sendmessage);
