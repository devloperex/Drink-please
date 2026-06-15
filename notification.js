async function enableNotification(){
 if(!('Notification' in window)) return;
 const p=await Notification.requestPermission();
 if(p==='granted'){
 new Notification('H2O Glow Pro Activated 💧',{
 body:'Hydration reminders enabled'
 });
 }
}