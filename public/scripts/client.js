/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const  createTweetElement = function (tweetObject) {
  let tweet1 =  `<article>
 <header>
   <div class="tweet_info">
     <img src="${escape(tweetObject.user.avatars)}">
     <h3>${escape(tweetObject.user.name)}</h3>
     <p class="username">${escape(tweetObject.user.handle)}</p>
   </div>
   <p>${escape(tweetObject.content.text)}</p>
 </header>
 <footer class ="tweeter_footer">
   <p class = "tweet_time">${timeago.format(escape(tweetObject.created_at))}</p>
   <div class = "tweet_footer_icons">
     <i class="fas fa-flag"></i>
     <i class="fas fa-retweet"></i>
     <i class="fas fa-heart"></i>
   </div>
 </footer>
</article>`
  return tweet1;
}



const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    //https://api.jquery.com/prepend/
      $('#tweets').prepend(String(createTweetElement(tweet)));
  }
}


$( ".form" ).submit(function( event ) {
  // alert( "Handler for .submit() called." );
  event.preventDefault();
  if ($('#tweet-text').val().length > 140){
      let errorMessage = 'Oops, your tweet exceeds the maximum length.';
      alert(errorMessage);
      return;
  }
  if ($('#tweet-text').val().length <= 0){
      let errorMessage = 'Your tweet is empty.';
      alert(errorMessage);
      return;
  }
  $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    }).done(function() {
      loadTweets();
    }).fail(function(){
        alert("Something went wrong");
    });
  });


const loadTweets = function (){
  $.ajax({
      url: '/tweets/',
      method: 'GET'
    }).done(renderTweets); //AJAX pass by default the data to the callback function. In this case, renderTweets will receive a JSON Object.
  }