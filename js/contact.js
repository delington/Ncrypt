function phone() {
	var call = new MozActivity({name: "dial", data: {number: "+36302483737"}});
}

function sms2() {
	var sms = new MozActivity({
		name: "new",
		data: {
				type: "websms/sms",
				number: "+36302483737"
		}
	});
}

function email2() {
	var call = new MozActivity({name: "new", data: {type: "mail"}});
}

function share2() {
	var sharing = new MozActivity({
		name: "share",
		data: {
				//type: "url", // Possibly text/html in future versions,
				number: 1,
				url: "www.twitter.com"
		}
	});
}