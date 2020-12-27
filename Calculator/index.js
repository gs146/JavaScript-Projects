let screen = document.getElementById('screen');
console.log(screen.value)
let buttons = document.querySelectorAll('button')
let screenValue='';

for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        
        if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText == 'X')
        {
            console.log((screenValue))
            screenValue = screenValue.slice(0,-1);
            console.log(screenValue)
            screen.value = screenValue; 
        }

        else if(buttonText == "=")
        {
            screen.value = eval(screenValue);
            screenValue='';
        }
        else if(buttonText == '^')
        {
            screen.value +='**';
            screenValue = screen.value 
        }
        else{
            screenValue += buttonText;
            screen.value=  screenValue;
        }
    })

}