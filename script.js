let input=document.getElementById('inputbox');
let buttons =document.querySelectorAll
('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) =>{
        if(e.target.innerHtml =='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHtml == 'AC') {
            string ="";
            inputvalue =string;
        }
        else{
            string += e.target.innerHtml;
            input.value=string;
        }
            
    })
}
)