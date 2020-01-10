$(".burger").click(function(){
	$("ul").slideToggle();
});

$("#btn").click(function(){
	$(".form").toggleClass("display", "none");
});

function disp(form) {
        if (form.style.display == "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
              

                      $.ajax({
                     'type':'POST',
                     'url':'mail.php'
            });
        }
    }


$(window).resize(function(){
	if($(window).width() > 768 ){
		$("ul").removeAttr("style");
	}
});