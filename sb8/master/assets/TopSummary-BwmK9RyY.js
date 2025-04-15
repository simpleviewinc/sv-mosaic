import{r as v,j as t}from"./jsx-runtime-EKYJJIwR.js";import{g as j,r as d}from"./index-DDfD_3TG.js";import{M as I}from"./MoreVert-cizeWCO8.js";import{h as S}from"./generateUtilityClasses-Dav9K5Jg.js";import{r as y}from"./createSvgIcon-ryN2wBPb.js";import{t as c,s as o}from"./theme-DWrYR5Gu.js";import{I as M}from"./Image-VvQrOvIH.js";import{B as _}from"./Button-_6SRCSsN.js";import{T as q}from"./TitleWrapper-CEGR9Ons.js";import{B as f}from"./ButtonRow-5AdSMJlC.js";import{u as C}from"./useToggle-BK_3QGB6.js";import{t as T}from"./testIds-Dso8kRSM.js";var n={},w;function $(){if(w)return n;w=1;var r=S();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(y()),i=v();return n.default=(0,a.default)((0,i.jsx)("path",{d:"m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"}),"StarRateRounded"),n}var E=$();const z=j(E);var s={},R;function D(){if(R)return s;R=1;var r=S();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=r(y()),i=v();return s.default=(0,a.default)((0,i.jsx)("path",{d:"m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorderRounded"),s}var L=D();const P=j(L),F=o.div`
  background: white;
  border-bottom: 2px solid ${c.newColors.grey2[100]};
  color: ${c.newColors.almostBlack[100]};
  font-family: ${c.fontFamily};
  padding: 24px 24px 16px 24px;
  display: flex;
  gap: 24px;
  align-items: center;

  .img-rounded {
    width: 71px;
    height: 71px;
    border: 2px solid ${c.newColors.grey2[100]};
    border-radius: 50%;
    opacity: 1;
  }
`,O=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`,N=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & h1 {
    max-width: 650px;
  }

  & .checked,
  .unchecked {
    margin-left: 6px;
  }
`,g=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;o.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div:last-child {
    border: none;
  }
`;const H=o.div`
  & p,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 0px;
    font-size: 14px;
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,J=r=>{const{title:a,onBack:i,backLabel:b,favorite:e,img:p,descriptionItems:x}=r,h=d.useMemo(()=>r.mainActions||[],[r.mainActions]),k=d.useMemo(()=>r.additionalActions||[],[r.additionalActions]),l=C(k,"show"),m=d.useMemo(()=>l.length>0?{color:"black",variant:"icon",tooltip:"More Actions",mIcon:I,menuItems:l,muiAttrs:{"data-testid":"btn-additional-action"}}:null,[l]),A=d.useMemo(()=>[...h.map(u=>({...u,attrs:{$smallText:!0},size:"small",muiAttrs:{"data-testid":"btn-main-action"}})),...m?[m]:[]],[h,m]);return t.jsxs(F,{"data-testid":T.TOP_SUMMARY,children:[p&&t.jsx(M,{className:"img-rounded",src:p}),t.jsxs(O,{children:[t.jsxs(g,{children:[t.jsxs(N,{children:[t.jsx(q,{title:a,onBack:i,backLabel:b}),e&&t.jsx(t.Fragment,{children:t.jsx(_,{className:`${e!=null&&e.checked?"checked":"unchecked"}`,color:`${e!=null&&e.checked?"yellow":"gray"}`,variant:"icon",mIcon:e!=null&&e.checked?z:P,onClick:()=>e.onClick(!(e!=null&&e.checked))})})]}),t.jsx(f,{separator:!0,wrap:!0,buttons:A})]}),t.jsx(g,{children:x&&t.jsx(f,{separator:!0,wrap:!0,children:x.map((u,B)=>t.jsx(H,{"data-testid":"description-item",children:u},B))})})]})]})},oe=d.memo(J);export{oe as T};
