import{g as C}from"./index-BP8_t0zE.js";import{_ as j,i as O,a as A}from"./isSymbol-CEVJpixJ.js";var L=j,M=function(){return L.Date.now()},B=M,F=/\s/;function R(e){for(var r=e.length;r--&&F.test(e.charAt(r)););return r}var D=R,H=D,P=/^\s+/;function U(e){return e&&e.slice(0,H(e)+1).replace(P,"")}var X=U,q=X,_=O,w=A,y=NaN,z=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;function Q(e){if(typeof e=="number")return e;if(w(e))return y;if(_(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=_(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=q(e);var i=G.test(e);return i||J.test(e)?K(e.slice(2),i?2:8):z.test(e)?y:+e}var V=Q,Y=O,T=B,$=V,Z="Expected a function",ee=Math.max,ne=Math.min;function re(e,r,i){var o,s,l,u,t,f,d=0,I=!1,m=!1,b=!0;if(typeof e!="function")throw new TypeError(Z);r=$(r)||0,Y(i)&&(I=!!i.leading,m="maxWait"in i,l=m?ee($(i.maxWait)||0,r):l,b="trailing"in i?!!i.trailing:b);function g(n){var a=o,c=s;return o=s=void 0,d=n,u=e.apply(c,a),u}function S(n){return d=n,t=setTimeout(v,r),I?g(n):u}function k(n){var a=n-f,c=n-d,E=r-a;return m?ne(E,l-c):E}function h(n){var a=n-f,c=n-d;return f===void 0||a>=r||a<0||m&&c>=l}function v(){var n=T();if(h(n))return p(n);t=setTimeout(v,k(n))}function p(n){return t=void 0,b&&o?g(n):(o=s=void 0,u)}function N(){t!==void 0&&clearTimeout(t),d=0,o=f=s=t=void 0}function W(){return t===void 0?u:p(T())}function x(){var n=T(),a=h(n);if(o=arguments,s=this,f=n,a){if(t===void 0)return S(f);if(m)return clearTimeout(t),t=setTimeout(v,r),g(f)}return t===void 0&&(t=setTimeout(v,r)),u}return x.cancel=N,x.flush=W,x}var te=re;const fe=C(te);export{te as a,fe as d};
