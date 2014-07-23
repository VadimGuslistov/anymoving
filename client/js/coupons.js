$(function() {
    toggleSection();
    tabs();
    steps();
    more();
});

var time = 400;

function toggleSection() {
    $('.toggle').click(function() {
        var $this = $(this),
            item = $this.closest('.item');

        if(item.hasClass('open')) {
            $('.item').removeClass('open').find('.expand').slideUp(time);
            return false;
        }

        $('.item').removeClass('open').find('.expand').slideUp(time);
        item.addClass('open').find('.expand').slideDown(time);

        return false;
    });
}

function tabs() {
    $('#tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('.coupons .coupon-block').stop().fadeOut(time);
    });

    $('#tabs a:last').tab('show');
}

function steps() {
    $('.steps .accordion-toggle').click(function() {
        var $this = $(this),
            href = $this.attr('href'),
            index = $this.closest('.accordion-group').index();

        $(href).find('.accordion-inner').jScrollPane();

        $('.coupons .coupon-block').stop().fadeOut(time);

        if(!$this.hasClass('collapsed')) {
            setTimeout(function() {
                $('.coupons .coupon-block').eq(index).fadeIn(time);
            }, time);
        }
    });

    $('.accept').click(function() {
        var $this = $(this),
            parent = $this.closest('.accordion-inner');

        if(!$this.hasClass('check') && !$this.hasClass('finish')) {
            $('.step:visible', parent).stop().slideUp(time, function() {
                $(this).next().stop().slideDown(time);
            });
        } else {
            if(!checkFields($('.by-card input', parent)) && !$this.hasClass('finish')) {
                $('.step:visible', parent).stop().slideUp(time, function() {
                    $(this).next().stop().slideDown(time);
                });
            }
        }

        return false;
    });

    $('.deny').click(function() {
        var $this = $(this),
            parent = $this.closest('.accordion-inner');

        $('.step:visible', parent).stop().slideUp(time, function() {
            $('.step', parent).first().slideDown(time);
        });

        $('.by-card input').removeClass('error');

        $(this).closest('.accordion-group').find('.accordion-toggle').click();

        return false;
    });

    $('.no-card').click(function() {
        var $this = $(this),
            parent = $this.closest('.accordion-inner');

        $('.step:visible', parent).stop().slideUp(time, function() {
            $('.step.sms', parent).slideDown(time);
        });

        return false;
    });
}

function checkFields(input) {
    var error = 0;

    input.each(function() {
        if($(this).val() == '') {
            $(this).addClass('error');
            error = 1;
        } else {
            $(this).removeClass('error');
        }
    });

    return error;
}

function more() {
    $('.coupons .accordion').each(function() {
        $(this).find('.accordion-group').not(':eq(0), :eq(1)').hide();
    });

    $('.coupon-block .more').click(function() {
        $(this).closest('.coupon-block').find('.accordion-group:hidden').slideDown(time);
        $(this).hide();

        return false;
    });
}