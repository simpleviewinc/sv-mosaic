import{j as d}from"./jsx-runtime-qGIIFXMu.js";import{r as c,g as Fn,R as G}from"./index-CDs2tPxN.js";import{m as Yr,a as Hr,l as qr,u as Xr,n as Gr,v as Un,p as Kr,w as Qr,j as Jr,x as Zr,q as ea,y as ta,z as na,C as ra}from"./CheckboxList-Br5Y5VJF.js";import{_ as aa,D as ia,x as oa}from"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import{s as E,t as M,B as Ht}from"./theme-tUuL1bpb.js";import{B as et}from"./ButtonRow-D8Ypu3LS.js";import{i as sa}from"./isSymbol-BfMcYl5G.js";import{r as xe,i as Ce}from"./createSvgIcon-BGEpRDBf.js";import{D as la}from"./FormFieldText.styled-DOD-9_p_.js";import{B as F,S as ca,d as ua,P as da}from"./Button-jXQJtfPH.js";import{d as Bt}from"./DataViewPrimaryFilter.styled-BCNRirty.js";import{u as Pe,a as fa}from"./useMosaicTranslation-DFgKwIAM.js";import{T as ha,d as ga}from"./TitleWrapper-fmXCHZNU.js";import{r as Ee}from"./index-B-yFm4aN.js";import{C as yt}from"./Checkbox-DZF7KNvv.js";import{d as ma}from"./MoreVert-BFnAsiRm.js";import{u as Cn,g as yn}from"./useToggle-D8hNafRh.js";import{T as kn}from"./Typography-w5WZckx5.js";import{D as va,a as ba,d as wa}from"./ChevronRight-BWG-u8Bq.js";import{P as xa}from"./PageHeader-DaN-rjBH.js";import{M as qt}from"./MenuSelect-keHkfgJK.js";function Lt(e,t,n=!0){const r=e!==void 0?e:n;return(Array.isArray(r)?r:[r]).map(i=>i instanceof Function?i(t):i)}function Wt(e,t,n,r=!0){const a=c.useMemo(()=>{const i=Array.isArray(e),s=(i?e:[e]).map(l=>({...l,[n]:Lt(l[n],t,r)}));return i?s:s[0]},[r,e,n,t]);return Array.isArray(a)?Cn(a,n):Cn(a,n)}function hu(e){return d.jsx(d.Fragment,{children:"—"})}var Ca=Hr,ya=Yr,ka=aa,Da=qr;function pa(e,t){var n=Da(e)?Ca:ka;return n(e,ya(t))}var Sa=pa;const gu=Fn(Sa);function Y(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Ra(e){return Y(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ce(e){Y(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ta(e){if(Y(1,arguments),!Ra(e)&&typeof e!="number")return!1;var t=ce(e);return!isNaN(Number(t))}function De(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ma(e,t){Y(2,arguments);var n=ce(e).getTime(),r=De(t);return new Date(n+r)}function Aa(e,t){Y(2,arguments);var n=De(t);return Ma(e,-n)}var Oa=864e5;function Ea(e){Y(1,arguments);var t=ce(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Oa)+1}function gt(e){Y(1,arguments);var t=1,n=ce(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Yn(e){Y(1,arguments);var t=ce(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=gt(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=gt(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function _a(e){Y(1,arguments);var t=Yn(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=gt(n);return r}var ja=6048e5;function Pa(e){Y(1,arguments);var t=ce(e),n=gt(t).getTime()-_a(t).getTime();return Math.round(n/ja)+1}var $a={};function kt(){return $a}function mt(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=kt(),h=De((n=(r=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=ce(e),g=m.getUTCDay(),y=(g<h?7:0)+g-h;return m.setUTCDate(m.getUTCDate()-y),m.setUTCHours(0,0,0,0),m}function Hn(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=ce(e),h=f.getUTCFullYear(),m=kt(),g=De((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(h+1,0,g),y.setUTCHours(0,0,0,0);var v=mt(y,t),x=new Date(0);x.setUTCFullYear(h,0,g),x.setUTCHours(0,0,0,0);var k=mt(x,t);return f.getTime()>=v.getTime()?h+1:f.getTime()>=k.getTime()?h:h-1}function Ia(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=kt(),h=De((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1),m=Hn(e,t),g=new Date(0);g.setUTCFullYear(m,0,h),g.setUTCHours(0,0,0,0);var y=mt(g,t);return y}var Na=6048e5;function Ba(e,t){Y(1,arguments);var n=ce(e),r=mt(n,t).getTime()-Ia(n,t).getTime();return Math.round(r/Na)+1}function j(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var be={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return j(t==="yy"?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):j(n+1,2)},d:function(e,t){return j(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return j(e.getUTCHours()%12||12,t.length)},H:function(e,t){return j(e.getUTCHours(),t.length)},m:function(e,t){return j(e.getUTCMinutes(),t.length)},s:function(e,t){return j(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return j(a,t.length)}},Oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},La={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return be.y(e,t)},Y:function(e,t,n,r){var a=Hn(e,r),i=a>0?a:1-a;if(t==="YY"){var o=i%100;return j(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):j(i,t.length)},R:function(e,t){var n=Yn(e);return j(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return j(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return be.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=Ba(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):j(a,t.length)},I:function(e,t,n){var r=Pa(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):j(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):be.d(e,t)},D:function(e,t,n){var r=Ea(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):j(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return j(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return j(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return j(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours(),a=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r=e.getUTCHours(),a;switch(r===12?a=Oe.noon:r===0?a=Oe.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r=e.getUTCHours(),a;switch(r>=17?a=Oe.evening:r>=12?a=Oe.afternoon:r>=4?a=Oe.morning:a=Oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return be.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):be.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):be.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):be.s(e,t)},S:function(e,t){return be.S(e,t)},X:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return pn(i);case"XXXX":case"XX":return ke(i);case"XXXXX":case"XXX":default:return ke(i,":")}},x:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"x":return pn(i);case"xxxx":case"xx":return ke(i);case"xxxxx":case"xxx":default:return ke(i,":")}},O:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Dn(i,":");case"OOOO":default:return"GMT"+ke(i,":")}},z:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Dn(i,":");case"zzzz":default:return"GMT"+ke(i,":")}},t:function(e,t,n,r){var a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return j(i,t.length)},T:function(e,t,n,r){var a=r._originalDate||e,i=a.getTime();return j(i,t.length)}};function Dn(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t;return n+String(a)+o+j(i,2)}function pn(e,t){if(e%60===0){var n=e>0?"-":"+";return n+j(Math.abs(e)/60,2)}return ke(e,t)}function ke(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=j(Math.floor(a/60),2),o=j(a%60,2);return r+i+n+o}var Sn=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},qn=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Wa=function(e,t){var n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Sn(e,t);var i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Sn(r,t)).replace("{{time}}",qn(a,t))},Va={p:qn,P:Wa};function za(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Fa=["D","DD"],Ua=["YY","YYYY"];function Ya(e){return Fa.indexOf(e)!==-1}function Ha(e){return Ua.indexOf(e)!==-1}function Rn(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var qa={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xa=function(e,t,n){var r,a=qa[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function _t(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Ga={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ka={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qa={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ja={date:_t({formats:Ga,defaultWidth:"full"}),time:_t({formats:Ka,defaultWidth:"full"}),dateTime:_t({formats:Qa,defaultWidth:"full"})},Za={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ei=function(e,t,n,r){return Za[e]};function Ye(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",a;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(t):t;return a[u]}}var ti={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ni={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ri={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ai={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ii={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},oi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},si=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},li={ordinalNumber:si,era:Ye({values:ti,defaultWidth:"wide"}),quarter:Ye({values:ni,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Ye({values:ri,defaultWidth:"wide"}),day:Ye({values:ai,defaultWidth:"wide"}),dayPeriod:Ye({values:ii,defaultWidth:"wide",formattingValues:oi,defaultFormattingWidth:"wide"})};function He(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?ui(s,function(h){return h.test(o)}):ci(s,function(h){return h.test(o)}),u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;var f=t.slice(o.length);return{value:u,rest:f}}}function ci(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function ui(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function di(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var fi=/^(\d+)(th|st|nd|rd)?/i,hi=/\d+/i,gi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mi={any:[/^b/i,/^(a|c)/i]},vi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bi={any:[/1/i,/2/i,/3/i,/4/i]},wi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},xi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ci={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ki={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Di={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pi={ordinalNumber:di({matchPattern:fi,parsePattern:hi,valueCallback:function(e){return parseInt(e,10)}}),era:He({matchPatterns:gi,defaultMatchWidth:"wide",parsePatterns:mi,defaultParseWidth:"any"}),quarter:He({matchPatterns:vi,defaultMatchWidth:"wide",parsePatterns:bi,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:He({matchPatterns:wi,defaultMatchWidth:"wide",parsePatterns:xi,defaultParseWidth:"any"}),day:He({matchPatterns:Ci,defaultMatchWidth:"wide",parsePatterns:yi,defaultParseWidth:"any"}),dayPeriod:He({matchPatterns:ki,defaultMatchWidth:"any",parsePatterns:Di,defaultParseWidth:"any"})},Si={code:"en-US",formatDistance:Xa,formatLong:Ja,formatRelative:ei,localize:li,match:pi,options:{weekStartsOn:0,firstWeekContainsDate:1}},Ri=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ti=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mi=/^'([^]*?)'?$/,Ai=/''/g,Oi=/[a-zA-Z]/;function mu(e,t,n){var r,a,i,o,s,l,u,f,h,m,g,y,v,x,k,b,w,D;Y(2,arguments);var R=String(t),S=kt(),p=(r=(a=n==null?void 0:n.locale)!==null&&a!==void 0?a:S.locale)!==null&&r!==void 0?r:Si,T=De((i=(o=(s=(l=n==null?void 0:n.firstWeekContainsDate)!==null&&l!==void 0?l:n==null||(u=n.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&o!==void 0?o:(h=S.locale)===null||h===void 0||(m=h.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var $=De((g=(y=(v=(x=n==null?void 0:n.weekStartsOn)!==null&&x!==void 0?x:n==null||(k=n.locale)===null||k===void 0||(b=k.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&v!==void 0?v:S.weekStartsOn)!==null&&y!==void 0?y:(w=S.locale)===null||w===void 0||(D=w.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&g!==void 0?g:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!p.localize)throw new RangeError("locale must contain localize property");if(!p.formatLong)throw new RangeError("locale must contain formatLong property");var I=ce(e);if(!Ta(I))throw new RangeError("Invalid time value");var C=za(I),_=Aa(I,C),A={firstWeekContainsDate:T,weekStartsOn:$,locale:p,_originalDate:I},L=R.match(Ti).map(function(N){var H=N[0];if(H==="p"||H==="P"){var B=Va[H];return B(N,p.formatLong)}return N}).join("").match(Ri).map(function(N){if(N==="''")return"'";var H=N[0];if(H==="'")return Ei(N);var B=La[H];if(B)return!(n!=null&&n.useAdditionalWeekYearTokens)&&Ha(N)&&Rn(N,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Ya(N)&&Rn(N,t,String(e)),B(_,N,p.localize,A);if(H.match(Oi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+H+"`");return N}).join("");return L}function Ei(e){var t=e.match(Mi);return t?t[1].replace(Ai,"'"):e}var Tn=Xr;function _i(e,t,n){t=="__proto__"&&Tn?Tn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var ji=_i,Pi=ji,$i=Gr,Ii=Object.prototype,Ni=Ii.hasOwnProperty;function Bi(e,t,n){var r=e[t];(!(Ni.call(e,t)&&$i(r,n))||n===void 0&&!(t in e))&&Pi(e,t,n)}var Li=Bi,Wi=Li,Vi=Un,zi=Kr,Mn=sa,Fi=Qr;function Ui(e,t,n,r){if(!Mn(e))return e;t=Vi(t,e);for(var a=-1,i=t.length,o=i-1,s=e;s!=null&&++a<i;){var l=Fi(t[a]),u=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(a!=o){var f=s[l];u=r?r(f,l,s):void 0,u===void 0&&(u=Mn(f)?f:zi(t[a+1])?[]:{})}Wi(s,l,u),s=s[l]}return e}var Yi=Ui,Hi=Jr,qi=Yi,Xi=Un;function Gi(e,t,n){for(var r=-1,a=t.length,i={};++r<a;){var o=t[r],s=Hi(e,o);n(s,o)&&qi(i,Xi(o,e),s)}return i}var Ki=Gi,Qi=Ki,Ji=Zr;function Zi(e,t){return Qi(e,t,function(n,r){return Ji(e,r)})}var eo=Zi,to=ea;function no(e){var t=e==null?0:e.length;return t?to(e,1):[]}var ro=no,ao=ro,io=ta,oo=na;function so(e){return oo(io(e,void 0,ao),e+"")}var lo=so,co=eo,uo=lo,fo=uo(function(e,t){return e==null?{}:co(e,t)}),ho=fo;const go=Fn(ho);var Xt={},mo=Ce;Object.defineProperty(Xt,"__esModule",{value:!0});var Xn=Xt.default=void 0,vo=mo(xe()),bo=d,wo=(0,vo.default)((0,bo.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");Xn=Xt.default=wo;const xo=E.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;function Co(e){var k;const{t}=Pe(),[n,r]=c.useState({anchorEl:null,dropdownOpen:!1}),a=c.useMemo(()=>e.activeFilters||[],[e.activeFilters]),i=a.map(b=>e.filters.find(w=>w.name===b)),o=e.filters.map(b=>({label:b.label,value:b.name})).sort((b,w)=>b.label.localeCompare(w.label)),s=c.useMemo(()=>a.map(b=>o.find(w=>w.value===b)||null).filter(Boolean),[o,a]),l=b=>()=>{const w=oa(e.activeFilters,[b]);g({value:w})},u=b=>{r({...n,anchorEl:b.currentTarget})},f=()=>{r({...n,anchorEl:null})},h=()=>{r({...n,dropdownOpen:!0})},m=function(){r({...n,dropdownOpen:!1})},g=function(b){const w=Object.fromEntries(Object.entries(e.filter).filter(S=>S[1])),D=go(w,[...b.value]),R=Object.keys(D).join(",")!==Object.keys(w).join(",");e.onActiveFiltersChange({activeFilters:b.value,filter:R===!0?D:e.filter}),f()},y=b=>{const w=new RegExp(b.keyword,"i");return{docs:o.filter(R=>R.label.match(w)),hasMore:!1}},v=()=>{i.forEach(b=>{e.filter[b.name]!==void 0&&b.onChange(void 0)})},x=(b,w)=>{if(b!==void 0){if(!e.filter[w.name]&&Object.keys(b)===void 0)return f();w.onChange(b)}else e.filter[w.name]&&w.onChange(b);return f()};return d.jsx(d.Fragment,{children:d.jsx("div",{className:"filterRow",children:((k=e==null?void 0:e.filters)==null?void 0:k.length)>0&&d.jsxs(xo,{children:[d.jsx(F,{label:t("mosaic:DataView.filters"),variant:"text",color:"black",size:"small",iconPosition:"left",mIcon:Xn,mIconColor:M.newColors.almostBlack[100],onClick:u}),d.jsx(la,{anchorEl:n.anchorEl,onClose:f,onEntered:h,onExited:m,children:d.jsx(ia,{comparison:"",selected:s,getOptions:y,isOpen:n.dropdownOpen,onApply:g})}),(i==null?void 0:i.length)>0&&d.jsx(d.Fragment,{children:i.map(b=>{const w=b.component;return d.jsx(w,{label:b.label,args:b.args||{},data:e.filter[b.name]||{},onRemove:l(b.name),onChange:D=>x(D,b)},b.name)})}),(i==null?void 0:i.length)>0&&d.jsx(F,{label:t("mosaic:DataView.clear_filters"),variant:"text",size:"small",color:"teal",onClick:v})]})})})}const yo=E.div`
	border-bottom: 2px solid ${M.newColors.grey2[100]};
	padding: 24px 24px 16px 24px;
	width: 100%;
`,ko=E.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 16px;

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > *:last-child {
		display: flex;
		margin-right: 0px;
	}

	& > .left h1 {
		line-height: 33px;
		margin-right: 16px;
		max-width: 916px;
	}
`,Do=E(F)`
	&& {
		button {
			max-width: 300px;
			margin-right: 2px;
			text-transform: none;
			font-weight: ${M.fontWeight.normal};
		}

		&.no-view-selected button {
			color: ${M.newColors.grey3[100]};
			font-style: italic;
		}
	}
`,po=E.div`
	font-size: 14px;
	padding: 3px 0;
	letter-spacing: 1px;
`;function So({currentView:e,onViewSave:t,onViewSaveAs:n,onViewList:r}){const{t:a}=Pe(),i=c.useMemo(()=>{const o=[];return t&&o.push({label:a("mosaic:DataView.overwrite_current_view"),onClick:t}),n&&o.push({label:a("mosaic:DataView.save_as_new_view"),onClick:n}),o},[t,n,a]);return d.jsx("div",{children:d.jsx("div",{className:"right",children:d.jsxs(et,{children:[r?d.jsx(Do,{mIcon:Bt,iconPosition:"right",label:e?`${a("mosaic:DataView.view")}: ${e.label}`:a("mosaic:DataView.no_view_selected"),variant:"contained",size:"small",color:"gray",onClick:r,className:!e&&"no-view-selected"}):e&&d.jsx(po,{children:`${a("mosaic:DataView.view")}: ${e.label}`}),d.jsx(F,{mIcon:Bt,iconPosition:"right",label:a("mosaic:DataView.save_view"),variant:"text",size:"small",color:"teal",menuItems:i})]})})})}function Ro({activeFilters:e,backLabel:t,buttons:n,currentView:r,disabled:a,filter:i,filters:o,onActiveFiltersChange:s,onBack:l,onViewSave:u,onViewSaveAs:f,onViewList:h,title:m}){const g=c.useMemo(()=>n===void 0?[]:n.map(v=>{const{name:x,...k}=v;return k.attrs={"data-mosaic-id":`button_${x}`},k.disabled=k.disabled===void 0?a:k.disabled,k}),[n,a]),y=r||u||f||h;return d.jsxs(yo,{children:[d.jsxs(ko,{children:[d.jsxs("div",{className:"left",children:[m&&d.jsx(ha,{title:m,onBack:l,backLabel:t}),y&&d.jsx(So,{currentView:r,onViewSave:u,onViewSaveAs:f,onViewList:h})]}),g.length>0&&d.jsx(et,{buttons:g})]}),o&&d.jsx(Co,{filter:i,filters:o,activeFilters:e,onActiveFiltersChange:s})]})}var Gt={},To=Ce;Object.defineProperty(Gt,"__esModule",{value:!0});var Gn=Gt.default=void 0,Mo=To(xe()),Ao=d,Oo=(0,Mo.default)((0,Ao.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}),"GridOn");Gn=Gt.default=Oo;var Kt={},Eo=Ce;Object.defineProperty(Kt,"__esModule",{value:!0});var Kn=Kt.default=void 0,_o=Eo(xe()),jo=d,Po=(0,_o.default)((0,jo.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");Kn=Kt.default=Po;function $o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const Dt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $e(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Qt(e){return"nodeType"in e}function K(e){var t,n;return e?$e(e)?e:Qt(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Jt(e){const{Document:t}=K(e);return e instanceof t}function tt(e){return $e(e)?!1:e instanceof K(e).HTMLElement}function Qn(e){return e instanceof K(e).SVGElement}function Ie(e){return e?$e(e)?e.document:Qt(e)?Jt(e)?e:tt(e)||Qn(e)?e.ownerDocument:document:document:document}const ae=Dt?c.useLayoutEffect:c.useEffect;function Zt(e){const t=c.useRef(e);return ae(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function Io(){const e=c.useRef(null),t=c.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=c.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Qe(e,t){t===void 0&&(t=[e]);const n=c.useRef(e);return ae(()=>{n.current!==e&&(n.current=e)},t),n}function nt(e,t){const n=c.useRef();return c.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function vt(e){const t=Zt(e),n=c.useRef(null),r=c.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function Vt(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}let jt={};function rt(e,t){return c.useMemo(()=>{if(t)return t;const n=jt[e]==null?0:jt[e]+1;return jt[e]=n,e+"-"+n},[e,t])}function Jn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((i,o)=>{const s=Object.entries(o);for(const[l,u]of s){const f=i[l];f!=null&&(i[l]=f+e*u)}return i},{...t})}}const _e=Jn(1),Je=Jn(-1);function No(e){return"clientX"in e&&"clientY"in e}function en(e){if(!e)return!1;const{KeyboardEvent:t}=K(e.target);return t&&e instanceof t}function Bo(e){if(!e)return!1;const{TouchEvent:t}=K(e.target);return t&&e instanceof t}function zt(e){if(Bo(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return No(e)?{x:e.clientX,y:e.clientY}:null}const je=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[je.Translate.toString(e),je.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),An="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Lo(e){return e.matches(An)?e:e.querySelector(An)}const Wo={display:"none"};function Vo(e){let{id:t,value:n}=e;return G.createElement("div",{id:t,style:Wo},n)}function zo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return G.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function Fo(){const[e,t]=c.useState("");return{announce:c.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const Zn=c.createContext(null);function Uo(e){const t=c.useContext(Zn);c.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Yo(){const[e]=c.useState(()=>new Set),t=c.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[c.useCallback(r=>{let{type:a,event:i}=r;e.forEach(o=>{var s;return(s=o[a])==null?void 0:s.call(o,i)})},[e]),t]}const Ho={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},qo={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Xo(e){let{announcements:t=qo,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=Ho}=e;const{announce:i,announcement:o}=Fo(),s=rt("DndLiveRegion"),[l,u]=c.useState(!1);if(c.useEffect(()=>{u(!0)},[]),Uo(c.useMemo(()=>({onDragStart(h){let{active:m}=h;i(t.onDragStart({active:m}))},onDragMove(h){let{active:m,over:g}=h;t.onDragMove&&i(t.onDragMove({active:m,over:g}))},onDragOver(h){let{active:m,over:g}=h;i(t.onDragOver({active:m,over:g}))},onDragEnd(h){let{active:m,over:g}=h;i(t.onDragEnd({active:m,over:g}))},onDragCancel(h){let{active:m,over:g}=h;i(t.onDragCancel({active:m,over:g}))}}),[i,t])),!l)return null;const f=G.createElement(G.Fragment,null,G.createElement(Vo,{id:r,value:a.draggable}),G.createElement(zo,{id:s,announcement:o}));return n?Ee.createPortal(f,n):f}var W;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(W||(W={}));function bt(){}function wt(e,t){return c.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function er(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const ie=Object.freeze({x:0,y:0});function tr(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function nr(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Go(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function On(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function rr(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function En(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const ar=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=En(t,t.left,t.top),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=tr(En(l),a);i.push({id:s,data:{droppableContainer:o,value:u}})}}return i.sort(nr)},Ko=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=On(t),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=On(l),f=a.reduce((m,g,y)=>m+tr(u[y],g),0),h=Number((f/4).toFixed(4));i.push({id:s,data:{droppableContainer:o,value:h}})}}return i.sort(nr)};function Qo(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),o=a-r,s=i-n;if(r<a&&n<i){const l=t.width*t.height,u=e.width*e.height,f=o*s,h=f/(l+u-f);return Number(h.toFixed(4))}return 0}const Jo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const i of r){const{id:o}=i,s=n.get(o);if(s){const l=Qo(s,t);l>0&&a.push({id:o,data:{droppableContainer:i,value:l}})}}return a.sort(Go)};function Zo(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function ir(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ie}function es(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.reduce((o,s)=>({...o,top:o.top+e*s.y,bottom:o.bottom+e*s.y,left:o.left+e*s.x,right:o.right+e*s.x}),{...n})}}const ts=es(1);function ns(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function rs(e,t,n){const r=ns(t);if(!r)return e;const{scaleX:a,scaleY:i,x:o,y:s}=r,l=e.left-o-(1-a)*parseFloat(n),u=e.top-s-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),f=a?e.width/a:e.width,h=i?e.height/i:e.height;return{width:f,height:h,top:u,right:l+f,bottom:u+h,left:l}}const as={ignoreTransform:!1};function Ne(e,t){t===void 0&&(t=as);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:f}=K(e).getComputedStyle(e);u&&(n=rs(n,u,f))}const{top:r,left:a,width:i,height:o,bottom:s,right:l}=n;return{top:r,left:a,width:i,height:o,bottom:s,right:l}}function _n(e){return Ne(e,{ignoreTransform:!0})}function is(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function os(e,t){return t===void 0&&(t=K(e).getComputedStyle(e)),t.position==="fixed"}function ss(e,t){t===void 0&&(t=K(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const i=t[a];return typeof i=="string"?n.test(i):!1})}function pt(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(Jt(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!tt(a)||Qn(a)||n.includes(a))return n;const i=K(e).getComputedStyle(a);return a!==e&&ss(a,i)&&n.push(a),os(a,i)?n:r(a.parentNode)}return e?r(e):n}function or(e){const[t]=pt(e,1);return t??null}function Pt(e){return!Dt||!e?null:$e(e)?e:Qt(e)?Jt(e)||e===Ie(e).scrollingElement?window:tt(e)?e:null:null}function sr(e){return $e(e)?e.scrollX:e.scrollLeft}function lr(e){return $e(e)?e.scrollY:e.scrollTop}function Ft(e){return{x:sr(e),y:lr(e)}}var V;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(V||(V={}));function cr(e){return!Dt||!e?!1:e===document.scrollingElement}function ur(e){const t={x:0,y:0},n=cr(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,o=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:a,isLeft:i,isBottom:o,isRight:s,maxScroll:r,minScroll:t}}const ls={x:.2,y:.2};function cs(e,t,n,r,a){let{top:i,left:o,right:s,bottom:l}=n;r===void 0&&(r=10),a===void 0&&(a=ls);const{isTop:u,isBottom:f,isLeft:h,isRight:m}=ur(e),g={x:0,y:0},y={x:0,y:0},v={height:t.height*a.y,width:t.width*a.x};return!u&&i<=t.top+v.height?(g.y=V.Backward,y.y=r*Math.abs((t.top+v.height-i)/v.height)):!f&&l>=t.bottom-v.height&&(g.y=V.Forward,y.y=r*Math.abs((t.bottom-v.height-l)/v.height)),!m&&s>=t.right-v.width?(g.x=V.Forward,y.x=r*Math.abs((t.right-v.width-s)/v.width)):!h&&o<=t.left+v.width&&(g.x=V.Backward,y.x=r*Math.abs((t.left+v.width-o)/v.width)),{direction:g,speed:y}}function us(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function dr(e){return e.reduce((t,n)=>_e(t,Ft(n)),ie)}function ds(e){return e.reduce((t,n)=>t+sr(n),0)}function fs(e){return e.reduce((t,n)=>t+lr(n),0)}function hs(e,t){if(t===void 0&&(t=Ne),!e)return;const{top:n,left:r,bottom:a,right:i}=t(e);or(e)&&(a<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const gs=[["x",["left","right"],ds],["y",["top","bottom"],fs]];class tn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=pt(n),a=dr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,o,s]of gs)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=s(r),f=a[i]-u;return this.rect[l]+f},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Xe{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function ms(e){const{EventTarget:t}=K(e);return e instanceof t?e:Ie(e)}function $t(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var te;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(te||(te={}));function jn(e){e.preventDefault()}function vs(e){e.stopPropagation()}var O;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(O||(O={}));const fr={start:[O.Space,O.Enter],cancel:[O.Esc],end:[O.Space,O.Enter]},bs=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case O.Right:return{...n,x:n.x+25};case O.Left:return{...n,x:n.x-25};case O.Down:return{...n,y:n.y+25};case O.Up:return{...n,y:n.y-25}}};class St{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Xe(Ie(n)),this.windowListeners=new Xe(K(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(te.Resize,this.handleCancel),this.windowListeners.add(te.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(te.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&hs(r),n(ie)}handleKeyDown(t){if(en(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:i=fr,coordinateGetter:o=bs,scrollBehavior:s="smooth"}=a,{code:l}=t;if(i.end.includes(l)){this.handleEnd(t);return}if(i.cancel.includes(l)){this.handleCancel(t);return}const{collisionRect:u}=r.current,f=u?{x:u.left,y:u.top}:ie;this.referenceCoordinates||(this.referenceCoordinates=f);const h=o(t,{active:n,context:r.current,currentCoordinates:f});if(h){const m=Je(h,f),g={x:0,y:0},{scrollableAncestors:y}=r.current;for(const v of y){const x=t.code,{isTop:k,isRight:b,isLeft:w,isBottom:D,maxScroll:R,minScroll:S}=ur(v),p=us(v),T={x:Math.min(x===O.Right?p.right-p.width/2:p.right,Math.max(x===O.Right?p.left:p.left+p.width/2,h.x)),y:Math.min(x===O.Down?p.bottom-p.height/2:p.bottom,Math.max(x===O.Down?p.top:p.top+p.height/2,h.y))},$=x===O.Right&&!b||x===O.Left&&!w,I=x===O.Down&&!D||x===O.Up&&!k;if($&&T.x!==h.x){const C=v.scrollLeft+m.x,_=x===O.Right&&C<=R.x||x===O.Left&&C>=S.x;if(_&&!m.y){v.scrollTo({left:C,behavior:s});return}_?g.x=v.scrollLeft-C:g.x=x===O.Right?v.scrollLeft-R.x:v.scrollLeft-S.x,g.x&&v.scrollBy({left:-g.x,behavior:s});break}else if(I&&T.y!==h.y){const C=v.scrollTop+m.y,_=x===O.Down&&C<=R.y||x===O.Up&&C>=S.y;if(_&&!m.x){v.scrollTo({top:C,behavior:s});return}_?g.y=v.scrollTop-C:g.y=x===O.Down?v.scrollTop-R.y:v.scrollTop-S.y,g.y&&v.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,_e(Je(h,this.referenceCoordinates),g))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}St.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=fr,onActivation:a}=t,{active:i}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const s=i.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function Pn(e){return!!(e&&"distance"in e)}function $n(e){return!!(e&&"delay"in e)}class nn{constructor(t,n,r){var a;r===void 0&&(r=ms(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:o}=i;this.props=t,this.events=n,this.document=Ie(o),this.documentListeners=new Xe(this.document),this.listeners=new Xe(r),this.windowListeners=new Xe(K(o)),this.initialCoordinates=(a=zt(i))!=null?a:ie,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(te.Resize,this.handleCancel),this.windowListeners.add(te.DragStart,jn),this.windowListeners.add(te.VisibilityChange,this.handleCancel),this.windowListeners.add(te.ContextMenu,jn),this.documentListeners.add(te.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if($n(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Pn(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(te.Click,vs,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(te.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:i}=this,{onMove:o,options:{activationConstraint:s}}=i;if(!a)return;const l=(n=zt(t))!=null?n:ie,u=Je(a,l);if(!r&&s){if(Pn(s)){if(s.tolerance!=null&&$t(u,s.tolerance))return this.handleCancel();if($t(u,s.distance))return this.handleStart()}return $n(s)&&$t(u,s.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),o(l)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===O.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const ws={move:{name:"pointermove"},end:{name:"pointerup"}};class Rt extends nn{constructor(t){const{event:n}=t,r=Ie(n.target);super(t,ws,r)}}Rt.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const xs={move:{name:"mousemove"},end:{name:"mouseup"}};var Ut;(function(e){e[e.RightClick=2]="RightClick"})(Ut||(Ut={}));class Cs extends nn{constructor(t){super(t,xs,Ie(t.event.target))}}Cs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Ut.RightClick?!1:(r==null||r({event:n}),!0)}}];const It={move:{name:"touchmove"},end:{name:"touchend"}};class ys extends nn{constructor(t){super(t,It)}static setup(){return window.addEventListener(It.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(It.move.name,t)};function t(){}}}ys.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var Ge;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Ge||(Ge={}));var xt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(xt||(xt={}));function ks(e){let{acceleration:t,activator:n=Ge.Pointer,canScroll:r,draggingRect:a,enabled:i,interval:o=5,order:s=xt.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:f,delta:h,threshold:m}=e;const g=ps({delta:h,disabled:!i}),[y,v]=Io(),x=c.useRef({x:0,y:0}),k=c.useRef({x:0,y:0}),b=c.useMemo(()=>{switch(n){case Ge.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Ge.DraggableRect:return a}},[n,a,l]),w=c.useRef(null),D=c.useCallback(()=>{const S=w.current;if(!S)return;const p=x.current.x*k.current.x,T=x.current.y*k.current.y;S.scrollBy(p,T)},[]),R=c.useMemo(()=>s===xt.TreeOrder?[...u].reverse():u,[s,u]);c.useEffect(()=>{if(!i||!u.length||!b){v();return}for(const S of R){if((r==null?void 0:r(S))===!1)continue;const p=u.indexOf(S),T=f[p];if(!T)continue;const{direction:$,speed:I}=cs(S,T,b,t,m);for(const C of["x","y"])g[C][$[C]]||(I[C]=0,$[C]=0);if(I.x>0||I.y>0){v(),w.current=S,y(D,o),x.current=I,k.current=$;return}}x.current={x:0,y:0},k.current={x:0,y:0},v()},[t,D,r,v,i,o,JSON.stringify(b),JSON.stringify(g),y,u,R,f,JSON.stringify(m)])}const Ds={x:{[V.Backward]:!1,[V.Forward]:!1},y:{[V.Backward]:!1,[V.Forward]:!1}};function ps(e){let{delta:t,disabled:n}=e;const r=Vt(t);return nt(a=>{if(n||!r||!a)return Ds;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[V.Backward]:a.x[V.Backward]||i.x===-1,[V.Forward]:a.x[V.Forward]||i.x===1},y:{[V.Backward]:a.y[V.Backward]||i.y===-1,[V.Forward]:a.y[V.Forward]||i.y===1}}},[n,t,r])}function Ss(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return nt(a=>{var i;return t===null?null:(i=r??a)!=null?i:null},[r,t])}function Rs(e,t){return c.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,i=a.activators.map(o=>({eventName:o.eventName,handler:t(o.handler,r)}));return[...n,...i]},[]),[e,t])}var Ze;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ze||(Ze={}));var Yt;(function(e){e.Optimized="optimized"})(Yt||(Yt={}));const In=new Map;function Ts(e,t){let{dragging:n,dependencies:r,config:a}=t;const[i,o]=c.useState(null),{frequency:s,measure:l,strategy:u}=a,f=c.useRef(e),h=x(),m=Qe(h),g=c.useCallback(function(k){k===void 0&&(k=[]),!m.current&&o(b=>b===null?k:b.concat(k.filter(w=>!b.includes(w))))},[m]),y=c.useRef(null),v=nt(k=>{if(h&&!n)return In;if(!k||k===In||f.current!==e||i!=null){const b=new Map;for(let w of e){if(!w)continue;if(i&&i.length>0&&!i.includes(w.id)&&w.rect.current){b.set(w.id,w.rect.current);continue}const D=w.node.current,R=D?new tn(l(D),D):null;w.rect.current=R,R&&b.set(w.id,R)}return b}return k},[e,i,n,h,l]);return c.useEffect(()=>{f.current=e},[e]),c.useEffect(()=>{h||g()},[n,h]),c.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),c.useEffect(()=>{h||typeof s!="number"||y.current!==null||(y.current=setTimeout(()=>{g(),y.current=null},s))},[s,h,g,...r]),{droppableRects:v,measureDroppableContainers:g,measuringScheduled:i!=null};function x(){switch(u){case Ze.Always:return!1;case Ze.BeforeDragging:return n;default:return!n}}}function hr(e,t){return nt(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function Ms(e,t){return hr(e,t)}function As(e){let{callback:t,disabled:n}=e;const r=Zt(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Tt(e){let{callback:t,disabled:n}=e;const r=Zt(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Os(e){return new tn(Ne(e),e)}function Nn(e,t,n){t===void 0&&(t=Os);const[r,a]=c.useReducer(s,null),i=As({callback(l){if(e)for(const u of l){const{type:f,target:h}=u;if(f==="childList"&&h instanceof HTMLElement&&h.contains(e)){a();break}}}}),o=Tt({callback:a});return ae(()=>{a(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),r;function s(l){if(!e)return null;if(e.isConnected===!1){var u;return(u=l??n)!=null?u:null}const f=t(e);return JSON.stringify(l)===JSON.stringify(f)?l:f}}function Es(e){const t=hr(e);return ir(e,t)}const Bn=[];function _s(e){const t=c.useRef(e),n=nt(r=>e?r&&r!==Bn&&e&&t.current&&e.parentNode===t.current.parentNode?r:pt(e):Bn,[e]);return c.useEffect(()=>{t.current=e},[e]),n}function js(e){const[t,n]=c.useState(null),r=c.useRef(e),a=c.useCallback(i=>{const o=Pt(i.target);o&&n(s=>s?(s.set(o,Ft(o)),new Map(s)):null)},[]);return c.useEffect(()=>{const i=r.current;if(e!==i){o(i);const s=e.map(l=>{const u=Pt(l);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Ft(u)]):null}).filter(l=>l!=null);n(s.length?new Map(s):null),r.current=e}return()=>{o(e),o(i)};function o(s){s.forEach(l=>{const u=Pt(l);u==null||u.removeEventListener("scroll",a)})}},[a,e]),c.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,o)=>_e(i,o),ie):dr(e):ie,[e,t])}function Ln(e,t){t===void 0&&(t=[]);const n=c.useRef(null);return c.useEffect(()=>{n.current=null},t),c.useEffect(()=>{const r=e!==ie;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?Je(e,n.current):ie}function Ps(e){c.useEffect(()=>{if(!Dt)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function $s(e,t){return c.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:i}=r;return n[a]=o=>{i(o,t)},n},{}),[e,t])}function gr(e){return c.useMemo(()=>e?is(e):null,[e])}const Nt=[];function Is(e,t){t===void 0&&(t=Ne);const[n]=e,r=gr(n?K(n):null),[a,i]=c.useReducer(s,Nt),o=Tt({callback:i});return e.length>0&&a===Nt&&i(),ae(()=>{e.length?e.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),i())},[e]),a;function s(){return e.length?e.map(l=>cr(l)?r:new tn(t(l),l)):Nt}}function Ns(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return tt(t)?t:e}function Bs(e){let{measure:t}=e;const[n,r]=c.useState(null),a=c.useCallback(u=>{for(const{target:f}of u)if(tt(f)){r(h=>{const m=t(f);return h?{...h,width:m.width,height:m.height}:m});break}},[t]),i=Tt({callback:a}),o=c.useCallback(u=>{const f=Ns(u);i==null||i.disconnect(),f&&(i==null||i.observe(f)),r(f?t(f):null)},[t,i]),[s,l]=vt(o);return c.useMemo(()=>({nodeRef:s,rect:n,setRef:l}),[n,s,l])}const Ls=[{sensor:Rt,options:{}},{sensor:St,options:{}}],Ws={current:{}},ht={draggable:{measure:_n},droppable:{measure:_n,strategy:Ze.WhileDragging,frequency:Yt.Optimized},dragOverlay:{measure:Ne}};class Ke extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Vs={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ke,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:bt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ht,measureDroppableContainers:bt,windowRect:null,measuringScheduled:!1},zs={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:bt,draggableNodes:new Map,over:null,measureDroppableContainers:bt},Mt=c.createContext(zs),mr=c.createContext(Vs);function Fs(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ke}}}function Us(e,t){switch(t.type){case W.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case W.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case W.DragEnd:case W.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case W.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Ke(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case W.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Ke(e.droppable.containers);return o.set(n,{...i,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case W.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const i=new Ke(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Ys(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=c.useContext(Mt),i=Vt(r),o=Vt(n==null?void 0:n.id);return c.useEffect(()=>{if(!t&&!r&&i&&o!=null){if(!en(i)||document.activeElement===i.target)return;const s=a.get(o);if(!s)return;const{activatorNode:l,node:u}=s;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const f of[l.current,u.current]){if(!f)continue;const h=Lo(f);if(h){h.focus();break}}})}},[r,t,a,o,i]),null}function Hs(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,i)=>i({transform:a,...r}),n):n}function qs(e){return c.useMemo(()=>({draggable:{...ht.draggable,...e==null?void 0:e.draggable},droppable:{...ht.droppable,...e==null?void 0:e.droppable},dragOverlay:{...ht.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function Xs(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const i=c.useRef(!1),{x:o,y:s}=typeof a=="boolean"?{x:a,y:a}:a;ae(()=>{if(!o&&!s||!t){i.current=!1;return}if(i.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const f=n(u),h=ir(f,r);if(o||(h.x=0),s||(h.y=0),i.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const m=or(u);m&&m.scrollBy({top:h.y,left:h.x})}},[t,o,s,r,n])}const vr=c.createContext({...ie,scaleX:1,scaleY:1});var we;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(we||(we={}));const br=c.memo(function(t){var n,r,a,i;let{id:o,accessibility:s,autoScroll:l=!0,children:u,sensors:f=Ls,collisionDetection:h=Jo,measuring:m,modifiers:g,...y}=t;const v=c.useReducer(Us,void 0,Fs),[x,k]=v,[b,w]=Yo(),[D,R]=c.useState(we.Uninitialized),S=D===we.Initialized,{draggable:{active:p,nodes:T,translate:$},droppable:{containers:I}}=x,C=p?T.get(p):null,_=c.useRef({initial:null,translated:null}),A=c.useMemo(()=>{var z;return p!=null?{id:p,data:(z=C==null?void 0:C.data)!=null?z:Ws,rect:_}:null},[p,C]),L=c.useRef(null),[N,H]=c.useState(null),[B,q]=c.useState(null),U=Qe(y,Object.values(y)),oe=rt("DndDescribedBy",o),at=c.useMemo(()=>I.getEnabled(),[I]),X=qs(m),{droppableRects:ue,measureDroppableContainers:ye,measuringScheduled:Be}=Ts(at,{dragging:S,dependencies:[$.x,$.y],config:X.droppable}),Z=Ss(T,p),it=c.useMemo(()=>B?zt(B):null,[B]),he=Ur(),de=Ms(Z,X.draggable.measure);Xs({activeNode:p?T.get(p):null,config:he.layoutShiftCompensation,initialRect:de,measure:X.draggable.measure});const P=Nn(Z,X.draggable.measure,de),Le=Nn(Z?Z.parentElement:null),se=c.useRef({activatorEvent:null,active:null,activeNode:Z,collisionRect:null,collisions:null,droppableRects:ue,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),pe=I.getNodeFor((n=se.current.over)==null?void 0:n.id),fe=Bs({measure:X.dragOverlay.measure}),Se=(r=fe.nodeRef.current)!=null?r:Z,Re=S?(a=fe.rect)!=null?a:P:null,dn=!!(fe.nodeRef.current&&fe.rect),fn=Es(dn?null:P),Ot=gr(Se?K(Se):null),ge=_s(S?pe??Z:null),ot=Is(ge),st=Hs(g,{transform:{x:$.x-fn.x,y:$.y-fn.y,scaleX:1,scaleY:1},activatorEvent:B,active:A,activeNodeRect:P,containerNodeRect:Le,draggingNodeRect:Re,over:se.current.over,overlayNodeRect:fe.rect,scrollableAncestors:ge,scrollableAncestorRects:ot,windowRect:Ot}),hn=it?_e(it,$):null,gn=js(ge),Nr=Ln(gn),Br=Ln(gn,[P]),Te=_e(st,Nr),Me=Re?ts(Re,st):null,We=A&&Me?h({active:A,collisionRect:Me,droppableRects:ue,droppableContainers:at,pointerCoordinates:hn}):null,mn=rr(We,"id"),[me,vn]=c.useState(null),Lr=dn?st:_e(st,Br),Wr=Zo(Lr,(i=me==null?void 0:me.rect)!=null?i:null,P),bn=c.useCallback((z,Q)=>{let{sensor:J,options:ve}=Q;if(L.current==null)return;const ee=T.get(L.current);if(!ee)return;const ne=z.nativeEvent,le=new J({active:L.current,activeNode:ee,event:ne,options:ve,context:se,onStart(re){const Ve=L.current;if(Ve==null)return;const ze=T.get(Ve);if(!ze)return;const{onDragStart:lt}=U.current,ct={active:{id:Ve,data:ze.data,rect:_}};Ee.unstable_batchedUpdates(()=>{lt==null||lt(ct),R(we.Initializing),k({type:W.DragStart,initialCoordinates:re,active:Ve}),b({type:"onDragStart",event:ct})})},onMove(re){k({type:W.DragMove,coordinates:re})},onEnd:Ae(W.DragEnd),onCancel:Ae(W.DragCancel)});Ee.unstable_batchedUpdates(()=>{H(le),q(z.nativeEvent)});function Ae(re){return async function(){const{active:ze,collisions:lt,over:ct,scrollAdjustedTranslate:xn}=se.current;let Fe=null;if(ze&&xn){const{cancelDrop:Ue}=U.current;Fe={activatorEvent:ne,active:ze,collisions:lt,delta:xn,over:ct},re===W.DragEnd&&typeof Ue=="function"&&await Promise.resolve(Ue(Fe))&&(re=W.DragCancel)}L.current=null,Ee.unstable_batchedUpdates(()=>{k({type:re}),R(we.Uninitialized),vn(null),H(null),q(null);const Ue=re===W.DragEnd?"onDragEnd":"onDragCancel";if(Fe){const Et=U.current[Ue];Et==null||Et(Fe),b({type:Ue,event:Fe})}})}}},[T]),Vr=c.useCallback((z,Q)=>(J,ve)=>{const ee=J.nativeEvent,ne=T.get(ve);if(L.current!==null||!ne||ee.dndKit||ee.defaultPrevented)return;const le={active:ne};z(J,Q.options,le)===!0&&(ee.dndKit={capturedBy:Q.sensor},L.current=ve,bn(J,Q))},[T,bn]),wn=Rs(f,Vr);Ps(f),ae(()=>{P&&D===we.Initializing&&R(we.Initialized)},[P,D]),c.useEffect(()=>{const{onDragMove:z}=U.current,{active:Q,activatorEvent:J,collisions:ve,over:ee}=se.current;if(!Q||!J)return;const ne={active:Q,activatorEvent:J,collisions:ve,delta:{x:Te.x,y:Te.y},over:ee};Ee.unstable_batchedUpdates(()=>{z==null||z(ne),b({type:"onDragMove",event:ne})})},[Te.x,Te.y]),c.useEffect(()=>{const{active:z,activatorEvent:Q,collisions:J,droppableContainers:ve,scrollAdjustedTranslate:ee}=se.current;if(!z||L.current==null||!Q||!ee)return;const{onDragOver:ne}=U.current,le=ve.get(mn),Ae=le&&le.rect.current?{id:le.id,rect:le.rect.current,data:le.data,disabled:le.disabled}:null,re={active:z,activatorEvent:Q,collisions:J,delta:{x:ee.x,y:ee.y},over:Ae};Ee.unstable_batchedUpdates(()=>{vn(Ae),ne==null||ne(re),b({type:"onDragOver",event:re})})},[mn]),ae(()=>{se.current={activatorEvent:B,active:A,activeNode:Z,collisionRect:Me,collisions:We,droppableRects:ue,draggableNodes:T,draggingNode:Se,draggingNodeRect:Re,droppableContainers:I,over:me,scrollableAncestors:ge,scrollAdjustedTranslate:Te},_.current={initial:Re,translated:Me}},[A,Z,We,Me,T,Se,Re,ue,I,me,ge,Te]),ks({...he,delta:$,draggingRect:Me,pointerCoordinates:hn,scrollableAncestors:ge,scrollableAncestorRects:ot});const zr=c.useMemo(()=>({active:A,activeNode:Z,activeNodeRect:P,activatorEvent:B,collisions:We,containerNodeRect:Le,dragOverlay:fe,draggableNodes:T,droppableContainers:I,droppableRects:ue,over:me,measureDroppableContainers:ye,scrollableAncestors:ge,scrollableAncestorRects:ot,measuringConfiguration:X,measuringScheduled:Be,windowRect:Ot}),[A,Z,P,B,We,Le,fe,T,I,ue,me,ye,ge,ot,X,Be,Ot]),Fr=c.useMemo(()=>({activatorEvent:B,activators:wn,active:A,activeNodeRect:P,ariaDescribedById:{draggable:oe},dispatch:k,draggableNodes:T,over:me,measureDroppableContainers:ye}),[B,wn,A,P,k,oe,T,me,ye]);return G.createElement(Zn.Provider,{value:w},G.createElement(Mt.Provider,{value:Fr},G.createElement(mr.Provider,{value:zr},G.createElement(vr.Provider,{value:Wr},u)),G.createElement(Ys,{disabled:(s==null?void 0:s.restoreFocus)===!1})),G.createElement(Xo,{...s,hiddenTextDescribedById:oe}));function Ur(){const z=(N==null?void 0:N.autoScrollEnabled)===!1,Q=typeof l=="object"?l.enabled===!1:l===!1,J=S&&!z&&!Q;return typeof l=="object"?{...l,enabled:J}:{enabled:J}}}),Gs=c.createContext(null),Wn="button",Ks="Droppable";function Qs(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const i=rt(Ks),{activators:o,activatorEvent:s,active:l,activeNodeRect:u,ariaDescribedById:f,draggableNodes:h,over:m}=c.useContext(Mt),{role:g=Wn,roleDescription:y="draggable",tabIndex:v=0}=a??{},x=(l==null?void 0:l.id)===t,k=c.useContext(x?vr:Gs),[b,w]=vt(),[D,R]=vt(),S=$s(o,t),p=Qe(n);ae(()=>(h.set(t,{id:t,key:i,node:b,activatorNode:D,data:p}),()=>{const $=h.get(t);$&&$.key===i&&h.delete(t)}),[h,t]);const T=c.useMemo(()=>({role:g,tabIndex:v,"aria-disabled":r,"aria-pressed":x&&g===Wn?!0:void 0,"aria-roledescription":y,"aria-describedby":f.draggable}),[r,g,v,x,y,f.draggable]);return{active:l,activatorEvent:s,activeNodeRect:u,attributes:T,isDragging:x,listeners:r?void 0:S,node:b,over:m,setNodeRef:w,setActivatorNodeRef:R,transform:k}}function Js(){return c.useContext(mr)}const Zs="Droppable",el={timeout:25};function tl(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const i=rt(Zs),{active:o,dispatch:s,over:l,measureDroppableContainers:u}=c.useContext(Mt),f=c.useRef({disabled:n}),h=c.useRef(!1),m=c.useRef(null),g=c.useRef(null),{disabled:y,updateMeasurementsFor:v,timeout:x}={...el,...a},k=Qe(v??r),b=c.useCallback(()=>{if(!h.current){h.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(k.current)?k.current:[k.current]),g.current=null},x)},[x]),w=Tt({callback:b,disabled:y||!o}),D=c.useCallback((T,$)=>{w&&($&&(w.unobserve($),h.current=!1),T&&w.observe(T))},[w]),[R,S]=vt(D),p=Qe(t);return c.useEffect(()=>{!w||!R.current||(w.disconnect(),h.current=!1,w.observe(R.current))},[R,w]),ae(()=>(s({type:W.RegisterDroppable,element:{id:r,key:i,disabled:n,node:R,rect:m,data:p}}),()=>s({type:W.UnregisterDroppable,key:i,id:r})),[r]),c.useEffect(()=>{n!==f.current.disabled&&(s({type:W.SetDroppableDisabled,id:r,key:i,disabled:n}),f.current.disabled=n)},[r,i,n,s]),{active:o,rect:m,isOver:(l==null?void 0:l.id)===r,node:R,over:l,setNodeRef:S}}function nl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const rl=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:nl(r,n,t)},wr=e=>{let{transform:t}=e;return{...t,x:0}};function At(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function al(e,t){return e.reduce((n,r,a)=>{const i=t.get(r);return i&&(n[a]=i),n},Array(e.length))}function ut(e){return e!==null&&e>=0}function il(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ol(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const xr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const i=At(t,r,n),o=t[a],s=i[a];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},dt={scaleX:1,scaleY:1},Cr=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:i,overIndex:o}=e;const s=(t=i[n])!=null?t:r;if(!s)return null;if(a===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(s.top+s.height):u.top-s.top,...dt}:null}const l=sl(i,a,n);return a>n&&a<=o?{x:0,y:-s.height-l,...dt}:a<n&&a>=o?{x:0,y:s.height+l,...dt}:{x:0,y:0,...dt}};function sl(e,t,n){const r=e[t],a=e[t-1],i=e[t+1];return r?n<t?a?r.top-(a.top+a.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const yr="Sortable",kr=G.createContext({activeIndex:-1,containerId:yr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:xr,disabled:{draggable:!1,droppable:!1}});function Dr(e){let{children:t,id:n,items:r,strategy:a=xr,disabled:i=!1}=e;const{active:o,dragOverlay:s,droppableRects:l,over:u,measureDroppableContainers:f}=Js(),h=rt(yr,n),m=s.rect!==null,g=c.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),y=o!=null,v=o?g.indexOf(o.id):-1,x=u?g.indexOf(u.id):-1,k=c.useRef(g),b=!il(g,k.current),w=x!==-1&&v===-1||b,D=ol(i);ae(()=>{b&&y&&f(g)},[b,g,y,f]),c.useEffect(()=>{k.current=g},[g]);const R=c.useMemo(()=>({activeIndex:v,containerId:h,disabled:D,disableTransforms:w,items:g,overIndex:x,useDragOverlay:m,sortedRects:al(g,l),strategy:a}),[v,h,D.draggable,D.droppable,w,g,x,l,m,a]);return G.createElement(kr.Provider,{value:R},t)}const ll=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return At(n,r,a).indexOf(t)},cl=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:i,newIndex:o,previousItems:s,previousContainerId:l,transition:u}=e;return!u||!r||s!==i&&a===o?!1:n?!0:o!==a&&t===l},ul={duration:200,easing:"ease"},pr="transform",dl=je.Transition.toString({property:pr,duration:0,easing:"linear"}),fl={roleDescription:"sortable"};function hl(e){let{disabled:t,index:n,node:r,rect:a}=e;const[i,o]=c.useState(null),s=c.useRef(n);return ae(()=>{if(!t&&n!==s.current&&r.current){const l=a.current;if(l){const u=Ne(r.current,{ignoreTransform:!0}),f={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(f.x||f.y)&&o(f)}}n!==s.current&&(s.current=n)},[t,n,r,a]),c.useEffect(()=>{i&&o(null)},[i]),i}function Sr(e){let{animateLayoutChanges:t=cl,attributes:n,disabled:r,data:a,getNewIndex:i=ll,id:o,strategy:s,resizeObserverConfig:l,transition:u=ul}=e;const{items:f,containerId:h,activeIndex:m,disabled:g,disableTransforms:y,sortedRects:v,overIndex:x,useDragOverlay:k,strategy:b}=c.useContext(kr),w=gl(r,g),D=f.indexOf(o),R=c.useMemo(()=>({sortable:{containerId:h,index:D,items:f},...a}),[h,a,D,f]),S=c.useMemo(()=>f.slice(f.indexOf(o)),[f,o]),{rect:p,node:T,isOver:$,setNodeRef:I}=tl({id:o,data:R,disabled:w.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...l}}),{active:C,activatorEvent:_,activeNodeRect:A,attributes:L,setNodeRef:N,listeners:H,isDragging:B,over:q,setActivatorNodeRef:U,transform:oe}=Qs({id:o,data:R,attributes:{...fl,...n},disabled:w.draggable}),at=$o(I,N),X=!!C,ue=X&&!y&&ut(m)&&ut(x),ye=!k&&B,Be=ye&&ue?oe:null,it=ue?Be??(s??b)({rects:v,activeNodeRect:A,activeIndex:m,overIndex:x,index:D}):null,he=ut(m)&&ut(x)?i({id:o,items:f,activeIndex:m,overIndex:x}):D,de=C==null?void 0:C.id,P=c.useRef({activeId:de,items:f,newIndex:he,containerId:h}),Le=f!==P.current.items,se=t({active:C,containerId:h,isDragging:B,isSorting:X,id:o,index:D,items:f,newIndex:P.current.newIndex,previousItems:P.current.items,previousContainerId:P.current.containerId,transition:u,wasDragging:P.current.activeId!=null}),pe=hl({disabled:!se,index:D,node:T,rect:p});return c.useEffect(()=>{X&&P.current.newIndex!==he&&(P.current.newIndex=he),h!==P.current.containerId&&(P.current.containerId=h),f!==P.current.items&&(P.current.items=f)},[X,he,h,f]),c.useEffect(()=>{if(de===P.current.activeId)return;if(de&&!P.current.activeId){P.current.activeId=de;return}const Se=setTimeout(()=>{P.current.activeId=de},50);return()=>clearTimeout(Se)},[de]),{active:C,activeIndex:m,attributes:L,data:R,rect:p,index:D,newIndex:he,items:f,isOver:$,isSorting:X,isDragging:B,listeners:H,node:T,overIndex:x,over:q,setNodeRef:at,setActivatorNodeRef:U,setDroppableNodeRef:I,setDraggableNodeRef:N,transform:pe??it,transition:fe()};function fe(){if(pe||Le&&P.current.newIndex===D)return dl;if(!(ye&&!en(_)||!u)&&(X||se))return je.Transition.toString({...u,property:pr})}}function gl(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function Ct(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const ml=[O.Down,O.Right,O.Up,O.Left],Rr=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:i,over:o,scrollableAncestors:s}}=t;if(ml.includes(e.code)){if(e.preventDefault(),!n||!r)return;const l=[];i.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const m=a.get(h.id);if(m)switch(e.code){case O.Down:r.top<m.top&&l.push(h);break;case O.Up:r.top>m.top&&l.push(h);break;case O.Left:r.left>m.left&&l.push(h);break;case O.Right:r.left<m.left&&l.push(h);break}});const u=Ko({active:n,collisionRect:r,droppableRects:a,droppableContainers:l,pointerCoordinates:null});let f=rr(u,"id");if(f===(o==null?void 0:o.id)&&u.length>1&&(f=u[1].id),f!=null){const h=i.get(n.id),m=i.get(f),g=m?a.get(m.id):null,y=m==null?void 0:m.node.current;if(y&&g&&h&&m){const x=pt(y).some((S,p)=>s[p]!==S),k=Tr(h,m),b=vl(h,m),w=x||!k?{x:0,y:0}:{x:b?r.width-g.width:0,y:b?r.height-g.height:0},D={x:g.left,y:g.top};return w.x&&w.y?D:Je(D,w)}}}};function Tr(e,t){return!Ct(e)||!Ct(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function vl(e,t){return!Ct(e)||!Ct(t)||!Tr(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var rn={},bl=Ce;Object.defineProperty(rn,"__esModule",{value:!0});var Mr=rn.default=void 0,wl=bl(xe()),xl=d,Cl=(0,wl.default)((0,xl.jsx)("path",{d:"M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z"}),"SwitchLeft");Mr=rn.default=Cl;var an={},yl=Ce;Object.defineProperty(an,"__esModule",{value:!0});var Ar=an.default=void 0,kl=yl(xe()),Dl=d,pl=(0,kl.default)((0,Dl.jsx)("path",{d:"M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z"}),"SwitchRight");Ar=an.default=pl;function Sl(e){const t=e.bulkActions.map(n=>{const{name:r,show:a,onClick:i,onAllClick:o,...s}=n;return{...s,attrs:{"data-mosaic-id":`action_bulk_${r}`},onClick:function(){if(e.checkedAllPages===!0)o();else{const l=e.data.filter((u,f)=>{var h;return((h=e.checked)==null?void 0:h[f])===!0});i({data:l})}}}});return d.jsx(et,{buttons:t})}const Or=c.memo(Sl),Rl=E.div`
	text-align: center;
	font-weight: normal;
	color: ${M.newColors.grey3[100]};
	border-bottom: ${M.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
`;function Tl(e){return d.jsxs(Rl,{children:[d.jsxs("span",{className:"bulkText",children:[e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.count})," ","records are selected."]}),!e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.rowCount})," ","records on this page are selected."]})]}),d.jsx(F,{color:"blue",variant:"text",label:e.checkedAllPages?"Clear Selection":`Select All ${e.count} Records`,onClick:e.onCheckAllPagesClick})]})}const Er=c.memo(Tl),Ml=E.thead`
	text-align: left;

	.row-header {
		th:first-child {
			padding-left: 16px;
		}

		th:last-child {
			padding-right: 16px;
		}
	}
`,qe=E.th`
	background-color: ${M.newColors.grey2[100]};
	color: ${M.newColors.almostBlack[100]};
	font-size: 14px;
	font-weight: 510;
	height: 40px;
	padding: 8px;
	position: sticky;
	text-align: left;
	top: 0;
	white-space: nowrap;
	z-index: 2;

	${""}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
	}

	& > .columnHeader {
		display: inline-flex;
		align-items: center;
	}

	&.sortable > .columnHeader {
		cursor: pointer;
	}

	& > .columnHeader > .icon {
		visibility: hidden;
		height: 24px;
		width: 24px;
		margin-left: 12px;
		transform: rotate(90deg);
	}

	&.active {
		color: ${M.newColors.almostBlack[100]};
		font-weight: 510;
	}

	&.active > .columnHeader > .icon {
		visibility: visible;
	}

	&.active > .columnHeader:hover > .icon {
		color: black;
	}

	& > .columnHeader:hover > .icon {
		visibility: visible;
		color: ${M.newColors.grey3[100]};
	}

	&.bulk {
		width: 52px;
	}
`;function Al(e){return e==="asc"?"desc":"asc"}function Ol(e){var r,a,i;const{t}=Pe(),n=(((r=e.bulkActions)==null?void 0:r.length)>0?1:0)+1+e.columns.length;return d.jsxs(Ml,{children:[d.jsxs("tr",{className:"row-header",children:[e.onReorder&&d.jsx(qe,{className:"bulk"},"_draggable"),e.onCheckAllClick&&d.jsx(qe,{className:"bulk",colSpan:((a=e.bulkActions)==null?void 0:a.length)<=0&&e.anyChecked?e.columns.length+2:1,children:d.jsx(yt,{checked:e.allChecked,indeterminate:!e.allChecked&&e.anyChecked,onClick:e.onCheckAllClick,disabled:e.disabled})},"_bulk"),((i=e.bulkActions)==null?void 0:i.length)>0&&e.anyChecked&&d.jsx(qe,{colSpan:e.columns.length+1,children:d.jsx(Or,{data:e.data,checked:e.checked,checkedAllPages:e.checkedAllPages,bulkActions:e.bulkActions})},"_bulk_actions"),!e.anyChecked&&e.hasActions&&d.jsx(qe,{children:d.jsx("span",{className:"columnHeader",children:t("mosaic:DataView.actions")})},"_actions"),!e.anyChecked&&e.columns.map(o=>{const s=function(){e.onSortChange({name:o.name,dir:f})};let l,u,f;return o.sortable&&(l=e.sort.name===o.name,u=l&&e.sort.dir==="desc"?Mr:Ar,f=l?Al(e.sort.dir):"asc"),d.jsx(qe,{className:`
									${o.sortable?"sortable":""}
									${l?"active":""}
								`,children:d.jsxs("span",{className:"columnHeader",onClick:o.sortable?s:void 0,children:[o.label,o.sortable&&d.jsx(u,{className:"icon"})]})},o.name)})]}),e.showBulkAll&&d.jsx("tr",{children:d.jsx("th",{colSpan:n,children:d.jsx(Er,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})})})]})}var on={},El=Ce;Object.defineProperty(on,"__esModule",{value:!0});var sn=on.default=void 0,_l=El(xe()),jl=d,Pl=(0,_l.default)((0,jl.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");sn=on.default=Pl;const $l=E.td`
	height: 40px;
	vertical-align: middle;

	${""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	& > div {
		color: ${M.newColors.almostBlack[100]};
		font-weight: 400;
	}

	&.bold > div {
		font-weight: 600;
	}

	&.italic {
		font-style: italic;
	}

	&.strikeThrough {
		text-decoration-line: line-through;
	}

	& > div.noWrap {
		white-space: nowrap;
	}

	& > div.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;function Il(e){const t=e.expandCell!==void 0?e.expandCell:!1,n=e.bold!==void 0?e.bold:!1,r=e.italic!==void 0?e.italic:!1,a=e.strikeThrough!==void 0?e.strikeThrough:!1,i=e.noWrap!==void 0?e.noWrap:!1,o=e.ellipsis!==void 0?e.ellipsis:!1,s=e.maxWidth!==void 0?e.maxWidth:void 0,l=e.textTransform!==void 0?e.textTransform:void 0;return d.jsx($l,{className:`
				${t?"expandCell":""}
				${n?"bold":""}
				${r?"italic":""}
				${a?"strikeThrough":""}
			`,"aria-label":e.ariaLabel,children:d.jsx("div",{className:`
					${i?"noWrap":""}
					${o?"ellipsis":""}
				`,style:{maxWidth:s,textTransform:l},title:o&&typeof e.children=="string"?e.children:void 0,children:e.children})})}const ft=c.memo(Il),Nl=E(et)`
    ${({$hidden:e})=>e&&`
        visibility: hidden;
    `}
`;function Bl(e){const t=c.useMemo(()=>({row:e.originalRowData}),[e.originalRowData]),n=c.useMemo(()=>e.primaryActions||[],[e.primaryActions]),r=Wt(n,t,"show"),a=c.useMemo(()=>e.additionalActions||[],[e.additionalActions]),i=Wt(a,t,"show"),o=c.useMemo(()=>r.map(u=>{const{name:f,show:h,onClick:m,...g}=u,y=()=>{m({data:e.originalRowData})},v=[g.disabled,e.disabled,e.actionsHidden].some(x=>x);return c.createElement(F,{...g,disabled:v,key:`primary_${f}`,attrs:{"data-mosaic-id":`action_primary_${f}`},onClick:y})}),[r,e.originalRowData,e.disabled,e.actionsHidden]),s=c.useMemo(()=>{if(!i.length)return[];const u=[e.disabled,e.actionsHidden].some(f=>f);return[d.jsx(F,{color:"black",variant:"icon",mIcon:e.activeDisplay&&ma,attrs:{"data-mosaic-id":"additional_actions_dropdown"},tooltip:"More actions",disabled:u,menuItems:i.map(f=>{const{name:h,show:m,onClick:g,...y}=f;return{...y,attrs:{"data-mosaic-id":`action_additional_${h}`},onClick:()=>{g({data:e.originalRowData})}}})},"additional")]},[i,e.originalRowData,e.disabled,e.actionsHidden]),l=c.useMemo(()=>[...o,...s],[o,s]);return l.length===0?null:d.jsx(Nl,{$hidden:e.actionsHidden,children:l})}const _r=c.memo(Bl),Ll=E.tr`
	${({$isDragOverlay:e})=>e&&`
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	&.checked {
		background-color: ${M.newColors.grey1[100]};
	}
`,Wl=E(ca)`
	&&{
		cursor: grab;
	}
`,ln=c.forwardRef(({checked:e,onReorder:t,disabled:n,onCheckboxClick:r,hasActions:a,primaryActions:i,additionalActions:o,actionsHidden:s,originalRowData:l,columns:u,row:f,isDragOverlay:h,style:m,...g},y)=>d.jsxs(Ll,{style:m,className:e&&"checked",ref:y,$isDragOverlay:h,children:[t&&d.jsx(ft,{children:d.jsx(F,{disabled:n,color:"black",variant:"icon",mIcon:sn,muiAttrs:{...g},component:Wl})},"_draggable"),r&&d.jsx(ft,{children:d.jsx(yt,{checked:e===!0,onClick:r,disabled:n})},"_bulk"),a&&d.jsx(ft,{children:d.jsx(_r,{primaryActions:i,additionalActions:o,actionsHidden:s,disabled:n,originalRowData:l,activeDisplay:"list"})}),u.map(v=>d.jsx(ft,{ariaLabel:v.label,expandCell:!0,bold:v.style&&v.style.bold,italic:v.style&&v.style.italic,strikeThrough:v.style&&v.style.strikeThrough,noWrap:v.style&&v.style.noWrap,ellipsis:v.style&&v.style.ellipsis,maxWidth:v.style&&v.style.maxWidth,textTransform:v.style&&v.style.textTransform,children:f[v.name]},v.name))]}));ln.displayName="DataViewTrStatic";function Vl(e){const{attributes:t,listeners:n,setNodeRef:r,transform:a,transition:i,isDragging:o}=Sr({id:e.originalRowData.id}),s={transform:je.Translate.toString(a),transition:i};return d.jsx(ln,{...e,...t,...n,ref:r,style:s,isDragOverlay:o})}function zl(e){return e.onReorder?d.jsx(Vl,{...e}):d.jsx(ln,{...e})}const Fl=E.tbody`
	& > tr {
		border-bottom: 1px solid ${M.newColors.grey2[100]};

		& > td:first-child {
			padding-left: 16px;
		}

		& > td:last-child {
			padding-right: 16px;
		}
	}

	& > tr > td {
		padding: 8px;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`,jr=c.forwardRef((e,t)=>d.jsx(Fl,{ref:t,children:e.transformedData.map((n,r)=>{var a,i,o,s;return d.jsx(zl,{row:n,originalRowData:e.data[r],primaryActions:(i=(a=e.rowActions)==null?void 0:a[n.id])==null?void 0:i.primary,additionalActions:(s=(o=e.rowActions)==null?void 0:o[n.id])==null?void 0:s.additional,actionsHidden:e.actionsHidden,disabled:e.disabled,onCheckboxClick:e.onCheckboxClick?()=>e.onCheckboxClick(r):void 0,checked:e.checked?e.checked[r]:!1,columns:e.columns,onReorder:e.onReorder,hasActions:e.hasActions},n.id)})}));jr.displayName="DataViewTBody";const Ul=c.memo(jr);function Yl(e,t){let n=e[t.column||t.name];if(n!==void 0&&t.transforms!==void 0)for(const r of t.transforms)n!==void 0&&(n=r({data:n,row:e}));return n}function Pr(e,t){return e.map(r=>{const a={...r};return t.forEach(i=>{a[i.name]=Yl(r,i)}),a})}function Hl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}function ql(e){return e.reduce((t,n)=>t+n,0)}const Xl=E.table`
	width: 100%;
	border-collapse: collapse;
`;function Gl(e){const t=c.useRef(),{rowActions:n}=e,r=c.useMemo(()=>Pr(e.data,e.activeColumnObjs),[e.data,e.activeColumnObjs]),a=ql(Object.entries(n).map(([,{primary:l=[],additional:u=[]}])=>l.length+u.length))>0,i=er(wt(Rt),wt(St,{coordinateGetter:Rr}));function o(l){const{active:u,over:f}=l;if(u.id!==f.id){const h=e.data.map(({id:m})=>String(m));e.onReorder(At(h,h.indexOf(u.id),h.indexOf(f.id)))}}const s=c.useCallback(({draggingNodeRect:l,transform:u})=>{if(!l||!t.current)return u;const f=t.current.getBoundingClientRect();return f?Hl(u,l,f):u},[]);return d.jsx(br,{sensors:i,collisionDetection:ar,onDragEnd:o,autoScroll:{layoutShiftCompensation:!1},modifiers:[wr,s],children:d.jsx(Dr,{items:r.map(l=>l.id),strategy:Cr,children:d.jsxs(Xl,{children:[d.jsx(Ol,{checked:e.checked,checkedAllPages:e.checkedAllPages,columns:e.activeColumnObjs,allColumns:e.columns,data:e.data,bulkActions:e.bulkActions,sort:e.sort,count:e.count,rowCount:e.rowCount,onSortChange:e.onSortChange,onCheckAllClick:e.onCheckAllClick,onCheckAllPagesClick:e.onCheckAllPagesClick,onColumnsChange:e.onColumnsChange,onReorder:e==null?void 0:e.onReorder,allChecked:e.allChecked,anyChecked:e.anyChecked,showBulkAll:e.showBulkAll,hasActions:a,disabled:e.disabled}),d.jsx(Ul,{checked:e.checked,columns:e.activeColumnObjs,data:e.data,hasActions:a,transformedData:r,bulkActions:e.bulkActions,actionsHidden:e.actionsHidden,disabled:e.disabled,rowActions:n,onCheckboxClick:e.onCheckboxClick,onReorder:e.onReorder,ref:t})]})})})}const Kl=Ht.topComponent.bigScreenView+"px",Ql=Ht.topComponent.responsiveView+"px",Jl=Ht.mobile+"px",Zl=E.div`
	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 24px;

		@media (min-width: ${Jl}) {
			grid-template-columns: repeat(2, 1fr);
		};

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		};

		@media (min-width: ${Ql}) {
			grid-template-columns: repeat(4, 1fr);
		};

		@media (min-width: 1296px) {
			grid-template-columns: repeat(5, 1fr);
		};

		@media (min-width: ${Kl}) {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	& > .grid > .cell {
		min-width: 0;
	}

	& > .grid > .cell.checked > .image > .checkboxContainer {
		opacity: 1;
	}

	& > .grid > .cell > .image img {
		max-width: 100%;
		min-width: 100%;
	}

	& > .grid > .cell h2 {
		color: ${M.newColors.almostBlack[100]};
		margin: 8px 0 8px 0;
		max-width: 161px;
		font-size: 13px;
		font-weight: ${M.fontWeight.semiBold};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .grid > .cell h3 {
		margin: 0;
		font-weight: ${M.fontWeight.normal};
		font-size: 12px;
		color: ${M.newColors.almostBlack[100]};
	}

	& > .grid > .cell .image {
		position: relative;
	}

	& > .grid > .cell > .image > .checkboxContainer {
		opacity: 0;
		position: absolute;
		top: 8px;
		left: 8px;
		transition: opacity 150ms;
		z-index: 1;
	}

	& > .grid > .cell .image img {
		display: block;
		width: 100%;
	}

	& > .grid > .cell > .image:hover > .checkboxContainer,
	& > .grid > .cell > .image > .checkboxContainer.anyChecked,
	& > .grid > .cell > .image:hover > .checkboxContainer .custom-checkbox:hover {
		opacity: 1;
	}

	& > .grid > .cell > .image:hover > .checkboxContainer .custom-checkbox,
	& > .grid > .cell > .image > .checkboxContainer.anyChecked .custom-checkbox {
		background: ${M.newColors.grey2[100]};
		opacity: 0.7;
	}

	& > .grid > .cell.checked > .image:hover > .checkboxContainer .custom-checkbox {
		background: transparent;
		opacity: 1;
	}

	& .overlay {
		position: absolute;
		height: 100%;
		width: 100%;
		opacity: 0;
		background-color: ${M.newColors.almostBlack[100]};
	}

	& > .grid > .cell .image > .imageContainer {
		position: relative;
	}

	& > .grid > .cell .image > .imageContainer:hover .overlay,
	& > .grid > .cell .image > .checkboxContainer:hover ~ .imageContainer > .overlay,
	& > .grid > .cell.checked .image > .imageContainer > .overlay	{
		opacity: 0.6;
	}

	& > .grid > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		margin-bottom: 8px;
	}

	& > .grid > .cell > .info > .left {
		min-width: 0;
	}

	& > .grid > .cell > .info > .right {
		flex-shrink: 0;
		margin-left: 4px;

		& > span button {
			margin: 0px;
		}
	}
`;function ec(e){if(!e.gridColumnsMap)throw new Error("You must specify gridColumnsMap in order to use the grid view.");const t=c.useMemo(()=>Pr(e.data,e.columns),[e.data,e.columns]),n=r=>()=>{e.onCheckboxClick(r)};return d.jsxs(Zl,{children:[e.showBulkAll&&d.jsx("div",{className:"topRowBulkAll",children:d.jsx(Er,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})}),d.jsx("div",{className:"grid",children:t.map((r,a)=>{var l,u,f,h,m,g;const i=r[e.gridColumnsMap.image],o=r[e.gridColumnsMap.primary],s=r[e.gridColumnsMap.secondary];return d.jsxs("div",{className:`
									cell
									${(l=e.checked)!=null&&l[a]?"checked":""}
								`,children:[i&&d.jsxs("div",{className:"image",children:[e.onCheckboxClick&&d.jsx("div",{className:`checkboxContainer ${e.anyChecked&&!((u=e.checked)!=null&&u[a])?"anyChecked":""}`,children:d.jsx(yt,{className:"checkbox",checked:e.checked[a],onClick:n(a)})}),d.jsxs("div",{className:"imageContainer",children:[d.jsx("div",{className:"overlay"}),i]})]}),d.jsxs("div",{className:"info",children:[d.jsxs("div",{className:"left",children:[o&&d.jsx(kn,{tag:"h2",children:o}),s&&d.jsx(kn,{tag:"h3",children:s})]}),d.jsx("div",{className:"right",children:d.jsx(_r,{primaryActions:(h=(f=e.rowActions)==null?void 0:f[r.id])==null?void 0:h.primary,additionalActions:(g=(m=e.rowActions)==null?void 0:m[r.id])==null?void 0:g.additional,actionsHidden:e.actionsHidden,originalRowData:r,activeDisplay:"grid",disabled:e.disabled})})]})]},a)})})]})}const tc={name:"list",label:"List",component:Gl,mIcon:Kn},nc={name:"grid",label:"Grid",component:ec,mIcon:Gn},rc=E.div`
	font-family: ${M.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`,ac=E(va)`
	z-index: 1100;
	${({$anchorStyle:e,$display:t})=>e&&`.MuiDrawer-paper {
${e.currentStyle==="left"&&e.previousStyle==="right"&&`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`}

${e.currentStyle==="left"&&e.previousStyle==="left"&&t&&`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`}

${e.currentStyle==="left"&&e.previousStyle==="left"&&!t&&`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-100vw) !important;
`}
		}`}
`,ic=e=>{const{open:t,onClose:n,children:r,idx:a,anchor:i="right",display:o,anchorstyle:s,exitCB:l,backdropCloseHandler:u=!0}=e,f=c.useRef();c.useEffect(()=>{f.current=s},[s]);const[h,m]=c.useState({open:!1});c.useEffect(()=>{t===!0&&m({...h,open:!0})},[t]);const g=function(){m({...h,open:!1}),l&&l()},y=(v,x)=>{!u&&x==="backdropClick"||n()};return d.jsx(d.Fragment,{children:d.jsx(ac,{$anchorStyle:{currentStyle:s,previousStyle:f.current},anchor:i,$display:o,open:t,onClose:y,SlideProps:{onExited:g},children:h.open&&d.jsx(rc,{children:r})},a)})},Vn=E.h2`
  color: ${M.newColors.almostBlack[100]};
  font-size: 20px;
  font-weight: ${M.fontWeight.normal};
  line-height: 24px;
  margin: 0px;
`,oc=E.div`
  display: flex;
  margin-top: 30px;

  & > .left {
    border-right: 2px solid ${M.newColors.grey2[100]};
    flex: 1;
    margin: 0 32px 0 40px;
    width: 265px;
  }

  & > .left .listItem {
    margin: 14px 0px 0px -10px;
    background: white;
  }

  & > .right {
    flex: 1;
    margin: 0 44px 0 32px;
    width: 280px;
  }

  & > .right .droppable-columns {
	margin-top: 4px;
}
`,sc=E.div`
	${({$isDragging:e})=>e&&`
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	cursor: grab;
  	align-items: center;
	border-bottom: 1px solid ${M.newColors.grey2[100]};
  	display: flex;
  	padding: 20px 0 20px 0;

	span {
		margin-left: 16px;
		color: ${M.newColors.almostBlack[100]};
		font-weight: ${M.fontWeight.normal};
	}

	.MuiSvgIcon-root {
		color: ${M.newColors.grey3[100]};
	}
`;function lc({name:e,allColumns:t}){const n=t.find(f=>f.name===e);if(!n)throw new Error(`Column "${e}" not found in column list: ${t.join(", ")}`);const{attributes:r,listeners:a,setNodeRef:i,transform:o,transition:s,isDragging:l}=Sr({id:n.name}),u={transform:je.Translate.toString(o),transition:s};return d.jsxs(sc,{...r,...a,ref:i,style:u,$isDragging:l,children:[d.jsx(sn,{}),d.jsx("span",{children:n.label})]})}function cc({activeColumns:e,allColumns:t,onReorder:n}){const r=er(wt(Rt),wt(St,{coordinateGetter:Rr}));function a(i){const{active:o,over:s}=i;o.id!==s.id&&n(At(e,e.indexOf(o.id),e.indexOf(s.id)))}return d.jsx("div",{children:d.jsx(br,{sensors:r,collisionDetection:ar,onDragEnd:a,autoScroll:{layoutShiftCompensation:!1},modifiers:[wr,rl],children:d.jsx(Dr,{items:e,strategy:Cr,children:e.map(i=>d.jsx(lc,{name:i,allColumns:t},i))})})})}function uc(e){const[t,n]=c.useState({activeColumns:e.columns.map(l=>l.name),checkedOptions:e.columns.map(l=>({label:l.label,value:l.name}))}),{t:r}=Pe(),a=function(){e.onClose(),e.onChange(t.activeColumns)},i=function(l){n({...t,activeColumns:l.map(u=>u.value),checkedOptions:l})},o=e.allColumns.map(l=>({label:l.label,value:l.name})).sort((l,u)=>l.label.localeCompare(u.label)),s=[{label:r("mosaic:common.cancel"),color:"gray",variant:"outlined",onClick:e.onClose},{label:r("mosaic:common.apply"),onClick:a,color:"yellow",variant:"contained"}];return d.jsxs("div",{children:[d.jsx(xa,{title:r("mosaic:DataView.table_settings"),buttons:s,onBack:e.onClose,backLabel:r("mosaic:DataView.cancel_table_settings")}),d.jsxs(oc,{children:[d.jsxs("div",{className:"left",children:[d.jsx(Vn,{children:r("mosaic:DataView.columns")}),d.jsx(ra,{options:o,checked:t.checkedOptions,onChange:i})]}),d.jsxs("div",{className:"right",children:[d.jsx(Vn,{children:r("mosaic:DataView.column_order")}),d.jsx(cc,{activeColumns:t.activeColumns,onReorder:l=>n({...t,activeColumns:l}),allColumns:e.allColumns})]})]})]})}function dc(e){return d.jsx(ic,{open:e.open,onClose:e.onClose,children:d.jsx(uc,{columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:e.onClose})})}function fc(e){const[t,n]=c.useState({open:!1}),{t:r}=Pe(),a=function(){n({...t,open:!t.open})};return d.jsxs("div",{children:[d.jsx(F,{color:"black",label:r("mosaic:DataView.columns"),variant:"text",mIcon:ba,onClick:a,size:"small",iconPosition:"left",tooltip:"Update columns and their order."}),e.onChange!==void 0&&d.jsx(dc,{open:t.open,columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:a})]})}const hc=E.span`
	& .normalButton > button {
		color: ${M.newColors.grey3[100]};
	}

	& .labelIcon {
		font-size: ${M.iconFontSize};
	}
`;function gc(e){const n=e.displayOptions.find(i=>i.name===e.display).mIcon,r=e.displayOptions.map(i=>({value:i.name,label:i.label,mIcon:i.mIcon})),a=d.jsx(qt,{options:r,onChange:e.onDisplayChange,value:e.display});return d.jsx(hc,{children:d.jsx(F,{variant:"icon",color:"black",mIcon:n,iconPosition:"right",size:"small",menuContent:a})})}const mc=c.memo(gc),vc=E(F)`
	button {
		font-weight: 400;
	}
`;function bc(e){const t=c.useCallback(function(a){e.onLimitChange({limit:Number(a)})},[e.onLimitChange]),n=c.useMemo(function(){return e.options.map(a=>({label:a.toString(),value:a.toString()}))},[e.options]),r=d.jsx(qt,{options:n,onChange:t,value:e.limit.toString()});return d.jsx(vc,{color:"black",label:e.limit.toString(),variant:"text",size:"small",iconPosition:"right",mIcon:Bt,mIconColor:M.newColors.almostBlack[100],menuContent:r})}const wc=c.memo(bc),xc=E.div`
	font-size: 14px;
	display: inline-flex;
	align-items: center;

	& > input {
		width: 40px;
		margin: 0px 8px;
	}

	&.invalid > input {
		outline: ${M.newColors.darkRed[100]} auto 1px;
	}

	& > .goButton {
		margin-left: 8px;
	}
`;function Cc(e){const t=c.useContext(ua),[n,r]=c.useState({currentPage:e.currentPage,invalid:!1}),a=function(s){const l=Number(s.currentTarget.value),u=!Number.isInteger(l)||l<=0||l>e.totalPages;r({...n,invalid:u,currentPage:s.currentTarget.value})},i=()=>{n.invalid!==!0&&(t.onClose(),e.onSkipChange({skip:(n.currentPage-1)*e.limit}))},o=s=>{if(s.key==="Enter")return i()};return d.jsxs(xc,{className:`
				${n.invalid?"invalid":""}
			`,children:[d.jsx("span",{children:"Page"}),d.jsx("input",{type:"text",onKeyDown:o,onChange:a,autoFocus:!0}),d.jsxs("span",{children:["of",e.totalPages]}),d.jsx(F,{className:"goButton",color:"blue",variant:"contained",size:"small",onClick:i,label:"Go"})]})}const yc=c.memo(Cc),kc=E.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText {
		line-height: 100%;
	}

	span.button:first-child {
		padding-right: 4px;
	}
`,zn=E(F)`
	svg {
		color: ${e=>e.disabled?M.newColors.simplyGrey[100]:M.newColors.grey3[100]};
	}
`,Dc=E.span`
	font-weight: 400;
`;function pc(e){const{t}=Pe(),n=Math.ceil(e.count/e.limit),r=(e.skip+e.limit)/e.limit,a=e.skip+1,i=Math.min(e.skip+e.limit,e.count),o=u=>()=>{e.onSkipChange({skip:u})},s=r===1,l=r===n;return n===0?null:d.jsxs(kc,{children:[d.jsx(F,{color:"black",variant:"text",size:"small",tooltip:t("mosaic:DataView.jump_to_page"),label:d.jsxs("span",{children:[a,"-",i," ",d.jsx(Dc,{children:"of"})," ",e.count]}),popover:d.jsx(yc,{currentPage:r,totalPages:n,limit:e.limit,onSkipChange:e.onSkipChange})}),d.jsx(zn,{color:"gray",variant:"icon",size:"small",mIcon:ga,onClick:o(e.skip-e.limit),disabled:s}),d.jsx(zn,{color:"gray",variant:"icon",size:"small",mIcon:wa,onClick:o(e.skip+e.limit),disabled:l})]})}const Sc=c.memo(pc),Rc=E.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`,Tc=E.div`
	display: flex;

	.custom-checkbox {
		margin-right: 4px;
	}
`;var cn={},Mc=Ce;Object.defineProperty(cn,"__esModule",{value:!0});var $r=cn.default=void 0,Ac=Mc(xe()),Oc=d,Ec=(0,Ac.default)((0,Oc.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");$r=cn.default=Ec;var un={},_c=Ce;Object.defineProperty(un,"__esModule",{value:!0});var Ir=un.default=void 0,jc=_c(xe()),Pc=d,$c=(0,jc.default)((0,Pc.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");Ir=un.default=$c;const Ic=E.div`
	${""}
	& > .directionButton svg { font-size: 20px; }
`;function Nc(e){const t=c.useMemo(()=>e.columns.filter(s=>s.sortable===!0),[e.columns]),n=c.useMemo(()=>t.map(s=>({label:s.label,value:s.name})),[t]),r=n.find(s=>s.value===e.sort.name),a=e.sort.dir==="asc"?Ir:$r,i=c.useCallback(function(s){e.onSortChange({name:s,dir:e.sort.dir})},[e.sort,e.onSortChange]),o=c.useCallback(function(){const s=e.sort.dir==="asc"?"desc":"asc";e.onSortChange({name:e.sort.name,dir:s})},[e.sort,e.onSortChange]);return d.jsxs(Ic,{children:[d.jsx(F,{label:r.label,variant:"text",color:"black",size:"small",menuContent:d.jsx(qt,{options:n,value:e.sort.name,onChange:i})}),d.jsx(F,{className:"directionButton",variant:"icon",color:"black",size:"small",mIcon:a,onClick:o})]})}const Bc=c.memo(Nc),Lc=e=>{const{bulkActions:t,columns:n,checked:r,display:a,displayControlEnabled:i,displayOptionsFull:o,limit:s,limitOptions:l,onLimitChange:u,onDisplayChange:f,onSkipChange:h,skip:m,count:g,onColumnsChange:y,activeColumnObjs:v,allColumns:x,onCheckAllClick:k,onSortChange:b,sort:w,allChecked:D,anyChecked:R}=e,S=c.useMemo(()=>l||[25,50,100],[l]),p=b!==void 0&&w!==void 0;return d.jsxs(Rc,{className:`${a}`,children:[a==="grid"&&d.jsxs(Tc,{children:[k&&d.jsx(yt,{checked:D,indeterminate:!D&&R,onClick:k,disabled:e.disabled}),R&&d.jsx(Or,{data:e.data,checked:r,bulkActions:t,checkedAllPages:e.checkedAllPages})]}),y!==void 0&&a==="list"&&d.jsx(fc,{onChange:y,columns:v,allColumns:x}),d.jsxs(et,{separator:!0,children:[p&&a==="grid"&&d.jsx(Bc,{columns:n,sort:w,onSortChange:b}),i&&d.jsx(mc,{display:a,displayOptions:o,onDisplayChange:f}),u!==void 0&&d.jsx(wc,{limit:s,options:S,onLimitChange:u}),h!==void 0&&d.jsx(Sc,{limit:s,skip:m,count:g,onSkipChange:h})]})]})},Wc=E.div`
	font-family: ${M.fontFamily};
	font-weight: 400;
	font-size: 14px;
	display: flex;
	flex-direction: column;

	& > .noResults {
		margin: 0px 20px;
	}

	& > .headerRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	& > .headerActions {
		display: flex;
		flex-direction: column;
		padding: 8px 24px;
	}

	& > .headerActions .grid {
		border-bottom: 2px solid ${M.newColors.grey2[100]};
		padding-bottom: 8px;
	}

	& > .viewContainer {
		overflow: auto;
		padding: 0 24px;
	}

	&.loading {
		opacity: .5;
		pointer-events: none;
	}

	&.sticky {
		height: 100%;
	}
`,vu=c.forwardRef(function(t,n){c.useEffect(()=>{var C;(C=t==null?void 0:t.activeFilters)==null||C.forEach(_=>{var L;if(!((L=t==null?void 0:t.filters)==null?void 0:L.find(N=>N.name===_)))throw new Error(`Active filter "${_}" is not a valid filter.`)})},[t.activeFilters,t.filters]);const{noResults:r="No results were found."}=t,a=t.display||"list",i=c.useMemo(()=>t.displayOptions||[a],[a,t.displayOptions]),o=t.onDisplayChange!==void 0&&i.length>1,s=c.useMemo(()=>t.bulkActions?t.bulkActions.filter(C=>t.checkedAllPages?C.onAllClick:C.onClick):[],[t.bulkActions,t.checkedAllPages]),l=c.useMemo(()=>({checkedAllPages:t.checkedAllPages,data:t.data.filter((C,_)=>{var A;return((A=t.checked)==null?void 0:A.length)>0&&t.checked[_]===!0})}),[t.checked,t.checkedAllPages,t.data]),u=Wt(s,l,"show",!0),f=t.checked!==void 0&&t.onCheckChange!==void 0,h=function(){var A;const C=t.checked.every(L=>L===!0),_=t.checked.map(()=>!C);t.onCheckChange(_),(A=t.onCheckAllPagesChange)==null||A.call(t,!1)},m=function(C){var A;const _=[...t.checked];_[C]=!_[C],t.onCheckChange(_),(A=t.onCheckAllPagesChange)==null||A.call(t,!1)},g=function(){var _,A;const C=t.checkedAllPages?t.checked.map(()=>!1):t.checked;(_=t.onCheckChange)==null||_.call(t,C),(A=t.onCheckAllPagesChange)==null||A.call(t,!t.checkedAllPages)};c.useEffect(()=>{!k.current||!k.current.scrollTo||k.current.scrollTo(0,0)},[t.limit,t.skip,t.display]);const y=c.useMemo(()=>i.map(C=>{if(C==="list")return tc;if(C==="grid")return nc;if(typeof C=="string")throw new Error("Unknown view option");return C}),[i]),v=y.find(C=>C.name===a);if(v===void 0)throw new Error(`Display '${a}' is not valid in the passed displayOptions.`);const x=v.component,k=c.useRef(null),b=c.useMemo(()=>t.activeColumns||t.columns.map(C=>C.name),[t.activeColumns,t.columns]),w=c.useMemo(()=>b.map(C=>{const _=t.columns.find(A=>A.name===C);if(!_)throw new Error(`Active column "${C}" is not defined in the columns list.`);return _}),[b,t.columns]),D=t.title||t.buttons||t.filters||t.currentView||t.onViewList||t.onViewSave||t.onViewSaveAs,R=c.useMemo(()=>!!(u.length>0||t.limitOptions||t.onColumnsChange||t.onSortChange||t.sort||o===!0||t.onLimitChange||t.onSkipChange),[u,t.limitOptions,t.onColumnsChange,t.onSortChange,t.sort,o,t.onLimitChange,t.onSkipChange]),S=t.checked!==void 0&&t.checked.length>0&&t.checked.every(C=>C===!0),p=t.checked!==void 0&&t.checked.length>0&&t.checked.some(C=>C===!0),T=(u==null?void 0:u.length)>0&&t.data.length>0&&t.count>t.data.length&&u.some(C=>C.onAllClick!==void 0)&&S&&t.checkedAllPages!==void 0&&t.onCheckAllPagesChange!==void 0,$=(t.checked||[]).some(C=>C),I=c.useMemo(()=>{const C=t.primaryActions||[],_=t.additionalActions||[],A=t.data.reduce((B,q)=>({...B,[q.id]:{primary:C.map(U=>{const oe=yn(Lt(U.show,{row:q},!0));return{...U,invisible:a==="list"?!oe:!1,show:a==="list"?!0:oe}}),additional:_.filter(U=>yn(Lt(U.show,{row:q},!0)))}}),{});if(a==="grid")return A;const L=Object.keys(A),N=C.map((B,q)=>L.some(U=>!A[U].primary[q].invisible));return L.reduce((B,q)=>({...B,[q]:{...A[q],primary:(A[q].primary||[]).filter((U,oe)=>!!N[oe])}}),{})},[t.data,t.additionalActions,t.primaryActions]);return d.jsxs(Wc,{"aria-busy":!!t.loading,className:`
				${t.loading?"loading":""}
				${t.sticky?"sticky":""}
			`,ref:n,...t.attrs||{},children:[D&&d.jsx("div",{className:"headerRow title",children:d.jsx(Ro,{title:t.title,onBack:t.onBack,backLabel:t.backLabel,buttons:t.buttons,filter:t.filter,filters:t.filters,activeFilters:t.activeFilters,onActiveFiltersChange:t.onActiveFiltersChange,disabled:t.disabled,currentView:t.currentView,onViewSave:t.onViewSave,onViewSaveAs:t.onViewSaveAs,onViewList:t.onViewList})}),R&&d.jsx("div",{className:"headerActions",children:d.jsx(Lc,{activeColumnObjs:w,columns:t.columns,bulkActions:u,checked:t.checked,display:a,displayControlEnabled:o,displayOptionsFull:y,limit:t.limit,limitOptions:t.limitOptions,onLimitChange:t.onLimitChange,onDisplayChange:t.onDisplayChange,onSkipChange:t.onSkipChange,skip:t.skip,count:t.count,allColumns:t.columns,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onSortChange:t.onSortChange,sort:t.sort,data:t.data,checkedAllPages:t.checkedAllPages,allChecked:S,anyChecked:p,disabled:t.disabled})}),d.jsx("div",{ref:k,className:`
					viewContainer
				`,children:d.jsx(x,{checked:t.checked,checkedAllPages:t.checkedAllPages,columns:t.columns,bulkActions:u,sort:t.sort,data:t.data,disabled:t.disabled,rowActions:I,activeColumns:t.activeColumns,gridColumnsMap:t.gridColumnsMap,limit:t.limit,count:t.count,rowCount:t.data.length,activeColumnObjs:w,onSortChange:t.onSortChange,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onCheckboxClick:f?m:void 0,onCheckAllPagesClick:g,onReorder:t.onReorder,showBulkAll:T,allChecked:S,anyChecked:p,actionsHidden:$||void 0})}),!t.loading&&!t.data.length&&(typeof r=="string"?d.jsx("div",{className:"noResults",children:d.jsx("p",{children:r})}):r)]})}),Vc={actions:"Actions",clear_filters:"Clear filters",column_order:"Column Order",columns:"Columns",comparison:"Comparison",default:"Default",default_view:"Default View",filters:"Filters",go:"Go",jump_to_page:"Jump to Page",label:"Label",mine:"Mine",more:"More",overwrite_current_view:"Overwrite Current View",page:"Page",remove:"Remove",save_as:"Save As",view:"View",save_as_new_view:"Save as New View",save_view:"Save View",saved_views:"Saved Views",no_view_selected:"No view selected",selected_options:"Selected Options",show_for_all_users:"Show for all Users",table_settings:"Table Settings",type:"Type",cancel_save_view:"Cancel save view",cancel_saved_views:"Cancel saved views",cancel_table_settings:"Cancel table settings"},zc={clear_filters:"Limpiar filtros",columns:"Columnas",default_view:"Vista predeterminada",filters:"Filtros",jump_to_page:"Ir a la página",more:"Más",overwrite_current_view:"Sobrescribir vista actual",save_as:"Guardar como",save_as_new_view:"Guardar como nueva vista",save_view:"Guardar Vista"},Fc={en:Vc,es:zc};fa({prefix:"DataView",bundle:Fc});const Uc=E.button`
  background: ${M.newColors.grey1[100]};
  border: ${M.borders.simplyGrey};
  cursor: pointer;
  margin-bottom: ${({$displayColorPicker:e})=>e?"8px":0};
  opacity: ${({$disabled:e})=>e?.5:1};
  padding: 10px;
  width: fit-content;
`,Yc=E.div`
  ${({$color:e})=>e.r!==void 0&&e.b!==void 0&&e.b!==void 0&&e.a!==void 0?`background: rgba(${e.r}, ${e.g}, ${e.b}, ${e.a});`:`background: ${e};`}
  height: 31px;
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  width: 80px;
`,bu=E(da)`
`,wu=e=>{const{disabled:t,color:n,onClick:r,displayColorPicker:a,id:i}=e;return d.jsx(Uc,{$disabled:t,$displayColorPicker:a,onClick:r,type:"button",id:i,children:d.jsx(Yc,{"data-testid":"colordiv-test",$disabled:t,$color:n})})};export{Lt as A,hu as B,wu as C,ic as D,bu as P,Li as _,vu as a,Sa as b,ji as c,De as d,Ma as e,mu as f,za as g,kt as h,Hn as i,gt as j,Ba as k,Pa as l,gu as m,Va as n,Aa as o,Si as p,Ha as q,Y as r,mt as s,ce as t,Rn as u,Ya as v,j as w,Ta as x,ql as y,Wt as z};
