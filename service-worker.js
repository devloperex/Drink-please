self.addEventListener('install',()=>console.log('H2O SW ready'));

self.addEventListener('push',event=>{
 const data=event.data ? event.data.json() : {};
 event.waitUntil(
 self.registration.showNotification(data.title || 'H2O Glow Pro 💧',{
 body:data.message || 'Time to drink water',
 icon:'assets/icon-192.png'
 })
 );
});