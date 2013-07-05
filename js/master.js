$( function () {
	$('.master').on( 'change', function () {
		$('input[type=checkbox]:not(.master)').each( function () {
			$(this).prop('checked', !$(this).prop('checked'));
		});
	})
});