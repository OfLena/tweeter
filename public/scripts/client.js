/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log('Testing Document Ready')
});
  
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      
    }
  }


  const createTweetElement = function(tweet) {

    let $tweet =   $(`<section class="all-tweets" id="tweet-container">
    <article class="single-tweet">
      <header><span><i class="fa-solid fa-user-astronaut"></i>${tweetData.user.name}</span><span>${tweetData.user.handle}</span></header>
      <p class="posted-tweet">${tweetData.content.text}</p>
      <footer><span class="footer-text">${timeago.format(tweetData.created_at)}</span><span><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span></span></footer>
    </article>
    </section>
  `)

    return $tweet
}


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


const $tweet = createTweetElement(data);
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to ad













