(function($) {

	"use strict";

//    var startDate = new Date();
//    startDate = startDate.getTime();
//    var endDate = new Date();
//    endDate = endDate.getTime();
//
//    var dateNow = new Date();
//    var actualDate = ( dateNow.getYear() < 10 ? '0' + dateNow.getYear() : dateNow.getYear() )
//        + '-' + ( dateNow.getMonth() < 10 ? '0' + dateNow.getMonth() : dateNow.getMonth() )
//        + '-' + ( dateNow.getDay() < 10 ? '0' + dateNow.getDay() : dateNow.getDay() );

    var options = {
        first_day: 1,
        language: 'ru-RU',
        events_source: 'json/events.json',
//        events_source: [
//            {
//                "id": 295,
//                "title": "Сортировка и избавление от ненужных вещей",
//                "url": "http://example.com",
//                "class": "event-important",
//                modal: "#events-modal",
//                modal_type : "iframe",
//                modal_title : function (e) { return e.title },
//                "start": dataFrom.getTime(), // Milliseconds
//                "end": dataTo.getTime() // Milliseconds
//            }
//        ],
		view: 'month',
		tmpl_path: 'tmpls/',
		tmpl_cache: false,
		day: 'now',
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');

			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a href="' + val.url + '">' + val.title + '</a>')
					.appendTo(list);
			});
		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

    var calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});

	$('#events-in-modal').change(function(){
		var val = $(this).is(':checked') ? $(this).val() : null;
		calendar.setOptions({modal: val});
	});
	$('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
		//e.preventDefault();
		//e.stopPropagation();
	});

    // Checkbox
//    $("[name='my-checkbox']").bootstrapSwitch();

}(jQuery));