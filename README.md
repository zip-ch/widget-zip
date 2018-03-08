# widget-ZIP.ch

Widget for the directory [ZIP.ch](https://zip.ch) to integrate in external websites

## Call script

* You can call the script at : https://s3.eu-central-1.amazonaws.com/zip.ch/static/zipWidget.js

* Or you can directly download the file js file zipWidget.min.js:

Copy that code where you want the widget to appear

```
<div id="zipWidget">
  <div id="zipCode"></div>
  <a class="zipWidgetLink" href="https://zip.ch/" target="_blank"> ZIP.ch </a>
</div>
```

And copy that script right before the body enclosure tag of your website

```
<script type="text/javascript" src="https://assets.zip.ch/static/javascripts/production.js"></script>
<script src="https://s3.eu-central-1.amazonaws.com/zip.ch/static/zipWidget.js" type="text/javascript"></script>
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

* You can choose to have a negative or a transparent version of the widget :

```
zipWidget({
		color: "negatif" //by default positif
	});

zipWidget({
		color: "transparent" //by default positif
	});
```

* You can choose to have a paysage version of the widget :

```
zipWidget({
		format: "paysage"  //by default portrait
	});
```

* You can choose to have a smaller version of the widget (only for paysage mode) :

```
zipWidget({
		small: "true"  //by default false
	});
```

* You can remvove the links below the field :

```
zipWidget({
		links: "false"  //by default true
	});
```

* You can remvove the logo ZIP.ch :

```
zipWidget({
		logo: "false"  //by default true
	});
```

* You can choose the width and the border-radius of the widget :

```
zipWidget({
		width: "100px", //by default 100%
		radius: "5px" //by default 5px
	});
```

* You can change the text of the label (the label doesn't appear if in paysage format) and of the placeholder of the widget :

```
zipWidget({
		textLabel: "Text label test", //by default {"en": "Search for", "de": "Suche nach", "fr": "Recherche pour", "it":"Che? Che? Che?"}
		placeHolder: "Placeholder" //by default {"en": "Who? What? Where?", "de": "Wer? Who? Was?", "fr": "Qui? Quoi? Où?", "it":"Che? Che? Che?"}
	});
```

If you don't want any text label you can leave that option empty
