$(document).ready(function() {

  /* 관련사이트 */
  var shortcuts1 = '';
  shortcuts1 += '<div class="siteList siteList_1 siteLink_a_1">';
  shortcuts1 += '<div class="item_1">';
  shortcuts1 += '<ul>';
  shortcuts1 += '<li><a href="https://sanhak.tukorea.ac.kr/" target="_blank" title="새창">산학협력단</a></li>';
  shortcuts1 += '<li><a href="http://dorm.tukorea.ac.kr" target="_blank" title="새창">생활관, 기술혁신파크(TIP)</a></li>';
  shortcuts1 += '<li><a href="http://student.tukorea.ac.kr" target="_blank" title="새창">학생서비스</a></li>';
  shortcuts1 += '<li><a href="http://counsel.tukorea.ac.kr" target="_blank" title="새창">학생상담센터</a></li>';
  shortcuts1 += '<li><a href="http://asis.tukorea.ac.kr/job/index.do" target="_blank" title="새창">대학일자리플러스센터</a></li>';
  shortcuts1 += '<li><a href="http://asis.tukorea.ac.kr/global/index.do" target="_blank" title="새창">국제교류</a></li>';
  shortcuts1 += '<li><a href="http://news.tukorea.ac.kr" target="_blank" title="새창">학보사</a></li>';
  shortcuts1 += '<li><a href="http://icee.tukorea.ac.kr" target="_blank" title="새창">공학교육혁신센터</a></li>';
  shortcuts1 += '<li><a href="http://dual.tukorea.ac.kr/" target="_blank" title="새창">일학습병행사업단</a></li>';
  shortcuts1 += '<li><a href="http://ctl.tukorea.ac.kr" target="_blank" title="새창">교수학습개발센터</a></li>';
  shortcuts1 += '<li><a href="http://itp.tukorea.ac.kr" target="_blank" title="새창">공학최고경영교육원(ITP)</a></li>';
  shortcuts1 += '<li><a href="http://startup.tukorea.ac.kr/" target="_blank" title="새창">창업지원본부</a></li>';
  shortcuts1 += '<li><a href="http://homepage.tukorea.ac.kr/dorm/2665/subview.do" target="_blank" title="새창">TUKOREA아트센터</a></li>';
  shortcuts1 += '<li><a href="https://family.tukorea.ac.kr/" target="_blank" title="새창">가족회사종합지원센터</a></li>';
  shortcuts1 += '<li><a href="https://library.tukorea.ac.kr/" target="_blank" title="새창">도서관</a></li>';
  shortcuts1 += '<li><a href="http://language.tukorea.ac.kr" target="_blank" title="새창">커뮤니케이션교육센터</a></li>';
  shortcuts1 += '<li><a href="http://lifelong.tukorea.ac.kr/" target="_blank" title="새창">평생교육원</a></li>';
  shortcuts1 += '<li><a href="http://asis.tukorea.ac.kr/global/index.do" target="_blank" title="새창">국제교육센터</a></li>';
  shortcuts1 += '<li><a href="http://larc.tukorea.ac.kr" target="_blank" title="새창">교양교육운영센터</a></li>';
  shortcuts1 += '<li><a href="http://give.tukorea.ac.kr" target="_blank" title="새창">발전기금본부</a></li>';
  shortcuts1 += '<li><a href="http://ceei.tukorea.ac.kr/" target="_blank" title="새창">성과관리인증센터</a></li>';
  shortcuts1 += '</div>';
  shortcuts1 += '</div>';

  $('.siteLink > .container').append(shortcuts1);


  $('.siteLink > .container > .btns > a').on('click', function(e) {
	var idx = $('.siteLink > .container > .btns > a').index($(this));
	var clsNm = $(this).attr('id');

	if($('.' + clsNm).css('display') == "block") {
	  $('.siteLink > .container > .btns > a').removeClass('active').attr('title','펼치기');
	  $('.siteLink .siteList').removeClass('active');
	} else {
	  $('.siteLink > .container > .btns > a').removeClass('active').attr('title','펼치기');
	  $('.siteLink .siteList').removeClass('active');
	  $(this).attr('title', '접기').addClass('active');
	  $('.' + clsNm).addClass('active');
	}
  });

  /* copyright 바로가기 + SNS */
  $('.fnb .goPrivacy').attr('title', '개인정보처리방침 새창').attr('target', '_blank').attr('href','/tukorea/1054/subview.do');
  $('.fnb .goEtc').attr('title', '개인정보 목적외 이용·제공대장 새창').attr('target', '_blank').attr('href','/tukorea/1055/subview.do');
  $('.fnb .goInfo').attr('title', '정보보호실천수칙 새창').attr('target', '_blank').attr('href','/tukorea/1056/subview.do');
  $('.fnb .goRemote').attr('title', '원격지원 새창').attr('target', '_blank').attr('href','https://113366.com');

  $('.foot_sns .goFacebook').attr('title','페이스북 새창').attr('target','_blank').attr('href','https://www.facebook.com/TUKoreaOfficial');
  $('.foot_sns .goInstagram').attr('title','인스타그램 새창').attr('target','_blank').attr('href','https://www.instagram.com/tukorea_official/');
  $('.foot_sns .goYoutube').attr('title','유튜브 새창').attr('target','_blank').attr('href','https://www.youtube.com/channel/UCftGmHlv_6_9fqSlElPhNmQ');
  $('.foot_sns .goNaverBlog').attr('title','네이버 블로그 새창').attr('target','_blank').attr('href','http://blog.naver.com/kpu_iphak');

  $('.foot_address address .addr').text('15073 경기도 시흥시 산기대학로 237 (정왕동) 한국공학대학교');
  $('.foot_address address .tel').text('TEL : 031-8041-1000');
  $('.foot_address address .fax').text('FAX : 031-8041-1000');

});
