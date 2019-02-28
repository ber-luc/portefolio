$(document).ready(function(){
	$('.borderIcon').click(function(){
		if ($('.open')[0]){
			$('.open').removeClass("open");
			$('.menu').css("display", "none");
		}
		else {
			$('#nav-icon2').toggleClass('open');
			$('.borderIcon').toggleClass('X');
			$('.menu').css("display", "block");
		}
	});
});


$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#FFF",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#007EA7',
    trackColor:	"#FFF",
    size: 160,
    animate: 500
  });
});
