$(function() {
	//분류 DIV 감싸기
	$('.board-cate .cate-now li:nth-child(1)').wrapAll('<div class="solo"></div>')
	$('.board-cate .cate-now li:nth-child(n+2)').wrapAll('<div class="group"></div>');

	//첨부파일 여부 파악
	$('.board-normal .file').each(function(){
		var fileLen = $(this).text();
		var cutLen = fileLen.replace(/ /g,"");
		var numLen = Number(cutLen);

		if(numLen > 0) {
			$(this).addClass('file');
			$(this).text("첨부파일:");
		}
	});

	$("._articleBasic").on("contextmenu", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});
	$("._articleBasic").on("dragstart", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});
	$("._articleBasic").on("selectstart", function(e) {
		return $( "#mouseCtrl" ).size() == 0;
 	});
	$(".artclInfo").find(" > dl:first").addClass("_first");
	$(".artclInfo").find(" > dl:last").addClass("_last");
	$(".artclHeadLine").next().next(".artclList").addClass("useHeadline");

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

function page_link(page) {
	$( "form[name='pageForm'] input[name='page']" ).val( page );
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
	$( "form[name='viewForm'] input[name='password']" ).val( password );
	$( "form[name='viewForm']" ).attr( "action", submitUrl );
	$( "form[name='viewForm']" ).submit();
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