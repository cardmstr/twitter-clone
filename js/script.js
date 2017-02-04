$(document).ready(function(){
  // $('#profile-summary').append('<p>Test Successful!<p>');
  $('#tweet-controls').addClass('hidden');
  $('.tweet-actions').addClass('hidden');

  var Tweet = function(fullName, userName, tweetText){
    this.fullName = fullName;
    this.userName = userName;
    this.tweetText = tweetText;
  }

  function addTweet(newTweet){
    $('#stream').prepend(
      '<div class="tweet">'+
        '<div class="content">'+
          '<img class="avatar" src="img/alagoon.jpg" />'+
          '<strong class="fullname">' + newTweet.fullName + '</strong>'+
          '<span class="username">' + newTweet.userName + '</span>'+
          '<p class="tweet-text">' + newTweet.tweetText + '</p>'+
          '<div class="tweet-actions">'+
            '<ul>'+
              '<li><span class="icon action-reply"></span> Reply</li>'+
              '<li><span class="icon action-retweet"></span> Retweet</li>'+
              '<li><span class="icon action-favorite"></span> Favorite</li>'+
              '<li><span class="icon action-more"></span> More</li>'+
            '</ul>'+
          '</div>'+
          '<div class="stats">'+
            '<div class="retweets">'+
              '<p class="num-retweets">30</p>'+
              '<p>RETWEETS</p>'+
            '</div>'+
            '<div class="favorites">'+
              '<p class="num-favorites">6</p>'+
              '<p>FAVORITES</p>'+
            '</div>'+
            '<div class="users-interact">'+
              '<div>'+
                '<img src="img/alagoon.jpg" />'+
                '<img src="img/vklimenko.jpg" />'+
              '</div>'+
            '</div>'+
            '<div class="time">'+
              '1:04 PM - 19 Sep 13'+
            '</div>'+
          '</div>'+
          '<div class="reply">'+
            '<img class="avatar" src="img/alagoon.jpg" />'+
            '<textarea class="tweet-compose" placeholder="Reply to @cardmstr"/></textarea>'+
          '</div>'+
        '</div>'+
      '</div><!-- .tweet -->'
    )
  }

  $('.tweet-compose').focusin(function(e){
    e.preventDefault();
    if($(this).val().length==0)
      $(this).height($(this).height()*2);
    $(this).siblings('#tweet-controls').removeClass('hidden');
  })

  $('.tweet-compose').focusout(function(e){
    e.preventDefault();
    if($(this).val().length==0){
      $(this).height($(this).height()/2);
      $(this).siblings('#tweet-controls').addClass('hidden');
    }
  })

  $('.tweet-compose').on('input propertychange paste keyup', function(){
    var charCount = $(this).siblings('#tweet-controls').children('#char-count');
    var maxChars = 140;
    charCount.html(maxChars - $(this).val().length);

    if ($(this).val().length > maxChars) {
        $(this).siblings('#tweet-controls').children('#tweet-submit').attr("disabled", true);
    } else {
      $(this).siblings('#tweet-controls').children('#tweet-submit').attr("disabled", false);
    }

    if($(this).val().length>=130){
      charCount.addClass('red-text');
    } else {
      charCount.removeClass('red-text');
    }

  })

  $('#tweet-submit').on('click', function(e){
    e.preventDefault();
    if($('.tweet-compose').val()){
      var tweet = new Tweet('Spencer Simons', '@cardmstr', $('.tweet-compose').val());
      addTweet(tweet);
      $('.tweet-compose').val('');
      $(this).parent().addClass('hidden');
      $('.tweet-compose').height($('.tweet-compose').height()/2);
    }
  })

  $('.tweet').hover(function(e){
    e.preventDefault();
    $(this).find('.tweet-actions').toggleClass('hidden');
  })

  

})
