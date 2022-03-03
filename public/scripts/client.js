/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//////////////////**********RENDER TWEETS***********/////////////////////

const renderTweets = function(tweets) {
  $('#tweet-container').empty()
  for (const tweet of tweets) {
    // console.log(tweet);
    $('#tweet-container').prepend(createTweetElement(tweet));
  }
};
/////////////////************GRAB INFO FROM INDIVDUAL TWEETS FOR RENDER***********/////////////
const createTweetElement = function(tweet) {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  let $tweet =   $(`
    <article class="single-tweet">
      <header><span><img class="name-icon" src=${tweet.user.avatars}>${tweet.user.name}</span><span>${tweet.user.handle}</span></header>
      <p class="posted-tweet">${escape(tweet.content.text)}</p>
      <footer><span class="footer-text">${timeago.format(tweet.created_at)}</span><span><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span></span></footer>
    </article>
  `);
  return $tweet;
};

//////////////***********GET COUNTER VARIABLE***************//////////////

// $("#tweet-text").on('input', function() {
//   const counter = $(this).parents(".new-tweet").find(".tweet-text-counter");
// })




//////////////***********RENDER TWEETS IN THE DOM***********///////////////

$(document).ready(function() {
 
  loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json'}).then(data => {
      renderTweets(data);
    }).catch(err => {
      console.log('err', err);
    });
  };

  loadTweets();

  const $form = $("#new-tweet");
  $form.on("submit", (event) => {
    event.preventDefault();
    const counter = $("textarea").val().length
    
    if (counter > 140) {
      event.preventDefault;
      return alert("That is WAYYY Too Many Characters!")
    } else if (counter === 0) {
      event.preventDefault;
      return alert ("Cat got your tongue?")
    }
 
    //console.log to make sure that the submit button is being diverted.
    console.log("The Form was submitted");
    const serializedData = $(event.target).serialize();
    //check to see if the serializedData is correct.
    console.log(serializedData);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedData,
      })
      .then(() => {
      loadTweets()
      })
      .catch(err => {console.log('err', err)
    })
  });

  console.log('Testing Document Ready');

});














