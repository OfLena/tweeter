/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */





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

//////////////////**********RENDER TWEETS***********/////////////////////

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      // console.log(tweet);
      $('#tweet-container').prepend(createTweetElement(tweet));
    }
  }
/////////////////************GRAB INFO FROM INDIVDUAL TWEETS FOR RENDER***********/////////////
  const createTweetElement = function(tweet) {

    let $tweet =   $(`
    <article class="single-tweet">
      <header><span><img class="name-icon" src=${tweet.user.avatars}>${tweet.user.name}</span><span>${tweet.user.handle}</span></header>
      <p class="posted-tweet">${tweet.content.text}</p>
      <footer><span class="footer-text">${timeago.format(tweet.created_at)}</span><span><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span></span></footer>
    </article>
  `)
    return $tweet
};

//////////////***********RENDER TWEETS IN THE DOM***********///////////////

$(document).ready(function() {

  const $form = $("#new-tweet");
$form.on("submit", (event) => {
  event.preventDefault();
  //console.log to make sure that the submit button is being diverted.
  console.log("The Form was submitted");
  const serializedData = $(event.target).serialize();
  //check to see if the serializedData is correct.
  console.log(serializedData);

  $.ajax({
    type: "POST",
    url: "/tweets",
    data: serializedData,
    dataType: "json"
  })

  // $.post("/tweets", serializedData, () => {
  //   console.log(response);
  // })
})

  console.log('Testing Document Ready')
renderTweets(data);
});



// const $tweet = createTweetElement(data);
// console.log($tweet);
// $('#tweets-container').append($tweet);













