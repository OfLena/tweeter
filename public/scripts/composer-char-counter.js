$(document).ready(function() {
  console.log('Testing Document Ready')

$("#tweet-text").on('input', function () {

  //Prints whatever text is currently occupying the textarea.
  // console.log('Value---->', $(this).val())
  //Prints the length of whatever text is currently occupying the textarea.
  // console.log('Value ---->', $(this).val().length)
  //Set a variable to the length of val so that we can subtract it from our 140.
  const textAreaLength = $(this).val().length;
  //Set a variable to the maximum length of the textArea.
  const maxTextAreaLength = 140;
  //Set a variable to the result of our text area maximum length - the current textArea value.
  const result = maxTextAreaLength- textAreaLength;
  
  const counter = $(this).parents(".new-tweet").find(".tweet-text-counter");

  counter.text(result);

  if (result < 0) {
    counter.addClass('change-tweet-counter');
  } else {
    counter.removeClass('change-tweet-counter');
  };


    

  return counter;
});
});
// $("#tweet-text").on('keydown', function() {
//   console.log(this); //The this keyword is a reference to the button
// });

// $("#tweet-text").on('input', () => {
//   console.log(this); //The this keyword here refers to something else!
// });


/* <form action="/tweets/" method="POST">
<label for="tweet-text" class="humming-about">What are you humming about?</label>
<textarea name="text" id="tweet-text"></textarea>
<div class="under-tweet-box">
  <button class="tweet-btn" type="submit">Tweet</button>
  <output name="counter" class="tweet-text-counter" for="tweet-text">140</output>
</div>
</form> */








 