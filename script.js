var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');

let res='';

buttons.forEach(elem=>{
    elem.addEventListener('click',function(event){
        event.preventDefault();
        if(event.target.value == '='){
           res = String(eval(res))
           display.textContent=res
        }
        else if(event.target.value == 'AC'){
            res ='';
            display.textContent=res
        }
        else if(event.target.value == 'DEL'){
            res=res.substring(0,res.length-1)
            display.textContent = res;
        }
        else{
            res += event.target.innerText;
            display.textContent = res;
        }
    })
})