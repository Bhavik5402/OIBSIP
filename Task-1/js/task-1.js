let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='AC'){
            buttonText='';
            screenValue=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else if(buttonText=='Enter'){
            screen.value=eval(screenValue);
        }
        else if(buttonText=='Del'){
           
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
            buttonText=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}
