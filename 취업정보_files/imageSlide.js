$(document).ready(function(){
		$(".hidden").each(function() {
			var fnctValue = $(this).text().trim();
			var iValue = fnctValue.indexOf("fnctId=imageSlide");
			if(iValue != -1){
				var fnctArr = fnctValue.split(',');
				var fnctSetupId = "iSldFnctSetup"+fnctArr[1].substring(fnctArr[1].indexOf("=")+1,fnctArr[1].length);
				var fnctSetup = $("#"+fnctSetupId).text().trim();
				//console.log(fnctSetup);
				_visualSlickSetup(fnctSetup);
			}
		});
	});

	function _visualSlickSetup(obj) {
		var setup = obj.split(",");
		var setupSeq = _getSetupValue(setup, 0);
		var modeGb = _getSetupValue(setup, 4);
		var slideWth = _getSetupValue(setup, 5);

		if(modeGb == 'SLIDE'){
			//SLIDE
			$("#slider"+setupSeq).not('.slick-initialized').slick({
				speed: _getSetupValue(setup, 1) * 1000,
				autoplaySpeed: _getSetupValue(setup, 2) * 1000,
				autoplay: true,
				dots: true,
				arrows: true,
				slidesToShow: _getSetupValue(setup, 3),
				slidesToScroll: 1,
				infinite: true,
				pauseOnHover: false,
				fade: false,
				cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
				appendDots: $('#wrap-slider'+setupSeq+' .control .paging'),
				prevArrow: '#wrap-slider'+setupSeq+' .prevnext .prev',
				nextArrow: '#wrap-slider'+setupSeq+' .prevnext .next'
			});
			$('#wrap-slider'+setupSeq+' button.play').on('click', function () {
				$("#slider"+setupSeq).slick("slickPlay");
				$(this).removeClass('on');
				$('#wrap-slider'+setupSeq+' button.stop').addClass('on');
			});
			$('#wrap-slider'+setupSeq+' button.stop').on('click', function () {
				$("#slider"+setupSeq).slick("slickPause");
				$(this).removeClass('on');
				$('#wrap-slider'+setupSeq+' button.play').addClass('on');
			});
		}else{
			//FADE
			$("#slider"+setupSeq).not('.slick-initialized').slick({
				speed: _getSetupValue(setup, 1) * 1000,
				autoplaySpeed: _getSetupValue(setup, 2) * 1000,
				autoplay: true,
				dots: true,
				arrows: true,
				slidesToShow: _getSetupValue(setup, 3),
				slidesToScroll: 1,
				infinite: true,
				pauseOnHover: false,
				fade: true,
				cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
				appendDots: $('#wrap-slider'+setupSeq+' .control .paging'),
				prevArrow: '#wrap-slider'+setupSeq+' .prevnext .prev',
				nextArrow: '#wrap-slider'+setupSeq+' .prevnext .next'
			});
			$('#wrap-slider'+setupSeq+' button.play').on('click', function () {
				$("#slider"+setupSeq).slick("slickPlay");
				$(this).removeClass('on');
				$('#wrap-slider'+setupSeq+' button.stop').addClass('on');
			});
			$('#wrap-slider'+setupSeq+' button.stop').on('click', function () {
				$("#slider"+setupSeq).slick("slickPause");
				$(this).removeClass('on');
				$('#wrap-slider'+setupSeq+' button.play').addClass('on');
			});
		}
	}

	function _getSetupValue(str, index){
		return str[index].substring(str[index].indexOf("=")+1,str[index].length);
	}