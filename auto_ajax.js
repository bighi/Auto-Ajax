$.fn.ajax_submit = function() {
	var callback = $(this).attr('data-callback');
	var url = $(this).attr('action') || $(this).attr('href');
	var update_target = $(this).attr('data-update');
	var append_target = $(this).attr('data-appendTo') || $(this).attr('data-append');
	var prepend_target = $(this).attr('data-prependTo') || $(this).attr('data-prepend');
	console.log($(this).serialize());

	$.ajax( url, {
		data: $(this).serialize(),
		type: "POST",
		dataType: "html",
		context: this,
		success: function(data) {
			console.log('sucesso!');
			

			if (callback) { callback.call(); }
			if (update_target) { $(update_target).html(data); } 
			if (append_target) { $(append_target).append(data); }
			if (prepend_target) { $(prepend_target).prepend(data); }
		},
		error: function(data) {
			console.log(data);
		}
	});
};

$.fn.autoAjax = function() {
	console.log('auto ajax!');
	$(this).ajax_submit();
	return false;
};

$(document).ready(function(){
	$('form[data-remote="auto-ajax"]').live('submit', function(){
		return $(this).autoAjax();
	});

	$('a[data-remote="auto-ajax"], button[data-remote="auto-ajax"]').live('click', function(){
		return $(this).autoAjax();
	});

	$('select[data-remote="auto-ajax"]').live('change', function(){
		return $(this).autoAjax();
	});

});
