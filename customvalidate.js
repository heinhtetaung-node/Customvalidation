
/*
$(document).ready(function(){
	checkall();
});
*/

$('.cusvalidate').keyup(function(){
	
	checkvalidate($(this));
	
});

checkvalidate = function(e){
	var oneerr=false;
	
	if(e.val()==""){
		e.css("border-color", "red");
		e.closest('div').find('.err').html(e.attr('data-val-required'));
		err=true;
		oneerr=true;
		$('#submitbtn').attr('disabled', 'true');
		return false;
	} 
	if(e.attr('data-val-email')){
		
		var email = e.val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
		if (re.test(email)) {
			
			
		} else {
			e.css("border-color", "red");
			e.closest('div').find('.err').html(e.attr('data-val-email'));
			err=true;
			oneerr=true;
			$('#submitbtn').attr('disabled', 'true');
			return false;
		}

	}

	if(e.attr('data-val-count')){
		var count=e.attr('data-val-count');
		var countval = e.val();
		
		if(countval.length<count){
			e.css("border-color", "red");
			e.closest('div').find('.err').html("This field must be at least "+count+" characters");
			oneerr=true;
			err=true;	
			$('#submitbtn').attr('disabled', 'true');
			return false;
		}
		
	}
	
	if(e.attr('data-num')){
		res=!isNaN(parseFloat(e.val())) && isFinite(e.val());
		if(res==false){
			e.css("border-color", "red");
			e.closest('div').find('.err').html("This field must be only number");
			oneerr=true;
			err=true;	
			$('#submitbtn').attr('disabled', 'true');
			return false;
		}
		
	}
	
	if(oneerr==false){	
		e.css("border-color", "");
		e.closest('div').find('.err').html('');	
		$('#submitbtn').removeAttr('disabled');
		return true;
	}
	
}

checkall = function(){
	var err=false;
	$('.cusvalidate').each(function(){
		res=checkvalidate($(this));
		if(res==false){
			err=true;
		}
	});
	
	if(err==true){
		return false;
	}
}
