var date = new Date().getHours();
var body = document.getElementById('bodym'); 

if (date >= 6 && date < 20) {
    body.style.backgroundColor="white";
}
else{
    body.style.backgroundColor="black";
}