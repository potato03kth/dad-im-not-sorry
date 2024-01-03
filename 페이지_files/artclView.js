$(function() {
	document.title = document.title + ' - ' + $(".artclViewTitle").text();
	$("._articleBasic").on("contextmenu", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});
	$("._articleBasic").on("dragstart", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});
	$("._articleBasic").on("selectstart", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});

	$(".artclViewHead .left").find(" > dl:first").addClass("_first");
	$(".artclViewHead .left").find(" > dl:last").addClass("_last");
	$(".artclViewHead .right").find(" > dl:first").addClass("_first");
	$(".artclViewHead .right").find(" > dl:last").addClass("_last");

	$( "#rgsBgnde" ).datepicker({
		inline: true,
		dateFormat: "yy.mm.dd",
		prevText: 'PREV',
		nextText: 'NEXT',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		showOtherMonths: true,
		selectOtherMonths: true,
		//showOn: "button",
		//buttonImage: "",
		//buttonImageOnly: true,
		minDate: '-30y',
		closeText: 'X',
		currentText: 'TODAY',
		showMonthAfterYear: true,
		monthNames : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 
		monthNamesShort : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],  
		//dayNames : ['일', '월', '화', '수', '목', '금', '토'],
		//dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
		//dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
		showAnim: 'slideDown', 
		/* onClose: function( selectedDate ) {
			$( "#rgsEndde" ).datepicker( "option", "minDate", selectedDate );
		}, */
		onSelect: function( selectedDate ) {
			$( "#rgsEndde" ).datepicker( "option", "minDate", selectedDate );
			$( "form[name='searchForm']" ).submit();
		}
	});
	if( $( "#rgsBgnde" ).val() != "" ) {
		$( "#rgsEndde" ).datepicker( "option", "minDate", $( "#rgsBgnde" ).val() );
	}

	$( "#rgsEndde" ).datepicker({
		inline: true, 
		dateFormat: "yy.mm.dd",
		prevText: 'PREV',
		nextText: 'NEXT',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		showOtherMonths: true,
		selectOtherMonths: true,
		//showOn: "button",
		//buttonImage: "img/calendar03.gif",
		//buttonImageOnly: true,
		minDate: '-30y',
		closeText: 'X',
		currentText: 'TODAY',
		showMonthAfterYear: true,
		monthNames : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 
		monthNamesShort : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],  
		//dayNames : ['일', '월', '화', '수', '목', '금', '토'],
		//dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
		//dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
		showAnim: 'slideDown',
		/* onClose: function( selectedDate ) {
			$( "#rgsBgnde" ).datepicker( "option", "maxDate", selectedDate );
		}, */
		onSelect: function( selectedDate ) {
			$( "#rgsBgnde" ).datepicker( "option", "maxDate", selectedDate );
			$( "form[name='searchForm']" ).submit();
		}
	});
	if( $( "#rgsEndde" ).val() != "" ) {
		$( "#rgsBgnde" ).datepicker( "option", "maxDate", $( "#rgsEndde" ).val() );
	}

	$("a[onclick*='jf_viewArtcl('], a[onclick*='jf_searchArtcl(']").click(function(event) {
		event.preventDefault();
	});
});

function page_link(page) {
	$( "form[name='pageForm'] input[id='page']" ).val( page );
	$( "form[name='pageForm']" ).submit();
}

function jf_searchArtcl(id, val) {
	//event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	$( "form[name='searchForm'] input[id='" + id + "']" ).val( val );
	$( "form[name='searchForm']" ).submit();
}

function jf_viewArtcl(siteId, fnctNo, bbsArtclSeq) {
	//event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	var url = kurl( '/bbs/' + siteId + "/" + fnctNo + "/" + bbsArtclSeq + "/artclView" );
	$( "form[name='viewForm']" ).attr( "action", url );
	$( "form[name='viewForm']" ).submit();
}

