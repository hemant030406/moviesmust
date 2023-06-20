const romantic_comedy=document.getElementById("romantic_comedy");
const thrilling=document.getElementById("thrilling");
const animation=document.getElementById("animation");
const action=document.getElementById("action");

const horror=document.getElementById("horror");
const ids=[horror,romantic_comedy,thrilling,animation,action];
function refresh(){
  location.reload();
}
let widthtotal=[0,0,0,0,0];
let start=0;
function margining(position){
    let width=innerWidth*0.04;
    console.log(position+">");
    for(let i=start;i<position;i++)
       {
        width +=(ids[i].offsetWidth)+(innerWidth *0.04);
      }
    const element=(ids[position]);
      element.style.marginLeft=width+"px";
      if(position==start)
      {}
      else
      {element.style.marginTop="-"+(ids[position-1].offsetHeight)+"px";console.log(" i was here");}
      widthtotal[position]=(width+250)+"px";
}

function scaler(){
while(start<5)
{let ratio=Math.floor(innerWidth/(250+innerWidth*0.04));
let end=start+ratio;
if(end>5)
end=5;
for(let i=start;i<end;i++)
{
  margining(i);
}
initializer(end);
start=end;
}
start=0;
}

for(let i=0;i<5;i++){
  ids[i].onclick=function() {clicked(i)};
}
scaler();
  window.onresize=function() {refresh()};
  function refresh(){
    console.log(innerWidth);
    scaler();
  }

function clicked(position1){
  const aa=ids[position1].children[0];
  window.open(aa.href,"_self");
}

function initializer(starting){
  console.log("i am here");
  for(let i=starting;i<5;i++)
  {
    const element=(ids[i]);
    element.style.marginLeft="0px";
    element.style.marginTop="3vh";
  }
}
