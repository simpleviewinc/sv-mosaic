import{r as v,j as n}from"./jsx-runtime-EKYJJIwR.js";import{g as u,r as g}from"./index-D0AnReJb.js";import{S as P}from"./SideNav-gxpUnRHC.js";import{A as E}from"./AccountCircle-Dzn4yrb0.js";import{H as R}from"./Home-BptBjTMc.js";import{r as d}from"./styled-Cb9FMILg.js";import{r as p}from"./createSvgIcon-DtczVsqP.js";import{O as q,T as L}from"./TaskAlt-RXyojKCJ.js";import{A as V}from"./AddCircleOutline-Dbx-uNcC.js";import{t as f,a as b}from"./toggleOptions-1cXvXfFl.js";var l={},C;function O(){if(C)return l;C=1;var i=d();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=i(p()),o=v();return l.default=(0,t.default)((0,o.jsx)("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"}),"Collections"),l}var T=O();const z=u(T);var c={},k;function F(){if(k)return c;k=1;var i=d();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t=i(p()),o=v();return c.default=(0,t.default)((0,o.jsx)("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"}),"EventNote"),c}var G=F();const U=u(G);var m={},x;function J(){if(x)return m;x=1;var i=d();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var t=i(p()),o=v();return m.default=(0,t.default)((0,o.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder"),m}var W=J();const $=u(W);var h={},y;function B(){if(y)return h;y=1;var i=d();Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var t=i(p()),o=v();return h.default=(0,t.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link"),h}var K=B();const w=u(K),Q={title:"Components/SideNav"},A=n.jsx("h1",{children:"Welcome home!"}),r=({parentHeight:i,showAssets:t,showMapPublisher:o,showDynamicContent:N})=>{const[M,a]=g.useState(A),[I,s]=g.useState("home"),H=e=>{s(e.item.name),a(n.jsx("h1",{children:e.item.label}))},D=g.useMemo(()=>[[{label:"Home",name:"home",icon:R,onNav:e=>{s(e.item.name),a(A)}},{label:"Accounts",name:"accounts",icon:E},{label:"Gallery",name:"gallery",icon:z},{label:"Visitors",name:"visitors"},{label:"Sitemap",name:"sitemap",onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Sitemap"}))}},{label:"SV Link - Standard",name:"sv_link",icon:w,attrs:{href:"https://www.simpleviewinc.com/"}},{label:"SV Link - Custom",name:"sv_link-custom",icon:w,attrs:{href:"https://www.simpleviewinc.com/"},onNav:e=>{s(e.item.name),a(n.jsx("h1",{style:{background:"#444",color:"white",padding:10},children:"This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav"}))}},{label:"Google",name:"google",icon:w,attrs:{href:"https://www.google.co.uk"},onNav:!1},{label:"Google (New Tab)",name:"google-new",icon:q,attrs:{href:"https://www.google.co.uk",target:"_blank"},onNav:!1}],[{label:"Assets",name:"assets",onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Assets"}))},show:f[t]},{label:"Map Publisher",name:"map-publisher",onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Map Publisher"}))},show:f[o]},{label:"Dynamic Content",name:"dynamic-content",onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Dynamic Content"}))},show:f[N]}],[{label:"Tasks",name:"tasks",badge:"10",icon:L,onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Tasks"}))},action:{icon:V,onClick:()=>alert("Add task clicked")}},{label:"Documents",name:"documents",icon:$,onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Documents"}))}},{label:"Notes",name:"notes",badge:"00",icon:U,onNav:e=>{s(e.item.name),a(n.jsx("h1",{children:"Notes"}))}}]],[t,o,N]);return n.jsxs("div",{style:{display:"flex",height:i},children:[n.jsx(P,{items:D,active:I,onNav:H}),n.jsx("div",{children:M})]})};r.args={parentHeight:500,showAssets:"Undefined",showMapPublisher:"Undefined",showDynamicContent:"Undefined"};r.argTypes={parentHeight:{name:"Parent height (px)"},showAssets:{name:"Show Assets",control:{type:"select"},options:b},showMapPublisher:{name:"Show Map Publisher",control:{type:"select"},options:b},showDynamicContent:{name:"Show Dynamic Content",control:{type:"select"},options:b}};var S,_,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  parentHeight,
  showAssets,
  showMapPublisher,
  showDynamicContent
}: typeof Playground.args): ReactElement => {
  const [content, setContent] = useState<ReactElement>(homeContent);
  const [active, setActive] = useState("home");
  const onNav = (args: SideNavArgs) => {
    setActive(args.item.name);
    setContent(<h1>{args.item.label}</h1>);
  };
  const items = useMemo<Item[][]>(() => [[{
    label: "Home",
    name: "home",
    icon: HomeIcon,
    onNav: args => {
      setActive(args.item.name);
      setContent(homeContent);
    }
  }, {
    label: "Accounts",
    name: "accounts",
    icon: AccountCircleIcon
  }, {
    label: "Gallery",
    name: "gallery",
    icon: CollectionsIcon
  }, {
    label: "Visitors",
    name: "visitors"
  }, {
    label: "Sitemap",
    name: "sitemap",
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Sitemap</h1>);
    }
  }, {
    label: "SV Link - Standard",
    name: "sv_link",
    icon: Link,
    attrs: {
      href: "https://www.simpleviewinc.com/"
    }
  }, {
    label: "SV Link - Custom",
    name: "sv_link-custom",
    icon: Link,
    attrs: {
      href: "https://www.simpleviewinc.com/"
    },
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1 style={{
        background: "#444",
        color: "white",
        padding: 10
      }}>This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav</h1>);
    }
  }, {
    label: "Google",
    name: "google",
    icon: Link,
    attrs: {
      href: "https://www.google.co.uk"
    },
    onNav: false
  }, {
    label: "Google (New Tab)",
    name: "google-new",
    icon: OpenInNew,
    attrs: {
      href: "https://www.google.co.uk",
      target: "_blank"
    },
    onNav: false
  }], [{
    label: "Assets",
    name: "assets",
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Assets</h1>);
    },
    show: toggleMap[showAssets]
  }, {
    label: "Map Publisher",
    name: "map-publisher",
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Map Publisher</h1>);
    },
    show: toggleMap[showMapPublisher]
  }, {
    label: "Dynamic Content",
    name: "dynamic-content",
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Dynamic Content</h1>);
    },
    show: toggleMap[showDynamicContent]
  }], [{
    label: "Tasks",
    name: "tasks",
    badge: "10",
    icon: TaskAltIcon,
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Tasks</h1>);
    },
    action: {
      icon: AddCircleOutlineIcon,
      onClick: () => alert("Add task clicked")
    }
  }, {
    label: "Documents",
    name: "documents",
    icon: FolderIcon,
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Documents</h1>);
    }
  }, {
    label: "Notes",
    name: "notes",
    badge: "00",
    icon: EventNoteIcon,
    onNav: args => {
      setActive(args.item.name);
      setContent(<h1>Notes</h1>);
    }
  }]], [showAssets, showMapPublisher, showDynamicContent]);
  return <div style={{
    display: "flex",
    height: parentHeight
  }}>
            <SideNav items={items} active={active} onNav={onNav} />
            <div>{content}</div>
        </div>;
}`,...(j=(_=r.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const X=["Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{r as P,le as s};
