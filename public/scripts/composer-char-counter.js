$(document).ready(function() {
  console.log('Testing Document Ready');

  $("#tweet-text").on('input', function() {

    //Prints whatever text is currently occupying the textarea.
    // console.log('Value---->', $(this).val())
    //Prints the length of whatever text is currently occupying the textarea.
    // console.log('Value ---->', $(this).val().length)
    //Set a variable to the length of val so that we can subtract it from our 140.
    const textAreaLength = $(this).val().length;
    //Set a variable to the maximum length of the textArea.
    const maxTextAreaLength = 140;
    //Set a variable to the result of our text area maximum length - the current textArea value.
    const result = maxTextAreaLength - textAreaLength;
  
    const counter = $(this).parents(".new-tweet").find(".tweet-text-counter");

    counter.text(result);

    if (result < 0) {
      counter.addClass('change-tweet-counter');
    } else {
      counter.removeClass('change-tweet-counter');
    }
    return counter;
  });
});









 