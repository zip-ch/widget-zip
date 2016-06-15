function zipWidget(arg) {
	// Variables
	var lang = (arg.lang === undefined) ? "de" : arg.lang;

	var color = (arg.color === undefined) ? "positif" : arg.color;
	var format = (arg.format === undefined) ? "portrait" : arg.format;

	var width = (arg.width === undefined) ? "100%" : arg.width;
	var radius = (arg.width === undefined) ? "5px" : arg.width;

	var textLabel = (arg.textLabel === undefined) ? {"en": "Search for", "de": "Suche nach", "fr": "Recherche pour", "it":"Che? Che? Che?"} : arg.textLabel;
	textLabel = (typeof textLabel === "object") ? textLabel[lang]:textLabel;

	var placeHolder = {"en": "Who? What? Where?", "de": "Wer? Who? Was?", "fr": "Qui? Quoi? Où?", "it":"Che? Che? Che?"};
	placeHolder = (typeof placeHolder === "object") ? placeHolder[lang]:placeHolder;
	
	var backgroundWidget = "#D8232A";
	var textColor = "#fff";
	var border = 'none';
	var shadow = 'none';
	var logoImg = "https://s3-eu-central-1.amazonaws.com/zip.ch/static/images/logo-full.svg";
	// END Variables


	if(color == "negatif"){
		backgroundWidget = "#f9f9f9";
		logoImg = "images/logo-full-neg.svg";
		textColor = "#514b4b";
		border = '#D8232A 1px solid';
	}


	// CSS Variable 
	var css = '<style type="text/css">';
	css    += '#zipWidget{background: '+backgroundWidget+'; border-radius: '+radius+'; width: '+width+'; } .zipWidgetWrapper{padding: 15px; text-align: center; } .zipWidgetLogo{display: block; } .zipWidgetForm{margin-bottom: 0; } .zipWidgetLabel{color: '+textColor+'; font-family: "Roboto", sans-serif; display:  block; font-size: 14px; margin: 20px 0 5px; font-weight: 300; } .zipWidgetInput{width:  100%; display:  block; position: relative; } .zipWidgetText{background: #fff; height: 36px; border-radius: 18px; font-size: 14px; border: none; padding: 0px 20px; width:  100%; border: '+border+'; } .zipWidgetText:focus{outline: none; } .zipWidgetSubmit{position: absolute; right: 3px; top: 3px; height: 30px; width: 30px; border-radius: 100%; background: #514b4b; color: #fff; box-shadow: 0 0 1px rgba(0,0,0,0.3); border:none; outline: none; display: block; } .zipWidgetSubmit:hover{background:#c3bebe; cursor: pointer; }';
	
	if(format == "paysage"){
		css += '.zipWidgetLogo{float: left; margin-right: 20px; width: 70px; margin-top: -3px; } .zipWidgetLogo img{height: auto; width: 70px; } .zipWidgetForm{max-width: 500px; margin: auto; } .zipWidgetInput{float: left; width: calc(100% - 90px); } .zipWidgetWrapper{overflow: hidden; padding: 10px; } .zipWidgetLabel{margin-top: 0; display: none; }'
	}
	
	css    += '</style>'
	// END CSS Variable


	if(format == "paysage"){
		logoImg = "images/logo-small.svg";

		if(color == "negatif"){
			logoImg = "images/logo-small-neg.svg";
		}
	}	

	var html = '<div class="zipWidgetWrapper"> <form class="zipWidgetForm" accept-charset="UTF-8" method="get" action="https://zip.ch/'+lang+'/results/" target="_blank"> <a class="zipWidgetLogo" href="https://zip.ch/'+lang+'/" target="_blank"> <img src="'+logoImg+'"> </a> <label class="zipWidgetLabel" for="localSearchWhat">'+textLabel+'</label> <div class="zipWidgetInput"> <input class="zipWidgetText" name="q" type="text" placeholder="'+placeHolder+'"> <button class="zipWidgetSubmit" name="zip" value="Suchen" type="submit"> <img src="images/magni.svg" alt=""> </button> </div> </form> </div>';

	document.getElementById('zipWidget').innerHTML = css;
	document.getElementById('zipWidget').innerHTML += html;
}