var user_lang = window.navigator.userLanguage || window.navigator.language;
if(user_lang.match(/^es/)){ //match all occurencies like 'es', 'es-cl' or 'es-CL'
	window.location.href = "es/howto.html";	
}
else if(user_lang.match(/^fr/)){
	window.location.href = "fr/howto.html";	
}
// else if(user_lang.match(/^ru/)){
// 	window.location.href = "ru/howto.html";	
// }
// if(user_lang.match(/^ja/)){
// 	window.location.href = "ja/howto.html";	
// }