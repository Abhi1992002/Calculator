
let string = "";

const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
if(e.target.innerHTML === '='){
try{ string = eval(string)
    document.querySelector(".input").value = string;}
catch(e){
    
    document.querySelector(".input").value = "Error";
}    
}
else if(e.target.innerHTML === 'C'){
   string = ''
   document.querySelector(".input").value = string;
}
else if(e.target.innerHTML === '()'){
   string = `(${string})`
   document.querySelector(".input").value = string;
}
else if(e.target.innerHTML === '+/-'){
   string = -string
   document.querySelector(".input").value = string;
}

else{
    string += e.target.innerHTML;
    document.querySelector(".input").value = string;
}


      
    })
})

