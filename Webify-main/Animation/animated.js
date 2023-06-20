const smisv=document.getElementById("smisv");
const your_name=document.getElementById("your_name");
const spirited_away=document.getElementById("spirited_away");
const grave_of_fireflies=document.getElementById("grave_of_fireflies");

const the_lion_king=document.getElementById("the_lion_king");
const ids=[smisv,your_name,grave_of_fireflies,the_lion_king,spirited_away];

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
margining(ids.indexOf(the_lion_king),2);
margining(ids.indexOf(your_name),0);

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