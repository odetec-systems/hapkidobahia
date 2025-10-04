// Este evendo é acionado após o carregamento da página
/*
jQuery(window).load(function() {
	//Após a leitura da pagina o evento fadeOut do loader é acionado, esta com delay para ser perceptivo em ambiente fora do servidor.
	//jQuery("#loader").delay(1000).fadeOut(400);
	jQuery("#loader").fadeOut(400);
	//jQuery("#loader").fadeOut("slow");
});
*/

// Acionado após o carregamento do DOM
$( document ).ready(function() {
		
	/************* Desabilita o botão direito do mouse **************/
    $( "body" ).contextmenu(function() {
		return false;
	});
	/************* Desabilita o botão direito do mouse **************/
	
});

/************* Google Analytics **************/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82831749-1', 'auto');
ga('send', 'pageview');
/************* Google Analytics **************/

/************* Facebook SDK **************/
/*
window.fbAsyncInit = function() {
	FB.init({
    	appId      : '770850013057206',
    	xfbml      : true,
    	version    : 'v2.7'
   	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/
/************* Facebook SDK **************/
