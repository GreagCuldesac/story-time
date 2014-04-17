
;(function ( $, window, document, undefined ) {

    var pluginName = "storyTime",
        defaults = {
            speed: 0.2
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;
        this.storyHeight = $('#para').height();
        this.timeToScroll = this.calculateTime(this.storyHeight);
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            $(this.element).animate({
                scrollTop: this.storyHeight
            },this.timeToScroll);
        },
        //TODO : Make a function to base speed off something like difficulty
        calculateTime : function(height){
            return height * 50;
        },
        stopAnimation: function(){
            $(this.element).stop();
            console.log("test");
        },
        //Totally wrong.. we need to measure how much we have scrolled before we reassign a speed. because its going to redo the gap over the same time.
        increaseSpeed: function(){
            this.timeToScroll = this.timeToScroll - 10000;
            $(this.element).stop();
            this.init();
            console.log(this.timeToScroll);
        }

    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
            else if ($.isFunction(Plugin.prototype[options])) {
                $.data(this, 'plugin_' + pluginName)[options]();
            }
        });
    }

})( jQuery, window, document );