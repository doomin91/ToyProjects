const tableForm = document.querySelector(".js-table");
let display = document.querySelector(".display"); 
let result, sign, temp;
let orangeClicked = false;

function resetUp(color){
    color.style.background = '#a7aab1';
}

function resetDown(color){
    color.style.background = '#ecf0f1'
}

function grayUp(color){
    color.style.background = '#363439';
}

function grayDown(color){
    color.style.background = '#95a5a6'
}

function orangeUp(color){
    color.style.background = '#fe8e00';
}

function orangeDown(color){
    color.style.background = '#f39c12'
}

function add(chr){
    if (orangeClicked == false)
    {
        if(isNaN(chr) !== true){
            display.value = display.value + chr;
        } else {
            sign = chr;
            temp = display.value
            orangeClicked = true;
        } 
    } else
    {
        if(isNaN(chr) !== true){
            display.value = chr
            orangeClicked = false;
        } else{

            sign = chr;
            temp = display.value
            
        }        
    }
    console.log('display:',display.value, 'temp:', temp, 'sign:', sign, 'click:', orangeClicked, 'result:', result)
}



function reset(){
    diplay.value == null;
    result == null;
    temp == null;
    sign = null;
    console.log('temp:', temp, 'sign:', sign, 'click:', orangeClicked, 'result:', result)
}


function calculate() {
    result = eval(temp + sign + display.value);
    display.value = result;
    console.log('temp:', temp, 'sign:', sign, 'click:', orangeClicked, 'result:', result)
}