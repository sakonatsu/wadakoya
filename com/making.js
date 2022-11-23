// スムーススクロール用
$(function(){
  var headerHeight = $().outerHeight(); // ヘッダー分ずらしたい場合。又はID、クラス名を入れるとその分ずれる
  var urlHash = location.hash;
  if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
  }
  $('a[href^=#]').click(function(){
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
    return false;
  });
});


// ハンバーガーメニュー用
$(function($) {
			$(function() {
				var $header = $('#top-head');

				// Nav Fixed
				$(window).scroll(function() {
					if ($(window).scrollTop() > 300) {
						$header.addClass('fixed');
					} else {
						$header.removeClass('fixed');
					}
				});

				// Nav Toggle Button
				$('#nav-toggle').click(function(){
					$header.toggleClass('open');
				});
			});
})(jQuery);
