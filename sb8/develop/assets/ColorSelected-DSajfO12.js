import{r as c,g as ce,a as X}from"./index-Btj5Fd67.js";import{s as ua,j as da,k as fa,a as ha,m as ga,t as ma,o as va,u as gr,v as ba,p as wa,i as xa,w as Ca,q as ya,x as Da,y as ka,D as pa,z as Sa}from"./index-Cgp_8tUs.js";import{_ as mr,u as Le,a as Aa}from"./useMosaicTranslation-L7Zdnfri.js";import{r as De,j as d}from"./jsx-runtime-DiwAibxM.js";import{s as O,t as T,B as hn}from"./theme-C7C0QMlu.js";import{t as B}from"./testIds-DZf96GK8.js";import{T as Ra,C as Ta}from"./TitleWrapper-Bkg-hsBc.js";import{B as ft}from"./ButtonRow-DaYhrvd1.js";import{a as Ea}from"./debounce-B3RVa3dT.js";import{i as ke}from"./generateUtilityClasses-oWyMxXuq.js";import{r as pe}from"./createSvgIcon-C7F5N1gl.js";import{D as Ma}from"./FormFieldText.styled-BXg2h5EQ.js";import{B as U,S as Oa,c as _a,P as Ia}from"./Button-BW21zc79.js";import{E as an}from"./DataViewPrimaryFilter.styled-BUfrUkss.js";import{r as je}from"./index-T5NeFSal.js";import{C as _t}from"./Checkbox-faPr4U1Q.js";import{M as Pa}from"./MoreVert-BH0BHXBp.js";import{u as Mn,g as On}from"./useToggle-B3mbTfSB.js";import{T as _n}from"./Typography-D0-akgTt.js";import{D as ja,S as Na,C as $a}from"./ChevronRight-Da8zFjWX.js";import{C as La}from"./CheckboxList-CKLT5_IE.js";import{P as Ba}from"./PageHeader-CmlBcYYr.js";function on(e,t,n=!0){const r=e!==void 0?e:n;return(Array.isArray(r)?r:[r]).map(i=>i instanceof Function?i(t):i)}function sn(e,t,n,r=!0){const a=c.useMemo(()=>{const i=Array.isArray(e),s=(i?e:[e]).map(l=>({...l,[n]:on(l[n],t,r)}));return i?s:s[0]},[r,e,n,t]);return Array.isArray(a)?Mn(a,n):Mn(a,n)}var Wa=ua();const Qc=ce(Wa);var qt,In;function Jc(){if(In)return qt;In=1;var e=ha(),t=da(),n=fa(),r=ga();function a(i,o){var s=r(i)?e:n;return s(i,t(o,3))}return qt=a,qt}function H(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Va(e){return H(1,arguments),e instanceof Date||mr(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ue(e){H(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||mr(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Fa(e){if(H(1,arguments),!Va(e)&&typeof e!="number")return!1;var t=ue(e);return!isNaN(Number(t))}function Re(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function qa(e,t){H(2,arguments);var n=ue(e).getTime(),r=Re(t);return new Date(n+r)}function za(e,t){H(2,arguments);var n=Re(t);return qa(e,-n)}var Ua=864e5;function Ya(e){H(1,arguments);var t=ue(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Ua)+1}function St(e){H(1,arguments);var t=1,n=ue(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function vr(e){H(1,arguments);var t=ue(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=St(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=St(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Ha(e){H(1,arguments);var t=vr(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=St(n);return r}var Ga=6048e5;function Xa(e){H(1,arguments);var t=ue(e),n=St(t).getTime()-Ha(t).getTime();return Math.round(n/Ga)+1}var Ka={};function It(){return Ka}function At(e,t){var n,r,a,i,o,s,l,u;H(1,arguments);var f=It(),h=Re((n=(r=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=ue(e),g=m.getUTCDay(),w=(g<h?7:0)+g-h;return m.setUTCDate(m.getUTCDate()-w),m.setUTCHours(0,0,0,0),m}function br(e,t){var n,r,a,i,o,s,l,u;H(1,arguments);var f=ue(e),h=f.getUTCFullYear(),m=It(),g=Re((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(h+1,0,g),w.setUTCHours(0,0,0,0);var b=At(w,t),x=new Date(0);x.setUTCFullYear(h,0,g),x.setUTCHours(0,0,0,0);var v=At(x,t);return f.getTime()>=b.getTime()?h+1:f.getTime()>=v.getTime()?h:h-1}function Qa(e,t){var n,r,a,i,o,s,l,u;H(1,arguments);var f=It(),h=Re((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1),m=br(e,t),g=new Date(0);g.setUTCFullYear(m,0,h),g.setUTCHours(0,0,0,0);var w=At(g,t);return w}var Ja=6048e5;function Za(e,t){H(1,arguments);var n=ue(e),r=At(n,t).getTime()-Qa(n,t).getTime();return Math.round(r/Ja)+1}function P(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var Ce={y:function(t,n){var r=t.getUTCFullYear(),a=r>0?r:1-r;return P(n==="yy"?a%100:a,n.length)},M:function(t,n){var r=t.getUTCMonth();return n==="M"?String(r+1):P(r+1,2)},d:function(t,n){return P(t.getUTCDate(),n.length)},a:function(t,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,n){return P(t.getUTCHours()%12||12,n.length)},H:function(t,n){return P(t.getUTCHours(),n.length)},m:function(t,n){return P(t.getUTCMinutes(),n.length)},s:function(t,n){return P(t.getUTCSeconds(),n.length)},S:function(t,n){var r=n.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,r-3));return P(i,n.length)}},Pe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ei={G:function(t,n,r){var a=t.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,n,r){if(n==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return r.ordinalNumber(i,{unit:"year"})}return Ce.y(t,n)},Y:function(t,n,r,a){var i=br(t,a),o=i>0?i:1-i;if(n==="YY"){var s=o%100;return P(s,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):P(o,n.length)},R:function(t,n){var r=vr(t);return P(r,n.length)},u:function(t,n){var r=t.getUTCFullYear();return P(r,n.length)},Q:function(t,n,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"Q":return String(a);case"QQ":return P(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,n,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"q":return String(a);case"qq":return P(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,n,r){var a=t.getUTCMonth();switch(n){case"M":case"MM":return Ce.M(t,n);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,n,r){var a=t.getUTCMonth();switch(n){case"L":return String(a+1);case"LL":return P(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,r,a){var i=Za(t,a);return n==="wo"?r.ordinalNumber(i,{unit:"week"}):P(i,n.length)},I:function(t,n,r){var a=Xa(t);return n==="Io"?r.ordinalNumber(a,{unit:"week"}):P(a,n.length)},d:function(t,n,r){return n==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ce.d(t,n)},D:function(t,n,r){var a=Ya(t);return n==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):P(a,n.length)},E:function(t,n,r){var a=t.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,n,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return P(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,n,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return P(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,n,r){var a=t.getUTCDay(),i=a===0?7:a;switch(n){case"i":return String(i);case"ii":return P(i,n.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,n,r){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,n,r){var a=t.getUTCHours(),i;switch(a===12?i=Pe.noon:a===0?i=Pe.midnight:i=a/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,n,r){var a=t.getUTCHours(),i;switch(a>=17?i=Pe.evening:a>=12?i=Pe.afternoon:a>=4?i=Pe.morning:i=Pe.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,n,r){if(n==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return Ce.h(t,n)},H:function(t,n,r){return n==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ce.H(t,n)},K:function(t,n,r){var a=t.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(a,{unit:"hour"}):P(a,n.length)},k:function(t,n,r){var a=t.getUTCHours();return a===0&&(a=24),n==="ko"?r.ordinalNumber(a,{unit:"hour"}):P(a,n.length)},m:function(t,n,r){return n==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ce.m(t,n)},s:function(t,n,r){return n==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ce.s(t,n)},S:function(t,n){return Ce.S(t,n)},X:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return jn(o);case"XXXX":case"XX":return Ae(o);case"XXXXX":case"XXX":default:return Ae(o,":")}},x:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"x":return jn(o);case"xxxx":case"xx":return Ae(o);case"xxxxx":case"xxx":default:return Ae(o,":")}},O:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Pn(o,":");case"OOOO":default:return"GMT"+Ae(o,":")}},z:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Pn(o,":");case"zzzz":default:return"GMT"+Ae(o,":")}},t:function(t,n,r,a){var i=a._originalDate||t,o=Math.floor(i.getTime()/1e3);return P(o,n.length)},T:function(t,n,r,a){var i=a._originalDate||t,o=i.getTime();return P(o,n.length)}};function Pn(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t;return n+String(a)+o+P(i,2)}function jn(e,t){if(e%60===0){var n=e>0?"-":"+";return n+P(Math.abs(e)/60,2)}return Ae(e,t)}function Ae(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=P(Math.floor(a/60),2),o=P(a%60,2);return r+i+n+o}var Nn=function(t,n){switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},wr=function(t,n){switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},ti=function(t,n){var r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return Nn(t,n);var o;switch(a){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Nn(a,n)).replace("{{time}}",wr(i,n))},ni={p:wr,P:ti};function ri(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var ai=["D","DD"],ii=["YY","YYYY"];function oi(e){return ai.indexOf(e)!==-1}function si(e){return ii.indexOf(e)!==-1}function $n(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var li={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ci=function(t,n,r){var a,i=li[t];return typeof i=="string"?a=i:n===1?a=i.one:a=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};function zt(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var ui={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},di={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},fi={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},hi={date:zt({formats:ui,defaultWidth:"full"}),time:zt({formats:di,defaultWidth:"full"}),dateTime:zt({formats:fi,defaultWidth:"full"})},gi={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mi=function(t,n,r,a){return gi[t]};function Xe(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",a;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(t):t;return a[u]}}var vi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},bi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},wi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ci={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Di=function(t,n){var r=Number(t),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ki={ordinalNumber:Di,era:Xe({values:vi,defaultWidth:"wide"}),quarter:Xe({values:bi,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Xe({values:wi,defaultWidth:"wide"}),day:Xe({values:xi,defaultWidth:"wide"}),dayPeriod:Xe({values:Ci,defaultWidth:"wide",formattingValues:yi,defaultFormattingWidth:"wide"})};function Ke(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?Si(s,function(h){return h.test(o)}):pi(s,function(h){return h.test(o)}),u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;var f=t.slice(o.length);return{value:u,rest:f}}}function pi(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Si(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Ai(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var Ri=/^(\d+)(th|st|nd|rd)?/i,Ti=/\d+/i,Ei={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mi={any:[/^b/i,/^(a|c)/i]},Oi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_i={any:[/1/i,/2/i,/3/i,/4/i]},Ii={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Pi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ji={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ni={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$i={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Li={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Bi={ordinalNumber:Ai({matchPattern:Ri,parsePattern:Ti,valueCallback:function(t){return parseInt(t,10)}}),era:Ke({matchPatterns:Ei,defaultMatchWidth:"wide",parsePatterns:Mi,defaultParseWidth:"any"}),quarter:Ke({matchPatterns:Oi,defaultMatchWidth:"wide",parsePatterns:_i,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ke({matchPatterns:Ii,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any"}),day:Ke({matchPatterns:ji,defaultMatchWidth:"wide",parsePatterns:Ni,defaultParseWidth:"any"}),dayPeriod:Ke({matchPatterns:$i,defaultMatchWidth:"any",parsePatterns:Li,defaultParseWidth:"any"})},Wi={code:"en-US",formatDistance:ci,formatLong:hi,formatRelative:mi,localize:ki,match:Bi,options:{weekStartsOn:0,firstWeekContainsDate:1}},Vi=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qi=/^'([^]*?)'?$/,zi=/''/g,Ui=/[a-zA-Z]/;function Zc(e,t,n){var r,a,i,o,s,l,u,f,h,m,g,w,b,x,v,C,y,k;H(2,arguments);var A=String(t),S=It(),p=(r=(a=n==null?void 0:n.locale)!==null&&a!==void 0?a:S.locale)!==null&&r!==void 0?r:Wi,R=Re((i=(o=(s=(l=n==null?void 0:n.firstWeekContainsDate)!==null&&l!==void 0?l:n==null||(u=n.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&o!==void 0?o:(h=S.locale)===null||h===void 0||(m=h.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(R>=1&&R<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var N=Re((g=(w=(b=(x=n==null?void 0:n.weekStartsOn)!==null&&x!==void 0?x:n==null||(v=n.locale)===null||v===void 0||(C=v.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&b!==void 0?b:S.weekStartsOn)!==null&&w!==void 0?w:(y=S.locale)===null||y===void 0||(k=y.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&g!==void 0?g:0);if(!(N>=0&&N<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!p.localize)throw new RangeError("locale must contain localize property");if(!p.formatLong)throw new RangeError("locale must contain formatLong property");var L=ue(e);if(!Fa(L))throw new RangeError("Invalid time value");var I=ri(L),D=za(L,I),_={firstWeekContainsDate:R,weekStartsOn:N,locale:p,_originalDate:L},E=A.match(Fi).map(function($){var Y=$[0];if(Y==="p"||Y==="P"){var W=ni[Y];return W($,p.formatLong)}return $}).join("").match(Vi).map(function($){if($==="''")return"'";var Y=$[0];if(Y==="'")return Yi($);var W=ei[Y];if(W)return!(n!=null&&n.useAdditionalWeekYearTokens)&&si($)&&$n($,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&oi($)&&$n($,t,String(e)),W(D,$,p.localize,_);if(Y.match(Ui))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Y+"`");return $}).join("");return E}function Yi(e){var t=e.match(qi);return t?t[1].replace(zi,"'"):e}var Ut,Ln;function Hi(){if(Ln)return Ut;Ln=1;var e=ma();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return Ut=t,Ut}var Yt,Bn;function Gi(){if(Bn)return Yt;Bn=1;var e=Hi(),t=va(),n=Object.prototype,r=n.hasOwnProperty;function a(i,o,s){var l=i[o];(!(r.call(i,o)&&t(l,s))||s===void 0&&!(o in i))&&e(i,o,s)}return Yt=a,Yt}var Ht,Wn;function Xi(){if(Wn)return Ht;Wn=1;var e=Gi(),t=gr(),n=wa(),r=Ea(),a=ba();function i(o,s,l,u){if(!r(o))return o;s=t(s,o);for(var f=-1,h=s.length,m=h-1,g=o;g!=null&&++f<h;){var w=a(s[f]),b=l;if(w==="__proto__"||w==="constructor"||w==="prototype")return o;if(f!=m){var x=g[w];b=u?u(x,w,g):void 0,b===void 0&&(b=r(x)?x:n(s[f+1])?[]:{})}e(g,w,b),g=g[w]}return o}return Ht=i,Ht}var Gt,Vn;function Ki(){if(Vn)return Gt;Vn=1;var e=xa(),t=Xi(),n=gr();function r(a,i,o){for(var s=-1,l=i.length,u={};++s<l;){var f=i[s],h=e(a,f);o(h,f)&&t(u,n(f,a),h)}return u}return Gt=r,Gt}var Xt,Fn;function Qi(){if(Fn)return Xt;Fn=1;var e=Ki(),t=Ca();function n(r,a){return e(r,a,function(i,o){return t(r,o)})}return Xt=n,Xt}var Kt,qn;function Ji(){if(qn)return Kt;qn=1;var e=ya();function t(n){var r=n==null?0:n.length;return r?e(n,1):[]}return Kt=t,Kt}var Qt,zn;function Zi(){if(zn)return Qt;zn=1;var e=Ji(),t=ka(),n=Da();function r(a){return n(t(a,void 0,e),a+"")}return Qt=r,Qt}var Jt,Un;function eo(){if(Un)return Jt;Un=1;var e=Qi(),t=Zi(),n=t(function(r,a){return r==null?{}:e(r,a)});return Jt=n,Jt}var to=eo();const no=ce(to);var Qe={},Yn;function ro(){if(Yn)return Qe;Yn=1;var e=ke();Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=void 0;var t=e(pe()),n=De();return Qe.default=(0,t.default)((0,n.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList"),Qe}var ao=ro();const io=ce(ao),oo=O.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;function so(e){var x;const{t}=Le(),[n,r]=c.useState({anchorEl:null,dropdownOpen:!1}),a=c.useMemo(()=>e.activeFilters||[],[e.activeFilters]),i=a.map(v=>e.filters.find(C=>C.name===v)),o=e.filters.map(v=>({label:v.label,value:v.name})).sort((v,C)=>v.label.localeCompare(C.label)),s=c.useMemo(()=>a.map(v=>o.find(C=>C.value===v)).filter(Boolean),[o,a]),l=v=>{r({...n,anchorEl:v.currentTarget})},u=()=>{r({...n,anchorEl:null})},f=()=>{r({...n,dropdownOpen:!0})},h=function(){r({...n,dropdownOpen:!1})},m=function(v){const C=Object.fromEntries(Object.entries(e.filter).filter(A=>A[1])),y=no(C,[...v.value]),k=Object.keys(y).join(",")!==Object.keys(C).join(",");e.onActiveFiltersChange({activeFilters:v.value,filter:k===!0?y:e.filter}),u()},g=v=>{const C=new RegExp(v.keyword,"i");return{docs:o.filter(k=>k.label.match(C)),hasMore:!1}},w=()=>{i.forEach(v=>{e.filter[v.name]!==void 0&&v.onChange(void 0)})},b=(v,C)=>((v!==void 0||e.filter[C.name])&&C.onChange(v),u());return d.jsx("div",{"data-testid":B.DATA_VIEW_FILTERS,className:"filterRow",children:((x=e==null?void 0:e.filters)==null?void 0:x.length)>0&&d.jsxs(oo,{"data-testid":B.DATA_VIEW_FILTER_BAR,children:[d.jsx(U,{label:t("mosaic:DataView.filters"),variant:"text",color:"black",size:"small",iconPosition:"left",mIcon:io,mIconColor:T.newColors.almostBlack[100],onClick:l}),d.jsx(Ma,{anchorEl:n.anchorEl,onClose:u,onEntered:f,onExited:h,children:d.jsx(pa,{comparison:"",selected:s,getOptions:g,isOpen:n.dropdownOpen,onApply:m})}),(i==null?void 0:i.length)>0&&d.jsx(d.Fragment,{children:i.map(v=>{const C=v.component;return d.jsx(C,{label:v.label,args:v.args||{},data:e.filter[v.name]||{},onChange:y=>b(y,v)},v.name)})}),(i==null?void 0:i.length)>0&&d.jsx(U,{label:t("mosaic:DataView.clear_filters"),variant:"text",size:"small",color:"teal",onClick:w})]})})}const lo=O.div`
	border-bottom: 2px solid ${T.newColors.grey2[100]};
	padding: 24px 24px 16px 24px;
	width: 100%;
`,co=O.div`
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
`,uo=O(U)`
	&& {
		button {
			max-width: 300px;
			margin-right: 2px;
			text-transform: none;
			font-weight: ${T.fontWeight.normal};
		}

		&.no-view-selected button {
			color: ${T.newColors.grey3[100]};
			font-style: italic;
		}
	}
`,fo=O.div`
	font-size: 14px;
	padding: 3px 0;
	letter-spacing: 1px;
`;function ho({currentView:e,onViewSave:t,onViewSaveAs:n,onViewList:r}){const{t:a}=Le(),i=c.useMemo(()=>{const o=[];return t&&o.push({label:a("mosaic:DataView.overwrite_current_view"),onClick:t}),n&&o.push({label:a("mosaic:DataView.save_as_new_view"),onClick:n}),o},[t,n,a]);return d.jsx("div",{"data-testid":B.DATA_VIEW_VIEW_CONTROL,children:d.jsx("div",{className:"right",children:d.jsxs(ft,{children:[r?d.jsx(uo,{mIcon:an,iconPosition:"right",label:e?`${a("mosaic:DataView.view")}: ${e.label}`:a("mosaic:DataView.no_view_selected"),variant:"contained",size:"small",color:"gray",onClick:r,className:!e&&"no-view-selected"}):e&&d.jsx(fo,{children:`${a("mosaic:DataView.view")}: ${e.label}`}),d.jsx(U,{mIcon:an,iconPosition:"right",label:a("mosaic:DataView.save_view"),variant:"text",size:"small",color:"teal",menuItems:i})]})})})}function go({activeFilters:e,backLabel:t,buttons:n,currentView:r,disabled:a,filter:i,filters:o,onActiveFiltersChange:s,onBack:l,onViewSave:u,onViewSaveAs:f,onViewList:h,title:m}){const g=c.useMemo(()=>n===void 0?[]:n.map(b=>{const{name:x,...v}=b;return v.attrs={"data-mosaic-id":`button_${x}`},v.disabled=v.disabled===void 0?a:v.disabled,v}),[n,a]),w=r||u||f||h;return d.jsxs(lo,{"data-testid":B.DATA_VIEW_TITLE_BAR,children:[d.jsxs(co,{children:[d.jsxs("div",{className:"left",children:[m&&d.jsx(Ra,{title:m,onBack:l,backLabel:t}),w&&d.jsx(ho,{currentView:r,onViewSave:u,onViewSaveAs:f,onViewList:h})]}),g.length>0&&d.jsx(ft,{buttons:g})]}),o&&d.jsx(so,{filter:i,filters:o,activeFilters:e,onActiveFiltersChange:s})]})}var Je={},Hn;function mo(){if(Hn)return Je;Hn=1;var e=ke();Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=void 0;var t=e(pe()),n=De();return Je.default=(0,t.default)((0,n.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOn"),Je}var vo=mo();const bo=ce(vo);var Ze={},Gn;function wo(){if(Gn)return Ze;Gn=1;var e=ke();Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.default=void 0;var t=e(pe()),n=De();return Ze.default=(0,t.default)((0,n.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulleted"),Ze}var xo=wo();const Co=ce(xo);function yo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const Pt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Be(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function gn(e){return"nodeType"in e}function K(e){var t,n;return e?Be(e)?e:gn(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function mn(e){const{Document:t}=K(e);return e instanceof t}function ht(e){return Be(e)?!1:e instanceof K(e).HTMLElement}function xr(e){return e instanceof K(e).SVGElement}function We(e){return e?Be(e)?e.document:gn(e)?mn(e)?e:ht(e)||xr(e)?e.ownerDocument:document:document:document}const ie=Pt?c.useLayoutEffect:c.useEffect;function vn(e){const t=c.useRef(e);return ie(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function Do(){const e=c.useRef(null),t=c.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=c.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function ct(e,t){t===void 0&&(t=[e]);const n=c.useRef(e);return ie(()=>{n.current!==e&&(n.current=e)},t),n}function gt(e,t){const n=c.useRef();return c.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function Rt(e){const t=vn(e),n=c.useRef(null),r=c.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function ln(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}let Zt={};function mt(e,t){return c.useMemo(()=>{if(t)return t;const n=Zt[e]==null?0:Zt[e]+1;return Zt[e]=n,e+"-"+n},[e,t])}function Cr(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((i,o)=>{const s=Object.entries(o);for(const[l,u]of s){const f=i[l];f!=null&&(i[l]=f+e*u)}return i},{...t})}}const Ne=Cr(1),ut=Cr(-1);function ko(e){return"clientX"in e&&"clientY"in e}function bn(e){if(!e)return!1;const{KeyboardEvent:t}=K(e.target);return t&&e instanceof t}function po(e){if(!e)return!1;const{TouchEvent:t}=K(e.target);return t&&e instanceof t}function cn(e){if(po(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return ko(e)?{x:e.clientX,y:e.clientY}:null}const $e=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[$e.Translate.toString(e),$e.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Xn="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function So(e){return e.matches(Xn)?e:e.querySelector(Xn)}const Ao={display:"none"};function Ro(e){let{id:t,value:n}=e;return X.createElement("div",{id:t,style:Ao},n)}function To(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return X.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function Eo(){const[e,t]=c.useState("");return{announce:c.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const yr=c.createContext(null);function Mo(e){const t=c.useContext(yr);c.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Oo(){const[e]=c.useState(()=>new Set),t=c.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[c.useCallback(r=>{let{type:a,event:i}=r;e.forEach(o=>{var s;return(s=o[a])==null?void 0:s.call(o,i)})},[e]),t]}const _o={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Io={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Po(e){let{announcements:t=Io,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=_o}=e;const{announce:i,announcement:o}=Eo(),s=mt("DndLiveRegion"),[l,u]=c.useState(!1);if(c.useEffect(()=>{u(!0)},[]),Mo(c.useMemo(()=>({onDragStart(h){let{active:m}=h;i(t.onDragStart({active:m}))},onDragMove(h){let{active:m,over:g}=h;t.onDragMove&&i(t.onDragMove({active:m,over:g}))},onDragOver(h){let{active:m,over:g}=h;i(t.onDragOver({active:m,over:g}))},onDragEnd(h){let{active:m,over:g}=h;i(t.onDragEnd({active:m,over:g}))},onDragCancel(h){let{active:m,over:g}=h;i(t.onDragCancel({active:m,over:g}))}}),[i,t])),!l)return null;const f=X.createElement(X.Fragment,null,X.createElement(Ro,{id:r,value:a.draggable}),X.createElement(To,{id:s,announcement:o}));return n?je.createPortal(f,n):f}var V;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(V||(V={}));function Tt(){}function Et(e,t){return c.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Dr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const oe=Object.freeze({x:0,y:0});function kr(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function pr(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function jo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Kn(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function Sr(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function Qn(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Ar=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Qn(t,t.left,t.top),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=kr(Qn(l),a);i.push({id:s,data:{droppableContainer:o,value:u}})}}return i.sort(pr)},No=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Kn(t),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=Kn(l),f=a.reduce((m,g,w)=>m+kr(u[w],g),0),h=Number((f/4).toFixed(4));i.push({id:s,data:{droppableContainer:o,value:h}})}}return i.sort(pr)};function $o(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),o=a-r,s=i-n;if(r<a&&n<i){const l=t.width*t.height,u=e.width*e.height,f=o*s,h=f/(l+u-f);return Number(h.toFixed(4))}return 0}const Lo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const i of r){const{id:o}=i,s=n.get(o);if(s){const l=$o(s,t);l>0&&a.push({id:o,data:{droppableContainer:i,value:l}})}}return a.sort(jo)};function Bo(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Rr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:oe}function Wo(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.reduce((o,s)=>({...o,top:o.top+e*s.y,bottom:o.bottom+e*s.y,left:o.left+e*s.x,right:o.right+e*s.x}),{...n})}}const Vo=Wo(1);function Fo(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function qo(e,t,n){const r=Fo(t);if(!r)return e;const{scaleX:a,scaleY:i,x:o,y:s}=r,l=e.left-o-(1-a)*parseFloat(n),u=e.top-s-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),f=a?e.width/a:e.width,h=i?e.height/i:e.height;return{width:f,height:h,top:u,right:l+f,bottom:u+h,left:l}}const zo={ignoreTransform:!1};function Ve(e,t){t===void 0&&(t=zo);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:f}=K(e).getComputedStyle(e);u&&(n=qo(n,u,f))}const{top:r,left:a,width:i,height:o,bottom:s,right:l}=n;return{top:r,left:a,width:i,height:o,bottom:s,right:l}}function Jn(e){return Ve(e,{ignoreTransform:!0})}function Uo(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Yo(e,t){return t===void 0&&(t=K(e).getComputedStyle(e)),t.position==="fixed"}function Ho(e,t){t===void 0&&(t=K(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const i=t[a];return typeof i=="string"?n.test(i):!1})}function jt(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(mn(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!ht(a)||xr(a)||n.includes(a))return n;const i=K(e).getComputedStyle(a);return a!==e&&Ho(a,i)&&n.push(a),Yo(a,i)?n:r(a.parentNode)}return e?r(e):n}function Tr(e){const[t]=jt(e,1);return t??null}function en(e){return!Pt||!e?null:Be(e)?e:gn(e)?mn(e)||e===We(e).scrollingElement?window:ht(e)?e:null:null}function Er(e){return Be(e)?e.scrollX:e.scrollLeft}function Mr(e){return Be(e)?e.scrollY:e.scrollTop}function un(e){return{x:Er(e),y:Mr(e)}}var F;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(F||(F={}));function Or(e){return!Pt||!e?!1:e===document.scrollingElement}function _r(e){const t={x:0,y:0},n=Or(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,o=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:a,isLeft:i,isBottom:o,isRight:s,maxScroll:r,minScroll:t}}const Go={x:.2,y:.2};function Xo(e,t,n,r,a){let{top:i,left:o,right:s,bottom:l}=n;r===void 0&&(r=10),a===void 0&&(a=Go);const{isTop:u,isBottom:f,isLeft:h,isRight:m}=_r(e),g={x:0,y:0},w={x:0,y:0},b={height:t.height*a.y,width:t.width*a.x};return!u&&i<=t.top+b.height?(g.y=F.Backward,w.y=r*Math.abs((t.top+b.height-i)/b.height)):!f&&l>=t.bottom-b.height&&(g.y=F.Forward,w.y=r*Math.abs((t.bottom-b.height-l)/b.height)),!m&&s>=t.right-b.width?(g.x=F.Forward,w.x=r*Math.abs((t.right-b.width-s)/b.width)):!h&&o<=t.left+b.width&&(g.x=F.Backward,w.x=r*Math.abs((t.left+b.width-o)/b.width)),{direction:g,speed:w}}function Ko(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function Ir(e){return e.reduce((t,n)=>Ne(t,un(n)),oe)}function Qo(e){return e.reduce((t,n)=>t+Er(n),0)}function Jo(e){return e.reduce((t,n)=>t+Mr(n),0)}function Zo(e,t){if(t===void 0&&(t=Ve),!e)return;const{top:n,left:r,bottom:a,right:i}=t(e);Tr(e)&&(a<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const es=[["x",["left","right"],Qo],["y",["top","bottom"],Jo]];class wn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=jt(n),a=Ir(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,o,s]of es)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=s(r),f=a[i]-u;return this.rect[l]+f},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ot{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function ts(e){const{EventTarget:t}=K(e);return e instanceof t?e:We(e)}function tn(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var ne;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ne||(ne={}));function Zn(e){e.preventDefault()}function ns(e){e.stopPropagation()}var M;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(M||(M={}));const Pr={start:[M.Space,M.Enter],cancel:[M.Esc],end:[M.Space,M.Enter]},rs=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case M.Right:return{...n,x:n.x+25};case M.Left:return{...n,x:n.x-25};case M.Down:return{...n,y:n.y+25};case M.Up:return{...n,y:n.y-25}}};class Nt{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new ot(We(n)),this.windowListeners=new ot(K(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ne.Resize,this.handleCancel),this.windowListeners.add(ne.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ne.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Zo(r),n(oe)}handleKeyDown(t){if(bn(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:i=Pr,coordinateGetter:o=rs,scrollBehavior:s="smooth"}=a,{code:l}=t;if(i.end.includes(l)){this.handleEnd(t);return}if(i.cancel.includes(l)){this.handleCancel(t);return}const{collisionRect:u}=r.current,f=u?{x:u.left,y:u.top}:oe;this.referenceCoordinates||(this.referenceCoordinates=f);const h=o(t,{active:n,context:r.current,currentCoordinates:f});if(h){const m=ut(h,f),g={x:0,y:0},{scrollableAncestors:w}=r.current;for(const b of w){const x=t.code,{isTop:v,isRight:C,isLeft:y,isBottom:k,maxScroll:A,minScroll:S}=_r(b),p=Ko(b),R={x:Math.min(x===M.Right?p.right-p.width/2:p.right,Math.max(x===M.Right?p.left:p.left+p.width/2,h.x)),y:Math.min(x===M.Down?p.bottom-p.height/2:p.bottom,Math.max(x===M.Down?p.top:p.top+p.height/2,h.y))},N=x===M.Right&&!C||x===M.Left&&!y,L=x===M.Down&&!k||x===M.Up&&!v;if(N&&R.x!==h.x){const I=b.scrollLeft+m.x,D=x===M.Right&&I<=A.x||x===M.Left&&I>=S.x;if(D&&!m.y){b.scrollTo({left:I,behavior:s});return}D?g.x=b.scrollLeft-I:g.x=x===M.Right?b.scrollLeft-A.x:b.scrollLeft-S.x,g.x&&b.scrollBy({left:-g.x,behavior:s});break}else if(L&&R.y!==h.y){const I=b.scrollTop+m.y,D=x===M.Down&&I<=A.y||x===M.Up&&I>=S.y;if(D&&!m.x){b.scrollTo({top:I,behavior:s});return}D?g.y=b.scrollTop-I:g.y=x===M.Down?b.scrollTop-A.y:b.scrollTop-S.y,g.y&&b.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,Ne(ut(h,this.referenceCoordinates),g))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Nt.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Pr,onActivation:a}=t,{active:i}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const s=i.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function er(e){return!!(e&&"distance"in e)}function tr(e){return!!(e&&"delay"in e)}class xn{constructor(t,n,r){var a;r===void 0&&(r=ts(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:o}=i;this.props=t,this.events=n,this.document=We(o),this.documentListeners=new ot(this.document),this.listeners=new ot(r),this.windowListeners=new ot(K(o)),this.initialCoordinates=(a=cn(i))!=null?a:oe,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(ne.Resize,this.handleCancel),this.windowListeners.add(ne.DragStart,Zn),this.windowListeners.add(ne.VisibilityChange,this.handleCancel),this.windowListeners.add(ne.ContextMenu,Zn),this.documentListeners.add(ne.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(tr(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(er(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(ne.Click,ns,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ne.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:i}=this,{onMove:o,options:{activationConstraint:s}}=i;if(!a)return;const l=(n=cn(t))!=null?n:oe,u=ut(a,l);if(!r&&s){if(er(s)){if(s.tolerance!=null&&tn(u,s.tolerance))return this.handleCancel();if(tn(u,s.distance))return this.handleStart()}return tr(s)&&tn(u,s.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),o(l)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===M.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const as={move:{name:"pointermove"},end:{name:"pointerup"}};class $t extends xn{constructor(t){const{event:n}=t,r=We(n.target);super(t,as,r)}}$t.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const is={move:{name:"mousemove"},end:{name:"mouseup"}};var dn;(function(e){e[e.RightClick=2]="RightClick"})(dn||(dn={}));class os extends xn{constructor(t){super(t,is,We(t.event.target))}}os.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===dn.RightClick?!1:(r==null||r({event:n}),!0)}}];const nn={move:{name:"touchmove"},end:{name:"touchend"}};class ss extends xn{constructor(t){super(t,nn)}static setup(){return window.addEventListener(nn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(nn.move.name,t)};function t(){}}}ss.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var st;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(st||(st={}));var Mt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Mt||(Mt={}));function ls(e){let{acceleration:t,activator:n=st.Pointer,canScroll:r,draggingRect:a,enabled:i,interval:o=5,order:s=Mt.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:f,delta:h,threshold:m}=e;const g=us({delta:h,disabled:!i}),[w,b]=Do(),x=c.useRef({x:0,y:0}),v=c.useRef({x:0,y:0}),C=c.useMemo(()=>{switch(n){case st.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case st.DraggableRect:return a}},[n,a,l]),y=c.useRef(null),k=c.useCallback(()=>{const S=y.current;if(!S)return;const p=x.current.x*v.current.x,R=x.current.y*v.current.y;S.scrollBy(p,R)},[]),A=c.useMemo(()=>s===Mt.TreeOrder?[...u].reverse():u,[s,u]);c.useEffect(()=>{if(!i||!u.length||!C){b();return}for(const S of A){if((r==null?void 0:r(S))===!1)continue;const p=u.indexOf(S),R=f[p];if(!R)continue;const{direction:N,speed:L}=Xo(S,R,C,t,m);for(const I of["x","y"])g[I][N[I]]||(L[I]=0,N[I]=0);if(L.x>0||L.y>0){b(),y.current=S,w(k,o),x.current=L,v.current=N;return}}x.current={x:0,y:0},v.current={x:0,y:0},b()},[t,k,r,b,i,o,JSON.stringify(C),JSON.stringify(g),w,u,A,f,JSON.stringify(m)])}const cs={x:{[F.Backward]:!1,[F.Forward]:!1},y:{[F.Backward]:!1,[F.Forward]:!1}};function us(e){let{delta:t,disabled:n}=e;const r=ln(t);return gt(a=>{if(n||!r||!a)return cs;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[F.Backward]:a.x[F.Backward]||i.x===-1,[F.Forward]:a.x[F.Forward]||i.x===1},y:{[F.Backward]:a.y[F.Backward]||i.y===-1,[F.Forward]:a.y[F.Forward]||i.y===1}}},[n,t,r])}function ds(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return gt(a=>{var i;return t===null?null:(i=r??a)!=null?i:null},[r,t])}function fs(e,t){return c.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,i=a.activators.map(o=>({eventName:o.eventName,handler:t(o.handler,r)}));return[...n,...i]},[]),[e,t])}var dt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(dt||(dt={}));var fn;(function(e){e.Optimized="optimized"})(fn||(fn={}));const nr=new Map;function hs(e,t){let{dragging:n,dependencies:r,config:a}=t;const[i,o]=c.useState(null),{frequency:s,measure:l,strategy:u}=a,f=c.useRef(e),h=x(),m=ct(h),g=c.useCallback(function(v){v===void 0&&(v=[]),!m.current&&o(C=>C===null?v:C.concat(v.filter(y=>!C.includes(y))))},[m]),w=c.useRef(null),b=gt(v=>{if(h&&!n)return nr;if(!v||v===nr||f.current!==e||i!=null){const C=new Map;for(let y of e){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){C.set(y.id,y.rect.current);continue}const k=y.node.current,A=k?new wn(l(k),k):null;y.rect.current=A,A&&C.set(y.id,A)}return C}return v},[e,i,n,h,l]);return c.useEffect(()=>{f.current=e},[e]),c.useEffect(()=>{h||g()},[n,h]),c.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),c.useEffect(()=>{h||typeof s!="number"||w.current!==null||(w.current=setTimeout(()=>{g(),w.current=null},s))},[s,h,g,...r]),{droppableRects:b,measureDroppableContainers:g,measuringScheduled:i!=null};function x(){switch(u){case dt.Always:return!1;case dt.BeforeDragging:return n;default:return!n}}}function jr(e,t){return gt(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function gs(e,t){return jr(e,t)}function ms(e){let{callback:t,disabled:n}=e;const r=vn(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Lt(e){let{callback:t,disabled:n}=e;const r=vn(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function vs(e){return new wn(Ve(e),e)}function rr(e,t,n){t===void 0&&(t=vs);const[r,a]=c.useReducer(s,null),i=ms({callback(l){if(e)for(const u of l){const{type:f,target:h}=u;if(f==="childList"&&h instanceof HTMLElement&&h.contains(e)){a();break}}}}),o=Lt({callback:a});return ie(()=>{a(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),r;function s(l){if(!e)return null;if(e.isConnected===!1){var u;return(u=l??n)!=null?u:null}const f=t(e);return JSON.stringify(l)===JSON.stringify(f)?l:f}}function bs(e){const t=jr(e);return Rr(e,t)}const ar=[];function ws(e){const t=c.useRef(e),n=gt(r=>e?r&&r!==ar&&e&&t.current&&e.parentNode===t.current.parentNode?r:jt(e):ar,[e]);return c.useEffect(()=>{t.current=e},[e]),n}function xs(e){const[t,n]=c.useState(null),r=c.useRef(e),a=c.useCallback(i=>{const o=en(i.target);o&&n(s=>s?(s.set(o,un(o)),new Map(s)):null)},[]);return c.useEffect(()=>{const i=r.current;if(e!==i){o(i);const s=e.map(l=>{const u=en(l);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,un(u)]):null}).filter(l=>l!=null);n(s.length?new Map(s):null),r.current=e}return()=>{o(e),o(i)};function o(s){s.forEach(l=>{const u=en(l);u==null||u.removeEventListener("scroll",a)})}},[a,e]),c.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,o)=>Ne(i,o),oe):Ir(e):oe,[e,t])}function ir(e,t){t===void 0&&(t=[]);const n=c.useRef(null);return c.useEffect(()=>{n.current=null},t),c.useEffect(()=>{const r=e!==oe;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?ut(e,n.current):oe}function Cs(e){c.useEffect(()=>{if(!Pt)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function ys(e,t){return c.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:i}=r;return n[a]=o=>{i(o,t)},n},{}),[e,t])}function Nr(e){return c.useMemo(()=>e?Uo(e):null,[e])}const rn=[];function Ds(e,t){t===void 0&&(t=Ve);const[n]=e,r=Nr(n?K(n):null),[a,i]=c.useReducer(s,rn),o=Lt({callback:i});return e.length>0&&a===rn&&i(),ie(()=>{e.length?e.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),i())},[e]),a;function s(){return e.length?e.map(l=>Or(l)?r:new wn(t(l),l)):rn}}function ks(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ht(t)?t:e}function ps(e){let{measure:t}=e;const[n,r]=c.useState(null),a=c.useCallback(u=>{for(const{target:f}of u)if(ht(f)){r(h=>{const m=t(f);return h?{...h,width:m.width,height:m.height}:m});break}},[t]),i=Lt({callback:a}),o=c.useCallback(u=>{const f=ks(u);i==null||i.disconnect(),f&&(i==null||i.observe(f)),r(f?t(f):null)},[t,i]),[s,l]=Rt(o);return c.useMemo(()=>({nodeRef:s,rect:n,setRef:l}),[n,s,l])}const Ss=[{sensor:$t,options:{}},{sensor:Nt,options:{}}],As={current:{}},pt={draggable:{measure:Jn},droppable:{measure:Jn,strategy:dt.WhileDragging,frequency:fn.Optimized},dragOverlay:{measure:Ve}};class lt extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Rs={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new lt,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Tt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:pt,measureDroppableContainers:Tt,windowRect:null,measuringScheduled:!1},Ts={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Tt,draggableNodes:new Map,over:null,measureDroppableContainers:Tt},Bt=c.createContext(Ts),$r=c.createContext(Rs);function Es(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new lt}}}function Ms(e,t){switch(t.type){case V.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case V.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case V.DragEnd:case V.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case V.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new lt(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case V.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new lt(e.droppable.containers);return o.set(n,{...i,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case V.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const i=new lt(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Os(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=c.useContext(Bt),i=ln(r),o=ln(n==null?void 0:n.id);return c.useEffect(()=>{if(!t&&!r&&i&&o!=null){if(!bn(i)||document.activeElement===i.target)return;const s=a.get(o);if(!s)return;const{activatorNode:l,node:u}=s;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const f of[l.current,u.current]){if(!f)continue;const h=So(f);if(h){h.focus();break}}})}},[r,t,a,o,i]),null}function _s(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,i)=>i({transform:a,...r}),n):n}function Is(e){return c.useMemo(()=>({draggable:{...pt.draggable,...e==null?void 0:e.draggable},droppable:{...pt.droppable,...e==null?void 0:e.droppable},dragOverlay:{...pt.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function Ps(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const i=c.useRef(!1),{x:o,y:s}=typeof a=="boolean"?{x:a,y:a}:a;ie(()=>{if(!o&&!s||!t){i.current=!1;return}if(i.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const f=n(u),h=Rr(f,r);if(o||(h.x=0),s||(h.y=0),i.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const m=Tr(u);m&&m.scrollBy({top:h.y,left:h.x})}},[t,o,s,r,n])}const Lr=c.createContext({...oe,scaleX:1,scaleY:1});var ye;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ye||(ye={}));const Br=c.memo(function(t){var n,r,a,i;let{id:o,accessibility:s,autoScroll:l=!0,children:u,sensors:f=Ss,collisionDetection:h=Lo,measuring:m,modifiers:g,...w}=t;const b=c.useReducer(Ms,void 0,Es),[x,v]=b,[C,y]=Oo(),[k,A]=c.useState(ye.Uninitialized),S=k===ye.Initialized,{draggable:{active:p,nodes:R,translate:N},droppable:{containers:L}}=x,I=p?R.get(p):null,D=c.useRef({initial:null,translated:null}),_=c.useMemo(()=>{var z;return p!=null?{id:p,data:(z=I==null?void 0:I.data)!=null?z:As,rect:D}:null},[p,I]),E=c.useRef(null),[$,Y]=c.useState(null),[W,de]=c.useState(null),q=ct(w,Object.values(w)),Q=mt("DndDescribedBy",o),fe=c.useMemo(()=>L.getEnabled(),[L]),G=Is(m),{droppableRects:he,measureDroppableContainers:Se,measuringScheduled:Fe}=hs(fe,{dragging:S,dependencies:[N.x,N.y],config:G.droppable}),ee=ds(R,p),vt=c.useMemo(()=>W?cn(W):null,[W]),ve=ca(),ge=gs(ee,G.draggable.measure);Ps({activeNode:p?R.get(p):null,config:ve.layoutShiftCompensation,initialRect:ge,measure:G.draggable.measure});const j=rr(ee,G.draggable.measure,ge),qe=rr(ee?ee.parentElement:null),se=c.useRef({activatorEvent:null,active:null,activeNode:ee,collisionRect:null,collisions:null,droppableRects:he,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:L,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Te=L.getNodeFor((n=se.current.over)==null?void 0:n.id),me=ps({measure:G.dragOverlay.measure}),Ee=(r=me.nodeRef.current)!=null?r:ee,Me=S?(a=me.rect)!=null?a:j:null,yn=!!(me.nodeRef.current&&me.rect),Dn=bs(yn?null:j),Vt=Nr(Ee?K(Ee):null),be=ws(S?Te??ee:null),bt=Ds(be),wt=_s(g,{transform:{x:N.x-Dn.x,y:N.y-Dn.y,scaleX:1,scaleY:1},activatorEvent:W,active:_,activeNodeRect:j,containerNodeRect:qe,draggingNodeRect:Me,over:se.current.over,overlayNodeRect:me.rect,scrollableAncestors:be,scrollableAncestorRects:bt,windowRect:Vt}),kn=vt?Ne(vt,N):null,pn=xs(be),na=ir(pn),ra=ir(pn,[j]),Oe=Ne(wt,na),_e=Me?Vo(Me,wt):null,ze=_&&_e?h({active:_,collisionRect:_e,droppableRects:he,droppableContainers:fe,pointerCoordinates:kn}):null,Sn=Sr(ze,"id"),[we,An]=c.useState(null),aa=yn?wt:Ne(wt,ra),ia=Bo(aa,(i=we==null?void 0:we.rect)!=null?i:null,j),Rn=c.useCallback((z,J)=>{let{sensor:Z,options:xe}=J;if(E.current==null)return;const te=R.get(E.current);if(!te)return;const re=z.nativeEvent,le=new Z({active:E.current,activeNode:te,event:re,options:xe,context:se,onStart(ae){const Ue=E.current;if(Ue==null)return;const Ye=R.get(Ue);if(!Ye)return;const{onDragStart:xt}=q.current,Ct={active:{id:Ue,data:Ye.data,rect:D}};je.unstable_batchedUpdates(()=>{xt==null||xt(Ct),A(ye.Initializing),v({type:V.DragStart,initialCoordinates:ae,active:Ue}),C({type:"onDragStart",event:Ct})})},onMove(ae){v({type:V.DragMove,coordinates:ae})},onEnd:Ie(V.DragEnd),onCancel:Ie(V.DragCancel)});je.unstable_batchedUpdates(()=>{Y(le),de(z.nativeEvent)});function Ie(ae){return async function(){const{active:Ye,collisions:xt,over:Ct,scrollAdjustedTranslate:En}=se.current;let He=null;if(Ye&&En){const{cancelDrop:Ge}=q.current;He={activatorEvent:re,active:Ye,collisions:xt,delta:En,over:Ct},ae===V.DragEnd&&typeof Ge=="function"&&await Promise.resolve(Ge(He))&&(ae=V.DragCancel)}E.current=null,je.unstable_batchedUpdates(()=>{v({type:ae}),A(ye.Uninitialized),An(null),Y(null),de(null);const Ge=ae===V.DragEnd?"onDragEnd":"onDragCancel";if(He){const Ft=q.current[Ge];Ft==null||Ft(He),C({type:Ge,event:He})}})}}},[R]),oa=c.useCallback((z,J)=>(Z,xe)=>{const te=Z.nativeEvent,re=R.get(xe);if(E.current!==null||!re||te.dndKit||te.defaultPrevented)return;const le={active:re};z(Z,J.options,le)===!0&&(te.dndKit={capturedBy:J.sensor},E.current=xe,Rn(Z,J))},[R,Rn]),Tn=fs(f,oa);Cs(f),ie(()=>{j&&k===ye.Initializing&&A(ye.Initialized)},[j,k]),c.useEffect(()=>{const{onDragMove:z}=q.current,{active:J,activatorEvent:Z,collisions:xe,over:te}=se.current;if(!J||!Z)return;const re={active:J,activatorEvent:Z,collisions:xe,delta:{x:Oe.x,y:Oe.y},over:te};je.unstable_batchedUpdates(()=>{z==null||z(re),C({type:"onDragMove",event:re})})},[Oe.x,Oe.y]),c.useEffect(()=>{const{active:z,activatorEvent:J,collisions:Z,droppableContainers:xe,scrollAdjustedTranslate:te}=se.current;if(!z||E.current==null||!J||!te)return;const{onDragOver:re}=q.current,le=xe.get(Sn),Ie=le&&le.rect.current?{id:le.id,rect:le.rect.current,data:le.data,disabled:le.disabled}:null,ae={active:z,activatorEvent:J,collisions:Z,delta:{x:te.x,y:te.y},over:Ie};je.unstable_batchedUpdates(()=>{An(Ie),re==null||re(ae),C({type:"onDragOver",event:ae})})},[Sn]),ie(()=>{se.current={activatorEvent:W,active:_,activeNode:ee,collisionRect:_e,collisions:ze,droppableRects:he,draggableNodes:R,draggingNode:Ee,draggingNodeRect:Me,droppableContainers:L,over:we,scrollableAncestors:be,scrollAdjustedTranslate:Oe},D.current={initial:Me,translated:_e}},[_,ee,ze,_e,R,Ee,Me,he,L,we,be,Oe]),ls({...ve,delta:N,draggingRect:_e,pointerCoordinates:kn,scrollableAncestors:be,scrollableAncestorRects:bt});const sa=c.useMemo(()=>({active:_,activeNode:ee,activeNodeRect:j,activatorEvent:W,collisions:ze,containerNodeRect:qe,dragOverlay:me,draggableNodes:R,droppableContainers:L,droppableRects:he,over:we,measureDroppableContainers:Se,scrollableAncestors:be,scrollableAncestorRects:bt,measuringConfiguration:G,measuringScheduled:Fe,windowRect:Vt}),[_,ee,j,W,ze,qe,me,R,L,he,we,Se,be,bt,G,Fe,Vt]),la=c.useMemo(()=>({activatorEvent:W,activators:Tn,active:_,activeNodeRect:j,ariaDescribedById:{draggable:Q},dispatch:v,draggableNodes:R,over:we,measureDroppableContainers:Se}),[W,Tn,_,j,v,Q,R,we,Se]);return X.createElement(yr.Provider,{value:y},X.createElement(Bt.Provider,{value:la},X.createElement($r.Provider,{value:sa},X.createElement(Lr.Provider,{value:ia},u)),X.createElement(Os,{disabled:(s==null?void 0:s.restoreFocus)===!1})),X.createElement(Po,{...s,hiddenTextDescribedById:Q}));function ca(){const z=($==null?void 0:$.autoScrollEnabled)===!1,J=typeof l=="object"?l.enabled===!1:l===!1,Z=S&&!z&&!J;return typeof l=="object"?{...l,enabled:Z}:{enabled:Z}}}),js=c.createContext(null),or="button",Ns="Droppable";function $s(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const i=mt(Ns),{activators:o,activatorEvent:s,active:l,activeNodeRect:u,ariaDescribedById:f,draggableNodes:h,over:m}=c.useContext(Bt),{role:g=or,roleDescription:w="draggable",tabIndex:b=0}=a??{},x=(l==null?void 0:l.id)===t,v=c.useContext(x?Lr:js),[C,y]=Rt(),[k,A]=Rt(),S=ys(o,t),p=ct(n);ie(()=>(h.set(t,{id:t,key:i,node:C,activatorNode:k,data:p}),()=>{const N=h.get(t);N&&N.key===i&&h.delete(t)}),[h,t]);const R=c.useMemo(()=>({role:g,tabIndex:b,"aria-disabled":r,"aria-pressed":x&&g===or?!0:void 0,"aria-roledescription":w,"aria-describedby":f.draggable}),[r,g,b,x,w,f.draggable]);return{active:l,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:x,listeners:r?void 0:S,node:C,over:m,setNodeRef:y,setActivatorNodeRef:A,transform:v}}function Ls(){return c.useContext($r)}const Bs="Droppable",Ws={timeout:25};function Vs(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const i=mt(Bs),{active:o,dispatch:s,over:l,measureDroppableContainers:u}=c.useContext(Bt),f=c.useRef({disabled:n}),h=c.useRef(!1),m=c.useRef(null),g=c.useRef(null),{disabled:w,updateMeasurementsFor:b,timeout:x}={...Ws,...a},v=ct(b??r),C=c.useCallback(()=>{if(!h.current){h.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(v.current)?v.current:[v.current]),g.current=null},x)},[x]),y=Lt({callback:C,disabled:w||!o}),k=c.useCallback((R,N)=>{y&&(N&&(y.unobserve(N),h.current=!1),R&&y.observe(R))},[y]),[A,S]=Rt(k),p=ct(t);return c.useEffect(()=>{!y||!A.current||(y.disconnect(),h.current=!1,y.observe(A.current))},[A,y]),ie(()=>(s({type:V.RegisterDroppable,element:{id:r,key:i,disabled:n,node:A,rect:m,data:p}}),()=>s({type:V.UnregisterDroppable,key:i,id:r})),[r]),c.useEffect(()=>{n!==f.current.disabled&&(s({type:V.SetDroppableDisabled,id:r,key:i,disabled:n}),f.current.disabled=n)},[r,i,n,s]),{active:o,rect:m,isOver:(l==null?void 0:l.id)===r,node:A,over:l,setNodeRef:S}}function Fs(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const qs=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:Fs(r,n,t)},Wr=e=>{let{transform:t}=e;return{...t,x:0}};function Wt(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function zs(e,t){return e.reduce((n,r,a)=>{const i=t.get(r);return i&&(n[a]=i),n},Array(e.length))}function yt(e){return e!==null&&e>=0}function Us(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ys(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Vr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const i=Wt(t,r,n),o=t[a],s=i[a];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Dt={scaleX:1,scaleY:1},Fr=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:i,overIndex:o}=e;const s=(t=i[n])!=null?t:r;if(!s)return null;if(a===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(s.top+s.height):u.top-s.top,...Dt}:null}const l=Hs(i,a,n);return a>n&&a<=o?{x:0,y:-s.height-l,...Dt}:a<n&&a>=o?{x:0,y:s.height+l,...Dt}:{x:0,y:0,...Dt}};function Hs(e,t,n){const r=e[t],a=e[t-1],i=e[t+1];return r?n<t?a?r.top-(a.top+a.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const qr="Sortable",zr=X.createContext({activeIndex:-1,containerId:qr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Vr,disabled:{draggable:!1,droppable:!1}});function Ur(e){let{children:t,id:n,items:r,strategy:a=Vr,disabled:i=!1}=e;const{active:o,dragOverlay:s,droppableRects:l,over:u,measureDroppableContainers:f}=Ls(),h=mt(qr,n),m=s.rect!==null,g=c.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),w=o!=null,b=o?g.indexOf(o.id):-1,x=u?g.indexOf(u.id):-1,v=c.useRef(g),C=!Us(g,v.current),y=x!==-1&&b===-1||C,k=Ys(i);ie(()=>{C&&w&&f(g)},[C,g,w,f]),c.useEffect(()=>{v.current=g},[g]);const A=c.useMemo(()=>({activeIndex:b,containerId:h,disabled:k,disableTransforms:y,items:g,overIndex:x,useDragOverlay:m,sortedRects:zs(g,l),strategy:a}),[b,h,k.draggable,k.droppable,y,g,x,l,m,a]);return X.createElement(zr.Provider,{value:A},t)}const Gs=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Wt(n,r,a).indexOf(t)},Xs=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:i,newIndex:o,previousItems:s,previousContainerId:l,transition:u}=e;return!u||!r||s!==i&&a===o?!1:n?!0:o!==a&&t===l},Ks={duration:200,easing:"ease"},Yr="transform",Qs=$e.Transition.toString({property:Yr,duration:0,easing:"linear"}),Js={roleDescription:"sortable"};function Zs(e){let{disabled:t,index:n,node:r,rect:a}=e;const[i,o]=c.useState(null),s=c.useRef(n);return ie(()=>{if(!t&&n!==s.current&&r.current){const l=a.current;if(l){const u=Ve(r.current,{ignoreTransform:!0}),f={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(f.x||f.y)&&o(f)}}n!==s.current&&(s.current=n)},[t,n,r,a]),c.useEffect(()=>{i&&o(null)},[i]),i}function Hr(e){let{animateLayoutChanges:t=Xs,attributes:n,disabled:r,data:a,getNewIndex:i=Gs,id:o,strategy:s,resizeObserverConfig:l,transition:u=Ks}=e;const{items:f,containerId:h,activeIndex:m,disabled:g,disableTransforms:w,sortedRects:b,overIndex:x,useDragOverlay:v,strategy:C}=c.useContext(zr),y=el(r,g),k=f.indexOf(o),A=c.useMemo(()=>({sortable:{containerId:h,index:k,items:f},...a}),[h,a,k,f]),S=c.useMemo(()=>f.slice(f.indexOf(o)),[f,o]),{rect:p,node:R,isOver:N,setNodeRef:L}=Vs({id:o,data:A,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...l}}),{active:I,activatorEvent:D,activeNodeRect:_,attributes:E,setNodeRef:$,listeners:Y,isDragging:W,over:de,setActivatorNodeRef:q,transform:Q}=$s({id:o,data:A,attributes:{...Js,...n},disabled:y.draggable}),fe=yo(L,$),G=!!I,he=G&&!w&&yt(m)&&yt(x),Se=!v&&W,Fe=Se&&he?Q:null,vt=he?Fe??(s??C)({rects:b,activeNodeRect:_,activeIndex:m,overIndex:x,index:k}):null,ve=yt(m)&&yt(x)?i({id:o,items:f,activeIndex:m,overIndex:x}):k,ge=I==null?void 0:I.id,j=c.useRef({activeId:ge,items:f,newIndex:ve,containerId:h}),qe=f!==j.current.items,se=t({active:I,containerId:h,isDragging:W,isSorting:G,id:o,index:k,items:f,newIndex:j.current.newIndex,previousItems:j.current.items,previousContainerId:j.current.containerId,transition:u,wasDragging:j.current.activeId!=null}),Te=Zs({disabled:!se,index:k,node:R,rect:p});return c.useEffect(()=>{G&&j.current.newIndex!==ve&&(j.current.newIndex=ve),h!==j.current.containerId&&(j.current.containerId=h),f!==j.current.items&&(j.current.items=f)},[G,ve,h,f]),c.useEffect(()=>{if(ge===j.current.activeId)return;if(ge&&!j.current.activeId){j.current.activeId=ge;return}const Ee=setTimeout(()=>{j.current.activeId=ge},50);return()=>clearTimeout(Ee)},[ge]),{active:I,activeIndex:m,attributes:E,data:A,rect:p,index:k,newIndex:ve,items:f,isOver:N,isSorting:G,isDragging:W,listeners:Y,node:R,overIndex:x,over:de,setNodeRef:fe,setActivatorNodeRef:q,setDroppableNodeRef:L,setDraggableNodeRef:$,transform:Te??vt,transition:me()};function me(){if(Te||qe&&j.current.newIndex===k)return Qs;if(!(Se&&!bn(D)||!u)&&(G||se))return $e.Transition.toString({...u,property:Yr})}}function el(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function Ot(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const tl=[M.Down,M.Right,M.Up,M.Left],Gr=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:i,over:o,scrollableAncestors:s}}=t;if(tl.includes(e.code)){if(e.preventDefault(),!n||!r)return;const l=[];i.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const m=a.get(h.id);if(m)switch(e.code){case M.Down:r.top<m.top&&l.push(h);break;case M.Up:r.top>m.top&&l.push(h);break;case M.Left:r.left>m.left&&l.push(h);break;case M.Right:r.left<m.left&&l.push(h);break}});const u=No({active:n,collisionRect:r,droppableRects:a,droppableContainers:l,pointerCoordinates:null});let f=Sr(u,"id");if(f===(o==null?void 0:o.id)&&u.length>1&&(f=u[1].id),f!=null){const h=i.get(n.id),m=i.get(f),g=m?a.get(m.id):null,w=m==null?void 0:m.node.current;if(w&&g&&h&&m){const x=jt(w).some((S,p)=>s[p]!==S),v=Xr(h,m),C=nl(h,m),y=x||!v?{x:0,y:0}:{x:C?r.width-g.width:0,y:C?r.height-g.height:0},k={x:g.left,y:g.top};return y.x&&y.y?k:ut(k,y)}}}};function Xr(e,t){return!Ot(e)||!Ot(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function nl(e,t){return!Ot(e)||!Ot(t)||!Xr(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var et={},sr;function rl(){if(sr)return et;sr=1;var e=ke();Object.defineProperty(et,"__esModule",{value:!0}),et.default=void 0;var t=e(pe()),n=De();return et.default=(0,t.default)((0,n.jsx)("path",{d:"M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z"}),"SwitchLeft"),et}var al=rl();const il=ce(al);var tt={},lr;function ol(){if(lr)return tt;lr=1;var e=ke();Object.defineProperty(tt,"__esModule",{value:!0}),tt.default=void 0;var t=e(pe()),n=De();return tt.default=(0,t.default)((0,n.jsx)("path",{d:"M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z"}),"SwitchRight"),tt}var sl=ol();const ll=ce(sl);function cl(e){const t=e.bulkActions.map(n=>{const{name:r,show:a,onClick:i,onAllClick:o,...s}=n;return{...s,attrs:{"data-mosaic-id":`action_bulk_${r}`},onClick:function(){if(e.checkedAllPages===!0)o&&o();else{const l=e.data.filter((u,f)=>{var h;return((h=e.checked)==null?void 0:h[f])===!0});i&&i({data:l})}}}});return d.jsx(ft,{buttons:t})}const Kr=c.memo(cl),ul=O.div`
	text-align: center;
	font-weight: normal;
	color: ${T.newColors.grey3[100]};
	border-bottom: ${T.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
`;function dl(e){return d.jsxs(ul,{"data-testid":B.DATA_VIEW_BULK_ALL,children:[d.jsxs("span",{className:"bulkText",children:[e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.count})," ","records are selected."]}),!e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.rowCount})," ","records on this page are selected."]})]}),d.jsx(U,{color:"blue",variant:"text",label:e.checkedAllPages?"Clear Selection":`Select All ${e.count} Records`,onClick:e.onCheckAllPagesClick})]})}const Qr=c.memo(dl),fl=O.thead`
	text-align: left;

	.row-header {
		th:first-child {
			padding-left: 16px;
		}

		th:last-child {
			padding-right: 16px;
		}
	}
`,nt=O.th`
	background-color: ${T.newColors.grey2[100]};
	color: ${T.newColors.almostBlack[100]};
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
		color: ${T.newColors.almostBlack[100]};
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
		color: ${T.newColors.grey3[100]};
	}

	&.bulk {
		width: 52px;
	}
`;function hl(e){return e==="asc"?"desc":"asc"}function gl(e){var r,a,i;const{t}=Le(),n=(((r=e.bulkActions)==null?void 0:r.length)>0?1:0)+1+e.columns.length;return d.jsxs(fl,{children:[d.jsxs("tr",{className:"row-header",children:[e.onReorder&&d.jsx(nt,{className:"bulk"},"_draggable"),e.onCheckAllClick&&d.jsx(nt,{className:"bulk",colSpan:((a=e.bulkActions)==null?void 0:a.length)<=0&&e.anyChecked?e.columns.length+2:1,children:d.jsx(_t,{checked:e.allChecked,indeterminate:!e.allChecked&&e.anyChecked,onClick:e.onCheckAllClick,disabled:e.disabled})},"_bulk"),((i=e.bulkActions)==null?void 0:i.length)>0&&e.anyChecked&&d.jsx(nt,{colSpan:e.columns.length+1,children:d.jsx(Kr,{data:e.data,checked:e.checked,checkedAllPages:e.checkedAllPages,bulkActions:e.bulkActions})},"_bulk_actions"),!e.anyChecked&&e.hasActions&&d.jsx(nt,{children:d.jsx("span",{className:"columnHeader",children:t("mosaic:DataView.actions")})},"_actions"),!e.anyChecked&&e.columns.map(o=>{let s,l,u;return o.sortable&&(s=e.sort.name===o.name,l=s&&e.sort.dir==="desc"?il:ll,u=function(){e.onSortChange({name:o.name,dir:s?hl(e.sort.dir):"asc"})}),d.jsx(nt,{className:`
									${o.sortable?"sortable":""}
									${s?"active":""}
								`,children:d.jsxs("span",{className:"columnHeader",onClick:u,"data-testid":B.DATA_VIEW_TH_INNER,children:[o.label,o.sortable&&d.jsx(l,{className:"icon"})]})},o.name)})]}),e.showBulkAll&&d.jsx("tr",{children:d.jsx("th",{colSpan:n,children:d.jsx(Qr,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})})})]})}var rt={},cr;function ml(){if(cr)return rt;cr=1;var e=ke();Object.defineProperty(rt,"__esModule",{value:!0}),rt.default=void 0;var t=e(pe()),n=De();return rt.default=(0,t.default)((0,n.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"DragIndicator"),rt}var vl=ml();const Jr=ce(vl),bl=O.td`
	height: 40px;
	vertical-align: middle;

	${""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	& > div {
		color: ${T.newColors.almostBlack[100]};
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
`;function wl({ariaLabel:e,expandCell:t=!1,style:n,...r}){const{bold:a=!1,italic:i=!1,strikeThrough:o=!1,noWrap:s=!1,ellipsis:l=!1,...u}=n||{};return d.jsx(bl,{className:`
				${t?"expandCell":""}
				${a?"bold":""}
				${i?"italic":""}
				${o?"strikeThrough":""}
			`,"aria-label":e,style:u,...r,children:d.jsx("div",{className:`
					${s?"noWrap":""}
					${l?"ellipsis":""}
				`,title:l&&typeof r.children=="string"?r.children:void 0,"data-testid":B.DATA_VIEW_TD_INNER,children:r.children})})}const kt=c.memo(wl),xl=O(ft)`
    ${({$hidden:e})=>e&&`
        visibility: hidden;
    `}
`;function Cl(e){const t=c.useMemo(()=>({row:e.originalRowData}),[e.originalRowData]),n=c.useMemo(()=>e.primaryActions||[],[e.primaryActions]),r=sn(n,t,"show"),a=c.useMemo(()=>e.additionalActions||[],[e.additionalActions]),i=sn(a,t,"show"),o=c.useMemo(()=>r.map(u=>{const{name:f,show:h,onClick:m,...g}=u,w=()=>{m({data:e.originalRowData})},b=[g.disabled,e.disabled,e.actionsHidden].some(x=>x);return c.createElement(U,{...g,disabled:b,key:`primary_${f}`,attrs:{"data-mosaic-id":`action_primary_${f}`},onClick:w})}),[r,e.originalRowData,e.disabled,e.actionsHidden]),s=c.useMemo(()=>{if(!i.length)return[];const u=[e.disabled,e.actionsHidden].some(f=>f);return[d.jsx(U,{color:"black",variant:"icon",mIcon:e.activeDisplay&&Pa,attrs:{"data-mosaic-id":"additional_actions_dropdown"},tooltip:"More actions",disabled:u,menuItems:i.map(f=>{const{name:h,show:m,onClick:g,...w}=f;return{...w,attrs:{"data-mosaic-id":`action_additional_${h}`},onClick:()=>{g({data:e.originalRowData})}}})},"additional")]},[i,e.originalRowData,e.disabled,e.actionsHidden]),l=c.useMemo(()=>[...o,...s],[o,s]);return d.jsx(xl,{$hidden:e.actionsHidden,children:l})}const Zr=c.memo(Cl),yl=O.tr`
	${({$isDragOverlay:e})=>e&&`
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	&.checked {
		background-color: ${T.newColors.grey1[100]};
	}
`,Dl=O(Oa)`
	&&{
		cursor: grab;
	}
`,Cn=c.forwardRef(({checked:e,onReorder:t,disabled:n,onCheckboxClick:r,hasActions:a,primaryActions:i,additionalActions:o,actionsHidden:s,originalRowData:l,columns:u,row:f,isDragOverlay:h,style:m,...g},w)=>d.jsxs(yl,{style:m,className:e&&"checked",ref:w,$isDragOverlay:h,children:[t&&d.jsx(kt,{"data-testid":B.DATA_VIEW_CELL_DRAG,children:d.jsx(U,{disabled:n,color:"black",variant:"icon",mIcon:Jr,muiAttrs:{...g},component:Dl})},"_draggable"),r&&d.jsx(kt,{"data-testid":B.DATA_VIEW_CELL_CHECK,children:d.jsx(_t,{checked:e===!0,onClick:r,disabled:n})},"_bulk"),a&&d.jsx(kt,{children:d.jsx(Zr,{primaryActions:i,additionalActions:o,actionsHidden:s,disabled:n,originalRowData:l,activeDisplay:"list"})}),u.map(b=>d.jsx(kt,{ariaLabel:b.label,expandCell:!0,style:b.style,children:f[b.name]},b.name))]}));Cn.displayName="DataViewTrStatic";function kl(e){const{attributes:t,listeners:n,setNodeRef:r,transform:a,transition:i,isDragging:o}=Hr({id:e.originalRowData.id}),s={transform:$e.Translate.toString(a),transition:i};return d.jsx(Cn,{...e,...t,...n,ref:r,style:s,isDragOverlay:o})}function pl(e){return e.onReorder?d.jsx(kl,{...e}):d.jsx(Cn,{...e})}const Sl=O.tbody`
	& > tr {
		border-bottom: 1px solid ${T.newColors.grey2[100]};

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
`,ea=c.forwardRef((e,t)=>d.jsx(Sl,{ref:t,"data-testid":B.DATA_VIEW_TBODY,children:e.transformedData.map((n,r)=>{var a,i,o,s;return d.jsx(pl,{row:n,originalRowData:e.data[r],primaryActions:(i=(a=e.rowActions)==null?void 0:a[n.id])==null?void 0:i.primary,additionalActions:(s=(o=e.rowActions)==null?void 0:o[n.id])==null?void 0:s.additional,actionsHidden:e.actionsHidden,disabled:e.disabled,onCheckboxClick:e.onCheckboxClick?()=>e.onCheckboxClick(r):void 0,checked:e.checked?e.checked[r]:!1,columns:e.columns,onReorder:e.onReorder,hasActions:e.hasActions},n.id)})}));ea.displayName="DataViewTBody";const Al=c.memo(ea);function Rl(e,t){let n=e[t.column||t.name];if(n!==void 0&&t.transforms!==void 0)for(const r of t.transforms)n!==void 0&&(n=r({data:n,row:e}));return n}function ta(e,t){return e.map(r=>{const a={...r};return t.forEach(i=>{a[i.name]=Rl(r,i)}),a})}function Tl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}function El(e){return e.reduce((t,n)=>t+n,0)}const Ml=O.table`
	width: 100%;
	border-collapse: collapse;
`;function Ol(e){const t=c.useRef(),{rowActions:n}=e,r=c.useMemo(()=>ta(e.data,e.activeColumnObjs),[e.data,e.activeColumnObjs]),a=El(Object.entries(n).map(([,{primary:l,additional:u}])=>l.length+u.length))>0,i=Dr(Et($t),Et(Nt,{coordinateGetter:Gr}));function o(l){const{active:u,over:f}=l;if(u.id!==f.id){const h=e.data.map(({id:m})=>String(m));e.onReorder(Wt(h,h.indexOf(u.id),h.indexOf(f.id)))}}const s=c.useCallback(({draggingNodeRect:l,transform:u})=>{if(!l||!t.current)return u;const f=t.current.getBoundingClientRect();return f?Tl(u,l,f):u},[]);return d.jsx(Br,{sensors:i,collisionDetection:Ar,onDragEnd:o,autoScroll:{layoutShiftCompensation:!1},modifiers:[Wr,s],children:d.jsx(Ur,{items:r.map(l=>l.id),strategy:Fr,children:d.jsxs(Ml,{"data-testid":B.DATA_VIEW_DISPLAY_LIST,children:[d.jsx(gl,{checked:e.checked,checkedAllPages:e.checkedAllPages,columns:e.activeColumnObjs,allColumns:e.columns,data:e.data,bulkActions:e.bulkActions,sort:e.sort,count:e.count,rowCount:e.rowCount,onSortChange:e.onSortChange,onCheckAllClick:e.onCheckAllClick,onCheckAllPagesClick:e.onCheckAllPagesClick,onColumnsChange:e.onColumnsChange,onReorder:e==null?void 0:e.onReorder,allChecked:e.allChecked,anyChecked:e.anyChecked,showBulkAll:e.showBulkAll,hasActions:a,disabled:e.disabled}),d.jsx(Al,{checked:e.checked,columns:e.activeColumnObjs,data:e.data,hasActions:a,transformedData:r,bulkActions:e.bulkActions,actionsHidden:e.actionsHidden,disabled:e.disabled,rowActions:n,onCheckboxClick:e.onCheckboxClick,onReorder:e.onReorder,ref:t})]})})})}const _l=hn.topComponent.bigScreenView+"px",Il=hn.topComponent.responsiveView+"px",Pl=hn.mobile+"px",jl=O.div`
	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 24px;

		@media (min-width: ${Pl}) {
			grid-template-columns: repeat(2, 1fr);
		};

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		};

		@media (min-width: ${Il}) {
			grid-template-columns: repeat(4, 1fr);
		};

		@media (min-width: 1296px) {
			grid-template-columns: repeat(5, 1fr);
		};

		@media (min-width: ${_l}) {
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
		color: ${T.newColors.almostBlack[100]};
		margin: 8px 0 8px 0;
		max-width: 161px;
		font-size: 13px;
		font-weight: ${T.fontWeight.semiBold};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .grid > .cell h3 {
		margin: 0;
		font-weight: ${T.fontWeight.normal};
		font-size: 12px;
		color: ${T.newColors.almostBlack[100]};
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
		background: ${T.newColors.grey2[100]};
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
		background-color: ${T.newColors.almostBlack[100]};
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
`;function Nl(e){if(!e.gridColumnsMap)throw new Error("You must specify gridColumnsMap in order to use the grid view.");const t=c.useMemo(()=>ta(e.data,e.columns),[e.data,e.columns]),n=r=>()=>{e.onCheckboxClick(r)};return d.jsxs(jl,{"data-testid":B.DATA_VIEW_DISPLAY_GRID,children:[e.showBulkAll&&d.jsx("div",{className:"topRowBulkAll",children:d.jsx(Qr,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})}),d.jsx("div",{className:"grid",children:t.map((r,a)=>{var l,u,f,h,m,g;const i=r[e.gridColumnsMap.image],o=r[e.gridColumnsMap.primary],s=r[e.gridColumnsMap.secondary];return d.jsxs("div",{className:`
									cell
									${(l=e.checked)!=null&&l[a]?"checked":""}
								`,"data-testid":B.DATA_VIEW_GRID_ITEM,children:[i&&d.jsxs("div",{className:"image",children:[e.onCheckboxClick&&d.jsx("div",{className:`checkboxContainer ${e.anyChecked&&!((u=e.checked)!=null&&u[a])?"anyChecked":""}`,"data-testid":B.DATA_VIEW_GRID_ITEM_CHECK,children:d.jsx(_t,{className:"checkbox",checked:e.checked[a],onClick:n(a)})}),d.jsxs("div",{className:"imageContainer",children:[d.jsx("div",{className:"overlay"}),i]})]}),d.jsxs("div",{className:"info",children:[d.jsxs("div",{className:"left",children:[o&&d.jsx(_n,{tag:"h2",children:o}),s&&d.jsx(_n,{tag:"h3",children:s})]}),d.jsx("div",{className:"right",children:d.jsx(Zr,{primaryActions:(h=(f=e.rowActions)==null?void 0:f[r.id])==null?void 0:h.primary,additionalActions:(g=(m=e.rowActions)==null?void 0:m[r.id])==null?void 0:g.additional,actionsHidden:e.actionsHidden,originalRowData:r,activeDisplay:"grid",disabled:e.disabled})})]})]},a)})})]})}const $l={name:"list",label:"List",component:Ol,mIcon:Co},Ll={name:"grid",label:"Grid",component:Nl,mIcon:bo},Bl=O.div`
	font-family: ${T.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`,Wl=O(ja)`
	z-index: 1100;

	${({$anchorStyle:e,$display:t})=>e&&`
		.MuiDrawer-paper {
			background: white;
			transition: transform 255ms ease-in-out !important;

			${e.currentStyle==="left"&&e.previousStyle==="right"&&`
				transform: translateX(-25vw) !important;
			`}
			${e.currentStyle==="left"&&e.previousStyle==="left"&&t&&`
				transform: translateX(-25vw) !important;
			`}
			${e.currentStyle==="left"&&e.previousStyle==="left"&&!t&&`
				transform: translateX(-100vw) !important;
			`}
		}
	`}
`,Vl={backdrop:{"data-testid":B.DRAWER_BACKDROP}},Fl=e=>{const{open:t,onClose:n,children:r,idx:a,anchor:i="right",display:o,anchorstyle:s,exitCB:l,backdropCloseHandler:u=!0}=e,f=c.useRef();c.useEffect(()=>{f.current=s},[s]);const[h,m]=c.useState({open:!1});c.useEffect(()=>{t===!0&&m({...h,open:!0})},[t]);const g=function(){m({...h,open:!1}),l&&l()},w=(b,x)=>{!u&&x==="backdropClick"||n()};return d.jsx(d.Fragment,{children:d.jsx(Wl,{$anchorStyle:{currentStyle:s,previousStyle:f.current},anchor:i,$display:o,open:t,onClose:w,SlideProps:{onExited:g},slotProps:Vl,children:h.open&&d.jsx(Bl,{children:r})},a)})},ur=O.h2`
  color: ${T.newColors.almostBlack[100]};
  font-size: 20px;
  font-weight: ${T.fontWeight.normal};
  line-height: 24px;
  margin: 0px;
`,ql=O.div`
  display: flex;
  margin-top: 30px;

  & > .left {
    border-right: 2px solid ${T.newColors.grey2[100]};
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
`,zl=O.div`
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
	border-bottom: 1px solid ${T.newColors.grey2[100]};
  	display: flex;
  	padding: 20px 0 20px 0;

	span {
		margin-left: 16px;
		color: ${T.newColors.almostBlack[100]};
		font-weight: ${T.fontWeight.normal};
	}

	.MuiSvgIcon-root {
		color: ${T.newColors.grey3[100]};
	}
`;function Ul({name:e,allColumns:t}){const n=t.find(f=>f.name===e);if(!n)throw new Error(`Column "${e}" not found in column list: ${t.map(({name:f})=>f).join(", ")}`);const{attributes:r,listeners:a,setNodeRef:i,transform:o,transition:s,isDragging:l}=Hr({id:n.name}),u={transform:$e.Translate.toString(o),transition:s};return d.jsxs(zl,{...r,...a,ref:i,style:u,$isDragging:l,children:[d.jsx(Jr,{}),d.jsx("span",{children:n.label})]})}function Yl({activeColumns:e,allColumns:t,onReorder:n}){const r=Dr(Et($t),Et(Nt,{coordinateGetter:Gr}));function a(i){const{active:o,over:s}=i;o.id!==s.id&&n(Wt(e,e.indexOf(o.id),e.indexOf(s.id)))}return d.jsx("div",{children:d.jsx(Br,{sensors:r,collisionDetection:Ar,onDragEnd:a,autoScroll:{layoutShiftCompensation:!1},modifiers:[Wr,qs],children:d.jsx(Ur,{items:e,strategy:Fr,children:e.map(i=>d.jsx(Ul,{name:i,allColumns:t},i))})})})}function Hl(e){const[t,n]=c.useState({activeColumns:e.columns.map(l=>l.name),checkedOptions:e.columns.map(l=>({label:l.label,value:l.name}))}),{t:r}=Le(),a=function(){e.onClose(),e.onChange(t.activeColumns)},i=function(l){n({...t,activeColumns:l.map(u=>u.value),checkedOptions:l})},o=e.allColumns.map(l=>({label:l.label,value:l.name})).sort((l,u)=>l.label.localeCompare(u.label)),s=[{label:r("mosaic:common.cancel"),color:"gray",variant:"outlined",onClick:e.onClose},{label:r("mosaic:common.apply"),onClick:a,color:"yellow",variant:"contained"}];return d.jsxs("div",{children:[d.jsx(Ba,{title:r("mosaic:DataView.table_settings"),buttons:s,onBack:e.onClose,backLabel:r("mosaic:DataView.cancel_table_settings")}),d.jsxs(ql,{children:[d.jsxs("div",{className:"left",children:[d.jsx(ur,{children:r("mosaic:DataView.columns")}),d.jsx(La,{options:o,checked:t.checkedOptions,onChange:i})]}),d.jsxs("div",{className:"right",children:[d.jsx(ur,{children:r("mosaic:DataView.column_order")}),d.jsx(Yl,{activeColumns:t.activeColumns,onReorder:l=>n({...t,activeColumns:l}),allColumns:e.allColumns})]})]})]})}function Gl(e){return d.jsx(Fl,{open:e.open,onClose:e.onClose,children:d.jsx(Hl,{columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:e.onClose})})}function Xl(e){const[t,n]=c.useState({open:!1}),{t:r}=Le(),a=function(){n({...t,open:!t.open})};return d.jsxs("div",{children:[d.jsx(U,{color:"black",label:r("mosaic:DataView.columns"),variant:"text",mIcon:Na,onClick:a,size:"small",iconPosition:"left",tooltip:"Update columns and their order"}),e.onChange!==void 0&&d.jsx(Gl,{open:t.open,columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:a})]})}const Kl=O.span`
	& .normalButton > button {
		color: ${T.newColors.grey3[100]};
	}

	& .labelIcon {
		font-size: ${T.iconFontSize};
	}
`,Ql={"data-testid":B.DATA_VIEW_DISPLAY_CONTROL};function Jl(e){const n=e.displayOptions.find(a=>a.name===e.display).mIcon,r=e.displayOptions.map(a=>({value:a.name,label:a.label,mIcon:a.mIcon}));return d.jsx(Kl,{children:d.jsx(U,{variant:"icon",color:"black",mIcon:n,iconPosition:"right",size:"small",menuItems:r,menuValue:e.display,menuOnChange:e.onDisplayChange,attrs:Ql})})}const Zl=c.memo(Jl),ec=O(U)`
	button {
		font-weight: 400;
	}
`,tc={"data-testid":B.DATA_VIEW_LIMIT_CONTROL};function nc(e){const t=c.useCallback(r=>{e.onLimitChange({limit:Number(r)})},[e.onLimitChange]),n=c.useMemo(function(){return e.options.map(r=>({label:r.toString(),value:r.toString()}))},[e.options]);return d.jsx(ec,{color:"black",label:String(e.limit),variant:"text",size:"small",iconPosition:"right",mIcon:an,mIconColor:T.newColors.almostBlack[100],menuItems:n,menuOnChange:t,menuValue:e.limit.toString(),attrs:tc})}const rc=c.memo(nc),ac=O.div`
	font-size: 14px;
	display: inline-flex;
	align-items: center;

	& > input {
		width: 40px;
		margin: 0px 8px;
	}

	&.invalid > input {
		outline: ${T.newColors.darkRed[100]} auto 1px;
	}

	& > .goButton {
		margin-left: 8px;
	}
`;function ic(e){const t=c.useContext(_a),[n,r]=c.useState({currentPage:e.currentPage,invalid:!1}),a=function(s){const l=Number(s.currentTarget.value),u=!Number.isInteger(l)||l<=0||l>e.totalPages;r({...n,invalid:u,currentPage:s.currentTarget.value})},i=()=>{n.invalid!==!0&&(t.onClose(),e.onSkipChange({skip:(n.currentPage-1)*e.limit}))},o=s=>{if(s.key==="Enter")return i()};return d.jsxs(ac,{className:`
				${n.invalid?"invalid":""}
			`,children:[d.jsx("span",{children:"Page"}),d.jsx("input",{type:"text",onKeyDown:o,onChange:a,autoFocus:!0}),d.jsxs("span",{children:["of"," ",e.totalPages]}),d.jsx(U,{className:"goButton",color:"blue",variant:"contained",size:"small",onClick:i,label:"Go"})]})}const oc=c.memo(ic),sc=O.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText {
		line-height: 100%;
	}

	span.button:first-child {
		padding-right: 4px;
	}
`,dr=O(U)`
	svg {
		color: ${e=>e.disabled?T.newColors.simplyGrey[100]:T.newColors.grey3[100]};
	}
`,lc=O.span`
	font-weight: 400;
`,cc={"aria-label":"Previous Page"},uc={"aria-label":"Next Page"};function dc(e){const{t}=Le(),n=Math.ceil(e.count/e.limit),r=(e.skip+e.limit)/e.limit,a=e.skip+1,i=Math.min(e.skip+e.limit,e.count),o=u=>()=>{e.onSkipChange({skip:u})},s=r===1,l=r===n;return n===0?null:d.jsxs(sc,{"data-testid":B.DATA_VIEW_PAGER,children:[d.jsx(U,{color:"black",variant:"text",size:"small",tooltip:t("mosaic:DataView.jump_to_page"),label:d.jsxs("span",{children:[a,"-",i," ",d.jsx(lc,{children:"of"})," ",e.count]}),popover:d.jsx(oc,{currentPage:r,totalPages:n,limit:e.limit,onSkipChange:e.onSkipChange})}),d.jsx(dr,{color:"gray",variant:"icon",size:"small",mIcon:Ta,onClick:o(e.skip-e.limit),disabled:s,muiAttrs:cc}),d.jsx(dr,{color:"gray",variant:"icon",size:"small",mIcon:$a,onClick:o(e.skip+e.limit),disabled:l,muiAttrs:uc})]})}const fc=c.memo(dc),hc=O.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`,gc=O.div`
	display: flex;

	.custom-checkbox {
		margin-right: 4px;
	}
`;var at={},fr;function mc(){if(fr)return at;fr=1;var e=ke();Object.defineProperty(at,"__esModule",{value:!0}),at.default=void 0;var t=e(pe()),n=De();return at.default=(0,t.default)((0,n.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward"),at}var vc=mc();const bc=ce(vc);var it={},hr;function wc(){if(hr)return it;hr=1;var e=ke();Object.defineProperty(it,"__esModule",{value:!0}),it.default=void 0;var t=e(pe()),n=De();return it.default=(0,t.default)((0,n.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward"),it}var xc=wc();const Cc=ce(xc),yc=O.div`
	${""}
	& > .directionButton svg { font-size: 20px; }
`,Dc={"aria-label":"Sort Direction"};function kc(e){const t=c.useMemo(()=>e.columns.filter(s=>s.sortable===!0),[e.columns]),n=c.useMemo(()=>t.map(s=>({label:s.label,value:s.name})),[t]),r=n.find(s=>s.value===e.sort.name),a=c.useMemo(()=>function(){return e.sort.dir==="asc"?d.jsx(Cc,{"data-testid":B.DATA_VIEW_SORT_ASC}):d.jsx(bc,{"data-testid":B.DATA_VIEW_SORT_DESC})},[e.sort.dir]),i=c.useCallback(function(s){e.onSortChange({name:s,dir:e.sort.dir})},[e.sort,e.onSortChange]),o=c.useCallback(function(){const s=e.sort.dir==="asc"?"desc":"asc";e.onSortChange({name:e.sort.name,dir:s})},[e.sort,e.onSortChange]);return d.jsxs(yc,{children:[d.jsx(U,{label:r.label,variant:"text",color:"black",size:"small",menuItems:n,menuOnChange:i,menuValue:e.sort.name}),d.jsx(U,{className:"directionButton",variant:"icon",color:"black",size:"small",mIcon:a,onClick:o,muiAttrs:Dc})]})}const pc=c.memo(kc),Sc=e=>{const{bulkActions:t,columns:n,checked:r,display:a,displayControlEnabled:i,displayOptionsFull:o,limit:s,limitOptions:l,onLimitChange:u,onDisplayChange:f,onSkipChange:h,skip:m,count:g,onColumnsChange:w,activeColumnObjs:b,allColumns:x,onCheckAllClick:v,onSortChange:C,sort:y,allChecked:k,anyChecked:A}=e,S=c.useMemo(()=>l||[25,50,100],[l]),p=C!==void 0&&y!==void 0;return d.jsxs(hc,{className:`${a}`,"data-testid":B.DATA_VIEW_ACTIONS_ROW,children:[a==="grid"&&d.jsxs(gc,{children:[v&&d.jsx(_t,{checked:k,indeterminate:!k&&A,onClick:v,disabled:e.disabled}),A&&d.jsx(Kr,{data:e.data,checked:r,bulkActions:t,checkedAllPages:e.checkedAllPages})]}),w!==void 0&&a==="list"&&d.jsx(Xl,{onChange:w,columns:b,allColumns:x}),d.jsxs(ft,{separator:!0,children:[p&&a==="grid"&&d.jsx(pc,{columns:n,sort:y,onSortChange:C}),i&&d.jsx(Zl,{display:a,displayOptions:o,onDisplayChange:f}),u!==void 0&&s!==void 0&&d.jsx(rc,{limit:s,options:S,onLimitChange:u}),h!==void 0&&m!==void 0&&s!==void 0&&g!==void 0&&d.jsx(fc,{limit:s,skip:m,count:g,onSkipChange:h})]})]})},Ac=O.div`
	font-family: ${T.fontFamily};
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
		border-bottom: 2px solid ${T.newColors.grey2[100]};
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
`,eu=c.forwardRef(function(t,n){var I;(I=t.activeFilters)==null||I.forEach(D=>{var E;if(!((E=t.filters)==null?void 0:E.some(({name:$})=>$===D)))throw new Error(`Active filter "${D}" is not a valid filter.`)});const{noResults:r="No results were found."}=t,a=t.display||"list",i=c.useMemo(()=>t.displayOptions||[a],[a,t.displayOptions]),o=t.onDisplayChange!==void 0&&i.length>1,s=c.useMemo(()=>t.bulkActions?t.bulkActions.filter(D=>t.checkedAllPages?D.onAllClick:D.onClick):[],[t.bulkActions,t.checkedAllPages]),l=c.useMemo(()=>({checkedAllPages:t.checkedAllPages,data:t.data.filter((D,_)=>{var E;return((E=t.checked)==null?void 0:E.length)>0&&t.checked[_]===!0})}),[t.checked,t.checkedAllPages,t.data]),u=sn(s,l,"show",!0),f=t.checked!==void 0&&t.onCheckChange!==void 0,h=function(){var E;const D=t.checked.every($=>$===!0),_=t.checked.map(()=>!D);t.onCheckChange(_),(E=t.onCheckAllPagesChange)==null||E.call(t,!1)},m=function(D){var E;const _=[...t.checked];_[D]=!_[D],t.onCheckChange(_),(E=t.onCheckAllPagesChange)==null||E.call(t,!1)},g=function(){var _,E;const D=t.checkedAllPages?t.checked.map(()=>!1):t.checked;(_=t.onCheckChange)==null||_.call(t,D),(E=t.onCheckAllPagesChange)==null||E.call(t,!t.checkedAllPages)};c.useEffect(()=>{!v.current||!v.current.scrollTo||v.current.scrollTo(0,0)},[t.limit,t.skip,t.display]);const w=c.useMemo(()=>i.map(D=>{if(D==="list")return $l;if(D==="grid")return Ll;throw new Error("Unknown view option")}),[i]),b=w.find(D=>D.name===a);if(b===void 0)throw new Error(`Display '${a}' is not valid in the passed displayOptions.`);const x=b.component,v=c.useRef(null),C=c.useMemo(()=>t.activeColumns||t.columns.map(D=>D.name),[t.activeColumns,t.columns]),y=c.useMemo(()=>C.map(D=>{const _=t.columns.find(E=>E.name===D);if(!_)throw new Error(`Active column "${D}" is not defined in the columns list.`);return _}),[C,t.columns]),k=t.title||t.buttons||t.filters||t.currentView||t.onViewList||t.onViewSave||t.onViewSaveAs,A=c.useMemo(()=>!!(u.length>0||t.limitOptions||t.onColumnsChange||t.onSortChange||t.sort||o===!0||t.onLimitChange||t.onSkipChange),[u,t.limitOptions,t.onColumnsChange,t.onSortChange,t.sort,o,t.onLimitChange,t.onSkipChange]),S=t.checked!==void 0&&t.checked.length>0&&t.checked.every(D=>D===!0),p=t.checked!==void 0&&t.checked.length>0&&t.checked.some(D=>D===!0),R=(u==null?void 0:u.length)>0&&t.data.length>0&&t.count>t.data.length&&u.some(D=>D.onAllClick!==void 0)&&S&&t.checkedAllPages!==void 0&&t.onCheckAllPagesChange!==void 0,N=(t.checked||[]).some(D=>D),L=c.useMemo(()=>{const D=t.primaryActions||[],_=t.additionalActions||[],E=t.data.reduce((de,q)=>({...de,[q.id]:{primary:D.map(Q=>{const fe=On(on(Q.show,{row:q},!0));return{...Q,invisible:a==="list"?!fe:!1,show:a==="list"?!0:fe}}),additional:_.filter(Q=>On(on(Q.show,{row:q},!0)))}}),{});if(a==="grid")return E;const $=Object.keys(E),Y=D.map((de,q)=>$.some(Q=>!E[Q].primary[q].invisible));return $.reduce((de,q)=>({...de,[q]:{...E[q],primary:E[q].primary.filter((Q,fe)=>!!Y[fe])}}),{})},[t.primaryActions,t.additionalActions,t.data,a]);return d.jsxs(Ac,{"aria-busy":!!t.loading,className:`
				${t.loading?"loading":""}
				${t.sticky?"sticky":""}
			`,ref:n,"data-testid":B.DATA_VIEW,...t.attrs||{},children:[k&&d.jsx("div",{className:"headerRow title",children:d.jsx(go,{title:t.title,onBack:t.onBack,backLabel:t.backLabel,buttons:t.buttons,filter:t.filter,filters:t.filters,activeFilters:t.activeFilters,onActiveFiltersChange:t.onActiveFiltersChange,disabled:t.disabled,currentView:t.currentView,onViewSave:t.onViewSave,onViewSaveAs:t.onViewSaveAs,onViewList:t.onViewList})}),A&&d.jsx("div",{className:"headerActions",children:d.jsx(Sc,{activeColumnObjs:y,columns:t.columns,bulkActions:u,checked:t.checked,display:a,displayControlEnabled:o,displayOptionsFull:w,limit:t.limit,limitOptions:t.limitOptions,onLimitChange:t.onLimitChange,onDisplayChange:t.onDisplayChange,onSkipChange:t.onSkipChange,skip:t.skip,count:t.count,allColumns:t.columns,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onSortChange:t.onSortChange,sort:t.sort,data:t.data,checkedAllPages:t.checkedAllPages,allChecked:S,anyChecked:p,disabled:t.disabled})}),d.jsx("div",{ref:v,className:`
					viewContainer
				`,children:d.jsx(x,{checked:t.checked,checkedAllPages:t.checkedAllPages,columns:t.columns,bulkActions:u,sort:t.sort,data:t.data,disabled:t.disabled,rowActions:L,activeColumns:t.activeColumns,gridColumnsMap:t.gridColumnsMap,limit:t.limit,count:t.count,rowCount:t.data.length,activeColumnObjs:y,onSortChange:t.onSortChange,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onCheckboxClick:f?m:void 0,onCheckAllPagesClick:g,onReorder:t.onReorder,showBulkAll:R,allChecked:S,anyChecked:p,actionsHidden:N||void 0})}),!t.loading&&!t.data.length&&(typeof r=="string"?d.jsx("div",{className:"noResults",children:d.jsx("p",{children:r})}):r)]})});Aa({prefix:"DataView",bundle:Sa});const Rc=O.button`
  background: ${T.newColors.grey1[100]};
  border: ${T.borders.simplyGrey};
  cursor: pointer;
  margin-bottom: ${({$displayColorPicker:e})=>e?"8px":0};
  opacity: ${({$disabled:e})=>e?.5:1};
  padding: 10px;
  width: fit-content;
`,Tc=O.div`
  ${({$color:e})=>e.r!==void 0&&e.b!==void 0&&e.b!==void 0&&e.a!==void 0?`background: rgba(${e.r}, ${e.g}, ${e.b}, ${e.a});`:`background: ${e};`}
  height: 31px;
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  width: 80px;
`,tu=O(Ia)`
`,nu=e=>{const{disabled:t,color:n,onClick:r,displayColorPicker:a,id:i}=e;return d.jsx(Rc,{$disabled:t,$displayColorPicker:a,onClick:r,type:"button",id:i,children:d.jsx(Tc,{"data-testid":"colordiv-test",$disabled:t,$color:n})})};export{Xi as A,on as B,nu as C,Fl as D,Co as E,El as F,sn as G,tu as P,eu as a,H as b,Gi as c,Hi as d,Re as e,Zc as f,Qc as g,qa as h,ri as i,It as j,br as k,St as l,Za as m,Xa as n,ni as o,si as p,$n as q,Jc as r,At as s,ue as t,oi as u,za as v,Wi as w,P as x,Fa as y,Zi as z};
