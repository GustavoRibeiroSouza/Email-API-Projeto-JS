function sendMail(){
    var params ={
        name: document.getElementById("name").value ,
        email:document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
}

const serviceID = "service_pf4mpul"
const templateID = "template_7wt11rl"

emailjs.send(serviceID,templateID,params).then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        alert("your message sent sucessfully");
    }
)
.cath((err)=> console.log(err));
