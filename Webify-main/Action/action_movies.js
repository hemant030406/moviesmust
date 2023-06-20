const dark_knight=document.getElementById("dark_knight");
const tlotr=document.getElementById("tlotr");
const inception=document.getElementById("inception");
const star_wars=document.getElementById("star_wars");

const the_matrix=document.getElementById("the_matrix");
const ids=[star_wars,the_matrix,inception,tlotr,dark_knight];

function margining(position,y){
    let width=innerWidth*0.07;
    for(let i=y;i<position;i++)
       {
        width +=(ids[i].offsetWidth)+(innerWidth *0.07);
        console.log(ids[i].offsetWidth+" "+i);
      }
    const element=(ids[position]);
      element.style.marginLeft=width+"px";
      element.style.marginTop="-"+(ids[position-1].offsetHeight)+"px";
}
margining(ids.indexOf(the_matrix),0);
margining(ids.indexOf(tlotr),2);

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