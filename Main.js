let input = document.getElementById("User");
let button = document.querySelectorAll("button");



let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener("click", (m) =>{
        if(m.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(m.target.innerHTML == "AC"){
            string="";
            input.value = string;
        }
        else if(m.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else{
            string += m.target.innerHTML;
        input.value = string;
        }
    })
})