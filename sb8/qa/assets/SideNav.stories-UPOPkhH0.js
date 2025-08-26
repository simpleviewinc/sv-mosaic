import{r as p,j as n}from"./jsx-runtime-EKYJJIwR.js";import{g,r as h}from"./index-D0AnReJb.js";import{S as H}from"./SideNav-CFjdJbjv.js";import{A as D}from"./AccountCircle-Dzn4yrb0.js";import{H as P}from"./Home-BptBjTMc.js";import{r as b}from"./styled-Cb9FMILg.js";import{r as w}from"./createSvgIcon-DtczVsqP.js";import{O as E,T as R}from"./TaskAlt-RXyojKCJ.js";import{A as q}from"./AddCircleOutline-Dbx-uNcC.js";import{L as v}from"./Link-bDQN_e0H.js";import{t as d,a as u}from"./toggleOptions-1cXvXfFl.js";var l={},N;function T(){if(N)return l;N=1;var i=b();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=i(w()),s=p();return l.default=(0,a.default)((0,s.jsx)("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"}),"Collections"),l}var V=T();const L=g(V);var c={},C;function O(){if(C)return c;C=1;var i=b();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var a=i(w()),s=p();return c.default=(0,a.default)((0,s.jsx)("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"}),"EventNote"),c}var F=O();const z=g(F);var m={},k;function G(){if(k)return m;k=1;var i=b();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var a=i(w()),s=p();return m.default=(0,a.default)((0,s.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder"),m}var U=G();const J=g(U),W={title:"Components/SideNav"},y=n.jsx("h1",{children:"Welcome home!"}),r=({parentHeight:i,showAssets:a,showMapPublisher:s,showDynamicContent:f})=>{const[_,t]=h.useState(y),[j,o]=h.useState("home"),I=e=>{o(e.item.name),t(n.jsx("h1",{children:e.item.label}))},M=h.useMemo(()=>[[{label:"Home",name:"home",icon:P,onNav:e=>{o(e.item.name),t(y)}},{label:"Accounts",name:"accounts",icon:D},{label:"Gallery",name:"gallery",icon:L},{label:"Visitors",name:"visitors"},{label:"Sitemap",name:"sitemap",onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Sitemap"}))}},{label:"SV Link - Standard",name:"sv_link",icon:v,attrs:{href:"https://www.simpleviewinc.com/"}},{label:"SV Link - Custom",name:"sv_link-custom",icon:v,attrs:{href:"https://www.simpleviewinc.com/"},onNav:e=>{o(e.item.name),t(n.jsx("h1",{style:{background:"#444",color:"white",padding:10},children:"This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav"}))}},{label:"Google",name:"google",icon:v,attrs:{href:"https://www.google.co.uk"},onNav:!1},{label:"Google (New Tab)",name:"google-new",icon:E,attrs:{href:"https://www.google.co.uk",target:"_blank"},onNav:!1}],[{label:"Assets",name:"assets",onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Assets"}))},show:d[a]},{label:"Map Publisher",name:"map-publisher",onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Map Publisher"}))},show:d[s]},{label:"Dynamic Content",name:"dynamic-content",onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Dynamic Content"}))},show:d[f]}],[{label:"Tasks",name:"tasks",badge:"10",icon:R,onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Tasks"}))},action:{icon:q,onClick:()=>alert("Add task clicked")}},{label:"Documents",name:"documents",icon:J,onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Documents"}))}},{label:"Notes",name:"notes",badge:"00",icon:z,onNav:e=>{o(e.item.name),t(n.jsx("h1",{children:"Notes"}))}}]],[a,s,f]);return n.jsxs("div",{style:{display:"flex",height:i},children:[n.jsx(H,{items:M,active:j,onNav:I}),n.jsx("div",{children:_})]})};r.args={parentHeight:500,showAssets:"Undefined",showMapPublisher:"Undefined",showDynamicContent:"Undefined"};r.argTypes={parentHeight:{name:"Parent height (px)"},showAssets:{name:"Show Assets",control:{type:"select"},options:u},showMapPublisher:{name:"Show Map Publisher",control:{type:"select"},options:u},showDynamicContent:{name:"Show Dynamic Content",control:{type:"select"},options:u}};var A,x,S;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const B=["Playground"],se=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{r as P,se as s};
