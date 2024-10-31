import{r as c,g as Un,a as G}from"./index-BP8_t0zE.js";import{m as qr,a as Xr,l as Gr,u as Kr,n as Qr,v as Yn,p as Jr,w as Zr,j as ea,x as ta,q as na,y as ra,z as aa,C as ia}from"./CheckboxList-BmT12QDz.js";import{_ as oa,D as sa,l as la}from"./index-DnvaddO_.js";import{_ as Hn,u as Ne,a as ca}from"./useMosaicTranslation-CZCb37QS.js";import{r as ye,j as d}from"./jsx-runtime-nGUw9YhZ.js";import{s as O,t as R,B as Xt}from"./theme-DRtZtbPc.js";import{t as W}from"./testIds-D6Gx1A0F.js";import{T as ua,d as da}from"./TitleWrapper-D2l-_w9e.js";import{B as rt}from"./ButtonRow-B3IWj8ab.js";import{i as fa}from"./isSymbol-CEVJpixJ.js";import{i as De}from"./generateUtilityClasses-DAcHHM0W.js";import{r as ke}from"./createSvgIcon-CcHL1II5.js";import{D as ha}from"./FormFieldText.styled-hkDOkrrs.js";import{B as Y,S as ma,c as ga,P as va}from"./Button-Do5OxnZO.js";import{d as Bt}from"./DataViewPrimaryFilter.styled-CylNlUs-.js";import{r as Ie}from"./index-BxmsGmlx.js";import{C as kt}from"./Checkbox-BN-KUs9r.js";import{d as ba}from"./MoreVert-BbmWEP2K.js";import{u as yn,g as Dn}from"./useToggle-lipGlewK.js";import{T as kn}from"./Typography-Br_RMLnS.js";import{D as wa,a as xa,d as Ca}from"./ChevronRight-CSz705Z0.js";import{P as ya}from"./PageHeader-yhdXyTld.js";function Vt(e,t,n=!0){const r=e!==void 0?e:n;return(Array.isArray(r)?r:[r]).map(i=>i instanceof Function?i(t):i)}function Ft(e,t,n,r=!0){const a=c.useMemo(()=>{const i=Array.isArray(e),s=(i?e:[e]).map(l=>({...l,[n]:Vt(l[n],t,r)}));return i?s:s[0]},[r,e,n,t]);return Array.isArray(a)?yn(a,n):yn(a,n)}var Da=Xr,ka=qr,pa=oa,Sa=Gr;function Aa(e,t){var n=Sa(e)?Da:pa;return n(e,ka(t))}var Ta=Aa;const uu=Un(Ta);function q(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Ra(e){return q(1,arguments),e instanceof Date||Hn(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ce(e){q(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Hn(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ea(e){if(q(1,arguments),!Ra(e)&&typeof e!="number")return!1;var t=ce(e);return!isNaN(Number(t))}function Ae(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ma(e,t){q(2,arguments);var n=ce(e).getTime(),r=Ae(t);return new Date(n+r)}function Oa(e,t){q(2,arguments);var n=Ae(t);return Ma(e,-n)}var _a=864e5;function Pa(e){q(1,arguments);var t=ce(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/_a)+1}function vt(e){q(1,arguments);var t=1,n=ce(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function qn(e){q(1,arguments);var t=ce(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=vt(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=vt(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Ia(e){q(1,arguments);var t=qn(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=vt(n);return r}var ja=6048e5;function $a(e){q(1,arguments);var t=ce(e),n=vt(t).getTime()-Ia(t).getTime();return Math.round(n/ja)+1}var Na={};function pt(){return Na}function bt(e,t){var n,r,a,i,o,s,l,u;q(1,arguments);var f=pt(),h=Ae((n=(r=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=ce(e),m=g.getUTCDay(),x=(m<h?7:0)+m-h;return g.setUTCDate(g.getUTCDate()-x),g.setUTCHours(0,0,0,0),g}function Xn(e,t){var n,r,a,i,o,s,l,u;q(1,arguments);var f=ce(e),h=f.getUTCFullYear(),g=pt(),m=Ae((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&r!==void 0?r:(l=g.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(h+1,0,m),x.setUTCHours(0,0,0,0);var b=bt(x,t),w=new Date(0);w.setUTCFullYear(h,0,m),w.setUTCHours(0,0,0,0);var v=bt(w,t);return f.getTime()>=b.getTime()?h+1:f.getTime()>=v.getTime()?h:h-1}function La(e,t){var n,r,a,i,o,s,l,u;q(1,arguments);var f=pt(),h=Ae((n=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1),g=Xn(e,t),m=new Date(0);m.setUTCFullYear(g,0,h),m.setUTCHours(0,0,0,0);var x=bt(m,t);return x}var Wa=6048e5;function Ba(e,t){q(1,arguments);var n=ce(e),r=bt(n,t).getTime()-La(n,t).getTime();return Math.round(r/Wa)+1}function I(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var xe={y:function(t,n){var r=t.getUTCFullYear(),a=r>0?r:1-r;return I(n==="yy"?a%100:a,n.length)},M:function(t,n){var r=t.getUTCMonth();return n==="M"?String(r+1):I(r+1,2)},d:function(t,n){return I(t.getUTCDate(),n.length)},a:function(t,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,n){return I(t.getUTCHours()%12||12,n.length)},H:function(t,n){return I(t.getUTCHours(),n.length)},m:function(t,n){return I(t.getUTCMinutes(),n.length)},s:function(t,n){return I(t.getUTCSeconds(),n.length)},S:function(t,n){var r=n.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,r-3));return I(i,n.length)}},Pe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Va={G:function(t,n,r){var a=t.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,n,r){if(n==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return r.ordinalNumber(i,{unit:"year"})}return xe.y(t,n)},Y:function(t,n,r,a){var i=Xn(t,a),o=i>0?i:1-i;if(n==="YY"){var s=o%100;return I(s,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):I(o,n.length)},R:function(t,n){var r=qn(t);return I(r,n.length)},u:function(t,n){var r=t.getUTCFullYear();return I(r,n.length)},Q:function(t,n,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"Q":return String(a);case"QQ":return I(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,n,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"q":return String(a);case"qq":return I(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,n,r){var a=t.getUTCMonth();switch(n){case"M":case"MM":return xe.M(t,n);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,n,r){var a=t.getUTCMonth();switch(n){case"L":return String(a+1);case"LL":return I(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,r,a){var i=Ba(t,a);return n==="wo"?r.ordinalNumber(i,{unit:"week"}):I(i,n.length)},I:function(t,n,r){var a=$a(t);return n==="Io"?r.ordinalNumber(a,{unit:"week"}):I(a,n.length)},d:function(t,n,r){return n==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):xe.d(t,n)},D:function(t,n,r){var a=Pa(t);return n==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):I(a,n.length)},E:function(t,n,r){var a=t.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,n,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return I(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,n,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return I(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,n,r){var a=t.getUTCDay(),i=a===0?7:a;switch(n){case"i":return String(i);case"ii":return I(i,n.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,n,r){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,n,r){var a=t.getUTCHours(),i;switch(a===12?i=Pe.noon:a===0?i=Pe.midnight:i=a/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,n,r){var a=t.getUTCHours(),i;switch(a>=17?i=Pe.evening:a>=12?i=Pe.afternoon:a>=4?i=Pe.morning:i=Pe.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,n,r){if(n==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return xe.h(t,n)},H:function(t,n,r){return n==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):xe.H(t,n)},K:function(t,n,r){var a=t.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(a,{unit:"hour"}):I(a,n.length)},k:function(t,n,r){var a=t.getUTCHours();return a===0&&(a=24),n==="ko"?r.ordinalNumber(a,{unit:"hour"}):I(a,n.length)},m:function(t,n,r){return n==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):xe.m(t,n)},s:function(t,n,r){return n==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):xe.s(t,n)},S:function(t,n){return xe.S(t,n)},X:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return Sn(o);case"XXXX":case"XX":return Se(o);case"XXXXX":case"XXX":default:return Se(o,":")}},x:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"x":return Sn(o);case"xxxx":case"xx":return Se(o);case"xxxxx":case"xxx":default:return Se(o,":")}},O:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+pn(o,":");case"OOOO":default:return"GMT"+Se(o,":")}},z:function(t,n,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+pn(o,":");case"zzzz":default:return"GMT"+Se(o,":")}},t:function(t,n,r,a){var i=a._originalDate||t,o=Math.floor(i.getTime()/1e3);return I(o,n.length)},T:function(t,n,r,a){var i=a._originalDate||t,o=i.getTime();return I(o,n.length)}};function pn(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t;return n+String(a)+o+I(i,2)}function Sn(e,t){if(e%60===0){var n=e>0?"-":"+";return n+I(Math.abs(e)/60,2)}return Se(e,t)}function Se(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=I(Math.floor(a/60),2),o=I(a%60,2);return r+i+n+o}var An=function(t,n){switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Gn=function(t,n){switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Fa=function(t,n){var r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return An(t,n);var o;switch(a){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",An(a,n)).replace("{{time}}",Gn(i,n))},za={p:Gn,P:Fa};function Ua(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Ya=["D","DD"],Ha=["YY","YYYY"];function qa(e){return Ya.indexOf(e)!==-1}function Xa(e){return Ha.indexOf(e)!==-1}function Tn(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ga={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ka=function(t,n,r){var a,i=Ga[t];return typeof i=="string"?a=i:n===1?a=i.one:a=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};function It(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Qa={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ja={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Za={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ei={date:It({formats:Qa,defaultWidth:"full"}),time:It({formats:Ja,defaultWidth:"full"}),dateTime:It({formats:Za,defaultWidth:"full"})},ti={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ni=function(t,n,r,a){return ti[t]};function Xe(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",a;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(t):t;return a[u]}}var ri={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ai={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ii={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},oi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},si={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},li={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ci=function(t,n){var r=Number(t),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ui={ordinalNumber:ci,era:Xe({values:ri,defaultWidth:"wide"}),quarter:Xe({values:ai,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Xe({values:ii,defaultWidth:"wide"}),day:Xe({values:oi,defaultWidth:"wide"}),dayPeriod:Xe({values:si,defaultWidth:"wide",formattingValues:li,defaultFormattingWidth:"wide"})};function Ge(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?fi(s,function(h){return h.test(o)}):di(s,function(h){return h.test(o)}),u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;var f=t.slice(o.length);return{value:u,rest:f}}}function di(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function fi(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function hi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var mi=/^(\d+)(th|st|nd|rd)?/i,gi=/\d+/i,vi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bi={any:[/^b/i,/^(a|c)/i]},wi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},xi={any:[/1/i,/2/i,/3/i,/4/i]},Ci={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Di={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ki={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},pi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Si={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ai={ordinalNumber:hi({matchPattern:mi,parsePattern:gi,valueCallback:function(t){return parseInt(t,10)}}),era:Ge({matchPatterns:vi,defaultMatchWidth:"wide",parsePatterns:bi,defaultParseWidth:"any"}),quarter:Ge({matchPatterns:wi,defaultMatchWidth:"wide",parsePatterns:xi,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ge({matchPatterns:Ci,defaultMatchWidth:"wide",parsePatterns:yi,defaultParseWidth:"any"}),day:Ge({matchPatterns:Di,defaultMatchWidth:"wide",parsePatterns:ki,defaultParseWidth:"any"}),dayPeriod:Ge({matchPatterns:pi,defaultMatchWidth:"any",parsePatterns:Si,defaultParseWidth:"any"})},Ti={code:"en-US",formatDistance:Ka,formatLong:ei,formatRelative:ni,localize:ui,match:Ai,options:{weekStartsOn:0,firstWeekContainsDate:1}},Ri=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ei=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mi=/^'([^]*?)'?$/,Oi=/''/g,_i=/[a-zA-Z]/;function du(e,t,n){var r,a,i,o,s,l,u,f,h,g,m,x,b,w,v,C,y,D;q(2,arguments);var A=String(t),p=pt(),S=(r=(a=n==null?void 0:n.locale)!==null&&a!==void 0?a:p.locale)!==null&&r!==void 0?r:Ti,T=Ae((i=(o=(s=(l=n==null?void 0:n.firstWeekContainsDate)!==null&&l!==void 0?l:n==null||(u=n.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:p.firstWeekContainsDate)!==null&&o!==void 0?o:(h=p.locale)===null||h===void 0||(g=h.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var $=Ae((m=(x=(b=(w=n==null?void 0:n.weekStartsOn)!==null&&w!==void 0?w:n==null||(v=n.locale)===null||v===void 0||(C=v.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&b!==void 0?b:p.weekStartsOn)!==null&&x!==void 0?x:(y=p.locale)===null||y===void 0||(D=y.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&m!==void 0?m:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var L=ce(e);if(!Ea(L))throw new RangeError("Invalid time value");var P=Ua(L),k=Oa(L,P),_={firstWeekContainsDate:T,weekStartsOn:$,locale:S,_originalDate:L},E=A.match(Ei).map(function(N){var H=N[0];if(H==="p"||H==="P"){var B=za[H];return B(N,S.formatLong)}return N}).join("").match(Ri).map(function(N){if(N==="''")return"'";var H=N[0];if(H==="'")return Pi(N);var B=Va[H];if(B)return!(n!=null&&n.useAdditionalWeekYearTokens)&&Xa(N)&&Tn(N,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&qa(N)&&Tn(N,t,String(e)),B(k,N,S.localize,_);if(H.match(_i))throw new RangeError("Format string contains an unescaped latin alphabet character `"+H+"`");return N}).join("");return E}function Pi(e){var t=e.match(Mi);return t?t[1].replace(Oi,"'"):e}var Rn=Kr;function Ii(e,t,n){t=="__proto__"&&Rn?Rn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var ji=Ii,$i=ji,Ni=Qr,Li=Object.prototype,Wi=Li.hasOwnProperty;function Bi(e,t,n){var r=e[t];(!(Wi.call(e,t)&&Ni(r,n))||n===void 0&&!(t in e))&&$i(e,t,n)}var Vi=Bi,Fi=Vi,zi=Yn,Ui=Jr,En=fa,Yi=Zr;function Hi(e,t,n,r){if(!En(e))return e;t=zi(t,e);for(var a=-1,i=t.length,o=i-1,s=e;s!=null&&++a<i;){var l=Yi(t[a]),u=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(a!=o){var f=s[l];u=r?r(f,l,s):void 0,u===void 0&&(u=En(f)?f:Ui(t[a+1])?[]:{})}Fi(s,l,u),s=s[l]}return e}var qi=Hi,Xi=ea,Gi=qi,Ki=Yn;function Qi(e,t,n){for(var r=-1,a=t.length,i={};++r<a;){var o=t[r],s=Xi(e,o);n(s,o)&&Gi(i,Ki(o,e),s)}return i}var Ji=Qi,Zi=Ji,eo=ta;function to(e,t){return Zi(e,t,function(n,r){return eo(e,r)})}var no=to,ro=na;function ao(e){var t=e==null?0:e.length;return t?ro(e,1):[]}var io=ao,oo=io,so=ra,lo=aa;function co(e){return lo(so(e,void 0,oo),e+"")}var uo=co,fo=no,ho=uo,mo=ho(function(e,t){return e==null?{}:fo(e,t)}),go=mo;const vo=Un(go);var Gt={},bo=De;Object.defineProperty(Gt,"__esModule",{value:!0});var Kn=Gt.default=void 0,wo=bo(ke()),xo=ye();Kn=Gt.default=(0,wo.default)((0,xo.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList");const Co=O.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;function yo(e){var w;const{t}=Ne(),[n,r]=c.useState({anchorEl:null,dropdownOpen:!1}),a=c.useMemo(()=>e.activeFilters||[],[e.activeFilters]),i=a.map(v=>e.filters.find(C=>C.name===v)),o=e.filters.map(v=>({label:v.label,value:v.name})).sort((v,C)=>v.label.localeCompare(C.label)),s=c.useMemo(()=>a.map(v=>o.find(C=>C.value===v)).filter(Boolean),[o,a]),l=v=>{r({...n,anchorEl:v.currentTarget})},u=()=>{r({...n,anchorEl:null})},f=()=>{r({...n,dropdownOpen:!0})},h=function(){r({...n,dropdownOpen:!1})},g=function(v){const C=Object.fromEntries(Object.entries(e.filter).filter(A=>A[1])),y=vo(C,[...v.value]),D=Object.keys(y).join(",")!==Object.keys(C).join(",");e.onActiveFiltersChange({activeFilters:v.value,filter:D===!0?y:e.filter}),u()},m=v=>{const C=new RegExp(v.keyword,"i");return{docs:o.filter(D=>D.label.match(C)),hasMore:!1}},x=()=>{i.forEach(v=>{e.filter[v.name]!==void 0&&v.onChange(void 0)})},b=(v,C)=>((v!==void 0||e.filter[C.name])&&C.onChange(v),u());return d.jsx("div",{"data-testid":W.DATA_VIEW_FILTERS,className:"filterRow",children:((w=e==null?void 0:e.filters)==null?void 0:w.length)>0&&d.jsxs(Co,{"data-testid":W.DATA_VIEW_FILTER_BAR,children:[d.jsx(Y,{label:t("mosaic:DataView.filters"),variant:"text",color:"black",size:"small",iconPosition:"left",mIcon:Kn,mIconColor:R.newColors.almostBlack[100],onClick:l}),d.jsx(ha,{anchorEl:n.anchorEl,onClose:u,onEntered:f,onExited:h,children:d.jsx(sa,{comparison:"",selected:s,getOptions:m,isOpen:n.dropdownOpen,onApply:g})}),(i==null?void 0:i.length)>0&&d.jsx(d.Fragment,{children:i.map(v=>{const C=v.component;return d.jsx(C,{label:v.label,args:v.args||{},data:e.filter[v.name]||{},onChange:y=>b(y,v)},v.name)})}),(i==null?void 0:i.length)>0&&d.jsx(Y,{label:t("mosaic:DataView.clear_filters"),variant:"text",size:"small",color:"teal",onClick:x})]})})}const Do=O.div`
	border-bottom: 2px solid ${R.newColors.grey2[100]};
	padding: 24px 24px 16px 24px;
	width: 100%;
`,ko=O.div`
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
`,po=O(Y)`
	&& {
		button {
			max-width: 300px;
			margin-right: 2px;
			text-transform: none;
			font-weight: ${R.fontWeight.normal};
		}

		&.no-view-selected button {
			color: ${R.newColors.grey3[100]};
			font-style: italic;
		}
	}
`,So=O.div`
	font-size: 14px;
	padding: 3px 0;
	letter-spacing: 1px;
`;function Ao({currentView:e,onViewSave:t,onViewSaveAs:n,onViewList:r}){const{t:a}=Ne(),i=c.useMemo(()=>{const o=[];return t&&o.push({label:a("mosaic:DataView.overwrite_current_view"),onClick:t}),n&&o.push({label:a("mosaic:DataView.save_as_new_view"),onClick:n}),o},[t,n,a]);return d.jsx("div",{"data-testid":W.DATA_VIEW_VIEW_CONTROL,children:d.jsx("div",{className:"right",children:d.jsxs(rt,{children:[r?d.jsx(po,{mIcon:Bt,iconPosition:"right",label:e?`${a("mosaic:DataView.view")}: ${e.label}`:a("mosaic:DataView.no_view_selected"),variant:"contained",size:"small",color:"gray",onClick:r,className:!e&&"no-view-selected"}):e&&d.jsx(So,{children:`${a("mosaic:DataView.view")}: ${e.label}`}),d.jsx(Y,{mIcon:Bt,iconPosition:"right",label:a("mosaic:DataView.save_view"),variant:"text",size:"small",color:"teal",menuItems:i})]})})})}function To({activeFilters:e,backLabel:t,buttons:n,currentView:r,disabled:a,filter:i,filters:o,onActiveFiltersChange:s,onBack:l,onViewSave:u,onViewSaveAs:f,onViewList:h,title:g}){const m=c.useMemo(()=>n===void 0?[]:n.map(b=>{const{name:w,...v}=b;return v.attrs={"data-mosaic-id":`button_${w}`},v.disabled=v.disabled===void 0?a:v.disabled,v}),[n,a]),x=r||u||f||h;return d.jsxs(Do,{"data-testid":W.DATA_VIEW_TITLE_BAR,children:[d.jsxs(ko,{children:[d.jsxs("div",{className:"left",children:[g&&d.jsx(ua,{title:g,onBack:l,backLabel:t}),x&&d.jsx(Ao,{currentView:r,onViewSave:u,onViewSaveAs:f,onViewList:h})]}),m.length>0&&d.jsx(rt,{buttons:m})]}),o&&d.jsx(yo,{filter:i,filters:o,activeFilters:e,onActiveFiltersChange:s})]})}var Kt={},Ro=De;Object.defineProperty(Kt,"__esModule",{value:!0});var Qn=Kt.default=void 0,Eo=Ro(ke()),Mo=ye();Qn=Kt.default=(0,Eo.default)((0,Mo.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOn");var Qt={},Oo=De;Object.defineProperty(Qt,"__esModule",{value:!0});var Jn=Qt.default=void 0,_o=Oo(ke()),Po=ye();Jn=Qt.default=(0,_o.default)((0,Po.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulleted");function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const St=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Le(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Jt(e){return"nodeType"in e}function K(e){var t,n;return e?Le(e)?e:Jt(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Zt(e){const{Document:t}=K(e);return e instanceof t}function at(e){return Le(e)?!1:e instanceof K(e).HTMLElement}function Zn(e){return e instanceof K(e).SVGElement}function We(e){return e?Le(e)?e.document:Jt(e)?Zt(e)?e:at(e)||Zn(e)?e.ownerDocument:document:document:document}const ie=St?c.useLayoutEffect:c.useEffect;function en(e){const t=c.useRef(e);return ie(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function jo(){const e=c.useRef(null),t=c.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=c.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function et(e,t){t===void 0&&(t=[e]);const n=c.useRef(e);return ie(()=>{n.current!==e&&(n.current=e)},t),n}function it(e,t){const n=c.useRef();return c.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function wt(e){const t=en(e),n=c.useRef(null),r=c.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function zt(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}let jt={};function ot(e,t){return c.useMemo(()=>{if(t)return t;const n=jt[e]==null?0:jt[e]+1;return jt[e]=n,e+"-"+n},[e,t])}function er(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((i,o)=>{const s=Object.entries(o);for(const[l,u]of s){const f=i[l];f!=null&&(i[l]=f+e*u)}return i},{...t})}}const je=er(1),tt=er(-1);function $o(e){return"clientX"in e&&"clientY"in e}function tn(e){if(!e)return!1;const{KeyboardEvent:t}=K(e.target);return t&&e instanceof t}function No(e){if(!e)return!1;const{TouchEvent:t}=K(e.target);return t&&e instanceof t}function Ut(e){if(No(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return $o(e)?{x:e.clientX,y:e.clientY}:null}const $e=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[$e.Translate.toString(e),$e.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Mn="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Lo(e){return e.matches(Mn)?e:e.querySelector(Mn)}const Wo={display:"none"};function Bo(e){let{id:t,value:n}=e;return G.createElement("div",{id:t,style:Wo},n)}function Vo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return G.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function Fo(){const[e,t]=c.useState("");return{announce:c.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const tr=c.createContext(null);function zo(e){const t=c.useContext(tr);c.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Uo(){const[e]=c.useState(()=>new Set),t=c.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[c.useCallback(r=>{let{type:a,event:i}=r;e.forEach(o=>{var s;return(s=o[a])==null?void 0:s.call(o,i)})},[e]),t]}const Yo={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Ho={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function qo(e){let{announcements:t=Ho,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=Yo}=e;const{announce:i,announcement:o}=Fo(),s=ot("DndLiveRegion"),[l,u]=c.useState(!1);if(c.useEffect(()=>{u(!0)},[]),zo(c.useMemo(()=>({onDragStart(h){let{active:g}=h;i(t.onDragStart({active:g}))},onDragMove(h){let{active:g,over:m}=h;t.onDragMove&&i(t.onDragMove({active:g,over:m}))},onDragOver(h){let{active:g,over:m}=h;i(t.onDragOver({active:g,over:m}))},onDragEnd(h){let{active:g,over:m}=h;i(t.onDragEnd({active:g,over:m}))},onDragCancel(h){let{active:g,over:m}=h;i(t.onDragCancel({active:g,over:m}))}}),[i,t])),!l)return null;const f=G.createElement(G.Fragment,null,G.createElement(Bo,{id:r,value:a.draggable}),G.createElement(Vo,{id:s,announcement:o}));return n?Ie.createPortal(f,n):f}var V;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(V||(V={}));function xt(){}function Ct(e,t){return c.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function nr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const oe=Object.freeze({x:0,y:0});function rr(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ar(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Xo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function On(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function ir(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function _n(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const or=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=_n(t,t.left,t.top),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=rr(_n(l),a);i.push({id:s,data:{droppableContainer:o,value:u}})}}return i.sort(ar)},Go=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=On(t),i=[];for(const o of r){const{id:s}=o,l=n.get(s);if(l){const u=On(l),f=a.reduce((g,m,x)=>g+rr(u[x],m),0),h=Number((f/4).toFixed(4));i.push({id:s,data:{droppableContainer:o,value:h}})}}return i.sort(ar)};function Ko(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),o=a-r,s=i-n;if(r<a&&n<i){const l=t.width*t.height,u=e.width*e.height,f=o*s,h=f/(l+u-f);return Number(h.toFixed(4))}return 0}const Qo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const i of r){const{id:o}=i,s=n.get(o);if(s){const l=Ko(s,t);l>0&&a.push({id:o,data:{droppableContainer:i,value:l}})}}return a.sort(Xo)};function Jo(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function sr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:oe}function Zo(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.reduce((o,s)=>({...o,top:o.top+e*s.y,bottom:o.bottom+e*s.y,left:o.left+e*s.x,right:o.right+e*s.x}),{...n})}}const es=Zo(1);function ts(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function ns(e,t,n){const r=ts(t);if(!r)return e;const{scaleX:a,scaleY:i,x:o,y:s}=r,l=e.left-o-(1-a)*parseFloat(n),u=e.top-s-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),f=a?e.width/a:e.width,h=i?e.height/i:e.height;return{width:f,height:h,top:u,right:l+f,bottom:u+h,left:l}}const rs={ignoreTransform:!1};function Be(e,t){t===void 0&&(t=rs);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:f}=K(e).getComputedStyle(e);u&&(n=ns(n,u,f))}const{top:r,left:a,width:i,height:o,bottom:s,right:l}=n;return{top:r,left:a,width:i,height:o,bottom:s,right:l}}function Pn(e){return Be(e,{ignoreTransform:!0})}function as(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function is(e,t){return t===void 0&&(t=K(e).getComputedStyle(e)),t.position==="fixed"}function os(e,t){t===void 0&&(t=K(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const i=t[a];return typeof i=="string"?n.test(i):!1})}function At(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(Zt(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!at(a)||Zn(a)||n.includes(a))return n;const i=K(e).getComputedStyle(a);return a!==e&&os(a,i)&&n.push(a),is(a,i)?n:r(a.parentNode)}return e?r(e):n}function lr(e){const[t]=At(e,1);return t??null}function $t(e){return!St||!e?null:Le(e)?e:Jt(e)?Zt(e)||e===We(e).scrollingElement?window:at(e)?e:null:null}function cr(e){return Le(e)?e.scrollX:e.scrollLeft}function ur(e){return Le(e)?e.scrollY:e.scrollTop}function Yt(e){return{x:cr(e),y:ur(e)}}var F;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(F||(F={}));function dr(e){return!St||!e?!1:e===document.scrollingElement}function fr(e){const t={x:0,y:0},n=dr(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,o=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:a,isLeft:i,isBottom:o,isRight:s,maxScroll:r,minScroll:t}}const ss={x:.2,y:.2};function ls(e,t,n,r,a){let{top:i,left:o,right:s,bottom:l}=n;r===void 0&&(r=10),a===void 0&&(a=ss);const{isTop:u,isBottom:f,isLeft:h,isRight:g}=fr(e),m={x:0,y:0},x={x:0,y:0},b={height:t.height*a.y,width:t.width*a.x};return!u&&i<=t.top+b.height?(m.y=F.Backward,x.y=r*Math.abs((t.top+b.height-i)/b.height)):!f&&l>=t.bottom-b.height&&(m.y=F.Forward,x.y=r*Math.abs((t.bottom-b.height-l)/b.height)),!g&&s>=t.right-b.width?(m.x=F.Forward,x.x=r*Math.abs((t.right-b.width-s)/b.width)):!h&&o<=t.left+b.width&&(m.x=F.Backward,x.x=r*Math.abs((t.left+b.width-o)/b.width)),{direction:m,speed:x}}function cs(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function hr(e){return e.reduce((t,n)=>je(t,Yt(n)),oe)}function us(e){return e.reduce((t,n)=>t+cr(n),0)}function ds(e){return e.reduce((t,n)=>t+ur(n),0)}function fs(e,t){if(t===void 0&&(t=Be),!e)return;const{top:n,left:r,bottom:a,right:i}=t(e);lr(e)&&(a<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const hs=[["x",["left","right"],us],["y",["top","bottom"],ds]];class nn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=At(n),a=hr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,o,s]of hs)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=s(r),f=a[i]-u;return this.rect[l]+f},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Qe{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function ms(e){const{EventTarget:t}=K(e);return e instanceof t?e:We(e)}function Nt(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var ne;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ne||(ne={}));function In(e){e.preventDefault()}function gs(e){e.stopPropagation()}var M;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(M||(M={}));const mr={start:[M.Space,M.Enter],cancel:[M.Esc],end:[M.Space,M.Enter]},vs=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case M.Right:return{...n,x:n.x+25};case M.Left:return{...n,x:n.x-25};case M.Down:return{...n,y:n.y+25};case M.Up:return{...n,y:n.y-25}}};class Tt{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Qe(We(n)),this.windowListeners=new Qe(K(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ne.Resize,this.handleCancel),this.windowListeners.add(ne.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ne.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&fs(r),n(oe)}handleKeyDown(t){if(tn(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:i=mr,coordinateGetter:o=vs,scrollBehavior:s="smooth"}=a,{code:l}=t;if(i.end.includes(l)){this.handleEnd(t);return}if(i.cancel.includes(l)){this.handleCancel(t);return}const{collisionRect:u}=r.current,f=u?{x:u.left,y:u.top}:oe;this.referenceCoordinates||(this.referenceCoordinates=f);const h=o(t,{active:n,context:r.current,currentCoordinates:f});if(h){const g=tt(h,f),m={x:0,y:0},{scrollableAncestors:x}=r.current;for(const b of x){const w=t.code,{isTop:v,isRight:C,isLeft:y,isBottom:D,maxScroll:A,minScroll:p}=fr(b),S=cs(b),T={x:Math.min(w===M.Right?S.right-S.width/2:S.right,Math.max(w===M.Right?S.left:S.left+S.width/2,h.x)),y:Math.min(w===M.Down?S.bottom-S.height/2:S.bottom,Math.max(w===M.Down?S.top:S.top+S.height/2,h.y))},$=w===M.Right&&!C||w===M.Left&&!y,L=w===M.Down&&!D||w===M.Up&&!v;if($&&T.x!==h.x){const P=b.scrollLeft+g.x,k=w===M.Right&&P<=A.x||w===M.Left&&P>=p.x;if(k&&!g.y){b.scrollTo({left:P,behavior:s});return}k?m.x=b.scrollLeft-P:m.x=w===M.Right?b.scrollLeft-A.x:b.scrollLeft-p.x,m.x&&b.scrollBy({left:-m.x,behavior:s});break}else if(L&&T.y!==h.y){const P=b.scrollTop+g.y,k=w===M.Down&&P<=A.y||w===M.Up&&P>=p.y;if(k&&!g.x){b.scrollTo({top:P,behavior:s});return}k?m.y=b.scrollTop-P:m.y=w===M.Down?b.scrollTop-A.y:b.scrollTop-p.y,m.y&&b.scrollBy({top:-m.y,behavior:s});break}}this.handleMove(t,je(tt(h,this.referenceCoordinates),m))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Tt.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=mr,onActivation:a}=t,{active:i}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const s=i.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function jn(e){return!!(e&&"distance"in e)}function $n(e){return!!(e&&"delay"in e)}class rn{constructor(t,n,r){var a;r===void 0&&(r=ms(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:o}=i;this.props=t,this.events=n,this.document=We(o),this.documentListeners=new Qe(this.document),this.listeners=new Qe(r),this.windowListeners=new Qe(K(o)),this.initialCoordinates=(a=Ut(i))!=null?a:oe,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(ne.Resize,this.handleCancel),this.windowListeners.add(ne.DragStart,In),this.windowListeners.add(ne.VisibilityChange,this.handleCancel),this.windowListeners.add(ne.ContextMenu,In),this.documentListeners.add(ne.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if($n(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(jn(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(ne.Click,gs,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ne.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:i}=this,{onMove:o,options:{activationConstraint:s}}=i;if(!a)return;const l=(n=Ut(t))!=null?n:oe,u=tt(a,l);if(!r&&s){if(jn(s)){if(s.tolerance!=null&&Nt(u,s.tolerance))return this.handleCancel();if(Nt(u,s.distance))return this.handleStart()}return $n(s)&&Nt(u,s.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),o(l)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===M.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const bs={move:{name:"pointermove"},end:{name:"pointerup"}};class Rt extends rn{constructor(t){const{event:n}=t,r=We(n.target);super(t,bs,r)}}Rt.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const ws={move:{name:"mousemove"},end:{name:"mouseup"}};var Ht;(function(e){e[e.RightClick=2]="RightClick"})(Ht||(Ht={}));class xs extends rn{constructor(t){super(t,ws,We(t.event.target))}}xs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Ht.RightClick?!1:(r==null||r({event:n}),!0)}}];const Lt={move:{name:"touchmove"},end:{name:"touchend"}};class Cs extends rn{constructor(t){super(t,Lt)}static setup(){return window.addEventListener(Lt.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Lt.move.name,t)};function t(){}}}Cs.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var Je;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Je||(Je={}));var yt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(yt||(yt={}));function ys(e){let{acceleration:t,activator:n=Je.Pointer,canScroll:r,draggingRect:a,enabled:i,interval:o=5,order:s=yt.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:f,delta:h,threshold:g}=e;const m=ks({delta:h,disabled:!i}),[x,b]=jo(),w=c.useRef({x:0,y:0}),v=c.useRef({x:0,y:0}),C=c.useMemo(()=>{switch(n){case Je.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Je.DraggableRect:return a}},[n,a,l]),y=c.useRef(null),D=c.useCallback(()=>{const p=y.current;if(!p)return;const S=w.current.x*v.current.x,T=w.current.y*v.current.y;p.scrollBy(S,T)},[]),A=c.useMemo(()=>s===yt.TreeOrder?[...u].reverse():u,[s,u]);c.useEffect(()=>{if(!i||!u.length||!C){b();return}for(const p of A){if((r==null?void 0:r(p))===!1)continue;const S=u.indexOf(p),T=f[S];if(!T)continue;const{direction:$,speed:L}=ls(p,T,C,t,g);for(const P of["x","y"])m[P][$[P]]||(L[P]=0,$[P]=0);if(L.x>0||L.y>0){b(),y.current=p,x(D,o),w.current=L,v.current=$;return}}w.current={x:0,y:0},v.current={x:0,y:0},b()},[t,D,r,b,i,o,JSON.stringify(C),JSON.stringify(m),x,u,A,f,JSON.stringify(g)])}const Ds={x:{[F.Backward]:!1,[F.Forward]:!1},y:{[F.Backward]:!1,[F.Forward]:!1}};function ks(e){let{delta:t,disabled:n}=e;const r=zt(t);return it(a=>{if(n||!r||!a)return Ds;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[F.Backward]:a.x[F.Backward]||i.x===-1,[F.Forward]:a.x[F.Forward]||i.x===1},y:{[F.Backward]:a.y[F.Backward]||i.y===-1,[F.Forward]:a.y[F.Forward]||i.y===1}}},[n,t,r])}function ps(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return it(a=>{var i;return t===null?null:(i=r??a)!=null?i:null},[r,t])}function Ss(e,t){return c.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,i=a.activators.map(o=>({eventName:o.eventName,handler:t(o.handler,r)}));return[...n,...i]},[]),[e,t])}var nt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(nt||(nt={}));var qt;(function(e){e.Optimized="optimized"})(qt||(qt={}));const Nn=new Map;function As(e,t){let{dragging:n,dependencies:r,config:a}=t;const[i,o]=c.useState(null),{frequency:s,measure:l,strategy:u}=a,f=c.useRef(e),h=w(),g=et(h),m=c.useCallback(function(v){v===void 0&&(v=[]),!g.current&&o(C=>C===null?v:C.concat(v.filter(y=>!C.includes(y))))},[g]),x=c.useRef(null),b=it(v=>{if(h&&!n)return Nn;if(!v||v===Nn||f.current!==e||i!=null){const C=new Map;for(let y of e){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){C.set(y.id,y.rect.current);continue}const D=y.node.current,A=D?new nn(l(D),D):null;y.rect.current=A,A&&C.set(y.id,A)}return C}return v},[e,i,n,h,l]);return c.useEffect(()=>{f.current=e},[e]),c.useEffect(()=>{h||m()},[n,h]),c.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),c.useEffect(()=>{h||typeof s!="number"||x.current!==null||(x.current=setTimeout(()=>{m(),x.current=null},s))},[s,h,m,...r]),{droppableRects:b,measureDroppableContainers:m,measuringScheduled:i!=null};function w(){switch(u){case nt.Always:return!1;case nt.BeforeDragging:return n;default:return!n}}}function gr(e,t){return it(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function Ts(e,t){return gr(e,t)}function Rs(e){let{callback:t,disabled:n}=e;const r=en(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Et(e){let{callback:t,disabled:n}=e;const r=en(t),a=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return c.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Es(e){return new nn(Be(e),e)}function Ln(e,t,n){t===void 0&&(t=Es);const[r,a]=c.useReducer(s,null),i=Rs({callback(l){if(e)for(const u of l){const{type:f,target:h}=u;if(f==="childList"&&h instanceof HTMLElement&&h.contains(e)){a();break}}}}),o=Et({callback:a});return ie(()=>{a(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),r;function s(l){if(!e)return null;if(e.isConnected===!1){var u;return(u=l??n)!=null?u:null}const f=t(e);return JSON.stringify(l)===JSON.stringify(f)?l:f}}function Ms(e){const t=gr(e);return sr(e,t)}const Wn=[];function Os(e){const t=c.useRef(e),n=it(r=>e?r&&r!==Wn&&e&&t.current&&e.parentNode===t.current.parentNode?r:At(e):Wn,[e]);return c.useEffect(()=>{t.current=e},[e]),n}function _s(e){const[t,n]=c.useState(null),r=c.useRef(e),a=c.useCallback(i=>{const o=$t(i.target);o&&n(s=>s?(s.set(o,Yt(o)),new Map(s)):null)},[]);return c.useEffect(()=>{const i=r.current;if(e!==i){o(i);const s=e.map(l=>{const u=$t(l);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Yt(u)]):null}).filter(l=>l!=null);n(s.length?new Map(s):null),r.current=e}return()=>{o(e),o(i)};function o(s){s.forEach(l=>{const u=$t(l);u==null||u.removeEventListener("scroll",a)})}},[a,e]),c.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,o)=>je(i,o),oe):hr(e):oe,[e,t])}function Bn(e,t){t===void 0&&(t=[]);const n=c.useRef(null);return c.useEffect(()=>{n.current=null},t),c.useEffect(()=>{const r=e!==oe;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?tt(e,n.current):oe}function Ps(e){c.useEffect(()=>{if(!St)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function Is(e,t){return c.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:i}=r;return n[a]=o=>{i(o,t)},n},{}),[e,t])}function vr(e){return c.useMemo(()=>e?as(e):null,[e])}const Wt=[];function js(e,t){t===void 0&&(t=Be);const[n]=e,r=vr(n?K(n):null),[a,i]=c.useReducer(s,Wt),o=Et({callback:i});return e.length>0&&a===Wt&&i(),ie(()=>{e.length?e.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),i())},[e]),a;function s(){return e.length?e.map(l=>dr(l)?r:new nn(t(l),l)):Wt}}function $s(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return at(t)?t:e}function Ns(e){let{measure:t}=e;const[n,r]=c.useState(null),a=c.useCallback(u=>{for(const{target:f}of u)if(at(f)){r(h=>{const g=t(f);return h?{...h,width:g.width,height:g.height}:g});break}},[t]),i=Et({callback:a}),o=c.useCallback(u=>{const f=$s(u);i==null||i.disconnect(),f&&(i==null||i.observe(f)),r(f?t(f):null)},[t,i]),[s,l]=wt(o);return c.useMemo(()=>({nodeRef:s,rect:n,setRef:l}),[n,s,l])}const Ls=[{sensor:Rt,options:{}},{sensor:Tt,options:{}}],Ws={current:{}},gt={draggable:{measure:Pn},droppable:{measure:Pn,strategy:nt.WhileDragging,frequency:qt.Optimized},dragOverlay:{measure:Be}};class Ze extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Bs={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ze,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:gt,measureDroppableContainers:xt,windowRect:null,measuringScheduled:!1},Vs={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:xt,draggableNodes:new Map,over:null,measureDroppableContainers:xt},Mt=c.createContext(Vs),br=c.createContext(Bs);function Fs(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ze}}}function zs(e,t){switch(t.type){case V.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case V.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case V.DragEnd:case V.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case V.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Ze(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case V.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Ze(e.droppable.containers);return o.set(n,{...i,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case V.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const i=new Ze(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Us(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=c.useContext(Mt),i=zt(r),o=zt(n==null?void 0:n.id);return c.useEffect(()=>{if(!t&&!r&&i&&o!=null){if(!tn(i)||document.activeElement===i.target)return;const s=a.get(o);if(!s)return;const{activatorNode:l,node:u}=s;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const f of[l.current,u.current]){if(!f)continue;const h=Lo(f);if(h){h.focus();break}}})}},[r,t,a,o,i]),null}function Ys(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,i)=>i({transform:a,...r}),n):n}function Hs(e){return c.useMemo(()=>({draggable:{...gt.draggable,...e==null?void 0:e.draggable},droppable:{...gt.droppable,...e==null?void 0:e.droppable},dragOverlay:{...gt.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function qs(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const i=c.useRef(!1),{x:o,y:s}=typeof a=="boolean"?{x:a,y:a}:a;ie(()=>{if(!o&&!s||!t){i.current=!1;return}if(i.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const f=n(u),h=sr(f,r);if(o||(h.x=0),s||(h.y=0),i.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const g=lr(u);g&&g.scrollBy({top:h.y,left:h.x})}},[t,o,s,r,n])}const wr=c.createContext({...oe,scaleX:1,scaleY:1});var Ce;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Ce||(Ce={}));const xr=c.memo(function(t){var n,r,a,i;let{id:o,accessibility:s,autoScroll:l=!0,children:u,sensors:f=Ls,collisionDetection:h=Qo,measuring:g,modifiers:m,...x}=t;const b=c.useReducer(zs,void 0,Fs),[w,v]=b,[C,y]=Uo(),[D,A]=c.useState(Ce.Uninitialized),p=D===Ce.Initialized,{draggable:{active:S,nodes:T,translate:$},droppable:{containers:L}}=w,P=S?T.get(S):null,k=c.useRef({initial:null,translated:null}),_=c.useMemo(()=>{var U;return S!=null?{id:S,data:(U=P==null?void 0:P.data)!=null?U:Ws,rect:k}:null},[S,P]),E=c.useRef(null),[N,H]=c.useState(null),[B,ue]=c.useState(null),z=et(x,Object.values(x)),Q=ot("DndDescribedBy",o),de=c.useMemo(()=>L.getEnabled(),[L]),X=Hs(g),{droppableRects:fe,measureDroppableContainers:pe,measuringScheduled:Ve}=As(de,{dragging:p,dependencies:[$.x,$.y],config:X.droppable}),ee=ps(T,S),st=c.useMemo(()=>B?Ut(B):null,[B]),ge=Hr(),he=Ts(ee,X.draggable.measure);qs({activeNode:S?T.get(S):null,config:ge.layoutShiftCompensation,initialRect:he,measure:X.draggable.measure});const j=Ln(ee,X.draggable.measure,he),Fe=Ln(ee?ee.parentElement:null),se=c.useRef({activatorEvent:null,active:null,activeNode:ee,collisionRect:null,collisions:null,droppableRects:fe,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:L,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Te=L.getNodeFor((n=se.current.over)==null?void 0:n.id),me=Ns({measure:X.dragOverlay.measure}),Re=(r=me.nodeRef.current)!=null?r:ee,Ee=p?(a=me.rect)!=null?a:j:null,fn=!!(me.nodeRef.current&&me.rect),hn=Ms(fn?null:j),_t=vr(Re?K(Re):null),ve=Os(p?Te??ee:null),lt=js(ve),ct=Ys(m,{transform:{x:$.x-hn.x,y:$.y-hn.y,scaleX:1,scaleY:1},activatorEvent:B,active:_,activeNodeRect:j,containerNodeRect:Fe,draggingNodeRect:Ee,over:se.current.over,overlayNodeRect:me.rect,scrollableAncestors:ve,scrollableAncestorRects:lt,windowRect:_t}),mn=st?je(st,$):null,gn=_s(ve),Wr=Bn(gn),Br=Bn(gn,[j]),Me=je(ct,Wr),Oe=Ee?es(Ee,ct):null,ze=_&&Oe?h({active:_,collisionRect:Oe,droppableRects:fe,droppableContainers:de,pointerCoordinates:mn}):null,vn=ir(ze,"id"),[be,bn]=c.useState(null),Vr=fn?ct:je(ct,Br),Fr=Jo(Vr,(i=be==null?void 0:be.rect)!=null?i:null,j),wn=c.useCallback((U,J)=>{let{sensor:Z,options:we}=J;if(E.current==null)return;const te=T.get(E.current);if(!te)return;const re=U.nativeEvent,le=new Z({active:E.current,activeNode:te,event:re,options:we,context:se,onStart(ae){const Ue=E.current;if(Ue==null)return;const Ye=T.get(Ue);if(!Ye)return;const{onDragStart:ut}=z.current,dt={active:{id:Ue,data:Ye.data,rect:k}};Ie.unstable_batchedUpdates(()=>{ut==null||ut(dt),A(Ce.Initializing),v({type:V.DragStart,initialCoordinates:ae,active:Ue}),C({type:"onDragStart",event:dt})})},onMove(ae){v({type:V.DragMove,coordinates:ae})},onEnd:_e(V.DragEnd),onCancel:_e(V.DragCancel)});Ie.unstable_batchedUpdates(()=>{H(le),ue(U.nativeEvent)});function _e(ae){return async function(){const{active:Ye,collisions:ut,over:dt,scrollAdjustedTranslate:Cn}=se.current;let He=null;if(Ye&&Cn){const{cancelDrop:qe}=z.current;He={activatorEvent:re,active:Ye,collisions:ut,delta:Cn,over:dt},ae===V.DragEnd&&typeof qe=="function"&&await Promise.resolve(qe(He))&&(ae=V.DragCancel)}E.current=null,Ie.unstable_batchedUpdates(()=>{v({type:ae}),A(Ce.Uninitialized),bn(null),H(null),ue(null);const qe=ae===V.DragEnd?"onDragEnd":"onDragCancel";if(He){const Pt=z.current[qe];Pt==null||Pt(He),C({type:qe,event:He})}})}}},[T]),zr=c.useCallback((U,J)=>(Z,we)=>{const te=Z.nativeEvent,re=T.get(we);if(E.current!==null||!re||te.dndKit||te.defaultPrevented)return;const le={active:re};U(Z,J.options,le)===!0&&(te.dndKit={capturedBy:J.sensor},E.current=we,wn(Z,J))},[T,wn]),xn=Ss(f,zr);Ps(f),ie(()=>{j&&D===Ce.Initializing&&A(Ce.Initialized)},[j,D]),c.useEffect(()=>{const{onDragMove:U}=z.current,{active:J,activatorEvent:Z,collisions:we,over:te}=se.current;if(!J||!Z)return;const re={active:J,activatorEvent:Z,collisions:we,delta:{x:Me.x,y:Me.y},over:te};Ie.unstable_batchedUpdates(()=>{U==null||U(re),C({type:"onDragMove",event:re})})},[Me.x,Me.y]),c.useEffect(()=>{const{active:U,activatorEvent:J,collisions:Z,droppableContainers:we,scrollAdjustedTranslate:te}=se.current;if(!U||E.current==null||!J||!te)return;const{onDragOver:re}=z.current,le=we.get(vn),_e=le&&le.rect.current?{id:le.id,rect:le.rect.current,data:le.data,disabled:le.disabled}:null,ae={active:U,activatorEvent:J,collisions:Z,delta:{x:te.x,y:te.y},over:_e};Ie.unstable_batchedUpdates(()=>{bn(_e),re==null||re(ae),C({type:"onDragOver",event:ae})})},[vn]),ie(()=>{se.current={activatorEvent:B,active:_,activeNode:ee,collisionRect:Oe,collisions:ze,droppableRects:fe,draggableNodes:T,draggingNode:Re,draggingNodeRect:Ee,droppableContainers:L,over:be,scrollableAncestors:ve,scrollAdjustedTranslate:Me},k.current={initial:Ee,translated:Oe}},[_,ee,ze,Oe,T,Re,Ee,fe,L,be,ve,Me]),ys({...ge,delta:$,draggingRect:Oe,pointerCoordinates:mn,scrollableAncestors:ve,scrollableAncestorRects:lt});const Ur=c.useMemo(()=>({active:_,activeNode:ee,activeNodeRect:j,activatorEvent:B,collisions:ze,containerNodeRect:Fe,dragOverlay:me,draggableNodes:T,droppableContainers:L,droppableRects:fe,over:be,measureDroppableContainers:pe,scrollableAncestors:ve,scrollableAncestorRects:lt,measuringConfiguration:X,measuringScheduled:Ve,windowRect:_t}),[_,ee,j,B,ze,Fe,me,T,L,fe,be,pe,ve,lt,X,Ve,_t]),Yr=c.useMemo(()=>({activatorEvent:B,activators:xn,active:_,activeNodeRect:j,ariaDescribedById:{draggable:Q},dispatch:v,draggableNodes:T,over:be,measureDroppableContainers:pe}),[B,xn,_,j,v,Q,T,be,pe]);return G.createElement(tr.Provider,{value:y},G.createElement(Mt.Provider,{value:Yr},G.createElement(br.Provider,{value:Ur},G.createElement(wr.Provider,{value:Fr},u)),G.createElement(Us,{disabled:(s==null?void 0:s.restoreFocus)===!1})),G.createElement(qo,{...s,hiddenTextDescribedById:Q}));function Hr(){const U=(N==null?void 0:N.autoScrollEnabled)===!1,J=typeof l=="object"?l.enabled===!1:l===!1,Z=p&&!U&&!J;return typeof l=="object"?{...l,enabled:Z}:{enabled:Z}}}),Xs=c.createContext(null),Vn="button",Gs="Droppable";function Ks(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const i=ot(Gs),{activators:o,activatorEvent:s,active:l,activeNodeRect:u,ariaDescribedById:f,draggableNodes:h,over:g}=c.useContext(Mt),{role:m=Vn,roleDescription:x="draggable",tabIndex:b=0}=a??{},w=(l==null?void 0:l.id)===t,v=c.useContext(w?wr:Xs),[C,y]=wt(),[D,A]=wt(),p=Is(o,t),S=et(n);ie(()=>(h.set(t,{id:t,key:i,node:C,activatorNode:D,data:S}),()=>{const $=h.get(t);$&&$.key===i&&h.delete(t)}),[h,t]);const T=c.useMemo(()=>({role:m,tabIndex:b,"aria-disabled":r,"aria-pressed":w&&m===Vn?!0:void 0,"aria-roledescription":x,"aria-describedby":f.draggable}),[r,m,b,w,x,f.draggable]);return{active:l,activatorEvent:s,activeNodeRect:u,attributes:T,isDragging:w,listeners:r?void 0:p,node:C,over:g,setNodeRef:y,setActivatorNodeRef:A,transform:v}}function Qs(){return c.useContext(br)}const Js="Droppable",Zs={timeout:25};function el(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const i=ot(Js),{active:o,dispatch:s,over:l,measureDroppableContainers:u}=c.useContext(Mt),f=c.useRef({disabled:n}),h=c.useRef(!1),g=c.useRef(null),m=c.useRef(null),{disabled:x,updateMeasurementsFor:b,timeout:w}={...Zs,...a},v=et(b??r),C=c.useCallback(()=>{if(!h.current){h.current=!0;return}m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{u(Array.isArray(v.current)?v.current:[v.current]),m.current=null},w)},[w]),y=Et({callback:C,disabled:x||!o}),D=c.useCallback((T,$)=>{y&&($&&(y.unobserve($),h.current=!1),T&&y.observe(T))},[y]),[A,p]=wt(D),S=et(t);return c.useEffect(()=>{!y||!A.current||(y.disconnect(),h.current=!1,y.observe(A.current))},[A,y]),ie(()=>(s({type:V.RegisterDroppable,element:{id:r,key:i,disabled:n,node:A,rect:g,data:S}}),()=>s({type:V.UnregisterDroppable,key:i,id:r})),[r]),c.useEffect(()=>{n!==f.current.disabled&&(s({type:V.SetDroppableDisabled,id:r,key:i,disabled:n}),f.current.disabled=n)},[r,i,n,s]),{active:o,rect:g,isOver:(l==null?void 0:l.id)===r,node:A,over:l,setNodeRef:p}}function tl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const nl=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:tl(r,n,t)},Cr=e=>{let{transform:t}=e;return{...t,x:0}};function Ot(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function rl(e,t){return e.reduce((n,r,a)=>{const i=t.get(r);return i&&(n[a]=i),n},Array(e.length))}function ft(e){return e!==null&&e>=0}function al(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function il(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const yr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const i=Ot(t,r,n),o=t[a],s=i[a];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},ht={scaleX:1,scaleY:1},Dr=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:i,overIndex:o}=e;const s=(t=i[n])!=null?t:r;if(!s)return null;if(a===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(s.top+s.height):u.top-s.top,...ht}:null}const l=ol(i,a,n);return a>n&&a<=o?{x:0,y:-s.height-l,...ht}:a<n&&a>=o?{x:0,y:s.height+l,...ht}:{x:0,y:0,...ht}};function ol(e,t,n){const r=e[t],a=e[t-1],i=e[t+1];return r?n<t?a?r.top-(a.top+a.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const kr="Sortable",pr=G.createContext({activeIndex:-1,containerId:kr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:yr,disabled:{draggable:!1,droppable:!1}});function Sr(e){let{children:t,id:n,items:r,strategy:a=yr,disabled:i=!1}=e;const{active:o,dragOverlay:s,droppableRects:l,over:u,measureDroppableContainers:f}=Qs(),h=ot(kr,n),g=s.rect!==null,m=c.useMemo(()=>r.map(p=>typeof p=="object"&&"id"in p?p.id:p),[r]),x=o!=null,b=o?m.indexOf(o.id):-1,w=u?m.indexOf(u.id):-1,v=c.useRef(m),C=!al(m,v.current),y=w!==-1&&b===-1||C,D=il(i);ie(()=>{C&&x&&f(m)},[C,m,x,f]),c.useEffect(()=>{v.current=m},[m]);const A=c.useMemo(()=>({activeIndex:b,containerId:h,disabled:D,disableTransforms:y,items:m,overIndex:w,useDragOverlay:g,sortedRects:rl(m,l),strategy:a}),[b,h,D.draggable,D.droppable,y,m,w,l,g,a]);return G.createElement(pr.Provider,{value:A},t)}const sl=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Ot(n,r,a).indexOf(t)},ll=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:i,newIndex:o,previousItems:s,previousContainerId:l,transition:u}=e;return!u||!r||s!==i&&a===o?!1:n?!0:o!==a&&t===l},cl={duration:200,easing:"ease"},Ar="transform",ul=$e.Transition.toString({property:Ar,duration:0,easing:"linear"}),dl={roleDescription:"sortable"};function fl(e){let{disabled:t,index:n,node:r,rect:a}=e;const[i,o]=c.useState(null),s=c.useRef(n);return ie(()=>{if(!t&&n!==s.current&&r.current){const l=a.current;if(l){const u=Be(r.current,{ignoreTransform:!0}),f={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(f.x||f.y)&&o(f)}}n!==s.current&&(s.current=n)},[t,n,r,a]),c.useEffect(()=>{i&&o(null)},[i]),i}function Tr(e){let{animateLayoutChanges:t=ll,attributes:n,disabled:r,data:a,getNewIndex:i=sl,id:o,strategy:s,resizeObserverConfig:l,transition:u=cl}=e;const{items:f,containerId:h,activeIndex:g,disabled:m,disableTransforms:x,sortedRects:b,overIndex:w,useDragOverlay:v,strategy:C}=c.useContext(pr),y=hl(r,m),D=f.indexOf(o),A=c.useMemo(()=>({sortable:{containerId:h,index:D,items:f},...a}),[h,a,D,f]),p=c.useMemo(()=>f.slice(f.indexOf(o)),[f,o]),{rect:S,node:T,isOver:$,setNodeRef:L}=el({id:o,data:A,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:p,...l}}),{active:P,activatorEvent:k,activeNodeRect:_,attributes:E,setNodeRef:N,listeners:H,isDragging:B,over:ue,setActivatorNodeRef:z,transform:Q}=Ks({id:o,data:A,attributes:{...dl,...n},disabled:y.draggable}),de=Io(L,N),X=!!P,fe=X&&!x&&ft(g)&&ft(w),pe=!v&&B,Ve=pe&&fe?Q:null,st=fe?Ve??(s??C)({rects:b,activeNodeRect:_,activeIndex:g,overIndex:w,index:D}):null,ge=ft(g)&&ft(w)?i({id:o,items:f,activeIndex:g,overIndex:w}):D,he=P==null?void 0:P.id,j=c.useRef({activeId:he,items:f,newIndex:ge,containerId:h}),Fe=f!==j.current.items,se=t({active:P,containerId:h,isDragging:B,isSorting:X,id:o,index:D,items:f,newIndex:j.current.newIndex,previousItems:j.current.items,previousContainerId:j.current.containerId,transition:u,wasDragging:j.current.activeId!=null}),Te=fl({disabled:!se,index:D,node:T,rect:S});return c.useEffect(()=>{X&&j.current.newIndex!==ge&&(j.current.newIndex=ge),h!==j.current.containerId&&(j.current.containerId=h),f!==j.current.items&&(j.current.items=f)},[X,ge,h,f]),c.useEffect(()=>{if(he===j.current.activeId)return;if(he&&!j.current.activeId){j.current.activeId=he;return}const Re=setTimeout(()=>{j.current.activeId=he},50);return()=>clearTimeout(Re)},[he]),{active:P,activeIndex:g,attributes:E,data:A,rect:S,index:D,newIndex:ge,items:f,isOver:$,isSorting:X,isDragging:B,listeners:H,node:T,overIndex:w,over:ue,setNodeRef:de,setActivatorNodeRef:z,setDroppableNodeRef:L,setDraggableNodeRef:N,transform:Te??st,transition:me()};function me(){if(Te||Fe&&j.current.newIndex===D)return ul;if(!(pe&&!tn(k)||!u)&&(X||se))return $e.Transition.toString({...u,property:Ar})}}function hl(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function Dt(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const ml=[M.Down,M.Right,M.Up,M.Left],Rr=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:i,over:o,scrollableAncestors:s}}=t;if(ml.includes(e.code)){if(e.preventDefault(),!n||!r)return;const l=[];i.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const g=a.get(h.id);if(g)switch(e.code){case M.Down:r.top<g.top&&l.push(h);break;case M.Up:r.top>g.top&&l.push(h);break;case M.Left:r.left>g.left&&l.push(h);break;case M.Right:r.left<g.left&&l.push(h);break}});const u=Go({active:n,collisionRect:r,droppableRects:a,droppableContainers:l,pointerCoordinates:null});let f=ir(u,"id");if(f===(o==null?void 0:o.id)&&u.length>1&&(f=u[1].id),f!=null){const h=i.get(n.id),g=i.get(f),m=g?a.get(g.id):null,x=g==null?void 0:g.node.current;if(x&&m&&h&&g){const w=At(x).some((p,S)=>s[S]!==p),v=Er(h,g),C=gl(h,g),y=w||!v?{x:0,y:0}:{x:C?r.width-m.width:0,y:C?r.height-m.height:0},D={x:m.left,y:m.top};return y.x&&y.y?D:tt(D,y)}}}};function Er(e,t){return!Dt(e)||!Dt(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function gl(e,t){return!Dt(e)||!Dt(t)||!Er(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var an={},vl=De;Object.defineProperty(an,"__esModule",{value:!0});var Mr=an.default=void 0,bl=vl(ke()),wl=ye();Mr=an.default=(0,bl.default)((0,wl.jsx)("path",{d:"M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z"}),"SwitchLeft");var on={},xl=De;Object.defineProperty(on,"__esModule",{value:!0});var Or=on.default=void 0,Cl=xl(ke()),yl=ye();Or=on.default=(0,Cl.default)((0,yl.jsx)("path",{d:"M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z"}),"SwitchRight");function Dl(e){const t=e.bulkActions.map(n=>{const{name:r,show:a,onClick:i,onAllClick:o,...s}=n;return{...s,attrs:{"data-mosaic-id":`action_bulk_${r}`},onClick:function(){if(e.checkedAllPages===!0)o&&o();else{const l=e.data.filter((u,f)=>{var h;return((h=e.checked)==null?void 0:h[f])===!0});i&&i({data:l})}}}});return d.jsx(rt,{buttons:t})}const _r=c.memo(Dl),kl=O.div`
	text-align: center;
	font-weight: normal;
	color: ${R.newColors.grey3[100]};
	border-bottom: ${R.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
`;function pl(e){return d.jsxs(kl,{"data-testid":W.DATA_VIEW_BULK_ALL,children:[d.jsxs("span",{className:"bulkText",children:[e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.count})," ","records are selected."]}),!e.checkedAllPages&&d.jsxs(c.Fragment,{children:["All"," ",d.jsx("b",{children:e.rowCount})," ","records on this page are selected."]})]}),d.jsx(Y,{color:"blue",variant:"text",label:e.checkedAllPages?"Clear Selection":`Select All ${e.count} Records`,onClick:e.onCheckAllPagesClick})]})}const Pr=c.memo(pl),Sl=O.thead`
	text-align: left;

	.row-header {
		th:first-child {
			padding-left: 16px;
		}

		th:last-child {
			padding-right: 16px;
		}
	}
`,Ke=O.th`
	background-color: ${R.newColors.grey2[100]};
	color: ${R.newColors.almostBlack[100]};
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
		color: ${R.newColors.almostBlack[100]};
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
		color: ${R.newColors.grey3[100]};
	}

	&.bulk {
		width: 52px;
	}
`;function Al(e){return e==="asc"?"desc":"asc"}function Tl(e){var r,a,i;const{t}=Ne(),n=(((r=e.bulkActions)==null?void 0:r.length)>0?1:0)+1+e.columns.length;return d.jsxs(Sl,{children:[d.jsxs("tr",{className:"row-header",children:[e.onReorder&&d.jsx(Ke,{className:"bulk"},"_draggable"),e.onCheckAllClick&&d.jsx(Ke,{className:"bulk",colSpan:((a=e.bulkActions)==null?void 0:a.length)<=0&&e.anyChecked?e.columns.length+2:1,children:d.jsx(kt,{checked:e.allChecked,indeterminate:!e.allChecked&&e.anyChecked,onClick:e.onCheckAllClick,disabled:e.disabled})},"_bulk"),((i=e.bulkActions)==null?void 0:i.length)>0&&e.anyChecked&&d.jsx(Ke,{colSpan:e.columns.length+1,children:d.jsx(_r,{data:e.data,checked:e.checked,checkedAllPages:e.checkedAllPages,bulkActions:e.bulkActions})},"_bulk_actions"),!e.anyChecked&&e.hasActions&&d.jsx(Ke,{children:d.jsx("span",{className:"columnHeader",children:t("mosaic:DataView.actions")})},"_actions"),!e.anyChecked&&e.columns.map(o=>{let s,l,u;return o.sortable&&(s=e.sort.name===o.name,l=s&&e.sort.dir==="desc"?Mr:Or,u=function(){e.onSortChange({name:o.name,dir:s?Al(e.sort.dir):"asc"})}),d.jsx(Ke,{className:`
									${o.sortable?"sortable":""}
									${s?"active":""}
								`,children:d.jsxs("span",{className:"columnHeader",onClick:u,"data-testid":W.DATA_VIEW_TH_INNER,children:[o.label,o.sortable&&d.jsx(l,{className:"icon"})]})},o.name)})]}),e.showBulkAll&&d.jsx("tr",{children:d.jsx("th",{colSpan:n,children:d.jsx(Pr,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})})})]})}var sn={},Rl=De;Object.defineProperty(sn,"__esModule",{value:!0});var ln=sn.default=void 0,El=Rl(ke()),Ml=ye();ln=sn.default=(0,El.default)((0,Ml.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"DragIndicator");const Ol=O.td`
	height: 40px;
	vertical-align: middle;

	${""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	& > div {
		color: ${R.newColors.almostBlack[100]};
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
`;function _l({ariaLabel:e,expandCell:t=!1,bold:n=!1,italic:r=!1,strikeThrough:a=!1,noWrap:i=!1,ellipsis:o=!1,maxWidth:s,textTransform:l,...u}){return d.jsx(Ol,{className:`
				${t?"expandCell":""}
				${n?"bold":""}
				${r?"italic":""}
				${a?"strikeThrough":""}
			`,"aria-label":e,...u,children:d.jsx("div",{className:`
					${i?"noWrap":""}
					${o?"ellipsis":""}
				`,style:{maxWidth:s,textTransform:l},title:o&&typeof u.children=="string"?u.children:void 0,"data-testid":W.DATA_VIEW_TD_INNER,children:u.children})})}const mt=c.memo(_l),Pl=O(rt)`
    ${({$hidden:e})=>e&&`
        visibility: hidden;
    `}
`;function Il(e){const t=c.useMemo(()=>({row:e.originalRowData}),[e.originalRowData]),n=c.useMemo(()=>e.primaryActions||[],[e.primaryActions]),r=Ft(n,t,"show"),a=c.useMemo(()=>e.additionalActions||[],[e.additionalActions]),i=Ft(a,t,"show"),o=c.useMemo(()=>r.map(u=>{const{name:f,show:h,onClick:g,...m}=u,x=()=>{g({data:e.originalRowData})},b=[m.disabled,e.disabled,e.actionsHidden].some(w=>w);return c.createElement(Y,{...m,disabled:b,key:`primary_${f}`,attrs:{"data-mosaic-id":`action_primary_${f}`},onClick:x})}),[r,e.originalRowData,e.disabled,e.actionsHidden]),s=c.useMemo(()=>{if(!i.length)return[];const u=[e.disabled,e.actionsHidden].some(f=>f);return[d.jsx(Y,{color:"black",variant:"icon",mIcon:e.activeDisplay&&ba,attrs:{"data-mosaic-id":"additional_actions_dropdown"},tooltip:"More actions",disabled:u,menuItems:i.map(f=>{const{name:h,show:g,onClick:m,...x}=f;return{...x,attrs:{"data-mosaic-id":`action_additional_${h}`},onClick:()=>{m({data:e.originalRowData})}}})},"additional")]},[i,e.originalRowData,e.disabled,e.actionsHidden]),l=c.useMemo(()=>[...o,...s],[o,s]);return d.jsx(Pl,{$hidden:e.actionsHidden,children:l})}const Ir=c.memo(Il),jl=O.tr`
	${({$isDragOverlay:e})=>e&&`
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	&.checked {
		background-color: ${R.newColors.grey1[100]};
	}
`,$l=O(ma)`
	&&{
		cursor: grab;
	}
`,cn=c.forwardRef(({checked:e,onReorder:t,disabled:n,onCheckboxClick:r,hasActions:a,primaryActions:i,additionalActions:o,actionsHidden:s,originalRowData:l,columns:u,row:f,isDragOverlay:h,style:g,...m},x)=>d.jsxs(jl,{style:g,className:e&&"checked",ref:x,$isDragOverlay:h,children:[t&&d.jsx(mt,{"data-testid":W.DATA_VIEW_CELL_DRAG,children:d.jsx(Y,{disabled:n,color:"black",variant:"icon",mIcon:ln,muiAttrs:{...m},component:$l})},"_draggable"),r&&d.jsx(mt,{"data-testid":W.DATA_VIEW_CELL_CHECK,children:d.jsx(kt,{checked:e===!0,onClick:r,disabled:n})},"_bulk"),a&&d.jsx(mt,{children:d.jsx(Ir,{primaryActions:i,additionalActions:o,actionsHidden:s,disabled:n,originalRowData:l,activeDisplay:"list"})}),u.map(b=>{var w,v,C,y,D,A,p;return d.jsx(mt,{ariaLabel:b.label,expandCell:!0,bold:(w=b.style)==null?void 0:w.bold,italic:(v=b.style)==null?void 0:v.italic,strikeThrough:(C=b.style)==null?void 0:C.strikeThrough,noWrap:(y=b.style)==null?void 0:y.noWrap,ellipsis:(D=b.style)==null?void 0:D.ellipsis,maxWidth:(A=b.style)==null?void 0:A.maxWidth,textTransform:(p=b.style)==null?void 0:p.textTransform,children:f[b.name]},b.name)})]}));cn.displayName="DataViewTrStatic";function Nl(e){const{attributes:t,listeners:n,setNodeRef:r,transform:a,transition:i,isDragging:o}=Tr({id:e.originalRowData.id}),s={transform:$e.Translate.toString(a),transition:i};return d.jsx(cn,{...e,...t,...n,ref:r,style:s,isDragOverlay:o})}function Ll(e){return e.onReorder?d.jsx(Nl,{...e}):d.jsx(cn,{...e})}const Wl=O.tbody`
	& > tr {
		border-bottom: 1px solid ${R.newColors.grey2[100]};

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
`,jr=c.forwardRef((e,t)=>d.jsx(Wl,{ref:t,"data-testid":W.DATA_VIEW_TBODY,children:e.transformedData.map((n,r)=>{var a,i,o,s;return d.jsx(Ll,{row:n,originalRowData:e.data[r],primaryActions:(i=(a=e.rowActions)==null?void 0:a[n.id])==null?void 0:i.primary,additionalActions:(s=(o=e.rowActions)==null?void 0:o[n.id])==null?void 0:s.additional,actionsHidden:e.actionsHidden,disabled:e.disabled,onCheckboxClick:e.onCheckboxClick?()=>e.onCheckboxClick(r):void 0,checked:e.checked?e.checked[r]:!1,columns:e.columns,onReorder:e.onReorder,hasActions:e.hasActions},n.id)})}));jr.displayName="DataViewTBody";const Bl=c.memo(jr);function Vl(e,t){let n=e[t.column||t.name];if(n!==void 0&&t.transforms!==void 0)for(const r of t.transforms)n!==void 0&&(n=r({data:n,row:e}));return n}function $r(e,t){return e.map(r=>{const a={...r};return t.forEach(i=>{a[i.name]=Vl(r,i)}),a})}function Fl(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}function zl(e){return e.reduce((t,n)=>t+n,0)}const Ul=O.table`
	width: 100%;
	border-collapse: collapse;
`;function Yl(e){const t=c.useRef(),{rowActions:n}=e,r=c.useMemo(()=>$r(e.data,e.activeColumnObjs),[e.data,e.activeColumnObjs]),a=zl(Object.entries(n).map(([,{primary:l,additional:u}])=>l.length+u.length))>0,i=nr(Ct(Rt),Ct(Tt,{coordinateGetter:Rr}));function o(l){const{active:u,over:f}=l;if(u.id!==f.id){const h=e.data.map(({id:g})=>String(g));e.onReorder(Ot(h,h.indexOf(u.id),h.indexOf(f.id)))}}const s=c.useCallback(({draggingNodeRect:l,transform:u})=>{if(!l||!t.current)return u;const f=t.current.getBoundingClientRect();return f?Fl(u,l,f):u},[]);return d.jsx(xr,{sensors:i,collisionDetection:or,onDragEnd:o,autoScroll:{layoutShiftCompensation:!1},modifiers:[Cr,s],children:d.jsx(Sr,{items:r.map(l=>l.id),strategy:Dr,children:d.jsxs(Ul,{"data-testid":W.DATA_VIEW_DISPLAY_LIST,children:[d.jsx(Tl,{checked:e.checked,checkedAllPages:e.checkedAllPages,columns:e.activeColumnObjs,allColumns:e.columns,data:e.data,bulkActions:e.bulkActions,sort:e.sort,count:e.count,rowCount:e.rowCount,onSortChange:e.onSortChange,onCheckAllClick:e.onCheckAllClick,onCheckAllPagesClick:e.onCheckAllPagesClick,onColumnsChange:e.onColumnsChange,onReorder:e==null?void 0:e.onReorder,allChecked:e.allChecked,anyChecked:e.anyChecked,showBulkAll:e.showBulkAll,hasActions:a,disabled:e.disabled}),d.jsx(Bl,{checked:e.checked,columns:e.activeColumnObjs,data:e.data,hasActions:a,transformedData:r,bulkActions:e.bulkActions,actionsHidden:e.actionsHidden,disabled:e.disabled,rowActions:n,onCheckboxClick:e.onCheckboxClick,onReorder:e.onReorder,ref:t})]})})})}const Hl=Xt.topComponent.bigScreenView+"px",ql=Xt.topComponent.responsiveView+"px",Xl=Xt.mobile+"px",Gl=O.div`
	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 24px;

		@media (min-width: ${Xl}) {
			grid-template-columns: repeat(2, 1fr);
		};

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		};

		@media (min-width: ${ql}) {
			grid-template-columns: repeat(4, 1fr);
		};

		@media (min-width: 1296px) {
			grid-template-columns: repeat(5, 1fr);
		};

		@media (min-width: ${Hl}) {
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
		color: ${R.newColors.almostBlack[100]};
		margin: 8px 0 8px 0;
		max-width: 161px;
		font-size: 13px;
		font-weight: ${R.fontWeight.semiBold};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .grid > .cell h3 {
		margin: 0;
		font-weight: ${R.fontWeight.normal};
		font-size: 12px;
		color: ${R.newColors.almostBlack[100]};
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
		background: ${R.newColors.grey2[100]};
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
		background-color: ${R.newColors.almostBlack[100]};
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
`;function Kl(e){if(!e.gridColumnsMap)throw new Error("You must specify gridColumnsMap in order to use the grid view.");const t=c.useMemo(()=>$r(e.data,e.columns),[e.data,e.columns]),n=r=>()=>{e.onCheckboxClick(r)};return d.jsxs(Gl,{"data-testid":W.DATA_VIEW_DISPLAY_GRID,children:[e.showBulkAll&&d.jsx("div",{className:"topRowBulkAll",children:d.jsx(Pr,{rowCount:e.rowCount,count:e.count,checkedAllPages:e.checkedAllPages,onCheckAllPagesClick:e.onCheckAllPagesClick})}),d.jsx("div",{className:"grid",children:t.map((r,a)=>{var l,u,f,h,g,m;const i=r[e.gridColumnsMap.image],o=r[e.gridColumnsMap.primary],s=r[e.gridColumnsMap.secondary];return d.jsxs("div",{className:`
									cell
									${(l=e.checked)!=null&&l[a]?"checked":""}
								`,"data-testid":W.DATA_VIEW_GRID_ITEM,children:[i&&d.jsxs("div",{className:"image",children:[e.onCheckboxClick&&d.jsx("div",{className:`checkboxContainer ${e.anyChecked&&!((u=e.checked)!=null&&u[a])?"anyChecked":""}`,"data-testid":W.DATA_VIEW_GRID_ITEM_CHECK,children:d.jsx(kt,{className:"checkbox",checked:e.checked[a],onClick:n(a)})}),d.jsxs("div",{className:"imageContainer",children:[d.jsx("div",{className:"overlay"}),i]})]}),d.jsxs("div",{className:"info",children:[d.jsxs("div",{className:"left",children:[o&&d.jsx(kn,{tag:"h2",children:o}),s&&d.jsx(kn,{tag:"h3",children:s})]}),d.jsx("div",{className:"right",children:d.jsx(Ir,{primaryActions:(h=(f=e.rowActions)==null?void 0:f[r.id])==null?void 0:h.primary,additionalActions:(m=(g=e.rowActions)==null?void 0:g[r.id])==null?void 0:m.additional,actionsHidden:e.actionsHidden,originalRowData:r,activeDisplay:"grid",disabled:e.disabled})})]})]},a)})})]})}const Ql={name:"list",label:"List",component:Yl,mIcon:Jn},Jl={name:"grid",label:"Grid",component:Kl,mIcon:Qn},Zl=O.div`
	font-family: ${R.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`,ec=O(wa)`
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
`,tc=e=>{const{open:t,onClose:n,children:r,idx:a,anchor:i="right",display:o,anchorstyle:s,exitCB:l,backdropCloseHandler:u=!0}=e,f=c.useRef();c.useEffect(()=>{f.current=s},[s]);const[h,g]=c.useState({open:!1});c.useEffect(()=>{t===!0&&g({...h,open:!0})},[t]);const m=function(){g({...h,open:!1}),l&&l()},x=(b,w)=>{!u&&w==="backdropClick"||n()};return d.jsx(d.Fragment,{children:d.jsx(ec,{$anchorStyle:{currentStyle:s,previousStyle:f.current},anchor:i,$display:o,open:t,onClose:x,SlideProps:{onExited:m},children:h.open&&d.jsx(Zl,{children:r})},a)})},Fn=O.h2`
  color: ${R.newColors.almostBlack[100]};
  font-size: 20px;
  font-weight: ${R.fontWeight.normal};
  line-height: 24px;
  margin: 0px;
`,nc=O.div`
  display: flex;
  margin-top: 30px;

  & > .left {
    border-right: 2px solid ${R.newColors.grey2[100]};
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
`,rc=O.div`
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
	border-bottom: 1px solid ${R.newColors.grey2[100]};
  	display: flex;
  	padding: 20px 0 20px 0;

	span {
		margin-left: 16px;
		color: ${R.newColors.almostBlack[100]};
		font-weight: ${R.fontWeight.normal};
	}

	.MuiSvgIcon-root {
		color: ${R.newColors.grey3[100]};
	}
`;function ac({name:e,allColumns:t}){const n=t.find(f=>f.name===e);if(!n)throw new Error(`Column "${e}" not found in column list: ${t.map(({name:f})=>f).join(", ")}`);const{attributes:r,listeners:a,setNodeRef:i,transform:o,transition:s,isDragging:l}=Tr({id:n.name}),u={transform:$e.Translate.toString(o),transition:s};return d.jsxs(rc,{...r,...a,ref:i,style:u,$isDragging:l,children:[d.jsx(ln,{}),d.jsx("span",{children:n.label})]})}function ic({activeColumns:e,allColumns:t,onReorder:n}){const r=nr(Ct(Rt),Ct(Tt,{coordinateGetter:Rr}));function a(i){const{active:o,over:s}=i;o.id!==s.id&&n(Ot(e,e.indexOf(o.id),e.indexOf(s.id)))}return d.jsx("div",{children:d.jsx(xr,{sensors:r,collisionDetection:or,onDragEnd:a,autoScroll:{layoutShiftCompensation:!1},modifiers:[Cr,nl],children:d.jsx(Sr,{items:e,strategy:Dr,children:e.map(i=>d.jsx(ac,{name:i,allColumns:t},i))})})})}function oc(e){const[t,n]=c.useState({activeColumns:e.columns.map(l=>l.name),checkedOptions:e.columns.map(l=>({label:l.label,value:l.name}))}),{t:r}=Ne(),a=function(){e.onClose(),e.onChange(t.activeColumns)},i=function(l){n({...t,activeColumns:l.map(u=>u.value),checkedOptions:l})},o=e.allColumns.map(l=>({label:l.label,value:l.name})).sort((l,u)=>l.label.localeCompare(u.label)),s=[{label:r("mosaic:common.cancel"),color:"gray",variant:"outlined",onClick:e.onClose},{label:r("mosaic:common.apply"),onClick:a,color:"yellow",variant:"contained"}];return d.jsxs("div",{children:[d.jsx(ya,{title:r("mosaic:DataView.table_settings"),buttons:s,onBack:e.onClose,backLabel:r("mosaic:DataView.cancel_table_settings")}),d.jsxs(nc,{children:[d.jsxs("div",{className:"left",children:[d.jsx(Fn,{children:r("mosaic:DataView.columns")}),d.jsx(ia,{options:o,checked:t.checkedOptions,onChange:i})]}),d.jsxs("div",{className:"right",children:[d.jsx(Fn,{children:r("mosaic:DataView.column_order")}),d.jsx(ic,{activeColumns:t.activeColumns,onReorder:l=>n({...t,activeColumns:l}),allColumns:e.allColumns})]})]})]})}function sc(e){return d.jsx(tc,{open:e.open,onClose:e.onClose,children:d.jsx(oc,{columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:e.onClose})})}function lc(e){const[t,n]=c.useState({open:!1}),{t:r}=Ne(),a=function(){n({...t,open:!t.open})};return d.jsxs("div",{children:[d.jsx(Y,{color:"black",label:r("mosaic:DataView.columns"),variant:"text",mIcon:xa,onClick:a,size:"small",iconPosition:"left",tooltip:"Update columns and their order"}),e.onChange!==void 0&&d.jsx(sc,{open:t.open,columns:e.columns,allColumns:e.allColumns,onChange:e.onChange,onClose:a})]})}const cc=O.span`
	& .normalButton > button {
		color: ${R.newColors.grey3[100]};
	}

	& .labelIcon {
		font-size: ${R.iconFontSize};
	}
`,uc={"data-testid":W.DATA_VIEW_DISPLAY_CONTROL};function dc(e){const n=e.displayOptions.find(a=>a.name===e.display).mIcon,r=e.displayOptions.map(a=>({value:a.name,label:a.label,mIcon:a.mIcon}));return d.jsx(cc,{children:d.jsx(Y,{variant:"icon",color:"black",mIcon:n,iconPosition:"right",size:"small",menuItems:r,menuValue:e.display,menuOnChange:e.onDisplayChange,attrs:uc})})}const fc=c.memo(dc),hc=O(Y)`
	button {
		font-weight: 400;
	}
`,mc={"data-testid":W.DATA_VIEW_LIMIT_CONTROL};function gc(e){const t=c.useCallback(r=>{e.onLimitChange({limit:Number(r)})},[e.onLimitChange]),n=c.useMemo(function(){return e.options.map(r=>({label:r.toString(),value:r.toString()}))},[e.options]);return d.jsx(hc,{color:"black",label:String(e.limit),variant:"text",size:"small",iconPosition:"right",mIcon:Bt,mIconColor:R.newColors.almostBlack[100],menuItems:n,menuOnChange:t,menuValue:e.limit.toString(),attrs:mc})}const vc=c.memo(gc),bc=O.div`
	font-size: 14px;
	display: inline-flex;
	align-items: center;

	& > input {
		width: 40px;
		margin: 0px 8px;
	}

	&.invalid > input {
		outline: ${R.newColors.darkRed[100]} auto 1px;
	}

	& > .goButton {
		margin-left: 8px;
	}
`;function wc(e){const t=c.useContext(ga),[n,r]=c.useState({currentPage:e.currentPage,invalid:!1}),a=function(s){const l=Number(s.currentTarget.value),u=!Number.isInteger(l)||l<=0||l>e.totalPages;r({...n,invalid:u,currentPage:s.currentTarget.value})},i=()=>{n.invalid!==!0&&(t.onClose(),e.onSkipChange({skip:(n.currentPage-1)*e.limit}))},o=s=>{if(s.key==="Enter")return i()};return d.jsxs(bc,{className:`
				${n.invalid?"invalid":""}
			`,children:[d.jsx("span",{children:"Page"}),d.jsx("input",{type:"text",onKeyDown:o,onChange:a,autoFocus:!0}),d.jsxs("span",{children:["of"," ",e.totalPages]}),d.jsx(Y,{className:"goButton",color:"blue",variant:"contained",size:"small",onClick:i,label:"Go"})]})}const xc=c.memo(wc),Cc=O.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText {
		line-height: 100%;
	}

	span.button:first-child {
		padding-right: 4px;
	}
`,zn=O(Y)`
	svg {
		color: ${e=>e.disabled?R.newColors.simplyGrey[100]:R.newColors.grey3[100]};
	}
`,yc=O.span`
	font-weight: 400;
`,Dc={"aria-label":"Previous Page"},kc={"aria-label":"Next Page"};function pc(e){const{t}=Ne(),n=Math.ceil(e.count/e.limit),r=(e.skip+e.limit)/e.limit,a=e.skip+1,i=Math.min(e.skip+e.limit,e.count),o=u=>()=>{e.onSkipChange({skip:u})},s=r===1,l=r===n;return n===0?null:d.jsxs(Cc,{"data-testid":W.DATA_VIEW_PAGER,children:[d.jsx(Y,{color:"black",variant:"text",size:"small",tooltip:t("mosaic:DataView.jump_to_page"),label:d.jsxs("span",{children:[a,"-",i," ",d.jsx(yc,{children:"of"})," ",e.count]}),popover:d.jsx(xc,{currentPage:r,totalPages:n,limit:e.limit,onSkipChange:e.onSkipChange})}),d.jsx(zn,{color:"gray",variant:"icon",size:"small",mIcon:da,onClick:o(e.skip-e.limit),disabled:s,muiAttrs:Dc}),d.jsx(zn,{color:"gray",variant:"icon",size:"small",mIcon:Ca,onClick:o(e.skip+e.limit),disabled:l,muiAttrs:kc})]})}const Sc=c.memo(pc),Ac=O.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`,Tc=O.div`
	display: flex;

	.custom-checkbox {
		margin-right: 4px;
	}
`;var un={},Rc=De;Object.defineProperty(un,"__esModule",{value:!0});var Nr=un.default=void 0,Ec=Rc(ke()),Mc=ye();Nr=un.default=(0,Ec.default)((0,Mc.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var dn={},Oc=De;Object.defineProperty(dn,"__esModule",{value:!0});var Lr=dn.default=void 0,_c=Oc(ke()),Pc=ye();Lr=dn.default=(0,_c.default)((0,Pc.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");const Ic=O.div`
	${""}
	& > .directionButton svg { font-size: 20px; }
`,jc={"aria-label":"Sort Direction"};function $c(e){const t=c.useMemo(()=>e.columns.filter(s=>s.sortable===!0),[e.columns]),n=c.useMemo(()=>t.map(s=>({label:s.label,value:s.name})),[t]),r=n.find(s=>s.value===e.sort.name),a=c.useMemo(()=>function(){return e.sort.dir==="asc"?d.jsx(Lr,{"data-testid":W.DATA_VIEW_SORT_ASC}):d.jsx(Nr,{"data-testid":W.DATA_VIEW_SORT_DESC})},[e.sort.dir]),i=c.useCallback(function(s){e.onSortChange({name:s,dir:e.sort.dir})},[e.sort,e.onSortChange]),o=c.useCallback(function(){const s=e.sort.dir==="asc"?"desc":"asc";e.onSortChange({name:e.sort.name,dir:s})},[e.sort,e.onSortChange]);return d.jsxs(Ic,{children:[d.jsx(Y,{label:r.label,variant:"text",color:"black",size:"small",menuItems:n,menuOnChange:i,menuValue:e.sort.name}),d.jsx(Y,{className:"directionButton",variant:"icon",color:"black",size:"small",mIcon:a,onClick:o,muiAttrs:jc})]})}const Nc=c.memo($c),Lc=e=>{const{bulkActions:t,columns:n,checked:r,display:a,displayControlEnabled:i,displayOptionsFull:o,limit:s,limitOptions:l,onLimitChange:u,onDisplayChange:f,onSkipChange:h,skip:g,count:m,onColumnsChange:x,activeColumnObjs:b,allColumns:w,onCheckAllClick:v,onSortChange:C,sort:y,allChecked:D,anyChecked:A}=e,p=c.useMemo(()=>l||[25,50,100],[l]),S=C!==void 0&&y!==void 0;return d.jsxs(Ac,{className:`${a}`,"data-testid":W.DATA_VIEW_ACTIONS_ROW,children:[a==="grid"&&d.jsxs(Tc,{children:[v&&d.jsx(kt,{checked:D,indeterminate:!D&&A,onClick:v,disabled:e.disabled}),A&&d.jsx(_r,{data:e.data,checked:r,bulkActions:t,checkedAllPages:e.checkedAllPages})]}),x!==void 0&&a==="list"&&d.jsx(lc,{onChange:x,columns:b,allColumns:w}),d.jsxs(rt,{separator:!0,children:[S&&a==="grid"&&d.jsx(Nc,{columns:n,sort:y,onSortChange:C}),i&&d.jsx(fc,{display:a,displayOptions:o,onDisplayChange:f}),u!==void 0&&s!==void 0&&d.jsx(vc,{limit:s,options:p,onLimitChange:u}),h!==void 0&&g!==void 0&&s!==void 0&&m!==void 0&&d.jsx(Sc,{limit:s,skip:g,count:m,onSkipChange:h})]})]})},Wc=O.div`
	font-family: ${R.fontFamily};
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
		border-bottom: 2px solid ${R.newColors.grey2[100]};
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
`,fu=c.forwardRef(function(t,n){var P;(P=t.activeFilters)==null||P.forEach(k=>{var E;if(!((E=t.filters)==null?void 0:E.some(({name:N})=>N===k)))throw new Error(`Active filter "${k}" is not a valid filter.`)});const{noResults:r="No results were found."}=t,a=t.display||"list",i=c.useMemo(()=>t.displayOptions||[a],[a,t.displayOptions]),o=t.onDisplayChange!==void 0&&i.length>1,s=c.useMemo(()=>t.bulkActions?t.bulkActions.filter(k=>t.checkedAllPages?k.onAllClick:k.onClick):[],[t.bulkActions,t.checkedAllPages]),l=c.useMemo(()=>({checkedAllPages:t.checkedAllPages,data:t.data.filter((k,_)=>{var E;return((E=t.checked)==null?void 0:E.length)>0&&t.checked[_]===!0})}),[t.checked,t.checkedAllPages,t.data]),u=Ft(s,l,"show",!0),f=t.checked!==void 0&&t.onCheckChange!==void 0,h=function(){var E;const k=t.checked.every(N=>N===!0),_=t.checked.map(()=>!k);t.onCheckChange(_),(E=t.onCheckAllPagesChange)==null||E.call(t,!1)},g=function(k){var E;const _=[...t.checked];_[k]=!_[k],t.onCheckChange(_),(E=t.onCheckAllPagesChange)==null||E.call(t,!1)},m=function(){var _,E;const k=t.checkedAllPages?t.checked.map(()=>!1):t.checked;(_=t.onCheckChange)==null||_.call(t,k),(E=t.onCheckAllPagesChange)==null||E.call(t,!t.checkedAllPages)};c.useEffect(()=>{!v.current||!v.current.scrollTo||v.current.scrollTo(0,0)},[t.limit,t.skip,t.display]);const x=c.useMemo(()=>i.map(k=>{if(k==="list")return Ql;if(k==="grid")return Jl;throw new Error("Unknown view option")}),[i]),b=x.find(k=>k.name===a);if(b===void 0)throw new Error(`Display '${a}' is not valid in the passed displayOptions.`);const w=b.component,v=c.useRef(null),C=c.useMemo(()=>t.activeColumns||t.columns.map(k=>k.name),[t.activeColumns,t.columns]),y=c.useMemo(()=>C.map(k=>{const _=t.columns.find(E=>E.name===k);if(!_)throw new Error(`Active column "${k}" is not defined in the columns list.`);return _}),[C,t.columns]),D=t.title||t.buttons||t.filters||t.currentView||t.onViewList||t.onViewSave||t.onViewSaveAs,A=c.useMemo(()=>!!(u.length>0||t.limitOptions||t.onColumnsChange||t.onSortChange||t.sort||o===!0||t.onLimitChange||t.onSkipChange),[u,t.limitOptions,t.onColumnsChange,t.onSortChange,t.sort,o,t.onLimitChange,t.onSkipChange]),p=t.checked!==void 0&&t.checked.length>0&&t.checked.every(k=>k===!0),S=t.checked!==void 0&&t.checked.length>0&&t.checked.some(k=>k===!0),T=(u==null?void 0:u.length)>0&&t.data.length>0&&t.count>t.data.length&&u.some(k=>k.onAllClick!==void 0)&&p&&t.checkedAllPages!==void 0&&t.onCheckAllPagesChange!==void 0,$=(t.checked||[]).some(k=>k),L=c.useMemo(()=>{const k=t.primaryActions||[],_=t.additionalActions||[],E=t.data.reduce((ue,z)=>({...ue,[z.id]:{primary:k.map(Q=>{const de=Dn(Vt(Q.show,{row:z},!0));return{...Q,invisible:a==="list"?!de:!1,show:a==="list"?!0:de}}),additional:_.filter(Q=>Dn(Vt(Q.show,{row:z},!0)))}}),{});if(a==="grid")return E;const N=Object.keys(E),H=k.map((ue,z)=>N.some(Q=>!E[Q].primary[z].invisible));return N.reduce((ue,z)=>({...ue,[z]:{...E[z],primary:E[z].primary.filter((Q,de)=>!!H[de])}}),{})},[t.primaryActions,t.additionalActions,t.data,a]);return d.jsxs(Wc,{"aria-busy":!!t.loading,className:`
				${t.loading?"loading":""}
				${t.sticky?"sticky":""}
			`,ref:n,"data-testid":W.DATA_VIEW,...t.attrs||{},children:[D&&d.jsx("div",{className:"headerRow title",children:d.jsx(To,{title:t.title,onBack:t.onBack,backLabel:t.backLabel,buttons:t.buttons,filter:t.filter,filters:t.filters,activeFilters:t.activeFilters,onActiveFiltersChange:t.onActiveFiltersChange,disabled:t.disabled,currentView:t.currentView,onViewSave:t.onViewSave,onViewSaveAs:t.onViewSaveAs,onViewList:t.onViewList})}),A&&d.jsx("div",{className:"headerActions",children:d.jsx(Lc,{activeColumnObjs:y,columns:t.columns,bulkActions:u,checked:t.checked,display:a,displayControlEnabled:o,displayOptionsFull:x,limit:t.limit,limitOptions:t.limitOptions,onLimitChange:t.onLimitChange,onDisplayChange:t.onDisplayChange,onSkipChange:t.onSkipChange,skip:t.skip,count:t.count,allColumns:t.columns,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onSortChange:t.onSortChange,sort:t.sort,data:t.data,checkedAllPages:t.checkedAllPages,allChecked:p,anyChecked:S,disabled:t.disabled})}),d.jsx("div",{ref:v,className:`
					viewContainer
				`,children:d.jsx(w,{checked:t.checked,checkedAllPages:t.checkedAllPages,columns:t.columns,bulkActions:u,sort:t.sort,data:t.data,disabled:t.disabled,rowActions:L,activeColumns:t.activeColumns,gridColumnsMap:t.gridColumnsMap,limit:t.limit,count:t.count,rowCount:t.data.length,activeColumnObjs:y,onSortChange:t.onSortChange,onColumnsChange:t.onColumnsChange,onCheckAllClick:f?h:void 0,onCheckboxClick:f?g:void 0,onCheckAllPagesClick:m,onReorder:t.onReorder,showBulkAll:T,allChecked:p,anyChecked:S,actionsHidden:$||void 0})}),!t.loading&&!t.data.length&&(typeof r=="string"?d.jsx("div",{className:"noResults",children:d.jsx("p",{children:r})}):r)]})});ca({prefix:"DataView",bundle:la});const Bc=O.button`
  background: ${R.newColors.grey1[100]};
  border: ${R.borders.simplyGrey};
  cursor: pointer;
  margin-bottom: ${({$displayColorPicker:e})=>e?"8px":0};
  opacity: ${({$disabled:e})=>e?.5:1};
  padding: 10px;
  width: fit-content;
`,Vc=O.div`
  ${({$color:e})=>e.r!==void 0&&e.b!==void 0&&e.b!==void 0&&e.a!==void 0?`background: rgba(${e.r}, ${e.g}, ${e.b}, ${e.a});`:`background: ${e};`}
  height: 31px;
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  width: 80px;
`,hu=O(va)`
`,mu=e=>{const{disabled:t,color:n,onClick:r,displayColorPicker:a,id:i}=e;return d.jsx(Bc,{$disabled:t,$displayColorPicker:a,onClick:r,type:"button",id:i,children:d.jsx(Vc,{"data-testid":"colordiv-test",$disabled:t,$color:n})})};export{zl as A,Ft as B,mu as C,tc as D,hu as P,Vi as _,fu as a,vt as b,Ba as c,Ae as d,$a as e,du as f,Xn as g,pt as h,Xa as i,Tn as j,qa as k,za as l,uu as m,Oa as n,Ua as o,Ti as p,Ea as q,q as r,bt as s,ce as t,Ta as u,ji as v,Ma as w,I as x,Vt as y,Jn as z};
