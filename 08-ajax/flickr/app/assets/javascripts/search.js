$(document).ready(function () {

  $(window).on('scroll', function () {
    console.log($(window).scrollTop(), $(document).height());
  });

  $('#image_search').on('submit', function (e) {
    e.preventDefault();

    var query = $('#search').val();

    var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

    var generateUrl = function (photo) {
      var url = [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_m.jpg'
      ].join('');

      return url;
    };

    $.getJSON(flickrUrl, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json',
      per_page: 100
    }).done(function (results) {
      $.each(results.photos.photo, function (i, photo) {
        var url = generateUrl(photo);
        var $img = $('<img>').addClass('thumbnail').attr('src', url);
        $img.appendTo('body');
      })
    });

  });
});







