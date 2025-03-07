let cookie = document.getElementById ('cookie');
let clicker_counter = document.getElementById('clicker__counter'); 
let counter = 0; 

cookie.addEventListener('click', function(){ 
    counter++;
    clicker_counter.textContent = counter; 
    if (counter % 2 == 0) { 
      cookie.width = '200'; 
    }  
    if (counter % 2 !== 0)  
      cookie.width = '220'; 
});
  