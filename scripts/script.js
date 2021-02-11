$(document).ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    $(this).css("transform", "translateX(-300px)");

    var artist = $('#artist').val();
    var title = $('#title').val();
    const baseUrl = 'https://api.lyrics.ovh/v1/';
    const apiUrl = baseUrl + artist + '/' + title;

      $.getJSON(apiUrl , function(data) {
        console.log(data);

        $.each(data, function() {
          var lyrics = data.lyrics;
          const brakeLine = "\n";
          const song = data.lyrics.replace(/\n/g, "<br>")
          console.log(lyrics);

          $('#lyrics').html('<h2>' + artist + '</h2><h3>' + title + '</h3><p>' + song + '</p>').css({
              'width': '330px',
              'height': '600px',
              'border-radius': '5px',
              'box-shadow': '0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)',
              'margin': '0 auto',
              'padding': '30px',
              'transform': 'translate(300px,-700px)',
              'overflow':'scroll',
              'line-height': '30px'
          });
        });
    });
  });

  $('#reset').on('click', function() {
    $('#lyrics').html('').css({
      'width': '0px',
      'height': '0px',
      'border-radius': '0px',
      'box-shadow': 'none',
      'margin': '0',
      'padding': '0px'
    });
    $("form").css("transform", "translateX(0px)");
  });

});
