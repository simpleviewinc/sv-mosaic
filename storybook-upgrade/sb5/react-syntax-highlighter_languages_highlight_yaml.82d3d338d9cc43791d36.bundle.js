(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{2796:function(module,exports){module.exports=function(hljs){var STRING={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[hljs.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+hljs.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+hljs.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",relevance:0},hljs.HASH_COMMENT_MODE,{beginKeywords:"true false yes no null",keywords:{literal:"true false yes no null"}},{className:"number",begin:hljs.C_NUMBER_RE+"\\b"},STRING]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_yaml.82d3d338d9cc43791d36.bundle.js.map