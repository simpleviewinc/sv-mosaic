import{r as c,g as Un,a as G}from"./index-BP8_t0zE.js";import{m as Hr,a as qr,l as Xr,u as Gr,n as Kr,v as Yn,p as Qr,w as Jr,j as Zr,x as ea,q as ta,y as na,z as ra,C as aa}from"./CheckboxList-D1zEVDHX.js";import{_ as ia,D as oa,x as sa}from"./DataViewFilterMultiselectDropdownContent-LrLFz5bJ.js";import{r as xe,j as d}from"./jsx-runtime-nGUw9YhZ.js";import{s as E,t as M,B as qt}from"./theme-CtvfJOCv.js";import{B as tt}from"./ButtonRow-DW5Veo41.js";import{i as la}from"./isSymbol-CEVJpixJ.js";import{r as Ce,i as ye}from"./createSvgIcon-Coberten.js";import{D as ca}from"./FormFieldText.styled-BIYxLo8o.js";import{B as F,S as ua,d as da,P as fa}from"./Button-uCo3N7IM.js";import{d as Bt}from"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import{u as $e,a as ha}from"./useMosaicTranslation-DzvJLSut.js";import{T as ga,d as ma}from"./TitleWrapper-DGXp-QZq.js";import{r as _e}from"./index-BxmsGmlx.js";import{C as kt}from"./Checkbox-BVMkdcLx.js";import{d as va}from"./MoreVert-Bjq7SBh2.js";import{u as yn,g as kn}from"./useToggle-lipGlewK.js";import{T as Dn}from"./Typography-DSyzRETI.js";import{D as ba,a as wa,d as xa}from"./ChevronRight-3hnMDb9i.js";import{P as Ca}from"./PageHeader-BkDRAe3B.js";import{M as Xt}from"./MenuSelect-BpoY6Cxg.js";function Wt(e,t,n=!0){const r=e!==void 0?e:n;return(Array.isArray(r)?r:[r]).map(i=>i instanceof Function?i(t):i)}function Vt(e,t,n,r=!0){const a=c.useMemo(()=>{const i=Array.isArray(e),s=(i?e:[e]).map(l=>({...l,[n]:Wt(l[n],t,r)}));return i?s:s[0]},[r,e,n,t]);return Array.isArray(a)?yn(a,n):yn(a,n)}var ya=qr,ka=Hr,Da=ia,pa=Xr;function Sa(e,t){var n=pa(e)?ya:Da;return n(e,ka(t))}var Ra=Sa;const gu=Un(Ra);function Y(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Ta(e){return Y(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ce(e){Y(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ma(e){if(Y(1,arguments),!Ta(e)&&typeof e!="number")return!1;var t=ce(e);return!isNaN(Number(t))}function pe(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Aa(e,t){Y(2,arguments);var n=ce(e).getTime(),r=pe(t);return new Date(n+r)}function Oa(e,t){Y(2,arguments);var n=pe(t);return Aa(e,-n)}var Ea=864e5;function _a(e){Y(1,arguments);var t=ce(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Ea)+1}function mt(e){Y(1,arguments);var t=1,n=ce(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Hn(e){Y(1,arguments);var t=ce(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=mt(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=mt(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function ja(e){Y(1,arguments);var t=Hn(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=mt(n);return r}var Pa=6048e5;function $a(e){Y(1,arguments);var t=ce(e),n=mt(t).getTime()-ja(t).getTime();return Math.round(n/Pa)+1}var Ia={};function Dt(){return Ia}function vt(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=Dt(),h=pe((n=(r=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=ce(e),g=m.getUTCDay(),y=(g<h?7:0)+g-h;return m.setUTCDate(m.getUTCDate()-y),m.setUTCHours(0,0,0,0),m}function qn(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=ce(e),h=f.getUTCFullYear(),m=Dt(),g=pe((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(h+1,0,g),y.setUTCHours(0,0,0,0);var v=vt(y,t),x=new Date(0);x.setUTCFullYear(h,0,g),x.setUTCHours(0,0,0,0);var k=vt(x,t);return f.getTime()>=v.getTime()?h+1:f.getTime()>=k.getTime()?h:h-1}function Na(e,t){var n,r,a,i,o,s,l,u;Y(1,arguments);var f=Dt(),h=pe((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1),m=qn(e,t),g=new Date(0);g.setUTCFullYear(m,0,h),g.setUTCHours(0,0,0,0);var y=vt(g,t);return y}var La=6048e5;function Ba(e,t){Y(1,arguments);var n=ce(e),r=vt(n,t).getTime()-Na(n,t).getTime();return Math.round(r/La)+1}function j(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var be={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return j(t==="yy"?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):j(n+1,2)},d:function(e,t){return j(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return j(e.getUTCHours()%12||12,t.length)},H:function(e,t){return j(e.getUTCHours(),t.length)},m:function(e,t){return j(e.getUTCMinutes(),t.length)},s:function(e,t){return j(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return j(a,t.length)}},Ee={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wa={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return be.y(e,t)},Y:function(e,t,n,r){var a=qn(e,r),i=a>0?a:1-a;if(t==="YY"){var o=i%100;return j(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):j(i,t.length)},R:function(e,t){var n=Hn(e);return j(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return j(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return be.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=Ba(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):j(a,t.length)},I:function(e,t,n){var r=$a(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):j(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):be.d(e,t)},D:function(e,t,n){var r=_a(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):j(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return j(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return j(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return j(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours(),a=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r=e.getUTCHours(),a;switch(r===12?a=Ee.noon:r===0?a=Ee.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r=e.getUTCHours(),a;switch(r>=17?a=Ee.evening:r>=12?a=Ee.afternoon:r>=4?a=Ee.morning:a=Ee.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return be.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):be.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):be.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):be.s(e,t)},S:function(e,t){return be.S(e,t)},X:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return Sn(i);case"XXXX":case"XX":return De(i);case"XXXXX":case"XXX":default:return De(i,":")}},x:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"x":return Sn(i);case"xxxx":case"xx":return De(i);case"xxxxx":case"xxx":default:return De(i,":")}},O:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pn(i,":");case"OOOO":default:return"GMT"+De(i,":")}},z:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pn(i,":");case"zzzz":default:return"GMT"+De(i,":")}},t:function(e,t,n,r){var a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return j(i,t.length)},T:function(e,t,n,r){var a=r._originalDate||e,i=a.getTime();return j(i,t.length)}};function pn(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t;return n+String(a)+o+j(i,2)}function Sn(e,t){if(e%60===0){var n=e>0?"-":"+";return n+j(Math.abs(e)/60,2)}return De(e,t)}function De(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=j(Math.floor(a/60),2),o=j(a%60,2);return r+i+n+o}var Rn=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Xn=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Va=function(e,t){var n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Rn(e,t);var i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Rn(r,t)).replace("{{time}}",Xn(a,t))},za={p:Xn,P:Va};function Fa(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Ua=["D","DD"],Ya=["YY","YYYY"];function Ha(e){return Ua.indexOf(e)!==-1}function qa(e){return Ya.indexOf(e)!==-1}function Tn(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Xa={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ga=function(e,t,n){var r,a=Xa[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function jt(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Ka={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qa={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ja={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Za={date:jt({formats:Ka,defaultWidth:"full"}),time:jt({formats:Qa,defaultWidth:"full"}),dateTime:jt({formats:Ja,defaultWidth:"full"})},ei={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ti=function(e,t,n,r){return ei[e]};function He(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",a;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(t):t;return a[u]}}var ni={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ri={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ai={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ii={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},si={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},li=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ci={ordinalNumber:li,era:He({values:ni,defaultWidth:"wide"}),quarter:He({values:ri,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:He({values:ai,defaultWidth:"wide"}),day:He({values:ii,defaultWidth:"wide"}),dayPeriod:He({values:oi,defaultWidth:"wide",formattingValues:si,defaultFormattingWidth:"wide"})};function qe(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?di(s,function(h){return h.test(o)}):ui(s,function(h){return h.test(o)}),u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;var f=t.slice(o.length);return{value:u,rest:f}}}function ui(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function di(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function fi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var hi=/^(\d+)(th|st|nd|rd)?/i,gi=/\d+/i,mi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vi={any:[/^b/i,/^(a|c)/i]},bi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wi={any:[/1/i,/2/i,/3/i,/4/i]},xi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ci={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ki={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Di={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Si={ordinalNumber:fi({matchPattern:hi,parsePattern:gi,valueCallback:function(e){return parseInt(e,10)}}),era:qe({matchPatterns:mi,defaultMatchWidth:"wide",parsePatterns:vi,defaultParseWidth:"any"}),quarter:qe({matchPatterns:bi,defaultMatchWidth:"wide",parsePatterns:wi,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:qe({matchPatterns:xi,defaultMatchWidth:"wide",parsePatterns:Ci,defaultParseWidth:"any"}),day:qe({matchPatterns:yi,defaultMatchWidth:"wide",parsePatterns:ki,defaultParseWidth:"any"}),dayPeriod:qe({matchPatterns:Di,defaultMatchWidth:"any",parsePatterns:pi,defaultParseWidth:"any"})},Ri={code:"en-US",formatDistance:Ga,formatLong:Za,formatRelative:ti,localize:ci,match:Si,options:{weekStartsOn:0,firstWeekContainsDate:1}},Ti=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ai=/^'([^]*?)'?$/,Oi=/''/g,Ei=/[a-zA-Z]/;function mu(e,t,n){var r,a,i,o,s,l,u,f,h,m,g,y,v,x,k,b,w,D;Y(2,arguments);var R=String(t),S=Dt(),p=(r=(a=n==null?void 0:n.locale)!==null&&a!==void 0?a:S.locale)!==null&&r!==void 0?r:Ri,T=pe((i=(o=(s=(l=n==null?void 0:n.firstWeekContainsDate)!==null&&l!==void 0?l:n==null||(u=n.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&o!==void 0?o:(h=S.locale)===null||h===void 0||(m=h.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var $=pe((g=(y=(v=(x=n==null?void 0:n.weekStartsOn)!==null&&x!==void 0?x:n==null||(k=n.locale)===null||k===void 0||(b=k.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&v!==void 0?v:S.weekStartsOn)!==null&&y!==void 0?y:(w=S.locale)===null||w===void 0||(D=w.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&g!==void 0?g:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!p.localize)throw new RangeError("locale must contain localize property");if(!p.formatLong)throw new RangeError("locale must contain formatLong property");var I=ce(e);if(!Ma(I))throw new RangeError("Invalid time value");var C=Fa(I),_=Oa(I,C),A={firstWeekContainsDate:T,weekStartsOn:$,locale:p,_originalDate:I},B=R.match(Mi).map(function(N){var H=N[0];if(H==="p"||H==="P"){var L=za[H];return L(N,p.formatLong)}return N}).join("").match(Ti).map(function(N){if(N==="''")return"'";var H=N[0];if(H==="'")return _i(N);var L=Wa[H];if(L)return!(n!=null&&n.useAdditionalWeekYearTokens)&&qa(N)&&Tn(N,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Ha(N)&&Tn(N,t,String(e)),L(_,N,p.localize,A);if(H.match(Ei))throw new RangeError("Format string contains an unescaped latin alphabet character `"+H+"`");return N}).join("");return B}function _i(e){var t=e.match(Ai);return t?t[1].replace(Oi,"'"):e}var Mn=Gr;function ji(e,t,n){t=="__proto__"&&Mn?Mn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Pi=ji,$i=Pi,Ii=Kr,Ni=Object.prototype,Li=Ni.hasOwnProperty;function Bi(e,t,n){var r=e[t];(!(Li.call(e,t)&&Ii(r,n))||n===void 0&&!(t in e))&&$i(e,t,n)}var Wi=Bi,Vi=Wi,zi=Yn,Fi=Qr,An=la,Ui=Jr;function Yi(e,t,n,r){if(!An(e))return e;t=zi(t,e);for(var a=-1,i=t.length,o=i-1,s=e;s!=null&&++a<i;){var l=Ui(t[a]),u=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(a!=o){var f=s[l];u=r?r(f,l,s):void 0,u===void 0&&(u=An(f)?f:Fi(t[a+1])?[]:{})}Vi(s,l,u),s=s[l]}return e}var Hi=Yi,qi=Zr,Xi=Hi,Gi=Yn;function Ki(e,t,n){for(var r=-1,a=t.length,i={};++r<a;){var o=t[r],s=qi(e,o);n(s,o)&&Xi(i,Gi(o,e),s)}return i}var Qi=Ki,Ji=Qi,Zi=ea;function eo(e,t){return Ji(e,t,function(n,r){return Zi(e,r)})}var to=eo,no=ta;function ro(e){var t=e==null?0:e.length;return t?no(e,1):[]}var ao=ro,io=ao,oo=na,so=ra;function lo(e){return so(oo(e,void 0,io),e+"")}var co=lo,uo=to,fo=co,ho=fo(function(e,t){return e==null?{}:uo(e,t)}),go=ho;const mo=Un(go);var Gt={},vo=ye;Object.defineProperty(Gt,"__esModule",{value:!0});var Gn=Gt.default=void 0,bo=vo(Ce()),wo=xe(),xo=(0,bo.default)((0,wo.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");Gn=Gt.default=xo;const Co=E.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;function yo(e){var k;const{t}=$e(),[n,r]=c.useState({anchorEl:null,dropdownOpen:!1}),a=c.useMemo(()=>e.activeFilters||[],[e.activeFilters]),i=a.map(b=>e.filters.find(w=>w.name===b)),o=e.filters.map(b=>({label:b.label,value:b.name})).sort((b,w)=>b.label.localeCompare(w.label)),s=c.useMemo(()=>a.map(b=>o.find(w=>w.value===b)||null).filter(Boolean),[o,a]),l=b=>()=>{const w=sa(e.activeFilters,[b]);g({value:w})},u=b=>{r({...n,anchorEl:b.currentTarget})},f=()=>{r({...n,anchorEl:null})},h=()=>{r({...n,dropdownOpen:!0})},m=function(){r({...n,dropdownOpen:!1})},g=function(b){const w=Object.fromEntries(Object.entries(e.filter).filter(S=>S[1])),D=mo(w,[...b.value]),R=Object.keys(D).join(",")!==Object.keys(w).join(",");e.onActiveFiltersChange({activeFilters:b.value,filter:R===!0?D:e.filter}),f()},y=b=>{const w=new RegExp(b.keyword,"i");return{docs:o.filter(R=>R.label.match(w)),hasMore:!1}},v=()=>{i.forEach(b=>{e.filter[b.name]!==void 0&&b.onChange(void 0)})},x=(b,w)=>{if(b!==void 0){if(!e.filter[w.name]&&Object.keys(b)===void 0)return f();w.onChange(b)}else e.filter[w.name]&&w.onChange(b);return f()};return d.jsx(d.Fragment,{children:d.jsx("div",{className:"filterRow",children:((k=e==null?void 0:e.filters)==null?void 0:k.length)>0&&d.jsxs(Co,{children:[d.jsx(F,{label:t("mosaic:DataView.filters"),variant:"text",color:"black",size:"small",iconPosition:"left",mIcon:Gn,mIconColor:M.newColors.almostBlack[100],onClick:u}),d.jsx(ca,{anchorEl:n.anchorEl,onClose:f,onEntered:h,onExited:m,children:d.jsx(oa,{comparison:"",selected:s,getOptions:y,isOpen:n.dropdownOpen,onApply:g})}),(i==null?void 0:i.length)>0&&d.jsx(d.Fragment,{children:i.map(b=>{const w=b.component;return d.jsx(w,{label:b.label,args:b.args||{},data:e.filter[b.name]||{},onRemove:l(b.name),onChange:D=>x(D,b)},b.name)})}),(i==null?void 0:i.length)>0&&d.jsx(F,{label:t("mosaic:DataView.clear_filters"),variant:"text",size:"small",color:"teal",onClick:v})]})})})}const ko=E.div`
	border-bottom: 2px solid ${M.newColors.grey2[100]};
	padding: 24px 24px 16px 24px;
	width: 100%;
`,Do=E.div`
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
`,po=E(F)`
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
`,So=E.div`
	font-size: 14px;
	padding: 3px 0;
	letter-spacing: 1px;
`;function Ro({currentView:e,onViewSave:t,onViewSaveAs:n,onViewList:r}){const{t:a}=$e(),i=c.useMemo(()=>{const o=[];return t&&o.push({label:a("mosaic:DataView.overwrite_current_view"),onClick:t}),n&&o.push({label:a("mosaic:DataView.save_as_new_view"),onClick:n}),o},[t,n,a]);return d.jsx("div",{children:d.jsx("div",{className:"right",children:d.jsxs(tt,{children:[r?d.jsx(po,{mIcon:Bt,iconPosition:"right",label:e?`${a("mosaic:DataView.view")}: ${e.label}`:a("mosaic:DataView.no_view_selected"),variant:"contained",size:"small",color:"gray",onClick:r,className:!e&&"no-view-selected"}):e&&d.jsx(So,{children:`${a("mosaic:DataView.view")}: ${e.label}`}),d.jsx(F,{mIcon:Bt,iconPosition:"right",label:a("mosaic:DataView.save_view"),variant:"text",size:"small",color:"teal",menuItems:i})]})})})}function To({activeFilters:e,backLabel:t,buttons:n,currentView:r,disabled:a,filter:i,filters:o,onActiveFiltersChange:s,onBack:l,onViewSave:u,onViewSaveAs:f,onViewList:h,title:m}){const g=c.useMemo(()=>n===void 0?[]:n.map(v=>{const{name:x,...k}=v;return k.attrs={"data-mosaic-id":`button_${x}`},k.disabled=k.disabled===void 0?a:k.disabled,k}),[n,a]),y=r||u||f||h;return d.jsxs(ko,{children:[d.jsxs(Do,{children:[d.jsxs("div",{className:"left",children:[m&&d.jsx(ga,{title:m,onBack:l,backLabel:t}),y&&d.jsx(Ro,{currentView:r,onViewSave:u,onViewSaveAs:f,onViewList:h})]}),g.length>0&&d.jsx(tt,{buttons:g})]}),o&&d.jsx(yo,{filter:i,filters:o,activeFilters:e,onActiveFiltersChange:s})]})}var Kt={},Mo=ye;Object.defineProperty(Kt,"__esModule",{value:!0});var Kn=Kt.default=void 0,Ao=Mo(Ce()),Oo=xe(),Eo=(0,Ao.default)((0,Oo.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}),"GridOn");Kn=Kt.default=Eo;var Qt={},_o=ye;Object.defineProperty(Qt,"__esModule",{value:!0});var Qn=Qt.default=void 0,jo=_o(Ce()),Po=xe(),$o=(0,jo.default)((0,Po.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");Qn=Qt.default=$o;function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const pt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ie(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Jt(e){return"nodeType"in e}function K(e){var t,n;return e?Ie(e)?e:Jt(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Zt(e){const{Document:t}=K(e);return e instanceof t}function nt(e){return Ie(e)?!1:e instanceof K(e).HTMLElement}function Jn(e){return e instanceof K(e).SVGElement}function Ne(e){return e?Ie(e)?e.document:Jt(e)?Zt(e)?e:nt(e)||Jn(e)?e.ownerDocument:document:document:document}const ae=pt?c.useLayoutEffect:c.useEffect;function en(e){const t=c.useRef(e);return ae(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function No(){const e=c.useRef(null),t=c.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=c.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Je(e,t){t===void 0&&(t=[e]);const n=c.useRef(e);return ae(()=>{n.current!==e&&(n.current=e)},t),n}function rt(e,t){const n=c.useRef();return c.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function bt(e){const t=en(e),n=c.useRef(null),r=c.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function zt(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}let Pt={};function at(e,t){return c.useMemo(()=>{if(t)return t;const n=Pt[e]==null?0:Pt[e]+1;return Pt[e]=n,e+"-"+n},[e,t])}function Zn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((i,o)=>{const s=Object.entries(o);for(const[l,u]of s){const f=i[l];f!=null&&(i[l]=f+e*u)}return i},{...t})}}const je=Zn(1),Ze=Zn(-1);function Lo(e){return"clientX"in e&&"clientY"in e}function tn(e){if(!e)return!1;const{KeyboardEvent:t}=K(e.target);return t&&e instanceof t}function Bo(e){if(!e)return!1;const{TouchEvent:t}=K(e.target);return t&&e instanceof t}function Ft(e){if(Bo(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Lo(e)?{x:e.clientX,y:e.clientY}:null}const Pe=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Pe.Translate.toString(e),Pe.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),On="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Wo(e){return e.matches(On)?e:e.querySelector(On)}const Vo={display:"none"};function zo(e){let{id:t,value:n}=e;return G.createElement("div",{id:t,style:Vo},n)}function Fo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return G.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function Uo(){const[e,t]=c.useState("");return{announce:c.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const er=c.createContext(null);function Yo(e){const t=c.useContext(er);c.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Ho(){const[e]=c.useState(()=>new Set),t=c.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[c.useCallback(r=>{let{type:a,event:i}=r;e.forEach(o=>{var s;return(s=o[a])==null?void 0:s.call(o,i)})},[e]),t]}const qo={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Xo={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Go(e){let{announcements:t=Xo,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=qo}=e;const{announce:i,announcement:o}=Uo(),s=at("DndLiveRegion"),[l,u]=c.useState(!1);if(c.useEffect(()=>{u(!0)},[]),Yo(c.useMemo(()=>({onDragStart(h){let{active:m}=h;i(t.onDragStart({active:m}))},onDragMove(h){let{active:m,over:g}=h;t.onDragMove&&i(t.onDragMove({active:m,over:g}))},onDragOver(h){let{active:m,over:g}=h;i(t.onDragOver({active:m,over:g}))},onDragEnd(h){let{active:m,over:g}=h;i(t.onDragEnd({active:m,over:g}))},onDragCancel(h){let{active:m,over:g}=h;i(t.onDragCancel({active:m,over:g}))}}),[i,t])),!l)return null;const f=G.createElement(G.Fragment,null,G.createElement(zo,{id:r,value:a.draggable}),G.createElement(Fo,{id:s,announcement:o}));return n?_e.createPortal(f,n):f}var W;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(W||(W={}));function wt(){}function xt(e,t){return c.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function tr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const ie=Object.freeze({x:0,y:0});function nr(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function rr(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Ko(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function En(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function ar(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function _n(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const ir=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=_n(t,t.left,t.top),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=nr(_n(l),a);i.push({id:s,data:{droppableContainer:o,value:u}})}}return i.sort(rr)},Qo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=En(t),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=En(l),f=a.reduce((m,g,y)=>m+nr(u[y],g),0),h=Number((f/4).toFixed(4));i.push({id:s,data:{droppableContainer:o,value:h}})}}return i.sort(rr)};function Jo(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),o=a-r,s=i-n;if(r<a&&n<i){const l=t.width*t.height,u=e.width*e.height,f=o*s,h=f/(l+u-f);return Number(h.toFixed(4))}return 0}const Zo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const i of r){const{id:o}=i,s=n.get(o);if(s){const l=Jo(s,t);l>0&&a.push({id:o,data:{droppableContainer:i,value:l}})}}return a.sort(Ko)};function es(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function or(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ie}function ts(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.reduce((o,s)=>({...o,top:o.top+e*s.y,bottom:o.bottom+e*s.y,left:o.left+e*s.x,right:o.right+e*s.x}),{...n})}}const ns=ts(1);function rs(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function as(e,t,n){const r=rs(t);if(!r)return e;const{scaleX:a,scaleY:i,x:o,y:s}=r,l=e.left-o-(1-a)*parseFloat(n),u=e.top-s-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),f=a?e.width/a:e.width,h=i?e.height/i:e.height;return{width:f,height:h,top:u,right:l+f,bottom:u+h,left:l}}const is={ignoreTransform:!1};function Le(e,t){t===void 0&&(t=is);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:f}=K(e).getComputedStyle(e);u&&(n=as(n,u,f))}const{top:r,left:a,width:i,height:o,bottom:s,right:l}=n;return{top:r,left:a,width:i,height:o,bottom:s,right:l}}function jn(e){return Le(e,{ignoreTransform:!0})}function os(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function ss(e,t){return t===void 0&&(t=K(e).getComputedStyle(e)),t.position==="fixed"}function ls(e,t){t===void 0&&(t=K(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const i=t[a];return typeof i=="string"?n.test(i):!1})}function St(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(Zt(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!nt(a)||Jn(a)||n.includes(a))return n;const i=K(e).getComputedStyle(a);return a!==e&&ls(a,i)&&n.push(a),ss(a,i)?n:r(a.parentNode)}return e?r(e):n}function sr(e){const[t]=St(e,1);return t??null}function $t(e){return!pt||!e?null:Ie(e)?e:Jt(e)?Zt(e)||e===Ne(e).scrollingElement?window:nt(e)?e:null:null}function lr(e){return Ie(e)?e.scrollX:e.scrollLeft}function cr(e){return Ie(e)?e.scrollY:e.scrollTop}function Ut(e){return{x:lr(e),y:cr(e)}}var V;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(V||(V={}));function ur(e){return!pt||!e?!1:e===document.scrollingElement}function dr(e){const t={x:0,y:0},n=ur(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,o=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:a,isLeft:i,isBottom:o,isRight:s,maxScroll:r,minScroll:t}}const cs={x:.2,y:.2};function us(e,t,n,r,a){let{top:i,left:o,right:s,bottom:l}=n;r===void 0&&(r=10),a===void 0&&(a=cs);const{isTop:u,isBottom:f,isLeft:h,isRight:m}=dr(e),g={x:0,y:0},y={x:0,y:0},v={height:t.height*a.y,width:t.width*a.x};return!u&&i<=t.top+v.height?(g.y=V.Backward,y.y=r*Math.abs((t.top+v.height-i)/v.height)):!f&&l>=t.bottom-v.height&&(g.y=V.Forward,y.y=r*Math.abs((t.bottom-v.height-l)/v.height)),!m&&s>=t.right-v.width?(g.x=V.Forward,y.x=r*Math.abs((t.right-v.width-s)/v.width)):!h&&o<=t.left+v.width&&(g.x=V.Backward,y.x=r*Math.abs((t.left+v.width-o)/v.width)),{direction:g,speed:y}}function ds(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function fr(e){return e.reduce((t,n)=>je(t,Ut(n)),ie)}function fs(e){return e.reduce((t,n)=>t+lr(n),0)}function hs(e){return e.reduce((t,n)=>t+cr(n),0)}function gs(e,t){if(t===void 0&&(t=Le),!e)return;const{top:n,left:r,bottom:a,right:i}=t(e);sr(e)&&(a<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const ms=[["x",["left","right"],fs],["y",["top","bottom"],hs]];class nn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=St(n),a=fr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,o,s]of ms)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=s(r),f=a[i]-u;return this.rect[l]+f},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ge{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function vs(e){const{EventTarget:t}=K(e);return e instanceof t?e:Ne(e)}function It(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var te;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(te||(te={}));function Pn(e){e.preventDefault()}function bs(e){e.stopPropagation()}var O;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(O||(O={}));const hr={start:[O.Space,O.Enter],cancel:[O.Esc],end:[O.Space,O.Enter]},ws=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case O.Right:return{...n,x:n.x+25};case O.Left:return{...n,x:n.x-25};case O.Down:return{...n,y:n.y+25};case O.Up:return{...n,y:n.y-25}}};class Rt{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Ge(Ne(n)),this.windowListeners=new Ge(K(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(te.Resize,this.handleCancel),this.windowListeners.add(te.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(te.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&gs(r),n(ie)}handleKeyDown(t){if(tn(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:i=hr,coordinateGetter:o=ws,scrollBehavior:s="smooth"}=a,{code:l}=t;if(i.end.includes(l)){this.handleEnd(t);return}if(i.cancel.includes(l)){this.handleCancel(t);return}const{collisionRect:u}=r.current,f=u?{x:u.left,y:u.top}:ie;this.referenceCoordinates||(this.referenceCoordinates=f);const h=o(t,{active:n,context:r.current,currentCoordinates:f});if(h){const m=Ze(h,f),g={x:0,y:0},{scrollableAncestors:y}=r.current;for(const v of y){const x=t.code,{isTop:k,isRight:b,isLeft:w,isBottom:D,maxScroll:R,minScroll:S}=dr(v),p=ds(v),T={x:Math.min(x===O.Right?p.right-p.width/2:p.right,Math.max(x===O.Right?p.left:p.left+p.width/2,h.x)),y:Math.min(x===O.Down?p.bottom-p.height/2:p.bottom,Math.max(x===O.Down?p.top:p.top+p.height/2,h.y))},$=x===O.Right&&!b||x===O.Left&&!w,I=x===O.Down&&!D||x===O.Up&&!k;if($&&T.x!==h.x){const C=v.scrollLeft+m.x,_=x===O.Right&&C<=R.x||x===O.Left&&C>=S.x;if(_&&!m.y){v.scrollTo({left:C,behavior:s});return}_?g.x=v.scrollLeft-C:g.x=x===O.Right?v.scrollLeft-R.x:v.scrollLeft-S.x,g.x&&v.scrollBy({left:-g.x,behavior:s});break}else if(I&&T.y!==h.y){const C=v.scrollTop+m.y,_=x===O.Down&&C<=R.y||x===O.Up&&C>=S.y;if(_&&!m.x){v.scrollTo({top:C,behavior:s});return}_?g.y=v.scrollTop-C:g.y=x===O.Down?v.scrollTop-R.y:v.scrollTop-S.y,g.y&&v.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,je(Ze(h,this.referenceCoordinates),g))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Rt.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=hr,onActivation:a}=t,{active:i}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const s=i.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function $n(e){return!!(e&&"distance"in e)}function In(e){return!!(e&&"delay"in e)}class rn{constructor(t,n,r){var a;r===void 0&&(r=vs(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:o}=i;this.props=t,this.events=n,this.document=Ne(o),this.documentListeners=new Ge(this.document),this.listeners=new Ge(r),this.windowListeners=new Ge(K(o)),this.initialCoordinates=(a=Ft(i))!=null?a:ie,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(te.Resize,this.handleCancel),this.windowListeners.add(te.DragStart,Pn),this.windowListeners.add(te.VisibilityChange,this.handleCancel),this.windowListeners.add(te.ContextMenu,Pn),this.documentListeners.add(te.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(In(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if($n(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(te.Click,bs,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(te.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:i}=this,{onMove:o,options:{activationConstraint:s}}=i;if(!a)return;const l=(n=Ft(t))!=null?n:ie,u=Ze(a,l);if(!r&&s){if($n(s)){if(s.tolerance!=null&&It(u,s.tolerance))return this.handleCancel();if(It(u,s.distance))return this.handleStart()}return In(s)&&It(u,s.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),o(l)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===O.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const xs={move:{name:"pointermove"},end:{name:"pointerup"}};class Tt extends rn{constructor(t){const{event:n}=t,r=Ne(n.target);super(t,xs,r)}}Tt.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const Cs={move:{name:"mousemove"},end:{name:"mouseup"}};var Yt;(function(e){e[e.RightClick=2]="RightClick"})(Yt||(Yt={}));class ys extends rn{constructor(t){super(t,Cs,Ne(t.event.target))}}ys.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Yt.RightClick?!1:(r==null||r({event:n}),!0)}}];const Nt={move:{name:"touchmove"},end:{name:"touchend"}};class ks extends rn{constructor(t){super(t,Nt)}static setup(){return window.addEventListener(Nt.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Nt.move.name,t)};function t(){}}}ks.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var Ke;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Ke||(Ke={}));var Ct;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Ct||(Ct={}));function Ds(e){let{acceleration:t,activator:n=Ke.Pointer,canScroll:r,draggingRect:a,enabled:i,interval:o=5,order:s=Ct.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:f,delta:h,threshold:m}=e;const g=Ss({delta:h,disabled:!i}),[y,v]=No(),x=c.useRef({x:0,y:0}),k=c.useRef({x:0,y:0}),b=c.useMemo(()=>{switch(n){case Ke.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Ke.DraggableRect:return a}},[n,a,l]),w=c.useRef(null),D=c.useCallback(()=>{const S=w.current;if(!S)return;const p=x.current.x*k.current.x,T=x.current.y*k.current.y;S.scrollBy(p,T)},[]),R=c.useMemo(()=>s===Ct.TreeOrder?[...u].reverse():u,[s,u]);c.useEffect(()=>{if(!i||!u.length||!b){v();return}for(const S of R){if((r==null?void 0:r(S))===!1)continue;const p=u.indexOf(S),T=f[p];if(!T)continue;const{direction:$,speed:I}=us(S,T,b,t,m);for(const C of["x","y"])g[C][$[C]]||(I[C]=0,$[C]=0);if(I.x>0||I.y>0){v(),w.current=S,y(D,o),x.current=I,k.current=$;return}}x.current={x:0,y:0},k.current={x:0,y:0},v()},[t,D,r,v,i,o,JSON.stringify(b),JSON.stringify(g),y,u,R,f,JSON.stringify(m)])}const ps={x:{[V.Backward]:!1,[V.Forward]:!1},y:{[V.Backward]:!1,[V.Forward]:!1}};function Ss(e){let{delta:t,disabled:n}=e;const r=zt(t);return rt(a=>{if(n||!r||!a)return ps;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[V.Backward]:a.x[V.Backward]||i.x===-1,[V.Forward]:a.x[V.Forward]||i.x===1},y:{[V.Backward]:a.y[V.Backward]||i.y===-1,[V.Forward]:a.y[V.Forward]||i.y===1}}},[n,t,r])}function Rs(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return rt(a=>{var i;return t===null?null:(i=r??a)!=null?i:null},[r,t])}function Ts(e,t){return c.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,i=a.activators.map(o=>({eventName:o.eventName,handler:t(o.handler,r)}));return[...n,...i]},[]),[e,t])}var et;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(et||(et={}));var Ht;(function(e){e.Optimized="optimized"})(Ht||(Ht={}));const Nn=new Map;function Ms(e,t){let{dragging:n,dependencies:r,config:a}=t;const[i,o]=c.useState(null),{frequency:s,measure:l,strategy:u}=a,f=c.useRef(e),h=x(),m=Je(h),g=c.useCallback(function(k){k===void 0&&(k=[]),!m.current&&o(b=>b===null?k:b.concat(k.filter(w=>!b.includes(w))))},[m]),y=c.useRef(null),v=rt(k=>{if(h&&!n)return Nn;if(!k||k===Nn||f.current!==e||i!=null){const b=new Map;for(let w of e){if(!w)continue;if(i&&i.length>0&&!i.includes(w.id)&&w.rect.current){b.set(w.id,w.rect.current);continue}const D=w.node.current,R=D?new nn(l(D),D):null;w.rect.current=R,R&&b.set(w.id,R)}return b}return k},[e,i,n,h,l]);return c.useEffect(()=>{f.current=e},[e]),c.useEffect(()=>{h||g()},[n,h]),c.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),c.useEffect(()=>{h||typeof s!="number"||y.current!==null||(y.current=setTimeout(()=>{g(),y.current=null},s))},[s,h,g,...r]),{droppableRects:v,measureDroppableContainers:g,measuringScheduled:i!=null};function x(){switch(u){case et.Always:return!1;case et.BeforeDragging:return n;default:return!n}}}function gr(e,t){return rt(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function As(e,t){return gr(e,t)}function Os(e){let{callback:t,disabled:n}=e;const r=en(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Mt(e){let{callback:t,disabled:n}=e;const r=en(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Es(e){return new nn(Le(e),e)}function Ln(e,t,n){t===void 0&&(t=Es);const[r,a]=c.useReducer(s,null),i=Os({callback(l){if(e)for(const u of l){const{type:f,target:h}=u;if(f==="childList"&&h instanceof HTMLElement&&h.contains(e)){a();break}}}}),o=Mt({callback:a});return ae(()=>{a(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),r;function s(l){if(!e)return null;if(e.isConnected===!1){var u;return(u=l??n)!=null?u:null}const f=t(e);return JSON.stringify(l)===JSON.stringify(f)?l:f}}function _s(e){const t=gr(e);return or(e,t)}const Bn=[];function js(e){const t=c.useRef(e),n=rt(r=>e?r&&r!==Bn&&e&&t.current&&e.parentNode===t.current.parentNode?r:St(e):Bn,[e]);return c.useEffect(()=>{t.current=e},[e]),n}function Ps(e){const[t,n]=c.useState(null),r=c.useRef(e),a=c.useCallback(i=>{const o=$t(i.target);o&&n(s=>s?(s.set(o,Ut(o)),new Map(s)):null)},[]);return c.useEffect(()=>{const i=r.current;if(e!==i){o(i);const s=e.map(l=>{const u=$t(l);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Ut(u)]):null}).filter(l=>l!=null);n(s.length?new Map(s):null),r.current=e}return()=>{o(e),o(i)};function o(s){s.forEach(l=>{const u=$t(l);u==null||u.removeEventListener("scroll",a)})}},[a,e]),c.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,o)=>je(i,o),ie):fr(e):ie,[e,t])}function Wn(e,t){t===void 0&&(t=[]);const n=c.useRef(null);return c.useEffect(()=>{n.current=null},t),c.useEffect(()=>{const r=e!==ie;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?Ze(e,n.current):ie}function $s(e){c.useEffect(()=>{if(!pt)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function Is(e,t){return c.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:i}=r;return n[a]=o=>{i(o,t)},n},{}),[e,t])}function mr(e){return c.useMemo(()=>e?os(e):null,[e])}const Lt=[];function Ns(e,t){t===void 0&&(t=Le);const[n]=e,r=mr(n?K(n):null),[a,i]=c.useReducer(s,Lt),o=Mt({callback:i});return e.length>0&&a===Lt&&i(),ae(()=>{e.length?e.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),i())},[e]),a;function s(){return e.length?e.map(l=>ur(l)?r:new nn(t(l),l)):Lt}}function Ls(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return nt(t)?t:e}function Bs(e){let{measure:t}=e;const[n,r]=c.useState(null),a=c.useCallback(u=>{for(const{target:f}of u)if(nt(f)){r(h=>{const m=t(f);return h?{...h,width:m.width,height:m.height}:m});break}},[t]),i=Mt({callback:a}),o=c.useCallback(u=>{const f=Ls(u);i==null||i.disconnect(),f&&(i==null||i.observe(f)),r(f?t(f):null)},[t,i]),[s,l]=bt(o);return c.useMemo(()=>({nodeRef:s,rect:n,setRef:l}),[n,s,l])}const Ws=[{sensor:Tt,options:{}},{sensor:Rt,options:{}}],Vs={current:{}},gt={draggable:{measure:jn},droppable:{measure:jn,strategy:et.WhileDragging,frequency:Ht.Optimized},dragOverlay:{measure:Le}};class Qe extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const zs={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Qe,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:wt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:gt,measureDroppableContainers:wt,windowRect:null,measuringScheduled:!1},Fs={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:wt,draggableNodes:new Map,over:null,measureDroppableContainers:wt},At=c.createContext(Fs),vr=c.createContext(zs);function Us(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Qe}}}function Ys(e,t){switch(t.type){case W.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case W.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case W.DragEnd:case W.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case W.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Qe(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case W.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Qe(e.droppable.containers);return o.set(n,{...i,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case W.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const i=new Qe(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Hs(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=c.useContext(At),i=zt(r),o=zt(n==null?void 0:n.id);return c.useEffect(()=>{if(!t&&!r&&i&&o!=null){if(!tn(i)||document.activeElement===i.target)return;const s=a.get(o);if(!s)return;const{activatorNode:l,node:u}=s;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const f of[l.current,u.current]){if(!f)continue;const h=Wo(f);if(h){h.focus();break}}})}},[r,t,a,o,i]),null}function qs(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,i)=>i({transform:a,...r}),n):n}function Xs(e){return c.useMemo(()=>({draggable:{...gt.draggable,...e==null?void 0:e.draggable},droppable:{...gt.droppable,...e==null?void 0:e.droppable},dragOverlay:{...gt.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function Gs(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const i=c.useRef(!1),{x:o,y:s}=typeof a=="boolean"?{x:a,y:a}:a;ae(()=>{if(!o&&!s||!t){i.current=!1;return}if(i.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const f=n(u),h=or(f,r);if(o||(h.x=0),s||(h.y=0),i.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const m=sr(u);m&&m.scrollBy({top:h.y,left:h.x})}},[t,o,s,r,n])}const br=c.createContext({...ie,scaleX:1,scaleY:1});var we;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(we||(we={}));const wr=c.memo(function(t){var n,r,a,i;let{id:o,accessibility:s,autoScroll:l=!0,children:u,sensors:f=Ws,collisionDetection:h=Zo,measuring:m,modifiers:g,...y}=t;const v=c.useReducer(Ys,void 0,Us),[x,k]=v,[b,w]=Ho(),[D,R]=c.useState(we.Uninitialized),S=D===we.Initialized,{draggable:{active:p,nodes:T,translate:$},droppable:{containers:I}}=x,C=p?T.get(p):null,_=c.useRef({initial:null,translated:null}),A=c.useMemo(()=>{var z;return p!=null?{id:p,data:(z=C==null?void 0:C.data)!=null?z:Vs,rect:_}:null},[p,C]),B=c.useRef(null),[N,H]=c.useState(null),[L,q]=c.useState(null),U=Je(y,Object.values(y)),oe=at("DndDescribedBy",o),it=c.useMemo(()=>I.getEnabled(),[I]),X=Xs(m),{droppableRects:ue,measureDroppableContainers:ke,measuringScheduled:Be}=Ms(it,{dragging:S,dependencies:[$.x,$.y],config:X.droppable}),Z=Rs(T,p),ot=c.useMemo(()=>L?Ft(L):null,[L]),he=Yr(),de=As(Z,X.draggable.measure);Gs({activeNode:p?T.get(p):null,config:he.layoutShiftCompensation,initialRect:de,measure:X.draggable.measure});const P=Ln(Z,X.draggable.measure,de),We=Ln(Z?Z.parentElement:null),se=c.useRef({activatorEvent:null,active:null,activeNode:Z,collisionRect:null,collisions:null,droppableRects:ue,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Se=I.getNodeFor((n=se.current.over)==null?void 0:n.id),fe=Bs({measure:X.dragOverlay.measure}),Re=(r=fe.nodeRef.current)!=null?r:Z,Te=S?(a=fe.rect)!=null?a:P:null,fn=!!(fe.nodeRef.current&&fe.rect),hn=_s(fn?null:P),Et=mr(Re?K(Re):null),ge=js(S?Se??Z:null),st=Ns(ge),lt=qs(g,{transform:{x:$.x-hn.x,y:$.y-hn.y,scaleX:1,scaleY:1},activatorEvent:L,active:A,activeNodeRect:P,containerNodeRect:We,draggingNodeRect:Te,over:se.current.over,overlayNodeRect:fe.rect,scrollableAncestors:ge,scrollableAncestorRects:st,windowRect:Et}),gn=ot?je(ot,$):null,mn=Ps(ge),Lr=Wn(mn),Br=Wn(mn,[P]),Me=je(lt,Lr),Ae=Te?ns(Te,lt):null,Ve=A&&Ae?h({active:A,collisionRect:Ae,droppableRects:ue,droppableContainers:it,pointerCoordinates:gn}):null,vn=ar(Ve,"id"),[me,bn]=c.useState(null),Wr=fn?lt:je(lt,Br),Vr=es(Wr,(i=me==null?void 0:me.rect)!=null?i:null,P),wn=c.useCallback((z,Q)=>{let{sensor:J,options:ve}=Q;if(B.current==null)return;const ee=T.get(B.current);if(!ee)return;const ne=z.nativeEvent,le=new J({active:B.current,activeNode:ee,event:ne,options:ve,context:se,onStart(re){const ze=B.current;if(ze==null)return;const Fe=T.get(ze);if(!Fe)return;const{onDragStart:ct}=U.current,ut={active:{id:ze,data:Fe.data,rect:_}};_e.unstable_batchedUpdates(()=>{ct==null||ct(ut),R(we.Initializing),k({type:W.DragStart,initialCoordinates:re,active:ze}),b({type:"onDragStart",event:ut})})},onMove(re){k({type:W.DragMove,coordinates:re})},onEnd:Oe(W.DragEnd),onCancel:Oe(W.DragCancel)});_e.unstable_batchedUpdates(()=>{H(le),q(z.nativeEvent)});function Oe(re){return async function(){const{active:Fe,collisions:ct,over:ut,scrollAdjustedTranslate:Cn}=se.current;let Ue=null;if(Fe&&Cn){const{cancelDrop:Ye}=U.current;Ue={activatorEvent:ne,active:Fe,collisions:ct,delta:Cn,over:ut},re===W.DragEnd&&typeof Ye=="function"&&await Promise.resolve(Ye(Ue))&&(re=W.DragCancel)}B.current=null,_e.unstable_batchedUpdates(()=>{k({type:re}),R(we.Uninitialized),bn(null),H(null),q(null);const Ye=re===W.DragEnd?"onDragEnd":"onDragCancel";if(Ue){const _t=U.current[Ye];_t==null||_t(Ue),b({type:Ye,event:Ue})}})}}},[T]),zr=c.useCallback((z,Q)=>(J,ve)=>{const ee=J.nativeEvent,ne=T.get(ve);if(B.current!==null||!ne||ee.dndKit||ee.defaultPrevented)return;const le={active:ne};z(J,Q.options,le)===!0&&(ee.dndKit={capturedBy:Q.sensor},B.current=ve,wn(J,Q))},[T,wn]),xn=Ts(f,zr);$s(f),ae(()=>{P&&D===we.Initializing&&R(we.Initialized)},[P,D]),c.useEffect(()=>{const{onDragMove:z}=U.current,{active:Q,activatorEvent:J,collisions:ve,over:ee}=se.current;if(!Q||!J)return;const ne={active:Q,activatorEvent:J,collisions:ve,delta:{x:Me.x,y:Me.y},over:ee};_e.unstable_batchedUpdates(()=>{z==null||z(ne),b({type:"onDragMove",event:ne})})},[Me.x,Me.y]),c.useEffect(()=>{const{active:z,activatorEvent:Q,collisions:J,droppableContainers:ve,scrollAdjustedTranslate:ee}=se.current;if(!z||B.current==null||!Q||!ee)return;const{onDragOver:ne}=U.current,le=ve.get(vn),Oe=le&&le.rect.current?{id:le.id,rect:le.rect.current,data:le.data,disabled:le.disabled}:null,re={active:z,activatorEvent:Q,collisions:J,delta:{x:ee.x,y:ee.y},over:Oe};_e.unstable_batchedUpdates(()=>{bn(Oe),ne==null||ne(re),b({type:"onDragOver",event:re})})},[vn]),ae(()=>{se.current={activatorEvent:L,active:A,activeNode:Z,collisionRect:Ae,collisions:Ve,droppableRects:ue,draggableNodes:T,draggingNode:Re,draggingNodeRect:Te,droppableContainers:I,over:me,scrollableAncestors:ge,scrollAdjustedTranslate:Me},_.current={initial:Te,translated:Ae}},[A,Z,Ve,Ae,T,Re,Te,ue,I,me,ge,Me]),Ds({...he,delta:$,draggingRect:Ae,pointerCoordinates:gn,scrollableAncestors:ge,scrollableAncestorRects:st});const Fr=c.useMemo(()=>({active:A,activeNode:Z,activeNodeRect:P,activatorEvent:L,collisions:Ve,containerNodeRect:We,dragOverlay:fe,draggableNodes:T,droppableContainers:I,droppableRects:ue,over:me,measureDroppableContainers:ke,scrollableAncestors:ge,scrollableAncestorRects:st,measuringConfiguration:X,measuringScheduled:Be,windowRect:Et}),[A,Z,P,L,Ve,We,fe,T,I,ue,me,ke,ge,st,X,Be,Et]),Ur=c.useMemo(()=>({activatorEvent:L,activators:xn,active:A,activeNodeRect:P,ariaDescribedById:{draggable:oe},dispatch:k,draggableNodes:T,over:me,measureDroppableContainers:ke}),[L,xn,A,P,k,oe,T,me,ke]);return G.createElement(er.Provider,{value:w},G.createElement(At.Provider,{value:Ur},G.createElement(vr.Provider,{value:Fr},G.createElement(br.Provider,{value:Vr},u)),G.createElement(Hs,{disabled:(s==null?void 0:s.restoreFocus)===!1})),G.createElement(Go,{...s,hiddenTextDescribedById:oe}));function Yr(){const z=(N==null?void 0:N.autoScrollEnabled)===!1,Q=typeof l=="object"?l.enabled===!1:l===!1,J=S&&!z&&!Q;return typeof l=="object"?{...l,enabled:J}:{enabled:J}}}),Ks=c.createContext(null),Vn="button",Qs="Droppable";function Js(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const i=at(Qs),{activators:o,activatorEvent:s,active:l,activeNodeRect:u,ariaDescribedById:f,draggableNodes:h,over:m}=c.useContext(At),{role:g=Vn,roleDescription:y="draggable",tabIndex:v=0}=a??{},x=(l==null?void 0:l.id)===t,k=c.useContext(x?br:Ks),[b,w]=bt(),[D,R]=bt(),S=Is(o,t),p=Je(n);ae(()=>(h.set(t,{id:t,key:i,node:b,activatorNode:D,data:p}),()=>{const $=h.get(t);$&&$.key===i&&h.delete(t)}),[h,t]);const T=c.useMemo(()=>({role:g,tabIndex:v,"aria-disabled":r,"aria-pressed":x&&g===Vn?!0:void 0,"aria-roledescription":y,"aria-describedby":f.draggable}),[r,g,v,x,y,f.draggable]);return{active:l,activatorEvent:s,activeNodeRect:u,attributes:T,isDragging:x,listeners:r?void 0:S,node:b,over:m,setNodeRef:w,setActivatorNodeRef:R,transform:k}}function Zs(){return c.useContext(vr)}const el="Droppable",tl={timeout:25};function nl(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const i=at(el),{active:o,dispatch:s,over:l,measureDroppableContainers:u}=c.useContext(At),f=c.useRef({disabled:n}),h=c.useRef(!1),m=c.useRef(null),g=c.useRef(null),{disabled:y,updateMeasurementsFor:v,timeout:x}={...tl,...a},k=Je(v??r),b=c.useCallback(()=>{if(!h.current){h.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(k.current)?k.current:[k.current]),g.current=null},x)},[x]),w=Mt({callback:b,disabled:y||!o}),D=c.useCallback((T,$)=>{w&&($&&(w.unobserve($),h.current=!1),T&&w.observe(T))},[w]),[R,S]=bt(D),p=Je(t);return c.useEffect(()=>{!w||!R.current||(w.disconnect(),h.current=!1,w.observe(R.current))},[R,w]),ae(()=>(s({type:W.RegisterDroppable,element:{id:r,key:i,disabled:n,node:R,rect:m,data:p}}),()=>s({type:W.UnregisterDroppable,key:i,id:r})),[r]),c.useEffect(()=>{n!==f.current.disabled&&(s({type:W.SetDroppableDisabled,id:r,key:i,disabled:n}),f.current.disabled=n)},[r,i,n,s]),{active:o,rect:m,isOver:(l==null?void 0:l.id)===r,node:R,over:l,setNodeRef:S}}function rl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const al=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:rl(r,n,t)},xr=e=>{let{transform:t}=e;return{...t,x:0}};function Ot(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function il(e,t){return e.reduce((n,r,a)=>{const i=t.get(r);return i&&(n[a]=i),n},Array(e.length))}function dt(e){return e!==null&&e>=0}function ol(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function sl(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Cr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const i=Ot(t,r,n),o=t[a],s=i[a];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},ft={scaleX:1,scaleY:1},yr=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:i,overIndex:o}=e;const s=(t=i[n])!=null?t:r;if(!s)return null;if(a===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(s.top+s.height):u.top-s.top,...ft}:null}const l=ll(i,a,n);return a>n&&a<=o?{x:0,y:-s.height-l,...ft}:a<n&&a>=o?{x:0,y:s.height+l,...ft}:{x:0,y:0,...ft}};function ll(e,t,n){const r=e[t],a=e[t-1],i=e[t+1];return r?n<t?a?r.top-(a.top+a.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const kr="Sortable",Dr=G.createContext({activeIndex:-1,containerId:kr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Cr,disabled:{draggable:!1,droppable:!1}});function pr(e){let{children:t,id:n,items:r,strategy:a=Cr,disabled:i=!1}=e;const{active:o,dragOverlay:s,droppableRects:l,over:u,measureDroppableContainers:f}=Zs(),h=at(kr,n),m=s.rect!==null,g=c.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),y=o!=null,v=o?g.indexOf(o.id):-1,x=u?g.indexOf(u.id):-1,k=c.useRef(g),b=!ol(g,k.current),w=x!==-1&&v===-1||b,D=sl(i);ae(()=>{b&&y&&f(g)},[b,g,y,f]),c.useEffect(()=>{k.current=g},[g]);const R=c.useMemo(()=>({activeIndex:v,containerId:h,disabled:D,disableTransforms:w,items:g,overIndex:x,useDragOverlay:m,sortedRects:il(g,l),strategy:a}),[v,h,D.draggable,D.droppable,w,g,x,l,m,a]);return G.createElement(Dr.Provider,{value:R},t)}const cl=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Ot(n,r,a).indexOf(t)},ul=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:i,newIndex:o,previousItems:s,previousContainerId:l,transition:u}=e;return!u||!r||s!==i&&a===o?!1:n?!0:o!==a&&t===l},dl={duration:200,easing:"ease"},Sr="transform",fl=Pe.Transition.toString({property:Sr,duration:0,easing:"linear"}),hl={roleDescription:"sortable"};function gl(e){let{disabled:t,index:n,node:r,rect:a}=e;const[i,o]=c.useState(null),s=c.useRef(n);return ae(()=>{if(!t&&n!==s.current&&r.current){const l=a.current;if(l){const u=Le(r.current,{ignoreTransform:!0}),f={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(f.x||f.y)&&o(f)}}n!==s.current&&(s.current=n)},[t,n,r,a]),c.useEffect(()=>{i&&o(null)},[i]),i}function Rr(e){let{animateLayoutChanges:t=ul,attributes:n,disabled:r,data:a,getNewIndex:i=cl,id:o,strategy:s,resizeObserverConfig:l,transition:u=dl}=e;const{items:f,containerId:h,activeIndex:m,disabled:g,disableTransforms:y,sortedRects:v,overIndex:x,useDragOverlay:k,strategy:b}=c.useContext(Dr),w=ml(r,g),D=f.indexOf(o),R=c.useMemo(()=>({sortable:{containerId:h,index:D,items:f},...a}),[h,a,D,f]),S=c.useMemo(()=>f.slice(f.indexOf(o)),[f,o]),{rect:p,node:T,isOver:$,setNodeRef:I}=nl({id:o,data:R,disabled:w.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...l}}),{active:C,activatorEvent:_,activeNodeRect:A,attributes:B,setNodeRef:N,listeners:H,isDragging:L,over:q,setActivatorNodeRef:U,transform:oe}=Js({id:o,data:R,attributes:{...hl,...n},disabled:w.draggable}),it=Io(I,N),X=!!C,ue=X&&!y&&dt(m)&&dt(x),ke=!k&&L,Be=ke&&ue?oe:null,ot=ue?Be??(s??b)({rects:v,activeNodeRect:A,activeIndex:m,overIndex:x,index:D}):null,he=dt(m)&&dt(x)?i({id:o,items:f,activeIndex:m,overIndex:x}):D,de=C==null?void 0:C.id,P=c.useRef({activeId:de,items:f,newIndex:he,containerId:h}),We=f!==P.current.items,se=t({active:C,containerId:h,isDragging:L,isSorting:X,id:o,index:D,items:f,newIndex:P.current.newIndex,previousItems:P.current.items,previousContainerId:P.current.containerId,transition:u,wasDragging:P.current.activeId!=null}),Se=gl({disabled:!se,index:D,node:T,rect:p});return c.useEffect(()=>{X&&P.current.newIndex!==he&&(P.current.newIndex=he),h!==P.current.containerId&&(P.current.containerId=h),f!==P.current.items&&(P.current.items=f)},[X,he,h,f]),c.useEffect(()=>{if(de===P.current.activeId)return;if(de&&!P.current.activeId){P.current.activeId=de;return}const Re=setTimeout(()=>{P.current.activeId=de},50);return()=>clearTimeout(Re)},[de]),{active:C,activeIndex:m,attributes:B,data:R,rect:p,index:D,newIndex:he,items:f,isOver:$,isSorting:X,isDragging:L,listeners:H,node:T,overIndex:x,over:q,setNodeRef:it,setActivatorNodeRef:U,setDroppableNodeRef:I,setDraggableNodeRef:N,transform:Se??ot,transition:fe()};function fe(){if(Se||We&&P.current.newIndex===D)return fl;if(!(ke&&!tn(_)||!u)&&(X||se))return Pe.Transition.toString({...u,property:Sr})}}function ml(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function yt(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const vl=[O.Down,O.Right,O.Up,O.Left],Tr=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:i,over:o,scrollableAncestors:s}}=t;if(vl.includes(e.code)){if(e.preventDefault(),!n||!r)return;const l=[];i.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const m=a.get(h.id);if(m)switch(e.code){case O.Down:r.top<m.top&&l.push(h);break;case O.Up:r.top>m.top&&l.push(h);break;case O.Left:r.left>m.left&&l.push(h);break;case O.Right:r.left<m.left&&l.push(h);break}});const u=Qo({active:n,collisionRect:r,droppableRects:a,droppableContainers:l,pointerCoordinates:null});let f=ar(u,"id");if(f===(o==null?void 0:o.id)&&u.length>1&&(f=u[1].id),f!=null){const h=i.get(n.id),m=i.get(f),g=m?a.get(m.id):null,y=m==null?void 0:m.node.current;if(y&&g&&h&&m){const x=St(y).some((S,p)=>s[p]!==S),k=Mr(h,m),b=bl(h,m),w=x||!k?{x:0,y:0}:{x:b?r.width-g.width:0,y:b?r.height-g.height:0},D={x:g.left,y:g.top};return w.x&&w.y?D:Ze(D,w)}}}};function Mr(e,t){return!yt(e)||!yt(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function bl(e,t){return!yt(e)||!yt(t)||!Mr(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var an={},wl=ye;Object.defineProperty(an,"__esModule",{value:!0});var Ar=an.default=void 0,xl=wl(Ce()),Cl=xe(),yl=(0,xl.default)((0,Cl.jsx)("path",{d:"M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z"}),"SwitchLeft");Ar=an.default=yl;var on={},kl=ye;Object.defineProperty(on,"__esModule",{value:!0});var Or=on.default=void 0,Dl=kl(Ce()),pl=xe(),Sl=(0,Dl.default)((0,pl.jsx)("path",{d:"M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z"}),"SwitchRight");Or=on.default=Sl;function Rl(e){const t=e.bulkActions.map(n=>{const{name:r,show:a,onClick:i,onAllClick:o,...s}=n;return{...s,attrs:{"data-mosaic-id":`action_bulk_${r}`},onClick:function(){if(e.checkedAllPages===!0)o();else{const l=e.data.filter((u,f)=>{var h;return((h=e.checked)==null?void 0:h[f])===!0});i({data:l})}}}});return d.jsx(tt,{buttons:t})}const Er=c.memo(Rl),Tl=E.div`
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
`;function Ml(e){return d.jsxs(Tl,{children:[d.jsxs("span",{className:"bulkText",children:[e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.count})," ","records are selected."]}),!e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.rowCount})," ","records on this page are selected."]})]}),d.jsx(F,{color:"blue",variant:"text",label:e.checkedAllPages?"Clear Selection":`Select All ${e.count} Records`,onClick:e.onCheckAllPagesClick})]})}const _r=c.memo(Ml),Al=E.thead`
	text-align: left;

	.row-header {
		th:first-child {
			padding-left: 16px;
		}

		th:last-child {
			padding-right: 16px;
		}
	}
`,Xe=E.th`
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
`;function Ol(e){return e==="asc"?"desc":"asc"}function El(e){var r,a,i;const{t}=$e(),n=(((r=e.bulkActions)==null?void 0:r.length)>0?1:0)+1+e.columns.length;return d.jsxs(Al,{children:[d.jsxs("tr",{className:"row-header",children:[e.onReorder&&d.jsx(Xe,{className:"bulk"},"_draggable"),e.onCheckAllClick&&d.jsx(Xe,{className:"bulk",colSpan:((a=e.bulkActions)==null?void 0:a.length)<=0&&e.anyChecked?e.columns.length+2:1,children:d.jsx(kt,{checked:e.allChecked,indeterminate:!e.allChecked&&e.anyChecked,onClick:e.onCheckAllClick,disabled:e.disabled})},"_bulk"),((i=e.bulkActions)==null?void 0:i.length)>0&&e.anyChecked&&d.jsx(Xe,{colSpan:e.columns.length+1,children:d.jsx(Er,{data:e.data,checked:e.checked,checkedAllPages:e.checkedAllPages,bulkActions:e.bulkActions})},"_bulk_actions"),!e.anyChecked&&e.hasActions&&d.jsx(Xe,{children:d.jsx("span",{className:"columnHeader",children:t("mosaic:DataView.actions")})},"_actions"),!e.anyChecked&&e.columns.map(o=>{const s=function(){e.onSortChange({name:o.name,dir:f})};let l,u,f;return o.sortable&&(l=e.sort.name===o.name,u=l&&e.sort.dir==="desc"?Ar:Or,f=l?Ol(e.sort.dir):"asc"),d.jsx(Xe,{className:`
									${o.sortable?"sortable":""}
									${l?"active":""}
								`,children:d.jsxs("span",{className:"columnHeader",onClick:o.sortable?s:void 0,children:[o.label,o.sortable&&d.jsx(u,{className:"icon"})]})},o.name)})]}),e.showBulkAll&&d.jsx("tr",{children:d.jsx("th",{colSpan:n,children:d.jsx(_r,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})})})]})}var sn={},_l=ye;Object.defineProperty(sn,"__esModule",{value:!0});var ln=sn.default=void 0,jl=_l(Ce()),Pl=xe(),$l=(0,jl.default)((0,Pl.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");ln=sn.default=$l;const Il=E.td`
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
`;function Nl(e){const t=e.expandCell!==void 0?e.expandCell:!1,n=e.bold!==void 0?e.bold:!1,r=e.italic!==void 0?e.italic:!1,a=e.strikeThrough!==void 0?e.strikeThrough:!1,i=e.noWrap!==void 0?e.noWrap:!1,o=e.ellipsis!==void 0?e.ellipsis:!1,s=e.maxWidth!==void 0?e.maxWidth:void 0,l=e.textTransform!==void 0?e.textTransform:void 0;return d.jsx(Il,{className:`
				${t?"expandCell":""}
				${n?"bold":""}
				${r?"italic":""}
				${a?"strikeThrough":""}
			`,"aria-label":e.ariaLabel,children:d.jsx("div",{className:`
					${i?"noWrap":""}
					${o?"ellipsis":""}
				`,style:{maxWidth:s,textTransform:l},title:o&&typeof e.children=="string"?e.children:void 0,children:e.children})})}const ht=c.memo(Nl),Ll=E(tt)`
    ${({$hidden:e})=>e&&`
        visibility: hidden;
    `}
`;function Bl(e){const t=c.useMemo(()=>({row:e.originalRowData}),[e.originalRowData]),n=c.useMemo(()=>e.primaryActions||[],[e.primaryActions]),r=Vt(n,t,"show"),a=c.useMemo(()=>e.additionalActions||[],[e.additionalActions]),i=Vt(a,t,"show"),o=c.useMemo(()=>r.map(u=>{const{name:f,show:h,onClick:m,...g}=u,y=()=>{m({data:e.originalRowData})},v=[g.disabled,e.disabled,e.actionsHidden].some(x=>x);return c.createElement(F,{...g,disabled:v,key:`primary_${f}`,attrs:{"data-mosaic-id":`action_primary_${f}`},onClick:y})}),[r,e.originalRowData,e.disabled,e.actionsHidden]),s=c.useMemo(()=>{if(!i.length)return[];const u=[e.disabled,e.actionsHidden].some(f=>f);return[d.jsx(F,{color:"black",variant:"icon",mIcon:e.activeDisplay&&va,attrs:{"data-mosaic-id":"additional_actions_dropdown"},tooltip:"More actions",disabled:u,menuItems:i.map(f=>{const{name:h,show:m,onClick:g,...y}=f;return{...y,attrs:{"data-mosaic-id":`action_additional_${h}`},onClick:()=>{g({data:e.originalRowData})}}})},"additional")]},[i,e.originalRowData,e.disabled,e.actionsHidden]),l=c.useMemo(()=>[...o,...s],[o,s]);return l.length===0?null:d.jsx(Ll,{$hidden:e.actionsHidden,children:l})}const jr=c.memo(Bl),Wl=E.tr`
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
`,Vl=E(ua)`
	&&{
		cursor: grab;
	}
`,cn=c.forwardRef(({checked:e,onReorder:t,disabled:n,onCheckboxClick:r,hasActions:a,primaryActions:i,additionalActions:o,actionsHidden:s,originalRowData:l,columns:u,row:f,isDragOverlay:h,style:m,...g},y)=>d.jsxs(Wl,{style:m,className:e&&"checked",ref:y,$isDragOverlay:h,children:[t&&d.jsx(ht,{children:d.jsx(F,{disabled:n,color:"black",variant:"icon",mIcon:ln,muiAttrs:{...g},component:Vl})},"_draggable"),r&&d.jsx(ht,{children:d.jsx(kt,{checked:e===!0,onClick:r,disabled:n})},"_bulk"),a&&d.jsx(ht,{children:d.jsx(jr,{primaryActions:i,additionalActions:o,actionsHidden:s,disabled:n,originalRowData:l,activeDisplay:"list"})}),u.map(v=>d.jsx(ht,{ariaLabel:v.label,expandCell:!0,bold:v.style&&v.style.bold,italic:v.style&&v.style.italic,strikeThrough:v.style&&v.style.strikeThrough,noWrap:v.style&&v.style.noWrap,ellipsis:v.style&&v.style.ellipsis,maxWidth:v.style&&v.style.maxWidth,textTransform:v.style&&v.style.textTransform,children:f[v.name]},v.name))]}));cn.displayName="DataViewTrStatic";function zl(e){const{attributes:t,listeners:n,setNodeRef:r,transform:a,transition:i,isDragging:o}=Rr({id:e.originalRowData.id}),s={transform:Pe.Translate.toString(a),transition:i};return d.jsx(cn,{...e,...t,...n,ref:r,style:s,isDragOverlay:o})}function Fl(e){return e.onReorder?d.jsx(zl,{...e}):d.jsx(cn,{...e})}const Ul=E.tbody`
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
`,Pr=c.forwardRef((e,t)=>d.jsx(Ul,{ref:t,children:e.transformedData.map((n,r)=>{var a,i,o,s;return d.jsx(Fl,{row:n,originalRowData:e.data[r],primaryActions:(i=(a=e.rowActions)==null?void 0:a[n.id])==null?void 0:i.primary,additionalActions:(s=(o=e.rowActions)==null?void 0:o[n.id])==null?void 0:s.additional,actionsHidden:e.actionsHidden,disabled:e.disabled,onCheckboxClick:e.onCheckboxClick?()=>e.onCheckboxClick(r):void 0,checked:e.checked?e.checked[r]:!1,columns:e.columns,onReorder:e.onReorder,hasActions:e.hasActions},n.id)})}));Pr.displayName="DataViewTBody";const Yl=c.memo(Pr);function Hl(e,t){let n=e[t.column||t.name];if(n!==void 0&&t.transforms!==void 0)for(const r of t.transforms)n!==void 0&&(n=r({data:n,row:e}));return n}function $r(e,t){return e.map(r=>{const a={...r};return t.forEach(i=>{a[i.name]=Hl(r,i)}),a})}function ql(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}function Xl(e){return e.reduce((t,n)=>t+n,0)}const Gl=E.table`
	width: 100%;
	border-collapse: collapse;
`;function Kl(e){const t=c.useRef(),{rowActions:n}=e,r=c.useMemo(()=>$r(e.data,e.activeColumnObjs),[e.data,e.activeColumnObjs]),a=Xl(Object.entries(n).map(([,{primary:l=[],additional:u=[]}])=>l.length+u.length))>0,i=tr(xt(Tt),xt(Rt,{coordinateGetter:Tr}));function o(l){const{active:u,over:f}=l;if(u.id!==f.id){const h=e.data.map(({id:m})=>String(m));e.onReorder(Ot(h,h.indexOf(u.id),h.indexOf(f.id)))}}const s=c.useCallback(({draggingNodeRect:l,transform:u})=>{if(!l||!t.current)return u;const f=t.current.getBoundingClientRect();return f?ql(u,l,f):u},[]);return d.jsx(wr,{sensors:i,collisionDetection:ir,onDragEnd:o,autoScroll:{layoutShiftCompensation:!1},modifiers:[xr,s],children:d.jsx(pr,{items:r.map(l=>l.id),strategy:yr,children:d.jsxs(Gl,{children:[d.jsx(El,{checked:e.checked,checkedAllPages:e.checkedAllPages,columns:e.activeColumnObjs,allColumns:e.columns,data:e.data,bulkActions:e.bulkActions,sort:e.sort,count:e.count,rowCount:e.rowCount,onSortChange:e.onSortChange,onCheckAllClick:e.onCheckAllClick,onCheckAllPagesClick:e.onCheckAllPagesClick,onColumnsChange:e.onColumnsChange,onReorder:e==null?void 0:e.onReorder,allChecked:e.allChecked,anyChecked:e.anyChecked,showBulkAll:e.showBulkAll,hasActions:a,disabled:e.disabled}),d.jsx(Yl,{checked:e.checked,columns:e.activeColumnObjs,data:e.data,hasActions:a,transformedData:r,bulkActions:e.bulkActions,actionsHidden:e.actionsHidden,disabled:e.disabled,rowActions:n,onCheckboxClick:e.onCheckboxClick,onReorder:e.onReorder,ref:t})]})})})}const Ql=qt.topComponent.bigScreenView+"px",Jl=qt.topComponent.responsiveView+"px",Zl=qt.mobile+"px",ec=E.div`
	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 24px;

		@media (min-width: ${Zl}) {
			grid-template-columns: repeat(2, 1fr);
		};

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		};

		@media (min-width: ${Jl}) {
			grid-template-columns: repeat(4, 1fr);
		};

		@media (min-width: 1296px) {
			grid-template-columns: repeat(5, 1fr);
		};

		@media (min-width: ${Ql}) {
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
`;function tc(e){if(!e.gridColumnsMap)throw new Error("You must specify gridColumnsMap in order to use the grid view.");const t=c.useMemo(()=>$r(e.data,e.columns),[e.data,e.columns]),n=r=>()=>{e.onCheckboxClick(r)};return d.jsxs(ec,{children:[e.showBulkAll&&d.jsx("div",{className:"topRowBulkAll",children:d.jsx(_r,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})}),d.jsx("div",{className:"grid",children:t.map((r,a)=>{var l,u,f,h,m,g;const i=r[e.gridColumnsMap.image],o=r[e.gridColumnsMap.primary],s=r[e.gridColumnsMap.secondary];return d.jsxs("div",{className:`
									cell
									${(l=e.checked)!=null&&l[a]?"checked":""}
								`,children:[i&&d.jsxs("div",{className:"image",children:[e.onCheckboxClick&&d.jsx("div",{className:`checkboxContainer ${e.anyChecked&&!((u=e.checked)!=null&&u[a])?"anyChecked":""}`,children:d.jsx(kt,{className:"checkbox",checked:e.checked[a],onClick:n(a)})}),d.jsxs("div",{className:"imageContainer",children:[d.jsx("div",{className:"overlay"}),i]})]}),d.jsxs("div",{className:"info",children:[d.jsxs("div",{className:"left",children:[o&&d.jsx(Dn,{tag:"h2",children:o}),s&&d.jsx(Dn,{tag:"h3",children:s})]}),d.jsx("div",{className:"right",children:d.jsx(jr,{primaryActions:(h=(f=e.rowActions)==null?void 0:f[r.id])==null?void 0:h.primary,additionalActions:(g=(m=e.rowActions)==null?void 0:m[r.id])==null?void 0:g.additional,actionsHidden:e.actionsHidden,originalRowData:r,activeDisplay:"grid",disabled:e.disabled})})]})]},a)})})]})}const nc={name:"list",label:"List",component:Kl,mIcon:Qn},rc={name:"grid",label:"Grid",component:tc,mIcon:Kn},ac=E.div`
	font-family: ${M.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`,ic=E(ba)`
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
`,oc=e=>{const{open:t,onClose:n,children:r,idx:a,anchor:i="right",display:o,anchorstyle:s,exitCB:l,backdropCloseHandler:u=!0}=e,f=c.useRef();c.useEffect(()=>{f.current=s},[s]);const[h,m]=c.useState({open:!1});c.useEffect(()=>{t===!0&&m({...h,open:!0})},[t]);const g=function(){m({...h,open:!1}),l&&l()},y=(v,x)=>{!u&&x==="backdropClick"||n()};return d.jsx(d.Fragment,{children:d.jsx(ic,{$anchorStyle:{currentStyle:s,previousStyle:f.current},anchor:i,$display:o,open:t,onClose:y,SlideProps:{onExited:g},children:h.open&&d.jsx(ac,{children:r})},a)})},zn=E.h2`
  color: ${M.newColors.almostBlack[100]};
  font-size: 20px;
  font-weight: ${M.fontWeight.normal};
  line-height: 24px;
  margin: 0px;
`,sc=E.div`
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
`,lc=E.div`
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
`;function cc({name:e,allColumns:t}){const n=t.find(f=>f.name===e);if(!n)throw new Error(`Column "${e}" not found in column list: ${t.join(", ")}`);const{attributes:r,listeners:a,setNodeRef:i,transform:o,transition:s,isDragging:l}=Rr({id:n.name}),u={transform:Pe.Translate.toString(o),transition:s};return d.jsxs(lc,{...r,...a,ref:i,style:u,$isDragging:l,children:[d.jsx(ln,{}),d.jsx("span",{children:n.label})]})}function uc({activeColumns:e,allColumns:t,onReorder:n}){const r=tr(xt(Tt),xt(Rt,{coordinateGetter:Tr}));function a(i){const{active:o,over:s}=i;o.id!==s.id&&n(Ot(e,e.indexOf(o.id),e.indexOf(s.id)))}return d.jsx("div",{children:d.jsx(wr,{sensors:r,collisionDetection:ir,onDragEnd:a,autoScroll:{layoutShiftCompensation:!1},modifiers:[xr,al],children:d.jsx(pr,{items:e,strategy:yr,children:e.map(i=>d.jsx(cc,{name:i,allColumns:t},i))})})})}function dc(e){const[t,n]=c.useState({activeColumns:e.columns.map(l=>l.name),checkedOptions:e.columns.map(l=>({label:l.label,value:l.name}))}),{t:r}=$e(),a=function(){e.onClose(),e.onChange(t.activeColumns)},i=function(l){n({...t,activeColumns:l.map(u=>u.value),checkedOptions:l})},o=e.allColumns.map(l=>({label:l.label,value:l.name})).sort((l,u)=>l.label.localeCompare(u.label)),s=[{label:r("mosaic:common.cancel"),color:"gray",variant:"outlined",onClick:e.onClose},{label:r("mosaic:common.apply"),onClick:a,color:"yellow",variant:"contained"}];return d.jsxs("div",{children:[d.jsx(Ca,{title:r("mosaic:DataView.table_settings"),buttons:s,onBack:e.onClose,backLabel:r("mosaic:DataView.cancel_table_settings")}),d.jsxs(sc,{children:[d.jsxs("div",{className:"left",children:[d.jsx(zn,{children:r("mosaic:DataView.columns")}),d.jsx(aa,{options:o,checked:t.checkedOptions,onChange:i})]}),d.jsxs("div",{className:"right",children:[d.jsx(zn,{children:r("mosaic:DataView.column_order")}),d.jsx(uc,{activeColumns:t.activeColumns,onReorder:l=>n({...t,activeColumns:l}),allColumns:e.allColumns})]})]})]})}function fc(e){return d.jsx(oc,{open:e.open,onClose:e.onClose,children:d.jsx(dc,{columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:e.onClose})})}function hc(e){const[t,n]=c.useState({open:!1}),{t:r}=$e(),a=function(){n({...t,open:!t.open})};return d.jsxs("div",{children:[d.jsx(F,{color:"black",label:r("mosaic:DataView.columns"),variant:"text",mIcon:wa,onClick:a,size:"small",iconPosition:"left",tooltip:"Update columns and their order."}),e.onChange!==void 0&&d.jsx(fc,{open:t.open,columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:a})]})}const gc=E.span`
	& .normalButton > button {
		color: ${M.newColors.grey3[100]};
	}

	& .labelIcon {
		font-size: ${M.iconFontSize};
	}
`;function mc(e){const n=e.displayOptions.find(i=>i.name===e.display).mIcon,r=e.displayOptions.map(i=>({value:i.name,label:i.label,mIcon:i.mIcon})),a=d.jsx(Xt,{options:r,onChange:e.onDisplayChange,value:e.display});return d.jsx(gc,{children:d.jsx(F,{variant:"icon",color:"black",mIcon:n,iconPosition:"right",size:"small",menuContent:a})})}const vc=c.memo(mc),bc=E(F)`
	button {
		font-weight: 400;
	}
`;function wc(e){const t=c.useCallback(function(a){e.onLimitChange({limit:Number(a)})},[e.onLimitChange]),n=c.useMemo(function(){return e.options.map(a=>({label:a.toString(),value:a.toString()}))},[e.options]),r=d.jsx(Xt,{options:n,onChange:t,value:e.limit.toString()});return d.jsx(bc,{color:"black",label:e.limit.toString(),variant:"text",size:"small",iconPosition:"right",mIcon:Bt,mIconColor:M.newColors.almostBlack[100],menuContent:r})}const xc=c.memo(wc),Cc=E.div`
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
`;function yc(e){const t=c.useContext(da),[n,r]=c.useState({currentPage:e.currentPage,invalid:!1}),a=function(s){const l=Number(s.currentTarget.value),u=!Number.isInteger(l)||l<=0||l>e.totalPages;r({...n,invalid:u,currentPage:s.currentTarget.value})},i=()=>{n.invalid!==!0&&(t.onClose(),e.onSkipChange({skip:(n.currentPage-1)*e.limit}))},o=s=>{if(s.key==="Enter")return i()};return d.jsxs(Cc,{className:`
				${n.invalid?"invalid":""}
			`,children:[d.jsx("span",{children:"Page"}),d.jsx("input",{type:"text",onKeyDown:o,onChange:a,autoFocus:!0}),d.jsxs("span",{children:["of",e.totalPages]}),d.jsx(F,{className:"goButton",color:"blue",variant:"contained",size:"small",onClick:i,label:"Go"})]})}const kc=c.memo(yc),Dc=E.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText {
		line-height: 100%;
	}

	span.button:first-child {
		padding-right: 4px;
	}
`,Fn=E(F)`
	svg {
		color: ${e=>e.disabled?M.newColors.simplyGrey[100]:M.newColors.grey3[100]};
	}
`,pc=E.span`
	font-weight: 400;
`;function Sc(e){const{t}=$e(),n=Math.ceil(e.count/e.limit),r=(e.skip+e.limit)/e.limit,a=e.skip+1,i=Math.min(e.skip+e.limit,e.count),o=u=>()=>{e.onSkipChange({skip:u})},s=r===1,l=r===n;return n===0?null:d.jsxs(Dc,{children:[d.jsx(F,{color:"black",variant:"text",size:"small",tooltip:t("mosaic:DataView.jump_to_page"),label:d.jsxs("span",{children:[a,"-",i," ",d.jsx(pc,{children:"of"})," ",e.count]}),popover:d.jsx(kc,{currentPage:r,totalPages:n,limit:e.limit,onSkipChange:e.onSkipChange})}),d.jsx(Fn,{color:"gray",variant:"icon",size:"small",mIcon:ma,onClick:o(e.skip-e.limit),disabled:s}),d.jsx(Fn,{color:"gray",variant:"icon",size:"small",mIcon:xa,onClick:o(e.skip+e.limit),disabled:l})]})}const Rc=c.memo(Sc),Tc=E.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`,Mc=E.div`
	display: flex;

	.custom-checkbox {
		margin-right: 4px;
	}
`;var un={},Ac=ye;Object.defineProperty(un,"__esModule",{value:!0});var Ir=un.default=void 0,Oc=Ac(Ce()),Ec=xe(),_c=(0,Oc.default)((0,Ec.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");Ir=un.default=_c;var dn={},jc=ye;Object.defineProperty(dn,"__esModule",{value:!0});var Nr=dn.default=void 0,Pc=jc(Ce()),$c=xe(),Ic=(0,Pc.default)((0,$c.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");Nr=dn.default=Ic;const Nc=E.div`
	${""}
	& > .directionButton svg { font-size: 20px; }
`;function Lc(e){const t=c.useMemo(()=>e.columns.filter(s=>s.sortable===!0),[e.columns]),n=c.useMemo(()=>t.map(s=>({label:s.label,value:s.name})),[t]),r=n.find(s=>s.value===e.sort.name),a=e.sort.dir==="asc"?Nr:Ir,i=c.useCallback(function(s){e.onSortChange({name:s,dir:e.sort.dir})},[e.sort,e.onSortChange]),o=c.useCallback(function(){const s=e.sort.dir==="asc"?"desc":"asc";e.onSortChange({name:e.sort.name,dir:s})},[e.sort,e.onSortChange]);return d.jsxs(Nc,{children:[d.jsx(F,{label:r.label,variant:"text",color:"black",size:"small",menuContent:d.jsx(Xt,{options:n,value:e.sort.name,onChange:i})}),d.jsx(F,{className:"directionButton",variant:"icon",color:"black",size:"small",mIcon:a,onClick:o})]})}const Bc=c.memo(Lc),Wc=e=>{const{bulkActions:t,columns:n,checked:r,display:a,displayControlEnabled:i,displayOptionsFull:o,limit:s,limitOptions:l,onLimitChange:u,onDisplayChange:f,onSkipChange:h,skip:m,count:g,onColumnsChange:y,activeColumnObjs:v,allColumns:x,onCheckAllClick:k,onSortChange:b,sort:w,allChecked:D,anyChecked:R}=e,S=c.useMemo(()=>l||[25,50,100],[l]),p=b!==void 0&&w!==void 0;return d.jsxs(Tc,{className:`${a}`,children:[a==="grid"&&d.jsxs(Mc,{children:[k&&d.jsx(kt,{checked:D,indeterminate:!D&&R,onClick:k,disabled:e.disabled}),R&&d.jsx(Er,{data:e.data,checked:r,bulkActions:t,checkedAllPages:e.checkedAllPages})]}),y!==void 0&&a==="list"&&d.jsx(hc,{onChange:y,columns:v,allColumns:x}),d.jsxs(tt,{separator:!0,children:[p&&a==="grid"&&d.jsx(Bc,{columns:n,sort:w,onSortChange:b}),i&&d.jsx(vc,{display:a,displayOptions:o,onDisplayChange:f}),u!==void 0&&d.jsx(xc,{limit:s,options:S,onLimitChange:u}),h!==void 0&&d.jsx(Rc,{limit:s,skip:m,count:g,onSkipChange:h})]})]})},Vc=E.div`
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
`,vu=c.forwardRef(function(t,n){c.useEffect(()=>{var C;(C=t==null?void 0:t.activeFilters)==null||C.forEach(_=>{var B;if(!((B=t==null?void 0:t.filters)==null?void 0:B.find(N=>N.name===_)))throw new Error(`Active filter "${_}" is not a valid filter.`)})},[t.activeFilters,t.filters]);const{noResults:r="No results were found."}=t,a=t.display||"list",i=c.useMemo(()=>t.displayOptions||[a],[a,t.displayOptions]),o=t.onDisplayChange!==void 0&&i.length>1,s=c.useMemo(()=>t.bulkActions?t.bulkActions.filter(C=>t.checkedAllPages?C.onAllClick:C.onClick):[],[t.bulkActions,t.checkedAllPages]),l=c.useMemo(()=>({checkedAllPages:t.checkedAllPages,data:t.data.filter((C,_)=>{var A;return((A=t.checked)==null?void 0:A.length)>0&&t.checked[_]===!0})}),[t.checked,t.checkedAllPages,t.data]),u=Vt(s,l,"show",!0),f=t.checked!==void 0&&t.onCheckChange!==void 0,h=function(){var A;const C=t.checked.every(B=>B===!0),_=t.checked.map(()=>!C);t.onCheckChange(_),(A=t.onCheckAllPagesChange)==null||A.call(t,!1)},m=function(C){var A;const _=[...t.checked];_[C]=!_[C],t.onCheckChange(_),(A=t.onCheckAllPagesChange)==null||A.call(t,!1)},g=function(){var _,A;const C=t.checkedAllPages?t.checked.map(()=>!1):t.checked;(_=t.onCheckChange)==null||_.call(t,C),(A=t.onCheckAllPagesChange)==null||A.call(t,!t.checkedAllPages)};c.useEffect(()=>{!k.current||!k.current.scrollTo||k.current.scrollTo(0,0)},[t.limit,t.skip,t.display]);const y=c.useMemo(()=>i.map(C=>{if(C==="list")return nc;if(C==="grid")return rc;if(typeof C=="string")throw new Error("Unknown view option");return C}),[i]),v=y.find(C=>C.name===a);if(v===void 0)throw new Error(`Display '${a}' is not valid in the passed displayOptions.`);const x=v.component,k=c.useRef(null),b=c.useMemo(()=>t.activeColumns||t.columns.map(C=>C.name),[t.activeColumns,t.columns]),w=c.useMemo(()=>b.map(C=>{const _=t.columns.find(A=>A.name===C);if(!_)throw new Error(`Active column "${C}" is not defined in the columns list.`);return _}),[b,t.columns]),D=t.title||t.buttons||t.filters||t.currentView||t.onViewList||t.onViewSave||t.onViewSaveAs,R=c.useMemo(()=>!!(u.length>0||t.limitOptions||t.onColumnsChange||t.onSortChange||t.sort||o===!0||t.onLimitChange||t.onSkipChange),[u,t.limitOptions,t.onColumnsChange,t.onSortChange,t.sort,o,t.onLimitChange,t.onSkipChange]),S=t.checked!==void 0&&t.checked.length>0&&t.checked.every(C=>C===!0),p=t.checked!==void 0&&t.checked.length>0&&t.checked.some(C=>C===!0),T=(u==null?void 0:u.length)>0&&t.data.length>0&&t.count>t.data.length&&u.some(C=>C.onAllClick!==void 0)&&S&&t.checkedAllPages!==void 0&&t.onCheckAllPagesChange!==void 0,$=(t.checked||[]).some(C=>C),I=c.useMemo(()=>{const C=t.primaryActions||[],_=t.additionalActions||[],A=t.data.reduce((L,q)=>({...L,[q.id]:{primary:C.map(U=>{const oe=kn(Wt(U.show,{row:q},!0));return{...U,invisible:a==="list"?!oe:!1,show:a==="list"?!0:oe}}),additional:_.filter(U=>kn(Wt(U.show,{row:q},!0)))}}),{});if(a==="grid")return A;const B=Object.keys(A),N=C.map((L,q)=>B.some(U=>!A[U].primary[q].invisible));return B.reduce((L,q)=>({...L,[q]:{...A[q],primary:(A[q].primary||[]).filter((U,oe)=>!!N[oe])}}),{})},[t.data,t.additionalActions,t.primaryActions]);return d.jsxs(Vc,{"aria-busy":!!t.loading,className:`
				${t.loading?"loading":""}
				${t.sticky?"sticky":""}
			`,ref:n,...t.attrs||{},children:[D&&d.jsx("div",{className:"headerRow title",children:d.jsx(To,{title:t.title,onBack:t.onBack,backLabel:t.backLabel,buttons:t.buttons,filter:t.filter,filters:t.filters,activeFilters:t.activeFilters,onActiveFiltersChange:t.onActiveFiltersChange,disabled:t.disabled,currentView:t.currentView,onViewSave:t.onViewSave,onViewSaveAs:t.onViewSaveAs,onViewList:t.onViewList})}),R&&d.jsx("div",{className:"headerActions",children:d.jsx(Wc,{activeColumnObjs:w,columns:t.columns,bulkActions:u,checked:t.checked,display:a,displayControlEnabled:o,displayOptionsFull:y,limit:t.limit,limitOptions:t.limitOptions,onLimitChange:t.onLimitChange,onDisplayChange:t.onDisplayChange,onSkipChange:t.onSkipChange,skip:t.skip,count:t.count,allColumns:t.columns,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onSortChange:t.onSortChange,sort:t.sort,data:t.data,checkedAllPages:t.checkedAllPages,allChecked:S,anyChecked:p,disabled:t.disabled})}),d.jsx("div",{ref:k,className:`
					viewContainer
				`,children:d.jsx(x,{checked:t.checked,checkedAllPages:t.checkedAllPages,columns:t.columns,bulkActions:u,sort:t.sort,data:t.data,disabled:t.disabled,rowActions:I,activeColumns:t.activeColumns,gridColumnsMap:t.gridColumnsMap,limit:t.limit,count:t.count,rowCount:t.data.length,activeColumnObjs:w,onSortChange:t.onSortChange,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onCheckboxClick:f?m:void 0,onCheckAllPagesClick:g,onReorder:t.onReorder,showBulkAll:T,allChecked:S,anyChecked:p,actionsHidden:$||void 0})}),!t.loading&&!t.data.length&&(typeof r=="string"?d.jsx("div",{className:"noResults",children:d.jsx("p",{children:r})}):r)]})}),zc={actions:"Actions",clear_filters:"Clear filters",column_order:"Column Order",columns:"Columns",comparison:"Comparison",default:"Default",default_view:"Default View",filters:"Filters",go:"Go",jump_to_page:"Jump to Page",label:"Label",mine:"Mine",more:"More",overwrite_current_view:"Overwrite Current View",page:"Page",remove:"Remove",save_as:"Save As",view:"View",save_as_new_view:"Save as New View",save_view:"Save View",saved_views:"Saved Views",no_view_selected:"No view selected",selected_options:"Selected Options",show_for_all_users:"Show for all Users",table_settings:"Table Settings",type:"Type",cancel_save_view:"Cancel save view",cancel_saved_views:"Cancel saved views",cancel_table_settings:"Cancel table settings"},Fc={clear_filters:"Limpiar filtros",columns:"Columnas",default_view:"Vista predeterminada",filters:"Filtros",jump_to_page:"Ir a la página",more:"Más",overwrite_current_view:"Sobrescribir vista actual",save_as:"Guardar como",save_as_new_view:"Guardar como nueva vista",save_view:"Guardar Vista"},Uc={en:zc,es:Fc};ha({prefix:"DataView",bundle:Uc});const Yc=E.button`
  background: ${M.newColors.grey1[100]};
  border: ${M.borders.simplyGrey};
  cursor: pointer;
  margin-bottom: ${({$displayColorPicker:e})=>e?"8px":0};
  opacity: ${({$disabled:e})=>e?.5:1};
  padding: 10px;
  width: fit-content;
`,Hc=E.div`
  ${({$color:e})=>e.r!==void 0&&e.b!==void 0&&e.b!==void 0&&e.a!==void 0?`background: rgba(${e.r}, ${e.g}, ${e.b}, ${e.a});`:`background: ${e};`}
  height: 31px;
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  width: 80px;
`,bu=E(fa)`
`,wu=e=>{const{disabled:t,color:n,onClick:r,displayColorPicker:a,id:i}=e;return d.jsx(Yc,{$disabled:t,$displayColorPicker:a,onClick:r,type:"button",id:i,children:d.jsx(Hc,{"data-testid":"colordiv-test",$disabled:t,$color:n})})};export{Wt as A,wu as C,oc as D,bu as P,Wi as _,vu as a,Ra as b,Pi as c,pe as d,Aa as e,mu as f,Fa as g,Dt as h,qn as i,mt as j,Ba as k,$a as l,gu as m,za as n,Oa as o,Ri as p,qa as q,Y as r,vt as s,ce as t,Tn as u,Ha as v,j as w,Ma as x,Xl as y,Vt as z};
