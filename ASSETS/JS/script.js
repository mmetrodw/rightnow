(function( $ ){

  $.fn.tooltip = function( options ) {  

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
      'location'         : 'top',
      'background-color' : 'blue'
    }, options);

    return this.each(function() {        

      // Тут пишем код плагина tooltip

    });

  };
})( jQuery );