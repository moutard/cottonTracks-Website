function ExtInstall() {
	var paragraphs = document.getElementsByTagName('p');
	for (i=0; i<paragraphs.length; i++){
		if (paragraphs[i].hasAttribute("ct-id")){
			chrome.app.isInstalled = true;
			break;
		}
	}
	if (chrome.app.isInstalled) 
  	alert("already installed!");
  else{
  	chrome.webstore.install();
		IsInstalled();
	}
}
function IsInstalled(){
	var appInstalled = false;
	var paragraphs = document.getElementsByTagName('p');
	for (i=0; i<paragraphs.length; i++){
		if (paragraphs[i].hasAttribute("ct-id")){
			appInstalled = true;
			break;
		}
	}
	
	if (appInstalled){
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".download-button { display: none; } .download-button-opera { display: none; } .installed-button{ display: inline;}";
		document.body.appendChild(css);
	}
	else
		window.addEventListener('install', function(){ 
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".download-button { display: none; } .download-button-opera { display: none; } .installed-button{ display: inline;}";
			document.body.appendChild(css);
		});
}