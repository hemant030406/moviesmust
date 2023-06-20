const tloto=document.getElementById("tloto");
const rear_window=document.getElementById("rear_window");
const mirror_game=document.getElementById("mirror_game");
const tsotl=document.getElementById("tsotl");

const se7en=document.getElementById("se7en");
const ids=[tloto,rear_window,tsotl,se7en,mirror_game];

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
margining(ids.indexOf(se7en),2);
margining(ids.indexOf(rear_window),0);

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