$(document).ready(function() {
    var $dragging = null;
    $('body').on("mousedown", "div", function(e) {
        $(this).attr('unselectable', 'on').addClass('draggable');
        var el_w = $('.draggable').outerWidth(),
            el_h = $('.draggable').outerHeight();
        $('body').on("mousemove", function(e) {
            if ($dragging) {
                $dragging.offset({
                    top: e.pageY - el_h / 2,
                    left: e.pageX - el_w / 2
                });
            }
        });
        $dragging = $(e.target);
    }).on("mouseup", ".draggable", function(e) {
        $dragging = null;
        $(this).removeAttr('unselectable').removeClass('draggable');
    });
});

//drag and drop code//

