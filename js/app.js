function app() 
{
   let yourname = document.getElementById("name").value;
      
    document.getElementById("result").innerText = "Добро пожаловать,"+" "+ yourname+"!"
    
    
}

let sum;

function send() 
{
    let message = document.getElementById("msg").value;
    sum=sum+"\n"+message;
    document.getElementById("msgs").innerText = sum;
    console.log(message);
    return message;
}

