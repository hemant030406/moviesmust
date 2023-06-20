const thing=document.getElementById("thing");
const tumbbad=document.getElementById("tumbbad");
const alien=document.getElementById("alien");
const shining=document.getElementById("shining");

const psycho=document.getElementById("psycho");
const ids=[thing,tumbbad,shining,psycho,alien];

function margining(position,y){
    let width=innerWidth*0.07;
    for(let i=y;i<position;i++)
       {
        width +=(ids[i].offsetWidth)+(innerWidth *0.07);
        console.log(ids[i].offsetWidth+" "+i);
      }
    const element=(ids[position]);
      element.style.marginLeft=width+"px";
      element.style.marginTop="-"+(ids[position-1].clientHeight)+"px";
}
margining(ids.indexOf(psycho),2);
margining(ids.indexOf(tumbbad),0);

for(let i=0;i<5;i++){
  ids[i].onclick=function() {clicked(i)};
}
function refresh(){
  location.reload();
}
  window.onresize=function() {refresh()};

function clicked(position){
  const aa=ids[position].children[0];
  window.open(aa.href,"_self");
}