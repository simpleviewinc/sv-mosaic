(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{2656:function(module,exports){module.exports=function(hljs){var NUMBERS={className:"number",relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:hljs.NUMBER_RE}]},COMMENTS=hljs.COMMENT();COMMENTS.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var VARIABLES={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]},LITERALS={className:"literal",begin:/\bon|off|true|false|yes|no\b/},STRINGS={className:"string",contains:[hljs.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]};return{aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[COMMENTS,{className:"section",begin:/\[+/,end:/\]+/},{begin:/^[a-z0-9\[\]_\.-]+(?=\s*=\s*)/,className:"attr",starts:{end:/$/,contains:[COMMENTS,{begin:/\[/,end:/\]/,contains:[COMMENTS,LITERALS,VARIABLES,STRINGS,NUMBERS,"self"],relevance:0},LITERALS,VARIABLES,STRINGS,NUMBERS]}}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ini.6ccddb7568342c788c19.bundle.js.map