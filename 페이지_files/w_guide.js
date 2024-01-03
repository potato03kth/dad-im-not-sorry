var k2Func = (function () {

  /*******************************************************
	* Common - JS Get Parameter
	*******************************************************/
  var navMode = "";
  var scriptQuery = function() {
	var script = document.getElementsByTagName('script');
	script = script[script.length-1].src.replace(/^[^\?]+\?/, '').replace(/#.+$/, '').split('&');
	var queries = {}
	, query; 
	while(script.length) {
	  query = script.shift().split('=');
	  queries[query[0]] = query[1];
	  if(query[0] == "navMode") navMode = query[1];
	}
	return queries;
  };

  /*******************************************************
	* Common - Remove Trash CSS
	*******************************************************/
  var removeCss = function () {
	$(window).load(function () {
	  $("link[rel=stylesheet][href*='/Web-home/content/skin/skin0/style.css']").remove();
	  $("link[rel=stylesheet][href*='/Web-home/_SITES/css/common/common.css']").remove();
	  $("link[rel=stylesheet][href*='/Web-home/_UI/css/lang/common_ko.css']").remove();
	  $("link[rel=stylesheet][href*='/Web-home/_UI/css/common/normalize.css']").remove();
	});
  };

  /*******************************************************
	* Common - GNB
	*******************************************************/
  // GNB Init //
  var $gnb = $('.head_navi .ul_1');
  var $gnbDepth1Anchor = $('.head_navi .a_1');
  var $gnbDepth2Anchor = $('.head_navi .a_2');
  var $gnbDepth3Anchor = $('.head_navi .a_3');
  var $gnbDepth2 = $('.head_navi .div_2');
  var $gnbDepth3 = $('.head_navi .div_3');
  var $gnbBtnOpen = $('.btn_mgnb');
  var $gnbBtnClose = $('.head_navi .btn_mgnb_close');
  //	var $gnbBtnGlobal = $('.head_navi .mobile_global');
  var $gnbBox = $('.head_navi');
  var $blackBg = $('.black_bg');

  // GNB Common //
  var gnbCommon = function() {

	// 모든 새창태그(a)에 new_win 클래스 추가 //
	$('a[target=_blank]').addClass('new_win');

	// add .have class on the div //
	$('.ul_1 > li').each(function(index, item) {
	  if($(this).children('.div_2').length > 0) {
		$(this).addClass('have');
		$(this).parent('ul').addClass('have');
	  }
	});
	$('.ul_2 > li').each(function(index, item) {
	  if($(this).children('.div_3').length > 0) {
		$(this).addClass('have');
		$(this).parent('ul').addClass('have');
	  }
	});

	$('.ul_3 > li').each(function(index, item) {
	  if($(this).children('.div_4').length > 0) {
		$(this).addClass('have');
		$(this).parent('ul').addClass('have');
	  }
	});
	$('.ul_4 > li').each(function(index, item) {
	  if($(this).children('.div_5').length > 0) {
		$(this).addClass('have');
		$(this).parent('ul').addClass('have');
	  }
	});
	$('.ul_5 > li').each(function(index, item) {
	  if($(this).children('.div_6').length > 0) {
		$(this).addClass('have');
		$(this).parent('ul').addClass('have');
	  }
	});

	// 하위메뉴갯수를 count숫자 형태의 클래스를 추가 */
	$('.ul_1').each(function(index, item) {
	  $(this).addClass('count' + $(this).children('li').length);
	});
	$('.ul_2').each(function(index, item) {
	  $(this).addClass('count' + $(this).children('li').length);
	});
	$('.ul_3').each(function(index, item) {
	  $(this).addClass('count' + $(this).children('li').length);
	});
	$('.ul_4').each(function(index, item) {
	  $(this).addClass('count' + $(this).children('li').length);
	});
	$('.ul_5').each(function(index, item) {
	  $(this).addClass('count' + $(this).children('li').length);
	});
  };

  // GNB RemoveClass1 //
  var gnbRemoveClass1 = function () {
	//	$gnbDepth1Anchor.removeClass('on');
	//	$gnbDepth2.removeClass('on');
	$gnbDepth2.hide();
	//		$gnbDepth2.slideUp();
	//		$('.pageNavigation').hide();
	$('body').removeClass('navOn');
  };

  // GNB RemoveClass2 //
  var gnbRemoveClass2 = function () {
	//	$gnbDepth2Anchor.removeClass('on');
	//	$gnbDepth3.removeClass('on');
	//	$gnbDepth3.hide();
	$gnbDepth3.slideUp('fast');
	$('body').removeClass('navOn');
  };

  // BEGIN GNB PC //
  var gnbPc = function () {

	// 1depth //
	$gnbDepth1Anchor.off('click');
	$gnbDepth1Anchor.on('click', function(e) {
	  e.preventDefault();
	  gnbRemoveClass1();
	  if($(this).attr('target') == "_blank") {
		window.open($(this).attr('href'));
	  } else {
		if(navMode == "FULL") {
		  $gnbDepth2.slideDown();	// 탑메뉴 풀모드
		} else {
		  $(this).next('div').slideDown();					
		}
	  }
	  $('body').addClass('navOn');
	});

	/*	
		$gnb.off('mouseleave');
		$gnb.on('mouseleave', function () {
			gnbRemoveClass1();
		});
*/

	if(navMode == "FULL") {
	  $('.area_2').off('mouseleave');
	  $('.area_2').on('mouseleave', function() {
		gnbRemoveClass1();
	  });
	} else {
	  $gnbDepth2.off('mouseleave');
	  $gnbDepth2.on('mouseleave', function () {
		gnbRemoveClass1();
	  });
	}

	// 2depth //
	$gnbDepth2Anchor.off('click');
	$gnbDepth2Anchor.on('click', function(e) {
	  if($(this).attr('target') == "_blank") {
		e.preventDefault();
		window.open($(this).attr('href'));
	  }
	});

	// 3depth
	$gnbDepth3Anchor.off('click');
	$gnbDepth3Anchor.on('click', function(e) {
	  if($(this).attr('target') == "_blank") {
		e.preventDefault();
		window.open($(this).attr('href'));
	  }
	});
  };
  // END GNB PC //

  // BEGIN GNB MOBILE //
  var gnbMobile = function () {

	// 1depth //
	$gnbDepth1Anchor.off('click');
	$gnbDepth1Anchor.on('click', function (e) {
	  e.preventDefault();
	  if($(this).next('div').length > 0) {
		if($(this).next('div').css('display') == "block") {
		  $(this).next('div').slideUp();
		  $(this).parent().removeClass('haveOpen').addClass('have');
		} else {
		  gnbRemoveClass1();
		  $(this).next('div').slideDown();
		  $(this).parent().siblings('li').has('div').removeClass('haveOpen').addClass('have');
		  $(this).parent().removeClass('have').addClass('haveOpen');
		}
	  }
	});

	// 2depth //
	$gnbDepth2Anchor.off('click');
	$gnbDepth2Anchor.on('click', function () {			
	  if($(this).next('div').length > 0) {
		if($(this).next('div').css('display') == "block") {
		  $(this).next('div').slideUp();
		  $(this).parent().removeClass('haveOpen').addClass('have');
		} else {
		  gnbRemoveClass2();
		  //	$(this).next('div').slideToggle();
		  //	$(this).parent().toggleClass('have haveOpen');
		  $(this).next('div').slideDown();
		  $(this).parent().siblings('li').has('div').removeClass('haveOpen').addClass('have');
		  $(this).parent().removeClass('have').addClass('haveOpen');
		}
	  }
	});

	// 3depth has 2depth //
	$gnbDepth2Anchor.siblings('div').siblings('a').on('click', function (e) {
	  e.preventDefault();
	});

	// Menu Open //
	$gnbBtnOpen.off('click');
	$gnbBtnOpen.on('click', function () {
	  $(this).removeClass('on');
	  $gnbBtnClose.addClass('on');
	  //	$gnbBtnGlobal.addClass('on');
	  $gnbBox.addClass('on');
	  $blackBg.addClass('on');
	  $('body').addClass('navOn');

	  // 서브페이지라면 해당메뉴 열려있게 //
	  if(!$("body").hasClass('main')) {
		var $gnbFirst = $('.head_navi .li_1._active .a_1');
		var $gnbDepth2AnchorActive = $('.head_navi .a_2._active');
		$gnbFirst.trigger('click');	// 강제로 이벤트발생
		$gnbDepth2AnchorActive.trigger('click');	// 강제로 이벤트 발생
	  }
	});

	// Menu Close //
	$gnbBtnClose.off('click');
	$gnbBtnClose.on('click', function () {
	  $(this).removeClass('on');
	  $gnbBtnOpen.addClass('on');
	  $gnbBox.removeClass('on');
	  $blackBg.removeClass('on');
	  $('body').removeClass('navOn');	// 한성대에서 추가
	});
  };
  // END GNB MOBILE //


  /*******************************************************
	* Common - Sub Menu Nav
	*******************************************************/
  var setMenuText = function() {
	$(window).load(function () {
	  var $getText1 = $.trim($('.head_navi .a_1._active').text());
	  $('.wrap_sub_visual .container .visual_intro strong').text($getText1);
	});
  };

  var getMenuText = function () {
	$(window).load(function () {
	  var $getText1 = $.trim($('.head_navi .a_1._active').text());
	  var $getText2 = $.trim($('.head_navi .a_2._active').text());
	  var $getText3 = $.trim($('.head_navi .a_3._active').text());
	  var $pageTitle1 = $('#pagetitle1');
	  var $pageTitle2 = $('#pagetitle2');
	  var $pageTitle3 = $('#pagetitle3');

	  if(jQuery.type($getText1) !== 'undefined' && $getText1 != "") {
		$pageTitle1.append('<button class="pageNavigationBtn" title="펼치기">' + $getText1 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle1.remove();
	  }

	  if(jQuery.type($getText2) !== 'undefined' && $getText2 != "") {
		$pageTitle2.append('<button class="pageNavigationBtn" title="펼치기">' + $getText2 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle2.remove();
	  }

	  if(jQuery.type($getText3) !== 'undefined' && $getText3 != "") {
		$pageTitle3.append('<button class="pageNavigationBtn" title="펼치기">' + $getText3 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle3.remove();
	  }
	});
  };

  var getMenuList = function () {
	$(window).load(function () {
	  var getMenuList1 = function () {
		var $getMenuResult1 = $('.head_navi .a_1').each(function (index, item) {
		  $('#pagetitle1 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  };
	  var getMenuList2 = function () {
		var $getMenuResult2 = $('.head_navi .li_1._active .a_2').each(function (index, item) {
		  $('#pagetitle2 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  };
	  var getMenuList3 = function () {
		var $getMenuResult3 = $('.head_navi .li_1._active .a_2._active').siblings('div').find('.a_3').each(function (index, item) {
		  $('#pagetitle3 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  };
	  getMenuList1();
	  getMenuList2();
	  getMenuList3();
	});
  };

  var setMenuList = function () {
	$(window).load(function () {
	  var $subNavBtn = $('.sub_navi button.pageNavigationBtn');
	  var $subNavDiv = $('.sub_navi ul.pageNavigation');
	  $subNavBtn.on('click', function() {
		if($(this).next('ul').css('display') == "none") {
		  $(this).attr('title','접기');
		  //					$(this).next('ul').slideDown();
		  $(this).next('ul').addClass('active');
		} else {
		  $(this).attr('title','펼치기');
		  //					$(this).next('ul').slideUp();
		  $(this).next('ul').removeClass('active');
		}
	  });
	  $subNavDiv.on('mouseleave', function() {
		$(this).siblings('button').attr('title','펼치기');
		//				$subNavDiv.slideUp();
		$subNavDiv.removeClass('active');
	  });
	});
  };

  /*******************************************************
	* Common - SNS
	*******************************************************/
  var snsToggle = function () {
	var $snsOpenBtn = $('button.sub_share');
	var $snsCloseBtn = $('.box_sub_share button.close');
	var $snsBox = $('.box_sub_share');
	$snsOpenBtn.on('click', function () {
	  $snsBox.slideDown("fast");
	  return false;
	});
	$snsCloseBtn.on('click', function () {
	  $snsBox.slideUp("fast");
	  return false;
	});
  };

  var snsShare = function () {
	var $snsFaceBook = $(".box_sub_share .fb");
	var $snsTwitter = $(".box_sub_share .tw");
	var $snsKakao = $(".box_sub_share .kakao");
	var $snsNaver = $(".box-sub-share .naver");
	var $snsFile = $('.box_sub_share .addr');
	var $snsPinter = $(".box_sub_share .pin");

	if($snsFaceBook.length > 0) {
	  $snsFaceBook.on('click', function() { shareFacebook(); });
	}
	if($snsTwitter.length > 0) { 	
	  $snsTwitter.on('click', function() { shareTwitter(); });
	}
	if ($snsKakao.length > 0) {
	  $snsKakao.bind('click', function () { shareKakaoStory(); });
	}
	if ($snsNaver.length > 0) {
	  $snsNaver.bind('click', function () { shareNaver(); });
	}
	if ($snsFile.length > 0) {
	  $snsFile.bind('click', function () { copy_to_clipboard(); });
	}
	if ($snsPinter.length > 0) {
	  $snsPinter.bind('click', function () { sharePinterest(); });
	}

	function shareFacebook() {
	  var s = location.href;
	  var popUrl = "http://www.facebook.com/sharer.php?t=" + encodeURIComponent(document.title) + "&u=" + encodeURIComponent(s);
	  window.open(popUrl, 'facebook');
	}
	function shareTwitter() {
	  var s = location.href;
	  var popUrl = "http://twitter.com/share?text=" + encodeURIComponent(document.title) + "&url=" + encodeURIComponent(s);
	  window.open(popUrl, 'twitter');
	}
	function sharePinterest() {
	  var s = location.href;
	  var popUrl = "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(s) + "&description=" + encodeURIComponent(document.title);
	  window.open(popUrl, 'pinterest');
	}
	function shareNaver() {
	  var s = location.href;
	  var popUrl = "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(s) + "&title=" + encodeURIComponent(document.title);
	  window.open(popUrl, 'naver');
	}
	function shareKakaoStory() {
	  var s = location.href;
	  var popUrl = "https://story.kakao.com/share?url=" + encodeURIComponent(s) + "&text=" + encodeURIComponent(document.title);
	  window.open(popUrl, 'facebook');
	}
	function copy_to_clipboard() {
	  var copyUrl = '';
	  if (copyUrl == '') {
		copyUrl = location.href;
	  }
	  var IE = (document.all) ? true : false;
	  if (IE) {
		window.clipboardData.setData("Text", copyUrl);
		alert(copyUrl + " 복사되었습니다.");
	  } else {
		temp = prompt(" Ctrl+C 를 눌러 복사하십시오 ", copyUrl);
	  }
	}
  };

  /*******************************************************
	* Common - Table Scroll
	*******************************************************/
  /*
	var tableScroll = function () {
		$(window).load(function () {			
			var tableIcon = $('.con-table');
			tableIcon.on('click', function () {
				$(".con-table").niceScroll({
					cursorcolor: "rgba(1,120,221,1)"
					, cursorwidth: "1px"
					, cursorborder: "0px solid rgba(2,81,148,1)"
					, cursorborderradius: 0
					, cursoropacitymin: 0
					, autohidemode: 'leave'
					, scrollspeed: 0
					, zindex: 100
					, mousescrollstep: 30
					, railpadding: {
						left: 0
						, right: 0
						, top: 0
						, bottom: 0
					}
				});
				$(this).addClass('on');
			});
		});
	};
*/
  
/*  
  var tableScroll = function () {
	$(window).load(function () {			
	  var tableIcon = $('.table_m');
	  tableIcon.on('click', function () {
		$(this).addClass('on');
	  });
	});
  };
*/
  
  /*******************************************************
	* Common - Random Sub Visual
	*******************************************************/
  var subVisual = function () {
	$(window).load(function () {	
	  var subVisual = $('#wrap-visual #visual');
	  var active1Depth = $('#gnb .li_1.eQ01');
	  var active2Depth = $('#gnb .li_1.eQ02');
	  var active3Depth = $('#gnb .li_1.eQ03');
	  var active4Depth = $('#gnb .li_1.eQ04');
	  var active5Depth = $('#gnb .li_1.eQ05');

	  subVisual.removeClass();

	  if (active1Depth.hasClass('_menuOn')) subVisual.addClass('m1');
	  else if (active2Depth.hasClass('_menuOn')) subVisual.addClass('m2');
	  else if (active3Depth.hasClass('_menuOn')) subVisual.addClass('m3');
	  else if (active4Depth.hasClass('_menuOn')) subVisual.addClass('m4');
	  else if (active5Depth.hasClass('_menuOn')) subVisual.addClass('m5');
	  else subVisual.addClass('none');
	});
  };


  /*******************************************************
	* Common - Scroll Width
	*******************************************************/

  var getScrollBarWidth = function () {
	if ($(document).height() > $(window).height()) {
	  $('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
	  fakeScrollBar = $('#fakescrollbar');
	  fakeScrollBar.append('<div style="height:100px;">혻</div>');
	  var w1 = fakeScrollBar.find('div').innerWidth();
	  fakeScrollBar.css('overflow-y', 'scroll');
	  var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
	  fakeScrollBar.remove();
	  return (w1 - w2);
	}
	return 0;
  }

  /*******************************************************
	* Common - Sub Tab Length
	*******************************************************/
  var tabSize = function () {
	var tabLi = $('.wrap-contents .tab ul li');
	var tabLen = tabLi.length;
	var tabPer = 100 / tabLen + '%';
	if (tabLen < 4)  tabLi.css('width', tabPer);
	else tabLi.css('width', '25%');
  };

  /*******************************************************
	* Common - Sub Favorite
	*******************************************************/
  var subFavorite = function () {

	var $favoBtn = $('.sub_util .sub_favo');
	var $favoBox = $('.sub_util .box_sub_favo');
	var $favoClose = $('.sub_util .box_sub_favo .close');
	var $favoAddBtn = $('.sub_util .add');
	var $favoResetBtn = $('.sub_util .reset');

	// 즐겨찾기 창 열기 //
	$favoBtn.on('click', function () {
	  favoriteGetCookieList();
	  $favoBox.slideDown();
	});

	// 즐겨찾기 창 닫기 //
	$favoClose.on('click', function () {
	  $favoBox.slideUp();
	});

	// 즐겨찾기 추가 //
	$favoAddBtn.on('click', function() {
	  var pathMenuSeqs = $("#pathMenuSeqs").val().split(",");
	  var menu = "";
	  for (var i=1; i<pathMenuSeqs.length; i++) {
		if(i == pathMenuSeqs.length - 1) menu += "<strong>" + $('#top_menuTitle_' + pathMenuSeqs[i]).val() + "</strong>";
		else menu += "<span>" + $('#top_menuTitle_' + pathMenuSeqs[i]).val() + " > " + "</span>";
	  }
	  favoriteSetCookie(menu);
	  $favoBtn.focus();	// ie11 때문에 포커스를 강제로 이동			
	});

	// 즐겨찾기 초기화 //
	$favoResetBtn.on('click', function() {
	  favoriteRemoveCookieAll();
	});
  };

  /*******************************************************
	* Common - Sub Tab Mobile Munu List
	*******************************************************/
  var subMenuList = function () {

	$(window).load(function () {
	  var tabEle = $('.wrap_contents .tab .tab_div');
	  var d4Active = $('.wrap_contents .tab ul li._active a');
	  var d4Clone = d4Active.clone();
	  tabEle.prepend(d4Clone);
	  var d4Click = $('.wrap_contents .tab .tab_div > a');
	  d4Click.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings().toggleClass('open');
	  });
	});

	$(window).load(function () {
	  var tabEle = $('.tab2');
	  var d5Active = $('.wrap_contents .tab2 > ul > li._on > a');
	  var d5Clone = d5Active.clone();
	  tabEle.prepend(d5Clone);
	  var d5Click = $('.wrap_contents .tab2 > a');
	  d5Click.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings().toggleClass('open');
	  });
	});		
  };

  /*******************************************************
	* Common - Page Arrow
	*******************************************************/
  var pageArrow = function () {
	if ($("body").hasClass("sub")) {
	  $(window).load(function () {
		var activePage = $('.head_navi .a_1._active');
		var activePrev = activePage.parent().prev().children('a');
		var activeNext = activePage.parent().next().children('a');
		var movePrev = $('.wrap_sub_visual a.prev');
		var moveNext = $('.wrap_sub_visual a.next');				
		var href="", txt="", target="";

		if(activePrev.length > 0) {
		  href = activePrev.attr('href');
		  target = activePrev.attr('target');
		  txt = $.trim(activePrev.text());
		  movePrev.attr('href', href).attr('target', target).text(txt).show();
		} else {
		  movePrev.hide();
		}

		if(activeNext.length > 0) {
		  href = activeNext.attr('href');
		  target = activeNext.attr('target');
		  txt = $.trim(activeNext.text());
		  moveNext.attr('href', href).attr('target', target).text(txt).show();
		} else {
		  moveNext.hide();
		}
	  });
	}
  };

  /*******************************************************
	* Common - Go To Top
	*******************************************************/
  var gotoTop = function () {
	var btnTop = $('.wrap_page_top');
	btnTop.on('click', function () {
	  $('html, body').stop().animate({ scrollTop: '0' }, 680);
	});
	$(window).scroll(function () {
	  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		btnTop.addClass('on');
	  } else {
		btnTop.removeClass('on');
	  }
	  var scrollValue = $(document).scrollTop();
	  if (scrollValue > 200) {
		btnTop.addClass('active');
	  } else {
		btnTop.removeClass('active');
	  }
	});
  };

  /*******************************************************
	* Common - Print
	*******************************************************/
  var printElement = function () {
	var btnPrint = $('.sub_print');
	btnPrint.on('click', function () {
	  print();
	});
  };

  /*******************************************************
	* Common - Edit Mode
	*******************************************************/
  var editMode = function () {
	var editDiv = $('.main #_contentBuilder > .multipleDiv');
	var nHref = $(location).attr('href');
	if (nHref.indexOf('contentsHtmlView.do') > -1) {
	  editDiv.addClass('edit');
	  $('body').addClass('editMode');
	} else {
	  editDiv.removeClass('edit');
	}
  };

  /*******************************************************
	* Common - Language (Language)
	*******************************************************/
  var openLanguage = function () {
	var openLanguage = $('.openLanguage > button');
	openLanguage.on('click', function() {
	  $(this).next('.wrapLanguage').slideToggle();
	});
  };

  /*******************************************************
	* Common - Search (통합검색)
	*******************************************************/
  var openSearch = function () {
	var openSearch = $('.openSearch');
	var closeSearch = $('.closeSearch');
	openSearch.on('click', function() {
	  $('.search').fadeIn(); 
	});
	closeSearch.on('click', function() { 
	  $('.search').fadeOut();
	  openSearch.focus();
	});
  };

  /*******************************************************
	* Common - 주요사이트 바로가기
	*******************************************************/
  var openMainSite = function () {
	var openSite = $('._fst > a.open_site, ._snd > a.open_site');
	openSite.on('click', function() {
	  //			$(this).next('ul').slideToggle();
	  //			$(this).toggleClass('active');			

	  if($(this).hasClass('active')) {
		$(this).attr('title', '접기');
		$(this).removeClass('active').next('ul').removeClass('active');
	  } else {
		$(this).attr('title', '펼치기');
		$(this).addClass('active').next('ul').addClass('active');
	  }

	});
  };

  /*******************************************************
	* Common - 서브페이지 탭키 이동시 포커스
	*******************************************************/
  var subTabMove = function() {		
	$(window).load(function () {

	  // 로고, 통합검색 포커스 이동시 대메뉴 닫기 //
	  $('.head_logo a, .openSearch').on('focus', function() {
		gnbRemoveClass1();
	  });

	  // 페이지 네비게이션 포커스 이동시 즐겨찾기, SNS공유 레이어 닫기 //
	  $('.pageNavigationBtn').on('focus', function() {
		$('.box_sub_favo, .box_sub_share').slideUp();
	  });

	  // 즐겨찾기 포커스 이동시 페이지네비게이션 닫기 //
	  $('.sub_navi li.home a, .sub_favo').on('focus', function() {
		$('.pageNavigation, .box_sub_share').slideUp();
	  });

	  // SNS 공유하기 포커스 이동시 즐겨찾기 레이어 닫기 //
	  $('.sub_share').on('focus', function() {
		$('.pageNavigation, .box_sub_favo').slideUp();
	  });

	  // 프린터 포커스 이동시 즐겨찾기, SNS공유, 페이지네비게이션 닫기 //
	  $('.sub_print').on('focus', function() {
		$('.pageNavigation, .box_sub_favo, .box_sub_share').slideUp();
	  });

	  // 카피라이트 페이스북, 전화번호 포커스 이동시 주요사이트 바로가기 닫기 //
	  $('address a, .faceBook').on('focus', function() {
		$('.wrap_site_link .item ul').slideUp();
	  });
	});
  };

  return {

	// get JS Parameter
	scriptQuery: scriptQuery(),

	// Remove Css
	removeCss: removeCss(),

	// GNB
	gnbCommon: gnbCommon(),

	gnb: function () {
	  var windowSize = $(window).width() + getScrollBarWidth();

	  if (windowSize < 1351) {
		gnbMobile();
	  } else {
		gnbPc();
	  }
	},		

	// Sub Menu Text
	setMenuText: setMenuText(),

	// Sub Menu Nav
	getMenuText: getMenuText(),
	getMenuList: getMenuList(),
	setMenuList: setMenuList(),

	// Sns Toggle
	snsToggle: snsToggle(),

	// Sns Share
	snsShare: snsShare(),

	// Table Scroll
	//tableScroll: tableScroll(),

	// Sub Visual
	subVisual: subVisual(),

	// Tab Size
	tabSize: tabSize(),

	// Sub Favorite
	subFavorite: subFavorite(),

	// Sub Menu List
	subMenuList: subMenuList(),

	// Page Arrow
	pageArrow: pageArrow(),

	// Go to top
	gotoTop: gotoTop(),

	// Print
	printElement: printElement(),

	// editMode
	editMode: editMode(),

	// Language //
	openLanguage: openLanguage(),

	// 통합검색 //
	openSearch: openSearch(),

	// 주요사이트 바로가기 //
	openMainSite: openMainSite(),

	// 탭키 이동시 각종 조작 //
	subTabMove: subTabMove(),
  }

})();

window.addEventListener('load', function (e) { k2Func.gnb(); });
window.addEventListener('resize', function (e) { k2Func.gnb(); });

$(document).ready(function() {
  // div_2 감싸기 //
  //	$('.div_2').wrapInner('<div class="div_2_inner"/>');
  
  // table_m, mapWrap 커버없애기 //
  $('.table_1').on('click', function() {
	$(this).addClass('on');
  });
  
});
$(window).scroll(function() {
  var scrollCurrent = $(document).scrollTop();
  if(scrollCurrent > 0) $('body').addClass('fix');
  else $('body').removeClass('fix');
});


// 즐겨찾기 //
function favoriteGetCookie(url) {
  var allCookies = decodeURIComponent(document.cookie);
  var pos = allCookies.indexOf(url); // pos가 -1 이면 해당 쿠키가 없다.   
  if (pos == -1) return false;
  else return true;
}
function favoriteSetCookie(navi) {
  var currentUrl = location.href;
  var ret = favoriteGetCookie(currentUrl);
  if (ret) {
	alert('이미 즐겨찾는 메뉴로 등록되어 있습니다.');
	favoriteGetCookieList();
  } else {
	var menuCnt = favoriteGetMenuCookieNumber();
	if (menuCnt > 5) {
	  alert('더 이상 등록 할수 없습니다.');
	} else {
	  var menu = 'menu' + menuCnt;
	  var name = navi + '@';
	  var todayDate = new Date();
	  todayDate.setDate(todayDate.getDate() + 1);
	  document.cookie = encodeURIComponent(menu) + "=" + encodeURIComponent(name + currentUrl) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	  favoriteGetCookieList();
	}
  }
}
function favoriteGetCookieList() {
  var currentPage = location.href;
  var ret = favoriteGetCookie(currentPage);
  if (ret) {
	$('.favoriteTitle').html('<strong>이미 즐겨찾는 메뉴로 등록되어 있습니다.</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
	$(".box_sub_favo .control button.add").hide();
  } else {
	$('.favoriteTitle').html('<strong>현재 페이지를 즐겨찾는 메뉴로 등록하시겠습니까?</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
	$(".box_sub_favo .control button.add").show();
  }
  var allCookies = decodeURIComponent(document.cookie);
  var strCnt = 4;
  var favoListHtml = "";
  for (var i=1; i<6; i++) {
	var name = "";
	name = 'menu' + i;
	var pos = allCookies.indexOf(name + "="); // pos가 -1 이면 해당 쿠키가 없다.   
	if (pos > -1) {
	  var start = pos + strCnt + 1;
	  var end = allCookies.indexOf(";", start);
	  if (end == -1) end = allCookies.length;
	  var value = allCookies.substring(start, end);
	  var idx = value.indexOf("@", 0);
	  var menu = value.substring(1, idx);
	  var menuUrl = value.substring(idx + 1, value.length);
	  favoListHtml += '<li id="menu' + i + '"><a href="' + menuUrl + '">' + menu + '</a><button type="button" onclick="favoriteRemoveCookie(\'menu' + i + '\');" class="del">삭제</button></li>';
	}
  }
  if (favoListHtml != "") {
	if ($('#favoriteList').length < 1) {
	  favoListHtml = '<ul id="favoriteList">' + favoListHtml + '</ul>';
	  $('.box_sub_favo .control').before(favoListHtml);
	} else {
	  $('#favoriteList').empty().append(favoListHtml);
	}
	$('.box_sub_favo .control button.reset').show();
  } else {
	$('#favoriteList').remove();
	$('.box_sub_favo .control button.reset').hide();
  }
}
function favoriteGetMenuCookieNumber() {
  var allCookies = decodeURIComponent(document.cookie);
  var cnt = 1;
  var name = 'menu' + cnt;
  var strCnt = name.length;
  for (var i = 1; i < 6; i++) {
	var pos = allCookies.indexOf(name + "="); // pos가 -1 이면 해당 쿠키가 없다.   
	if (pos <= -1) {
	  if (i == 1) {
		return 1;
	  } else {
		return cnt;
	  }
	} else {
	  cnt++;
	  name = "";
	  name = 'menu' + cnt;
	}
  }
  return cnt;
}
function favoriteRemoveCookie(menu) {
  document.cookie = encodeURIComponent(menu) + "=" + " " + "; path=/; max-age=" + (0);
  //	document.getElementById(menu).innerHTML = "";
  $('#' + menu).remove();
  favoriteGetCookieList();
  $('.btnFavorite').focus();	// ie11 때문에 포커스를 강제로 이동
}
function favoriteRemoveCookieAll() {
  var name = "menu";
  for (var i = 1; i < 6; i++) {
	name += i;
	document.cookie = encodeURIComponent(name) + "=" + " " + "; path=/; max-age=" + (0);
	name = "menu";
  }
  //	$('#menu1, #menu2, #menu3, #menu4, #menu5').html("");	
  $('.favoriteTitle').html('<strong>현재 페이지를 즐겨찾는 메뉴로 등록하시겠습니까?</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
  $('#favoriteList').remove();
  $('.box-sub-favo .control button.reset').hide();
  $(".box-sub-favo .control button.add").show();
}
