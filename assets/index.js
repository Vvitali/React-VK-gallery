(function(){

	function httpGet(theUrl){
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", theUrl, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	}
	VK.init({
		apiId: "6450788"
	});

	var data = httpGet("https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.74");
	console.log(data)

})()