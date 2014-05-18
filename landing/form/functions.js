(function(){
    $("#submit-contact").click(function() {
 
        var name = $("#name").val();
            email = $("#email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            web = $("#web").val();
            message = $("#message").val();
 
        if (name == "") {
            $("#name").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $("#email").focus();    
            return false;
        }else if(web == ""){
            $("#web").focus();
            return false;
        }else if(message == ""){
            $("#message").focus();
            return false;
        }else{
			$('.ajaxgif').removeClass('hide');
			var datos = 'name='+ name + '&email=' + email + '&web=' + web + '&message=' + message;
			$.ajax({
			    type: "POST",
			    url: "form/process.php",
			    data: datos,
			    success: function() {
			        $('.ajaxgif').hide();
			        $('.msg').text('Message sent!').addClass('msg_ok');  
			    },
			    error: function() {
			        $('.ajaxgif').hide();
			        $('.msg').text('Error!').addClass('msg_error');                 
			    }
			});
			return false;
        }
 
    });
})();