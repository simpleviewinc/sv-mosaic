import{i as n}from"./Form-DsDAv5pr.js";function i(r){if(!r)return;const e=r.match(/^(?:(\d{4})-(\d{2})-(\d{2})-)?(\d{2})-(\d{2})?$/);if(!e)return;const t=e.slice(1).filter(Boolean).map(Number);if(t.length===2)return`${t[0]}:${t[1]}`;const a=new Date(t[0],t[1]-1,t[2],t[3],t[4]);if(n(a))return a}export{i as p};
