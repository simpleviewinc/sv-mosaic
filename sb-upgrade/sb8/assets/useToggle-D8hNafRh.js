import{r as u}from"./index-CDs2tPxN.js";function a(r,s=!0){const e=r!==void 0?r:s,t=Array.isArray(e)?e:[e],o=n=>typeof n=="function"?n():n;return s?t.every(o):t.some(o)}function f(r,s,e=!0){const t=Array.isArray(r),o=u.useMemo(()=>t?r:[r],[t,r]),n=u.useMemo(()=>o.filter(c=>a(c[s],e)),[e,o,s]);return t?n:n.length>0}export{a as g,f as u};
