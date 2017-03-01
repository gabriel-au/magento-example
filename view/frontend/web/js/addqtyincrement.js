require(['jquery', 'jquery/ui'], function($) {
    $('.inc.button').click(function(e) {
        e.preventDefault();

        var $this = $(this);
        var $input = $this.prev('input');
        var increment = parseInt($this.attr('ref'));;

        if (increment == 0) {
            increment = 1;
        }

        var newValue = parseInt($input.val()) + increment;

        $input.val(newValue);

        if (!$input.is(':visible')) {
            // var buttonContent = "Add <strong style='font-size:2rem; border: 1px solid white;'>" + newValue + "</strong> to Cart";
            $this.parent().next('.qty.add').find('button > span > strong').html(newValue);
        }
    });
    $('.dec.button').click(function(e) {
        e.preventDefault();

        var $this = $(this);
        var $input = $this.next('input');
        var increment = parseInt($this.attr('ref'));

        if (increment == 0) {
            increment = 1;
        }

        var newValue = parseInt($input.val()) - increment;

        if (newValue < 1) {
            newValue = 1;
        }

        $input.val(newValue);

        if (!$input.is(':visible')) {
            // var buttonContent = "Add <strong style='font-size:2rem; border: 1px solid white;'>" + newValue + "</strong> to Cart";
            $this.parent().next('.qty.add').find('button > span > strong').html(newValue);
        }
    });
    $('.qty.add > button > span').bind("DOMSubtreeModified",function(){
        if ($(this).html() == "Add to Cart") {
            var inputValue = $(this).parent().parent().parent().find('input[name=qty]').val();
            var buttonContent = "Add <strong  class='text-qty-list'>" + inputValue + "</strong> to Cart";

            $(this).html(buttonContent);
        }
    });


    // change(function() {
    //     alert('TEST');
    //     // if ($(this).html() == "Add to Cart") {
    //     //     $(this).css('border', '1px solid red');
    //     // }
    // });
});