function jf_afterPasswordChckSubmit(password, submitUrl) {
	unblockUI();
	$( "form[name='listForm'] input[name='password']" ).val( password );
	$( "form[name='listForm']" ).attr( "action", submitUrl );
	$( "form[name='listForm']" ).submit();
}

function jf_artclBlindStatusChange(siteId, fnctNo, bbsArtclSeq, blindYn) {
	var message = "";
	var changeBlindYn = "";
	if( blindYn == "Y" ) {
		message += ktext( "msg.this.be", "", "k2web.record,k2web.print5" )+"<br/>"+ktext( "msg.doQuestion2", "", "k2web.blind.clear" );
		changeBlindYn = "N";
	} else {
		message += ktext( "msg.this.be", "", "k2web.record,k2web.record.unesposed" )+"<br/>"+ktext( "msg.doQuestion2", "", "k2web.blind.handling" );
		changeBlindYn = "Y";
	}

	confirm( message,
			 function() {
				$.ajax({
					type:"post",
					url:kurl( '/bbs/' + siteId + '/' + fnctNo + '/' + bbsArtclSeq + '/artclBlindStatusChange' ),
					async:false,
					cache:false,
					success:function(r) {
						$( "#blindChangeBtn" ).attr( "onclick", "jf_artclBlindStatusChange('" + siteId + "', '" + fnctNo + "', '" + bbsArtclSeq + "', '" + changeBlindYn + "')" );
						if( blindYn == "Y" ) {
							$( "#blindChangeBtn" ).val( ktext( "k2web.blind.handling", "", "" ) );
						} else {
							$( "#blindChangeBtn" ).val( ktext( "k2web.blind.clear", "", "" ) );
						}
						alert( r.message );
					}
				});
			 },
			 function() {}
	);
}

function jf_SNS(title, targetUrl, sns) {
	var popUrl = "";
	var domain = document.domain;
	if( sns == "TWITTER" ) {
		popUrl = "http://twitter.com/share?text="+encodeURIComponent(title)+"&url="+encodeURIComponent(domain+targetUrl);
	} else if( sns == "FACEBOOK" ) {
		popUrl = "http://www.facebook.com/sharer.php?t="+encodeURIComponent(title)+"&u="+encodeURIComponent(domain+targetUrl);
	}
	window.open( popUrl, sns );
}

function jf_afterBlockSubmit( submitUrl ) {
	unblockUI();
	$( "form[name='listForm']" ).attr( "action", submitUrl );
	$( "form[name='listForm']" ).submit();
}

function jf_artclRecomend(siteId, fnctNo, bbsArtclSeq, recomendTy) {
	if(recomendTy=='Y'){
		var msg = ktext( "msg.at.doQuestion", "", "k2web.thisRecord,k2web.recommendation" );
	}else{
		var msg = ktext( "msg.at.doQuestion", "", "k2web.thisRecord,k2web.nonrecommendation" );
	}
	confirm( msg,
			 function() {
				var actionUrl = kurl( '/bbs/' + siteId + "/" + fnctNo + "/" + bbsArtclSeq + "/artclRecomend" );
				$.ajax({
					type:"post",
					url:actionUrl,
					data:{
						"recomendTy":recomendTy
					},
					async:false,
					cache:false,
					success:function(r) {
						alert( r.message );
					}
				});
			 },
			 function() {}
	);
}

function jf_commentRecomend(siteId, fnctNo, bbsArtclSeq, bbsCommentSeq, recomendTy, obj) {
	if(recomendTy=='Y'){
		var msg = ktext( "msg.at.doQuestion", "", "k2web.thisRecord,k2web.recommendation" );
	}else{
		var msg = ktext( "msg.at.doQuestion", "", "k2web.thisRecord,k2web.nonrecommendation" );
	}
	confirm( msg,
			 function() {
				var actionUrl = kurl( '/bbs/' + siteId + "/" + fnctNo + "/" + bbsArtclSeq + "/commentRecomend" );
				$.ajax({
					type:"post",
					url:actionUrl,
					data:{
						"bbsCommentSeq":bbsCommentSeq,
						"recomendTy":recomendTy
					},
					async:false,
					cache:false,
					success:function(r) {
						$(obj).val(r.val);
						alert( r.message );
					}
				});
			 },
			 function() {}
	);
}

