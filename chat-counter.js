document.addEventListener("DOMContentLoaded", function(event) {
  setInterval(function(){ 
    let textbox = document.getElementById('msg').value;
    let textboxlength = textbox.length
    let counter = document.getElementById('counter');
    counter.innerHTML = `${textboxlength}/200`
    if (textboxlength > 200) {
      counter.style.color = 'red';
      document.getElementById('submitButton').disabled = true;
    }
    else {
      counter.style.color = 'white'; 
      document.getElementById('submitButton').disabled = false;
    }
    return false    
}, 10000)};
