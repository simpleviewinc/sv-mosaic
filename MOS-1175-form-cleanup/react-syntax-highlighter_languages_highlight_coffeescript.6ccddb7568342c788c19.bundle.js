(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2606:function(module,exports){module.exports=function(hljs){var KEYWORDS={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},JS_IDENT_RE="[A-Za-z$_][0-9A-Za-z$_]*",SUBST={className:"subst",begin:/#\{/,end:/}/,keywords:KEYWORDS},EXPRESSIONS=[hljs.BINARY_NUMBER_MODE,hljs.inherit(hljs.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[hljs.BACKSLASH_ESCAPE,SUBST]},{begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,SUBST]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[SUBST,hljs.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+JS_IDENT_RE},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];SUBST.contains=EXPRESSIONS;var TITLE=hljs.inherit(hljs.TITLE_MODE,{begin:JS_IDENT_RE}),PARAMS={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:KEYWORDS,contains:["self"].concat(EXPRESSIONS)}]};return{aliases:["coffee","cson","iced"],keywords:KEYWORDS,illegal:/\/\*/,contains:EXPRESSIONS.concat([hljs.COMMENT("###","###"),hljs.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+JS_IDENT_RE+"\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[TITLE,PARAMS]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[PARAMS]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[TITLE]},TITLE]},{begin:JS_IDENT_RE+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_coffeescript.6ccddb7568342c788c19.bundle.js.map