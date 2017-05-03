ace.define("ace/theme/profielspraak",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-profielspraak";
exports.cssText = ".ace-profielspraak .ace_gutter {\
background: #F6F6F6;\
color: #4D4D4C\
}\
.ace-profielspraak .ace_print-margin {\
width: 1px;\
background: #F6F6F6\
}\
.ace-profielspraak {\
background-color: #FFFFFF;\
color: #777777;\
}\
.ace-profielspraak .ace_cursor {\
color: #AEAFAD\
}\
.ace-profielspraak .ace_marker-layer .ace_selection {\
background: #D6D6D6\
}\
.ace-profielspraak .ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-profielspraak .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-profielspraak .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #D1D1D1\
}\
.ace-profielspraak .ace_marker-layer .ace_active-line {\
background: #EFEFEF\
}\
.ace-profielspraak .ace_gutter-active-line {\
background-color : #DCDCDC\
}\
.ace-profielspraak .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-profielspraak .ace_invisible {\
color: #D1D1D1\
}\
.ace-profielspraak .ace_keyword {\
color: #000000\
}\
.ace-profielspraak .ace_meta,\
.ace-profielspraak .ace_storage,\
.ace-profielspraak .ace_storage.ace_type,\
.ace-profielspraak .ace_support.ace_type,\
.ace-profielspraak .ace_keyword.ace_operator {\
color: #FF0000;\
font-weight: bold\
}\
.ace-profielspraak .ace_constant.ace_character,\
.ace-profielspraak .ace_constant.ace_language {\
color: #33DDBB;\
font-weight: bold;\
text-decoration: underline\
}\
.ace-profielspraak .ace_paren {\
color: #FF0000;\
font-weight: bold\
}\
.ace-profielspraak .ace_constant.ace_numeric,\
.ace-profielspraak .ace_keyword.ace_other.ace_unit,\
.ace-profielspraak .ace_support.ace_constant,\
.ace-profielspraak .ace_variable.ace_parameter,\
.ace-profielspraak .ace_constant.ace_other,\
.ace-profielspraak .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-profielspraak .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-profielspraak .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-profielspraak .ace_entity.ace_name.ace_function,\
.ace-profielspraak .ace_support.ace_function,\
.ace-profielspraak .ace_variable {\
color: #4271AE\
}\
.ace-profielspraak .ace_support.ace_class,\
.ace-profielspraak .ace_support.ace_type {\
color: #C99E00\
}\
.ace-profielspraak .ace_heading,\
.ace-profielspraak .ace_markup.ace_heading,\
.ace-profielspraak .ace_string {\
color: #CC1133\
}\
.ace-profielspraak .ace_entity.ace_name.ace_tag,\
.ace-profielspraak .ace_entity.ace_other.ace_attribute-name,\
.ace-profielspraak .ace_meta.ace_tag,\
.ace-profielspraak .ace_string.ace_regexp,\
.ace-profielspraak .ace_variable {\
color: #0000FF;\
text-decoration: underline double\
}\
.ace-profielspraak .ace_comment {\
color: #22BB22;\
}\
.ace-profielspraak .ace_indent-guide {\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
