ace.define("ace/mode/profielspraak_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var ProfielSpraakHighlightRules = function() {

	this.$rules = {
		"start" : [ {
			token : "comment",
			regex : "//.*$"
		},  {
			token : "comment",
			start : "/\\*",
			end : "\\*/"
		}, {
			token : "string",
			regex : '".*?"'
//		}, {
//			token : "constant.numeric",
//			regex : "[+-]?\\d+\\b"
		},	{
			token : "constant.language",
			regex : "aangifte|HOOG|MIDDEN|LAAG"
		}, {
			token : "keyword",
			regex : "aan|bevat|de|een|gelijk|heeft|indien|is|Maak|met|" +
					"parameters|rubriek|score|voldaan|volgende|voorwaarden|wordt"
		}, {
			token : "keyword.operator",
			regex : "\\-|\\:|\\."
		}, {
			token : "paren.lparen",
			regex : "[\\(]"
		}, {
			token : "paren.rparen",
			regex : "[\\)]"
		}, {
			token : "variable",
			regex : "\\w+"
		} ]
	};
	this.normalizeRules();
};

oop.inherits(ProfielSpraakHighlightRules, TextHighlightRules);

exports.ProfielSpraakHighlightRules = ProfielSpraakHighlightRules;
});

ace.define("ace/mode/profielspraak",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/profielspraak_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var ProfielSpraakHighlightRules = require("./profielspraak_highlight_rules").ProfielSpraakHighlightRules;

var Mode = function() {
	this.HighlightRules = ProfielSpraakHighlightRules;
	this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
	this.$id = "ace/mode/profielspraak";
}).call(Mode.prototype);

exports.Mode = Mode;

});
