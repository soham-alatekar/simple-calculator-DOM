var main_div = document.createElement('div');
main_div.classList.add("calculator");

var screen_div = document.createElement('div');
screen_div.id = "result_window";
screen_div.innerText="";
screen_div.classList.add("input");

var buttons_div = document.createElement('div');
buttons_div.classList.add("calculator-buttons" , "buttons");

var span6 = document.createElement('span');
span6.innerText = 'C';
span6.classList.add("btn" , "btn-primary" , "calc-button" , "clear");
var span4 = document.createElement('span');
span4.innerText = '/';
span4.classList.add("btn" , "btn-primary" , "calc-button");

buttons_div.append(span6);
buttons_div.append(span4);


var span = [];

span[7] = document.createElement('span');
    span[7].innerText = "7";
    buttons_div.append(span[7]);
    span[7].classList.add("btn", "btn-primary" , "calc-button");

    span[8] = document.createElement('span');
    span[8].innerText = "8";
    buttons_div.append(span[8]);
    span[8].classList.add("btn", "btn-primary" , "calc-button");

    span[9] = document.createElement('span');
    span[9].innerText = "9";
    buttons_div.append(span[9]);
    span[9].classList.add("btn", "btn-primary" , "calc-button");


    var span3 = document.createElement('span');
    span3.innerText = '*';
    span3.classList.add("btn" , "btn-primary" , "calc-button");
    buttons_div.append(span3);

    span[4] = document.createElement('span');
    span[4].innerText = "4";
    buttons_div.append(span[4]);
    span[4].classList.add("btn", "btn-primary" , "calc-button");

    span[5] = document.createElement('span');
    span[5].innerText = "5";
    buttons_div.append(span[5]);
    span[5].classList.add("btn", "btn-primary" , "calc-button");

    span[6] = document.createElement('span');
    span[6].innerText = "6";
    buttons_div.append(span[6]);
    span[6].classList.add("btn", "btn-primary" , "calc-button");

    
var span2 = document.createElement('span');
span2.innerText = '-';
span2.classList.add("btn" , "btn-primary" , "calc-button");
buttons_div.append(span2);


span[1] = document.createElement('span');
    span[1].innerText = "1";
    buttons_div.append(span[1]);
    span[1].classList.add("btn", "btn-primary" , "calc-button");

    span[2] = document.createElement('span');
    span[2].innerText = "2";
    buttons_div.append(span[2]);
    span[2].classList.add("btn", "btn-primary" , "calc-button");

    span[3] = document.createElement('span');
    span[3].innerText = "3";
    buttons_div.append(span[3]);
    span[3].classList.add("btn", "btn-primary" , "calc-button");

    var span1 = document.createElement('span');
    span1.innerText = '+';
    span1.classList.add("btn" , "btn-primary" , "calc-button");
    buttons_div.append(span1);
    
    span[0] = document.createElement('span');
    span[0].innerText = "0";
    buttons_div.append(span[0]);
    span[0].classList.add("btn", "btn-primary" , "calc-button" , "zero");
    
var span5 = document.createElement('span');
span5.innerText = '=';
span5.classList.add("btn" , "btn-primary" , "calc-button" , "equals");
buttons_div.append(span5);




    
    
    

    





main_div.append(screen_div,buttons_div);

document.body.append(main_div);
var nums = document.querySelectorAll('.buttons span');
var result = document.getElementById('result_window');

document.addEventListener("DOMContentLoaded", function() {
    
    numsArray = Array.from(nums);
    numsArray.map(button => button.addEventListener('click',function(){
        if(button.innerText !== '=')
        {
            result.innerText += button.innerText;
        }
        if(button.innerText === '=')
        {
            result.innerText = eval(result.innerText);
        }
        if(button.innerText === 'C')
        {
            result.innerText = "";
        }
    }));
});

