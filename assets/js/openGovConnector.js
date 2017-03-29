$(function () {
   
    $(".search-query-btn").click(function () {
        var tempParams = $('.search-query').val();
        sendToOG(tempParams);
    });

    $('.search-query').keydown(function (e) {
        if (e.keyCode == 13) {
            var tempParams = $('.search-query').val();
            sendToOG(tempParams);
        }
    })
});

function sendToOG(in_search_params) {
    var ogUri = "http://tempesandbox.ogopendata.com/dataset?q=";
    var encodedVal = encodeURIComponent(in_search_params);
    window.location = ogUri + encodedVal;
    return false;
}