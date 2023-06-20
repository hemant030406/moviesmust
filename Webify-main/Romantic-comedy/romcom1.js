const chhichhore=document.getElementById("chhichhore");
const citylights=document.getElementById("citylights");
const forrestgump=document.getElementById("forrestgump");
const moderntimes=document.getElementById("moderntimes");

const lifisbeautiful=document.getElementById("lifeisbeautiful");
const ids=[chhichhore,citylights,moderntimes,lifisbeautiful,forrestgump];

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
margining(ids.indexOf(lifisbeautiful),2);
margining(ids.indexOf(citylights),0);

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