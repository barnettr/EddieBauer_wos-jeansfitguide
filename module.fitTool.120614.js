(function (jQuery) {

    var methods = {
        init: function (options) {
            return this.each(function () {
                var $this = $(this);
                var settings = $this.data('fitTool');

                if (typeof (settings) == 'undefined') {

                    var defaults = {
                        propertyName: 'value',
                        value: '',
                        hidden: false,
                        initialText: null,
                        onSomeEvent: function () { },
                        clickCallback: function () { }
                    }

                    settings = jQuery.extend({}, defaults, options);
                    $this.data('fitTool', settings);

                } else {

                    settings = jQuery.extend({}, settings, options);
                }
                var $nav_on = $(".dashboard #button-front, .dashboard #button-front2, .dashboard #button-front3, .dashboard #button-front4, .dashboard #button-front5, .dashboard #button-front6");
                $nav_on.addClass('nav_on');
                // run code here
            });
        },
        front: function (options) {
            return $(this).each(function (event) {
                var $this = $(this);
                var $thisId = $this.attr('id');
                var $thisNumber = $this.attr('id').substring(5);
                var $thisParent = $this.parents().attr('id');
                var stopDoubleClick = $("div.dashboard div#button-" + $thisId);
                if (!stopDoubleClick.hasClass('nav_on')) {
                    var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber);
                    $nav_off.removeClass('nav_on');
                    var $nav_on = $(".dashboard #button-" + $thisId);
                    $nav_on.addClass('nav_on');

                    var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                    if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                    var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                    $active.addClass('last-active');
                    $next.addClass('active');
                    $active.removeAttr('style').removeClass('active last-active');
                    $next.removeAttr('style');
                } else { return }
            });
        },
        side: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                var $thisId = $this.attr('id');
                var $thisNumber = $this.attr('id').substring(4);
                var $thisParent = $this.parent().attr('id');
                var stopDoubleClick = $("div.dashboard div#button-" + $thisId);
                if (!stopDoubleClick.hasClass('nav_on')) {
                    var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber);
                    $nav_off.removeClass('nav_on');
                    var $nav_on = $(".dashboard #button-" + $thisId);
                    $nav_on.addClass('nav_on');

                    var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                    if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                    var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                    $active.addClass('last-active');
                    $next.addClass('active');
                    $active.removeAttr('style').removeClass('active last-active');
                    $next.removeAttr('style');
                } else { return }
            });
        },
        back: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                var $thisId = $this.attr('id');
                var $thisNumber = $this.attr('id').substring(4);
                var $thisParent = $this.parents().attr('id');
                var stopDoubleClick = $("div.dashboard div#button-" + $thisId);
                if (!stopDoubleClick.hasClass('nav_on')) {
                    var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber + "");
                    $nav_off.removeClass('nav_on');
                    var $nav_on = $(".dashboard #button-" + $thisId);
                    $nav_on.addClass('nav_on');

                    var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                    if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                    var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                    $active.addClass('last-active');
                    $next.addClass('active');
                    $active.removeAttr('style').removeClass('active last-active');
                    $next.removeAttr('style');
                } else { return }
            });
        },
        arrow: function (options) {
            var $this = $(this), $thisId, $thisParent;
            $thisId = $this.attr('id');
            $thisParent = $this.parent().attr('id');
            var $thisParent = $this.parents().attr('id');
            var $substring = $thisId.substring(0, 5);
            if ($substring == "front") {
                var $thisNumber = $thisId.substring(5);
            } else {
                var $thisNumber = $thisId.substring(4);
            }

            var $thisNumber = ($thisId.substring(0, 5) == "front") ? $thisId.substring(5) : $thisId.substring(4);
            var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
            if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
            var $next = $active.next().length ? $active.next() : $("div." + $thisParent + "Wrapper div.carousel li.front");
            var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber);
            $nav_off.removeClass('nav_on');
            var $nav_on = $(".dashboard #button-" + $next.attr('id'));
            $nav_on.addClass('nav_on');

            if ($nav_on.hasClass('nav_on')) {
                $active.addClass('last-active');
                $next.addClass('active');
                $active.removeClass('active last-active');
                $next.removeAttr('style');
            } else { return }
        }
    };

    jQuery.fn.fitTool = function () {
        var method = arguments[0];

        if (methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if (typeof (method) == 'object' || !method) {
            method = methods.init;
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fitTool');
            return this;
        }

        return method.apply(this, arguments);
    }

})(jQuery);