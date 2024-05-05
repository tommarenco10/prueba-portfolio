function enviarMensaje(){
var username=document.getElementByName("name").value;
var email=document.getElementByName("email").value;
var mssg=document.getElementById("messagefield").value;
console.log("Hola "+username+" tu mensaje es "+mssg);   
alert("Hola "+username+" tu mensaje es "+mssg);
}
