const rest=document.getElementById("rest");
const wind=document.getElementById("window");
const button1=document.getElementById("button");
button1.onclick=function() {open()};
const button2=document.getElementById("close");
button2.onclick=function() {close()};

function close(){
    rest.style.display="block";
    wind.style.display="none";
}

function open(){
    rest.style.display="none";
    wind.style.display="block";
}
window.onresize=function() {reorder()};

reorder();
function reorder(){
  if(innerWidth<=930)
  {
    document.getElementById("content").style.marginTop="0px";
    document.getElementById("content").style.marginLeft="0px";
    document.getElementById("image").style.marginLeft="25vw";
  }
}
