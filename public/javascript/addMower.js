console.log('salut')

$('#AddMower').click(function(e) {
    e.preventDefault();
    $('.mowers').append("<div class='mower'> " +
        "                    <input type=\"number\" name=\"mowers[X]\" value=\"1\">\n" +
        "                    <input type=\"number\" name=\"mowers[Y]\" value=\"1\">\n" +
        "                    <input type=\"text\" name=\"mowers[Cardinal]\" value=\"N\">\n" +
        "                    <input type=\"text\" name=\"mowers[Moovement]\" value=\"A\">" +
        "                    <button class='dismissMower'> Dismiss that mower</button>" +
        "               </div>")


    $('.dismissMower').click(function(e) {
        e.preventDefault();

        if($('.dismissMower').length > 1) {
            $(this).parent().remove();
        }

    });
});


$('.dismissMower').click(function(e) {
    e.preventDefault();
});