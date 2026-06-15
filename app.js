let water=Number(localStorage.getItem('water'))||0;
let goal=2000;

function addWater(x){
 water+=x;
 localStorage.setItem('water',water);
 update();
}

function update(){
 let e=document.getElementById('water');
 if(e)e.innerText=water+' / '+goal+' ML';
}

function calculateGoal(weight){
 goal=weight*35;
 alert('Daily goal: '+goal+' ML');
}