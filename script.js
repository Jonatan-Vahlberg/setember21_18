$(document).ready(function(){
    $('#ham, #ex').click(function(){
        $('#ham, #ex').toggle();
        $('#linkBox').toggleClass('visible');
    });
});