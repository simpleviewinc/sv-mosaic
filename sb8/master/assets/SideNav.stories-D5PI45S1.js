import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{S as D}from"./SideNav-BixOpWCF.js";import{d as I}from"./AccountCircle-yqdk-ivO.js";import{d as V,a as r}from"./Link-MHgP8tYp.js";import{r as s,i}from"./createSvgIcon-DQitHYV2.js";import{d as z}from"./AddCircleOutline-B0jQE3Z3.js";import{t as c,a as m}from"./storyUtils-ByV2Bsyv.js";var h={},O=i;Object.defineProperty(h,"__esModule",{value:!0});var y=h.default=void 0,R=O(s()),T=n,L=(0,R.default)((0,T.jsx)("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}),"Collections");y=h.default=L;var d={},E=i;Object.defineProperty(d,"__esModule",{value:!0});var C=d.default=void 0,q=E(s()),G=n,F=(0,q.default)((0,G.jsx)("path",{d:"M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"}),"EventNote");C=d.default=F;var v={},U=i;Object.defineProperty(v,"__esModule",{value:!0});var S=v.default=void 0,J=U(s()),W=n,X=(0,J.default)((0,W.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");S=v.default=X;var u={},B=i;Object.defineProperty(u,"__esModule",{value:!0});var j=u.default=void 0,K=B(s()),Q=n,Y=(0,K.default)((0,Q.jsx)("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"}),"TaskAlt");j=u.default=Y;var p={},Z=i;Object.defineProperty(p,"__esModule",{value:!0});var x=p.default=void 0,ee=Z(s()),ne=n,te=(0,ee.default)((0,ne.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");x=p.default=te;const ae={title:"Components/SideNav"},w=n.jsx("h1",{children:"Welcome home!"}),o=({parentHeight:A,showAssets:g,showMapPublisher:f,showDynamicContent:b})=>{const[M,t]=l.useState(w),[$,a]=l.useState("home"),H=e=>{a(e.item.name),t(n.jsx("h1",{children:e.item.label}))},P=l.useMemo(()=>[[{label:"Home",name:"home",icon:V,onNav:e=>{a(e.item.name),t(w)}},{label:"Accounts",name:"accounts",icon:I},{label:"Gallery",name:"gallery",icon:y},{label:"Visitors",name:"visitors"},{label:"Sitemap",name:"sitemap",onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Sitemap"}))}},{label:"SV Link - Standard",name:"sv_link",icon:r,attrs:{href:"https://www.simpleviewinc.com/"}},{label:"SV Link - Custom",name:"sv_link-custom",icon:r,attrs:{href:"https://www.simpleviewinc.com/"},onNav:e=>{a(e.item.name),t(n.jsx("h1",{style:{background:"#444",color:"white",padding:10},children:"This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav"}))}},{label:"Google",name:"google",icon:r,attrs:{href:"https://www.google.co.uk"},onNav:!1},{label:"Google (New Tab)",name:"google-new",icon:x,attrs:{href:"https://www.google.co.uk",target:"_blank"},onNav:!1}],[{label:"Assets",name:"assets",onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Assets"}))},show:c[g]},{label:"Map Publisher",name:"map-publisher",onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Map Publisher"}))},show:c[f]},{label:"Dynamic Content",name:"dynamic-content",onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Dynamic Content"}))},show:c[b]}],[{label:"Tasks",name:"tasks",badge:"10",icon:j,onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Tasks"}))},action:{icon:z,onClick:()=>alert("Add task clicked")}},{label:"Documents",name:"documents",icon:S,onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Documents"}))}},{label:"Notes",name:"notes",badge:"00",icon:C,onNav:e=>{a(e.item.name),t(n.jsx("h1",{children:"Notes"}))}}]],[g,f,b]);return n.jsxs("div",{style:{display:"flex",height:A},children:[n.jsx(D,{items:P,active:$,onNav:H}),n.jsx("div",{children:M})]})};o.args={parentHeight:500,showAssets:"Undefined",showMapPublisher:"Undefined",showDynamicContent:"Undefined"};o.argTypes={parentHeight:{name:"Parent height (px)"},showAssets:{name:"Show Assets",control:{type:"select"},options:m},showMapPublisher:{name:"Show Map Publisher",control:{type:"select"},options:m},showDynamicContent:{name:"Show Dynamic Content",control:{type:"select"},options:m}};var _,N,k;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`({
  parentHeight,
  showAssets,
  showMapPublisher,
  showDynamicContent
}: typeof Playground.args): ReactElement => {
  const [content, setContent] = useState<JSX.Element>(homeContent);
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
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const oe=["Playground"],ve=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{o as P,ve as s};
