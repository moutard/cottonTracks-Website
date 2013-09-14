function ExtInstall() {
	if (chrome.app.isInstalled) 
  	alert("already installed!");
  else 
  	chrome.webstore.install();
}
function IsInstalled(){
	if (chrome.app.isInstalled){
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".download-button { display: none; } .installed-button{ display: inline;}";
		document.body.appendChild(css);
	}
}