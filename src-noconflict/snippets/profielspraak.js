ace.define("ace/snippets/profielspraak",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippets = [
	{
		"content": "wordt gesteld op ",
		"name": "gelijkstelling",
		"scope": "profielspraak",
		"tabTrigger": "gelijkstelling"
	},
	{
		"content": "wordt berekend als ${1} maal ${2} ",
		"name": "berekening",
		"scope": "profielspraak",
		"tabTrigger": "berekening"
	},
	{
		"content": "indien aan alle volgende voorwaarden wordt voldaan:\n",
		"name": "voorwaarde",
		"scope": "profielspraak",
		"tabTrigger": "voorwaarde"
	}
];
exports.scope = "";

});
