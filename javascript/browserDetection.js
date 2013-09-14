function BrowserAdapation(){
	var userAgent = navigator.userAgent;
	var browser;
	
	if (userAgent.search("OPR")>0)
		browser = "Opera";
  else if (userAgent.search("Chrome")>0)
  	browser = "Chrome";
		
	if (browser == "Opera"){
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".download-button { display: none; } .download-button-opera{ display: block;} .opera-link{ display: none; } .download-links{ height: 40px; padding-top: 9px;}";
		document.body.appendChild(css);
		for(i=0; i<document.getElementsByClassName('chrome-link').length; i++)
			document.getElementsByClassName('chrome-link')[i].innerHTML="Get the Chrome version";
	}
	else if (browser != "Chrome"){
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".download-button { display: none; } .download-button-default{ display: block;} .chrome-link{ display: none; } .download-links{ height: 40px; padding-top: 9px;}";
		document.body.appendChild(css);
	}
}