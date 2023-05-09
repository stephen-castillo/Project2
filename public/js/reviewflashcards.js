
const flashcardContainer = document.querySelector('#flashcard-container');

$(document).ready(function(){
    $('.flashcard-carousel').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
      nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
      infinite: false
    });
  });
  
  $(document).ready(function() {
    // select the flashcard container element
    var $flashcardContainer = $('#flashcard-container');
  
    // set up event listener for next button
    $('#next-button').on('click', function() {
      // get the current card element
      var $currentCard = $flashcardContainer.find('.flashcard.active');
  
      // get the next card element
      var $nextCard = $currentCard.next('.flashcard');
  
      // if there is no next card, go back to the first card
      if ($nextCard.length === 0) {
        $nextCard = $flashcardContainer.find('.flashcard:first-child');
      }
  
      // hide the current card and show the next card
      $currentCard.removeClass('active');
      $nextCard.addClass('active');
    });
  
    // set up event listener for previous button
    $('#prev-button').on('click', function() {
      // get the current card element
      var $currentCard = $flashcardContainer.find('.flashcard.active');
  
      // get the previous card element
      var $prevCard = $currentCard.prev('.flashcard');
  
      // if there is no previous card, go to the last card
      if ($prevCard.length === 0) {
        $prevCard = $flashcardContainer.find('.flashcard:last-child');
      }
  
      // hide the current card and show the previous card
      $currentCard.removeClass('active');
      $prevCard.addClass('active');
    });
  });
  