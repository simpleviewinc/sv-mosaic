(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{2561:function(module,exports){module.exports=function(hljs){var SUBST={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:"\\${",end:"}"}]},STRING={className:"string",variants:[{begin:'"',end:'"',illegal:"\\n",contains:[hljs.BACKSLASH_ESCAPE]},{begin:'"""',end:'"""',relevance:10},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[hljs.BACKSLASH_ESCAPE,SUBST]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[SUBST],relevance:10}]},TYPE={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},NAME={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},CLASS={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[TYPE]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[TYPE]},NAME]},METHOD={className:"function",beginKeywords:"def",end:/[:={\[(\n;]/,excludeEnd:!0,contains:[NAME]};return{keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"},contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,STRING,{className:"symbol",begin:"'\\w[\\w\\d_]*(?!')"},TYPE,METHOD,CLASS,hljs.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_scala.20cb122ffef55292d29e.bundle.js.map