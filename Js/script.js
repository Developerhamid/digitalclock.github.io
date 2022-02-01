let newTime;
 let newDate;
 let time;
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 setInterval(() => {
     time = new Date();
     newDate = time.toLocaleDateString(undefined,options);
     newTime = time.getHours() + ":" + time.getMinutes() + ":" +time.getSeconds();
     document.getElementById('currentTime').innerHTML = newTime + "<br> on " + newDate;
 }, 1000);