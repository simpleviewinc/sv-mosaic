import{j as s,r as ct}from"./jsx-runtime-nGUw9YhZ.js";import{s as N}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as b,t as x}from"./theme-DRtZtbPc.js";import{t as D}from"./testIds-DZf96GK8.js";import{B as et}from"./ButtonRow-DWtIszZP.js";import"./Typography-Br_RMLnS.js";import{S as ut}from"./SubtitleText-Vdwjg1jD.js";import{d as H}from"./Add-DakDrsh-.js";import{i as dt}from"./styled-hJgfyZIG.js";import{r as lt}from"./createSvgIcon-DE5yaevU.js";import{d as ht}from"./Create-CpnV7q0W.js";import{d as mt}from"./Delete-Bd9yuHmM.js";import{D as A}from"./formats-sBod7wm8.js";const ft={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gt=(t,e,n)=>{let r;const a=ft[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function R(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const wt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pt={date:R({formats:wt,defaultWidth:"full"}),time:R({formats:yt,defaultWidth:"full"}),dateTime:R({formats:bt,defaultWidth:"full"})},vt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xt=(t,e,n,r)=>vt[t];function C(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,u=n!=null&&n.width?String(n.width):i;a=t.formattingValues[u]||t.formattingValues[i]}else{const i=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const kt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Pt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Mt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Dt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},St=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Tt={ordinalNumber:St,era:C({values:kt,defaultWidth:"wide"}),quarter:C({values:Ot,defaultWidth:"wide",argumentCallback:t=>t-1}),month:C({values:Pt,defaultWidth:"wide"}),day:C({values:Mt,defaultWidth:"wide"}),dayPeriod:C({values:Dt,defaultWidth:"wide",formattingValues:Ct,defaultFormattingWidth:"wide"})};function S(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?At(u,w=>w.test(i)):Wt(u,w=>w.test(i));let l;l=t.valueCallback?t.valueCallback(d):d,l=n.valueCallback?n.valueCallback(l):l;const m=e.slice(i.length);return{value:l,rest:m}}}function Wt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function At(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function jt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const u=e.slice(a.length);return{value:i,rest:u}}}const Yt=/^(\d+)(th|st|nd|rd)?/i,Et=/\d+/i,Ft={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qt={any:[/^b/i,/^(a|c)/i]},_t={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},It={any:[/1/i,/2/i,/3/i,/4/i]},Rt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Bt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ht={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Lt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Gt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Qt={ordinalNumber:jt({matchPattern:Yt,parsePattern:Et,valueCallback:t=>parseInt(t,10)}),era:S({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),quarter:S({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any",valueCallback:t=>t+1}),month:S({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),day:S({matchPatterns:Bt,defaultMatchWidth:"wide",parsePatterns:Ht,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:Lt,defaultMatchWidth:"any",parsePatterns:Gt,defaultParseWidth:"any"})},Xt={code:"en-US",formatDistance:gt,formatLong:pt,formatRelative:xt,localize:Tt,match:Qt,options:{weekStartsOn:0,firstWeekContainsDate:1}};let $t={};function _(){return $t}const nt=6048e5,Vt=864e5;function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function L(t){const e=g(t);return e.setHours(0,0,0,0),e}function G(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Jt(t,e){const n=L(t),r=L(e),a=+n-G(n),o=+r-G(r);return Math.round((a-o)/Vt)}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function zt(t){const e=g(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Zt(t){const e=g(t);return Jt(e,zt(e))+1}function W(t,e){var u,d,l,m;const n=_(),r=(e==null?void 0:e.weekStartsOn)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((m=(l=n.locale)==null?void 0:l.options)==null?void 0:m.weekStartsOn)??0,a=g(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function q(t){return W(t,{weekStartsOn:1})}function rt(t){const e=g(t),n=e.getFullYear(),r=k(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=q(r),o=k(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=q(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Ut(t){const e=rt(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),q(n)}function Kt(t){const e=g(t),n=+q(e)-+Ut(e);return Math.round(n/nt)+1}function at(t,e){var m,w,P,M;const n=g(t),r=n.getFullYear(),a=_(),o=(e==null?void 0:e.firstWeekContainsDate)??((w=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((M=(P=a.locale)==null?void 0:P.options)==null?void 0:M.firstWeekContainsDate)??1,i=k(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const u=W(i,e),d=k(t,0);d.setFullYear(r,0,o),d.setHours(0,0,0,0);const l=W(d,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function te(t,e){var u,d,l,m;const n=_(),r=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(l=n.locale)==null?void 0:l.options)==null?void 0:m.firstWeekContainsDate)??1,a=at(t,e),o=k(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),W(o,e)}function ee(t,e){const n=g(t),r=+W(n,e)-+te(n,e);return Math.round(r/nt)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){const a=at(t,r),o=a>0?a:1-a;if(e==="YY"){const i=o%100;return c(i,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=rt(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=ee(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=Kt(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const r=Zt(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=O.noon:r===0?a=O.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=O.evening:r>=12?a=O.afternoon:r>=4?a=O.morning:a=O.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return $(r);case"XXXX":case"XX":return p(r);case"XXXXX":case"XXX":default:return p(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return $(r);case"xxxx":case"xx":return p(r);case"xxxxx":case"xxx":default:return p(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(r,":");case"OOOO":default:return"GMT"+p(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(r,":");case"zzzz":default:return"GMT"+p(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return c(r,e.length)},T:function(t,e,n){const r=t.getTime();return c(r,e.length)}};function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+c(o,2)}function $(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):p(t,e)}function p(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),o=c(r%60,2);return n+a+e+o}const V=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ot=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ne=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return V(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",V(r,e)).replace("{{time}}",ot(a,e))},re={p:ot,P:ne},ae=/^D+$/,oe=/^Y+$/,ie=["D","DD","YY","YYYY"];function se(t){return ae.test(t)}function ce(t){return oe.test(t)}function ue(t,e,n){const r=de(t,e,n);if(console.warn(r),ie.includes(t))throw new RangeError(r)}function de(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}function le(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function he(t){if(!le(t)&&typeof t!="number")return!1;const e=g(t);return!isNaN(Number(e))}const me=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ge=/^'([^]*?)'?$/,we=/''/g,ye=/[a-zA-Z]/;function j(t,e,n){var m,w,P,M;const r=_(),a=r.locale??Xt,o=r.firstWeekContainsDate??((w=(m=r.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??1,i=r.weekStartsOn??((M=(P=r.locale)==null?void 0:P.options)==null?void 0:M.weekStartsOn)??0,u=g(t);if(!he(u))throw new RangeError("Invalid time value");let d=e.match(fe).map(f=>{const h=f[0];if(h==="p"||h==="P"){const I=re[h];return I(f,a.formatLong)}return f}).join("").match(me).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const h=f[0];if(h==="'")return{isToken:!1,value:be(f)};if(Q[h])return{isToken:!0,value:f};if(h.match(ye))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(d=a.localize.preprocessor(u,d));const l={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return d.map(f=>{if(!f.isToken)return f.value;const h=f.value;(ce(h)||se(h))&&ue(h,e,String(t));const I=Q[h[0]];return I(u,h,a.localize,l)}).join("")}function be(t){const e=t.match(ge);return e?e[1].replace(we,"'"):t}const pe=b.div`
	border: 2px solid ${x.newColors.grey2[100]};
	font-family: ${x.fontFamily};
	width: 100%;
`,ve=b.div`
	align-items: center;
  	background: ${x.newColors.grey2[100]};
	display: flex;
	padding: 8px 16px;
	gap: 8px;
`,xe=b.div`
	display: flex;
	align-items: center;
	gap: 8px;

	& .MuiSvgIcon-root {
		color: ${x.newColors.almostBlack[100]};
		width: 16px;
	}
`,ke=b.span`
	font-size: 14px;
`,Oe=b(et)`
	margin-left: auto;
`,Pe=b.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
`,Me=b.div`
	padding: 0 16px;
`,De=b.hr`
	border-top: 1px solid ${x.newColors.grey2[100]};
`,it=t=>{const{bottomActions:e,content:n,count:r,showZeroCount:a,title:o,titleIcon:i,topActions:u}=t;return s.jsxs(pe,{"data-testid":D.CARD,children:[s.jsxs(ve,{"data-testid":D.CARD_HEADING,children:[s.jsxs(xe,{children:[i&&s.jsx(i,{"data-testid":D.CARD_TITLE_ICON}),s.jsx(ut,{maxLines:1,children:o})]}),r!==void 0&&(r!==0||a)&&s.jsxs(ke,{"data-testid":D.CARD_COUNT,children:["(",r,")"]}),(u==null?void 0:u.length)>0&&s.jsx(Oe,{className:"Foo",buttons:u})]}),s.jsx(Me,{children:n.map((d,l)=>s.jsxs("div",{"data-testid":D.CARD_ITEM,children:[d,l!==n.length-1&&s.jsx(De,{})]},l))}),(e==null?void 0:e.length)>0&&s.jsx(Pe,{children:s.jsx(et,{buttons:e})})]})};var B={},Ce=dt;Object.defineProperty(B,"__esModule",{value:!0});var st=B.default=void 0,Se=Ce(lt()),Te=ct();st=B.default=(0,Se.default)((0,Te.jsx)("path",{d:"M20 0H4v2h16zM4 24h16v-2H4zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"}),"Contacts");const We={title:"Components/Card"},Y=N.div`
  margin: 32px 0 32px 0;
`,E=N.p`
  color: ${x.newColors.grey4[100]};
  font-size: 14px;
  margin-bottom: 8px;
`,F=N.span`
  color: ${x.newColors.grey3[100]};
  font-size: 14px;
`,Ae=[s.jsx("p",{children:"First Element"},"p-key-1"),s.jsx("p",{children:"Second Element"},"p-key-2"),s.jsxs("div",{children:[s.jsx("p",{children:"Paragraph"},"div-p-key-1"),s.jsx("button",{children:"Button"},"div-button-key-1")]},"div-key")],v=({showTitleIcon:t,showTopAction:e,showBottomAction:n,quantityOfTopActions:r,quantityOfBottomActions:a,count:o,showZeroCount:i})=>{const u=[{color:"black",variant:"icon",onClick:()=>alert("+ icon clicked"),mIcon:H,show:()=>r>0},{label:"Save",onClick:()=>alert("Save button clicked"),color:"yellow",variant:"contained",show:()=>r>1},{label:"Remove",onClick:()=>alert("Remove button clicked"),color:"gray",variant:"outlined",mIcon:mt,show:()=>r>2}],d=[{color:"teal",label:"Add a new task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:H,show:()=>a>0},{color:"teal",label:"Edit task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:ht,show:()=>a>1},{label:"Go to tasks",onClick:()=>alert("Go to tasks clicked"),color:"yellow",variant:"contained",show:()=>a>2}];return s.jsx(it,{content:Ae,title:"Section Title",titleIcon:t&&st,topActions:e&&u,bottomActions:n&&d,count:o!==void 0&&o>=0?o:void 0,showZeroCount:i})};v.args={showTitleIcon:!0,showTopAction:!0,showBottomAction:!0,quantityOfTopActions:1,quantityOfBottomActions:1,count:0,showZeroCount:!1};v.argTypes={showTitleIcon:{name:"Show Title Icon"},showTopAction:{name:"Show Top Action"},showBottomAction:{name:"Show Bottom Action"},quantityOfTopActions:{options:[0,1,2,3],control:{type:"select"},name:"Top Actions"},quantityOfBottomActions:{options:[0,1,2,3],control:{type:"select"},name:"Bottom Actions"},count:{name:"Count"},showZeroCount:{name:"Display Zero Count"}};const je=[s.jsxs(Y,{children:[s.jsx(E,{children:"First Activity"}),s.jsx(F,{children:j(new Date,A)})]},"activity-1"),s.jsxs(Y,{children:[s.jsx(E,{children:"Second Activity"}),s.jsx(F,{children:j(new Date,A)})]},"activity-2"),s.jsxs(Y,{children:[s.jsx(E,{children:"Third Activity"}),s.jsx(F,{children:j(new Date,A)})]},"activity-3"),s.jsxs(Y,{children:[s.jsx(E,{children:"Fourth Activity"}),s.jsx(F,{children:j(new Date,A)})]},"activity-4")],T=()=>s.jsx(it,{title:"Recent Activity",content:je,topActions:[{color:"teal",label:"Show All",variant:"text",onClick:()=>alert("Show all clicked")}]});var J,z,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`({
  showTitleIcon,
  showTopAction,
  showBottomAction,
  quantityOfTopActions,
  quantityOfBottomActions,
  count,
  showZeroCount
}: typeof Playground.args): ReactElement => {
  const topActions: ButtonProps[] = [{
    color: "black",
    variant: "icon",
    onClick: () => alert("+ icon clicked"),
    mIcon: AddIcon,
    show: () => quantityOfTopActions > 0
  }, {
    label: "Save",
    onClick: () => alert("Save button clicked"),
    color: "yellow",
    variant: "contained",
    show: () => quantityOfTopActions > 1
  }, {
    label: "Remove",
    onClick: () => alert("Remove button clicked"),
    color: "gray",
    variant: "outlined",
    mIcon: DeleteIcon,
    show: () => quantityOfTopActions > 2
  }];
  const bottomActions: ButtonProps[] = [{
    color: "teal",
    label: "Add a new task",
    variant: "text",
    onClick: () => alert("Add new task clicked"),
    mIcon: AddIcon,
    show: () => quantityOfBottomActions > 0
  }, {
    color: "teal",
    label: "Edit task",
    variant: "text",
    onClick: () => alert("Add new task clicked"),
    mIcon: CreateIcon,
    show: () => quantityOfBottomActions > 1
  }, {
    label: "Go to tasks",
    onClick: () => alert("Go to tasks clicked"),
    color: "yellow",
    variant: "contained",
    show: () => quantityOfBottomActions > 2
  }];
  return <Card content={content} title="Section Title" titleIcon={showTitleIcon && ContactsIcon} topActions={showTopAction && topActions} bottomActions={showBottomAction && bottomActions} count={count !== undefined && count >= 0 ? count : undefined} showZeroCount={showZeroCount} />;
}`,...(Z=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var U,K,tt;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`(): ReactElement => {
  return <Card title="Recent Activity" content={recentActivityContent} topActions={[{
    color: "teal",
    label: "Show All",
    variant: "text",
    onClick: () => alert("Show all clicked")
  }]} />;
}`,...(tt=(K=T.parameters)==null?void 0:K.docs)==null?void 0:tt.source}}};const Ye=["Playground","RecentActivity"],$e=Object.freeze(Object.defineProperty({__proto__:null,Playground:v,RecentActivity:T,__namedExportsOrder:Ye,default:We},Symbol.toStringTag,{value:"Module"}));export{v as P,T as R,$e as s};
