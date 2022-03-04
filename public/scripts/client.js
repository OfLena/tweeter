/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//////////////////**********RENDER TWEETS***********/////////////////////

const renderTweets = function(tweets) {
  $('#tweet-container').empty();
  for (const tweet of tweets) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  }
};

/////////////*********GRAB INFO FROM INDIVDUAL TWEETS FOR RENDER***********/////////////

const createTweetElement = function(tweet) {

  const escape = function(str) {
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

//////////////***********RENDER TWEETS IN THE DOM***********///////////////

$(document).ready(function() {
 
//////////////***********AJAX GET**************////////////////////

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

/////////////*************CALL LOAD TWEETS**********/////////////////

  loadTweets();

//////////////***********HANDLE FORM DATA + COUNTER******//////////

  const $form = $("#new-tweet");
  $form.on("submit", (event) => {
    event.preventDefault();
    const counter = $("textarea").val().length;
    
    if (counter > 0 && counter < 140) {
      $('#slide-down-warning').slideUp("slow");
    }
    if (counter === 0 || counter > 140) {
      $('#slide-down-warning').text(`⛔️ Error: Tweet Must Be Between 0 and 140 Characters ⛔️`).slideDown("slow");
      return;
    }
    const serializedData = $(event.target).serialize();
    
//////////////////***********AJAX POST*************///////////////////

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedData,
    })
      .then(() => {
        loadTweets();
        $('textarea').val('');
        $('.tweet-text-counter').val('140');
      })
      .catch(err => {
        console.log('err', err);
      });
  });

//////////////////************BACK TO TOP FEATURE*********////////////

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
  });
  
  $("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });

  console.log('Testing Document Ready');

});














