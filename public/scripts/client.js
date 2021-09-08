/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  

const  createTweetElement = function (tweetObject) {
  let tweet1 =  `<article>
 <header>
   <div class="tweet_info">
     <img src="${tweetObject.user.avatars}">
     <h3>${tweetObject.user.name}</h3>
     <p class="username">${tweetObject.user.handle}</p>
   </div>
   <p>${tweetObject.content.text}</p>
 </header>
 <footer class ="tweeter_footer">
   <p class = "tweet_time">${timeago.format(tweetObject.created_at)}</p>
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

  for (const tweet of tweets){
    $('#tweets').append(createTweetElement(tweet));
}
};

renderTweets(data);
