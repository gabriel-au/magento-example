require(['jquery', 'jquery/ui'], function($) {
    $('.inc.button').click(function() {
        var $this = $(this);
        var $input = $this.prev('input');
        var increment = parseInt($this.attr('ref'));;

        if (increment == 0) {
            increment = 1;
        }

        var newValue = parseInt($input.val()) + increment;

        $input.val(newValue);
    });
    $('.dec.button').click(function() {
        var $this = $(this);
        var $input = $this.next('input');
        var increment = parseInt($this.attr('ref'));

        if (increment == 0) {
            increment = 1;
        }

        var newValue = parseInt($input.val()) - increment;

        if (newValue >= 1) {
            $input.val(newValue);
        }
    });
});