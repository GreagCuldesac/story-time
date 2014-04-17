
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
        this.position = $(window).scrollTop();
        this.init();
    }

    Plugin.prototype = {

        init: function() {

        }
    };
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );