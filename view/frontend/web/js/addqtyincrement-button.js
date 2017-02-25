require(['jquery', 'jquery/ui'], function($) {
    var insertHTML = "<div class='control qty'>";
    insertHTML += "<button type='button' class='dec button cart' ref='1'>-</button>";
    insertHTML += "<input type='number' name='qty' id='qty' maxlength='12' value='1' title='Qty' class='input-text qty listed'/>"
    insertHTML += "<button type='button' class='inc button cart' ref='1'>+</button>";
    insertHTML += "</div>";

    $('button.action.tocart.primary').before(insertHTML).addClass('inc');
});