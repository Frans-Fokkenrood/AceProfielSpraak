ace.define("ace/snippets/profielspraak",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippets = [
	{
		"content": "Maak een score met de volgende parameters:\n",
		"name": "Maak",
		"scope": "profielspraak",
		"tabTrigger": "Maak"
	},
	{
		"content": "- de ${1} heeft rubriek ",
		"name": "rubriek",
		"scope": "profielspraak",
		"tabTrigger": "rubriek"
	},
	{
		"content": "indien aan de volgende voorwaarden wordt voldaan:\n",
		"name": "indien",
		"scope": "profielspraak",
		"tabTrigger": "indien"
	}
];
exports.scope = "";

});
