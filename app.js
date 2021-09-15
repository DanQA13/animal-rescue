'use strict'

let answer = prompt('Do you love animals?');


  if(answer.toLowerCase() === 'yes'){
    alert('Then you have come to the right place!');
 
 } else if(answer.toLowerCase() === 'no'){
    alert('Then you will be kindly removed');

    }  
    let favanimal = prompt ('Do you want to see one?');   
    
    if(favanimal.toLowerCase() === 'yes'){
        alert('Then come down and volunteer at our shelter')
    }

    let description = prompt('According to our site when can you contact us? ');
        
    if(description.toLowerCase() === '24/7'){
      alert('Correct check the clock below we are here 24/7')
  }
        


  

 


    function showTime(){
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
      var s = date.getSeconds(); // 0 - 59
      var session = "AM";
      
      if(h == 0){
          h = 12;
      }
      
      if(h > 12){
          h = h - 12;
          session = "PM";
      }
      
      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;
      
      var time = h + ":" + m + ":" + s + " " + session;
      document.getElementById("MyClockDisplay").innerText = time;
      document.getElementById("MyClockDisplay").textContent = time;
      
      setTimeout(showTime, 1000);
      
  }
  
  showTime();

 