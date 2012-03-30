// JavaScript Document
window.passlength = 6;		//The minimum password lenght

function clean(data)
{
	return data.replace(/^\s*/,"").replace(/\s*$/,"");	
}

$(function(){
	/*Login form submission*/
	$("#log_div #submit").click(function(){
		var emailId = clean($('#log_div #emailid').val());
		var password = clean($('#log_div #pass').val());
		var stay = $('input:checked').length;
		$.get("user_login.php",{ emailId : emailId, password : password, stay : stay }, function(result){
			$("#log_div #login_msg").html(result).css('display','block');
		});
	});
	/*End of Login*/
	/*Registration form submission*/
	$('#reg_div #submit').click(function(){
		var user_data = { fullname : clean($('#reg_div #name').val()), username : clean($('#reg_div #username').val() ) ,
							password1 : clean($('#reg_div #password').val()), college : clean($('#reg_div #colg').val()) ,
							collegeid : clean($('#reg_div #colgid').val()), gender : clean($('#reg_div #gender').val()) ,
							email : clean($('#reg_div #email').val()), city : clean($('#reg_div #city').val()) ,
							state : clean($('#reg_div #state').val()), password2 : clean($('#reg_div #password_ret').val()) };
		$.get("user_regs.php",{ user_data : user_data }, function(result){
			$('#reg_div #regs_msg').html(result).css('display','block');
		});
	});
	/*End of Registration*/
});

/*Log-in Form Validation*/
function ver_email1()
{
	var email = clean($('#log_div #emailid').val());
	$.get('validate.php',{ emailid : email }, function(result){
		$('#log_div #ver_email1').html("<i>"+result+"</i>");
	});
}
/*End of Log-in Form Validation*/

/*Registration Form Validation*/
function ver_uname()
{
	var u_name = clean($('#reg_div #username').val());
	var regex = /^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#\*]*$/g;
	if( !regex.test(u_name) )
		$('#reg_div #ver_usr').html('<i>InValid</i>');
	else
		$.get('validate.php',{u_name : u_name}, function(result){
			$('#reg_div #ver_usr').html(result);
		});
}

function ver_email()
{
	var email = clean($('#reg_div #email').val());
	$.get('validate.php',{ email : email }, function(result){
		$('#reg_div #ver_email').html(result);
	});
}

function ver_pas1()
{
	var pas1 = clean( $('#reg_div #password').val() );
	if( pas1 == null || pas1.length < window.passlength || pas1 == '' )
		$('#reg_div #ver_pas1, #reg_div #ver_pas2 ').html('<i>Minimum '+window.passlength+' characters</i>');
	else
	{
		$('#reg_div #ver_pas1').html('<i>Correct</i>');
		$('#reg_div #ver_pas2').html('<i></i>');
	}
}

function ver_pas2()
{
	var pas1 = clean( $('#reg_div #password').val() );
	var pas2 = clean( $('#reg_div #password_ret').val() );
	var msg;
	if( pas1.length >= window.passlength && pas2.length != 0 )
		msg = ( pas1.substring(0,pas2.length) == pas2 ) ? 'Correct' : 'Incorrect' ;
	else
		msg = ( pas2.length != 0 ) ? 'Minimum '+window.passlength+' characters' : '' ;
	$('#reg_div #ver_pas2').html('<i>'+msg+'</i>');
}

/*End of Registration Form Validation*/