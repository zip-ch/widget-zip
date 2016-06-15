# widget-zip.ch
Widget for the directory [zip.ch](https://zip.ch) to integrate in external websites


## Call script

* You can call the script at :

* Or you can directly download the file js file zipWidget.min.js:

Copy the code bellow on your website to display the widget 

```
<div id="zipWidget"></div>
<script src="zipWidget.js" type="text/javascript"></script>
<script type="text/javascript">	
	zipWidget();
</script>

```

## Options

Multiple options are avaible for the widget

* You can choose your language between fr, de, it, en :

```
zipWidget({
		lang: "fr" //by default de
	});

```

* You can choose to have a negative version of the widget :

```
zipWidget({
		color: "negatif" //by default positif
	});

```

* You can choose to have a paysage version of the widget :

```
zipWidget({
		format: "paysage"  //by default portrait
	});

```

* You can choose the width and the border-radius of the widget :

```
zipWidget({
		width: "100px", //by default 100%
		radius: "5px" //by default 5px
	}); 

```

* You can change the text of the label and of the placeholder of the widget :

```
zipWidget({
		textLabel: "Text label test", //by default {"en": "Search for", "de": "Suche nach", "fr": "Recherche pour", "it":"Che? Che? Che?"}
		placeHolder: "Placeholder" //by default {"en": "Who? What? Where?", "de": "Wer? Who? Was?", "fr": "Qui? Quoi? Où?", "it":"Che? Che? Che?"}
	}); 

```
if you don't want any text label you can leave that option empty