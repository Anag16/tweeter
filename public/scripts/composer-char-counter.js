$(document).ready(function() {

  $( "#tweet-text" ).keyup(function() {
  
     let allowedChar = 140;
     let usedChar = $(this).val().length;
     let remainingChars = allowedChar-usedChar;
     let charCounter =  $(this).siblings('div').find('.counter')
    charCounter.html(remainingChars);
     if (remainingChars <= 0){
        charCounter.css("color", "red");
     }
     else {
       charCounter.css("color", "black");
     }

  });







});