function jf_artclDelete(siteId, fnctNo, bbsArtclSeq) {
	confirm( ktext( "msg.at.doQuestion", "", "k2web.thisRecord,k2web.delete" ),
			 function() {
				var submitUrl = kurl( "/bbs/" + siteId + "/" + fnctNo + "/" + bbsArtclSeq + "/artclTrash" );
				$( "form[name='listForm']" ).attr( "action", submitUrl );
				$( "form[name='listForm']" ).submit();
			 },
			 function() {}
	);
}

function jf_artclUpdt(siteId, fnctNo, bbsArtclSeq) {
	var submitUrl = kurl( "/bbs/" + siteId + "/" + fnctNo + "/" + bbsArtclSeq + "/artclUpdtView" );
	$( "form[name='listForm']" ).attr( "action", submitUrl );
	$( "form[name='listForm']" ).submit();
}

function jf_naviArtclView(siteId, fnctNo, naviBbsArtclSeq) {
	var submitUrl = kurl( "/bbs/" + siteId + "/" + fnctNo + "/" + naviBbsArtclSeq + "/artclView" );
	$( "form[name='listForm']" ).attr( "action", submitUrl );
	$( "form[name='listForm']" ).submit();
}

function jf_commentDelete(siteId, fnctNo, bbsCommentSeq) {
	confirm( ktext( "msg.at.doQuestion", "", "k2web.thisReply,k2web.delete" ),
			 function() {
				var submitUrl = kurl( "/bbs/" + siteId + "/" + fnctNo + "/" + bbsCommentSeq + "/commentDelete" );
				$( "form[name='commentForm']" ).attr( "onsubmit", "" );
				$( "form[name='commentForm']" ).attr( "action", submitUrl );
				$( "form[name='commentForm']" ).submit();
			 },
			 function() {}
	);
}

function jf_answerDelete() {
	confirm( ktext( "msg.at.doQuestion", "", "k2web.thisAnswer,k2web.delete" ),
			 function() {
				$( "form[name='answerForm'] ").attr( "onsubmit", "" );
				$( "form[name='answerForm']" ).submit();
			 },
			 function() {}
	);

	return false;
}

function deleteArtclList(siteId, fnctNo, obj){
	var viewForm = $(obj).closest("._fnctWrap").find("form[name='viewForm']");
	var url = kurl("/bbs/" + siteId + "/" + fnctNo + "/deleteArtclList");
	if($(viewForm).find("input[class='deleteArtclSeqs']:checked").length == 0){
		alert(ktext("msg.deleteValue.select"));
		return;
	}
	$(viewForm).attr("action", url);
	$(viewForm).submit();
}

function ntcnMssageChk() {
	if( $( "#ntcnMssage" ).size() > 0 ) {
		confirm( $( "#ntcnMssage" ).val(), function(){
			$("form[name='registForm']").attr("onsubmit", "");
			$("form[name='registForm']").submit();
		},function(){});
	}else{
		$("form[name='registForm']").attr("onsubmit", "");
		$("form[name='registForm']").submit();
	}
}

function copyUrl(btn, url){
	var protocol = location.protocol;
	var hostName = location.hostname;
	var port = location.port;
	if(port==null || ''==port){
		port="";
	}else{
		port=":"+port;
	}

	var copyLink = protocol+"//"+hostName+port+url;
	var textarea = document.createElement('textarea');
	textarea.value = copyLink;

	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	alert("복사되었습니다.", function() {
		btn.focus();
	});
}
