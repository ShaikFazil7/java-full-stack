let greetings=["Good morning 🤩","Good afternoon 🤩","Good evening 🤩","Good night 🤩"];
let num=0;
function greet_afternoon()
{
    let text= document.getElementById("greet");
   text.innerText=greetings[num];
   num+=1;
   if (num>3)(num=0)
}
function sunrise()
{
    let light=document.getElementById("sunrise");
    light.src="C:\\Users\\shaik fazil\\Pictures\\Screenshots\\sunrise.jpeg";
}
function sunset()
{
    let light=document.getElementById("sunrise");
    light.src="C:\\Users\\shaik fazil\\Pictures\\Screenshots\\sunset.jpeg";
    const img = document.getElementById("sunrise");

img.width = 300;
img.height = 200;
}
function change_color()
{
    let color = document.getElementById("antony");
    color.style.backgroundColor="pink";
    let txt1 = document.getElementById("Data"); 
}
function change_image()
{

}