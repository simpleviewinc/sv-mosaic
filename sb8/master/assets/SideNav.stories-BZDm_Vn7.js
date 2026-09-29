import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-wekxHvEx.js";import{L as i,S as A}from"./Link-DusayIDr.js";import{A as f}from"./AccountCircle-w9JcFakB.js";import{H as y}from"./Home-BZetNL79.js";import{c as m}from"./createSvgIcon-h9rIBQiG.js";import{T as S}from"./TaskAlt-CPDOTwI8.js";import{A as x}from"./AddCircleOutline-BiPHZ2Sh.js";import{O as j}from"./OpenInNew-GvVN9mBj.js";import{t as c,a as l}from"./toggleOptions-1cXvXfFl.js";const I=m(e.jsx("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"})),M=m(e.jsx("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"})),H=m(e.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),P={title:"Components/SideNav"},p=e.jsx("h1",{children:"Welcome home!"}),s=({parentHeight:u,showAssets:r,showMapPublisher:h,showDynamicContent:d})=>{const[b,t]=a.useState(p),[N,o]=a.useState("home"),k=n=>{o(n.item.name),t(e.jsx("h1",{children:n.item.label}))},C=a.useMemo(()=>[[{label:"Home",name:"home",icon:y,onNav:n=>{o(n.item.name),t(p)}},{label:"Accounts",name:"accounts",icon:f},{label:"Gallery",name:"gallery",icon:I},{label:"Visitors",name:"visitors"},{label:"Sitemap",name:"sitemap",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Sitemap"}))}},{label:"SV Link - Standard",name:"sv_link",icon:i,attrs:{href:"https://www.simpleviewinc.com/"}},{label:"SV Link - Custom",name:"sv_link-custom",icon:i,attrs:{href:"https://www.simpleviewinc.com/"},onNav:n=>{o(n.item.name),t(e.jsx("h1",{style:{background:"#444",color:"white",padding:10},children:"This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav"}))}},{label:"Google",name:"google",icon:i,attrs:{href:"https://www.google.co.uk"},onNav:!1},{label:"Google (New Tab)",name:"google-new",icon:j,attrs:{href:"https://www.google.co.uk",target:"_blank"},onNav:!1}],[{label:"Assets",name:"assets",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Assets"}))},show:c[r]},{label:"Map Publisher",name:"map-publisher",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Map Publisher"}))},show:c[h]},{label:"Dynamic Content",name:"dynamic-content",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Dynamic Content"}))},show:c[d]}],[{label:"Tasks",name:"tasks",badge:"10",icon:S,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Tasks"}))},action:{icon:x,onClick:()=>alert("Add task clicked")}},{label:"Documents",name:"documents",icon:H,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Documents"}))}},{label:"Notes",name:"notes",badge:"00",icon:M,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Notes"}))}}]],[r,h,d]);return e.jsxs("div",{style:{display:"flex",height:u},children:[e.jsx(A,{items:C,active:N,onNav:k}),e.jsx("div",{children:b})]})};s.args={parentHeight:500,showAssets:"Undefined",showMapPublisher:"Undefined",showDynamicContent:"Undefined"};s.argTypes={parentHeight:{name:"Parent height (px)"},showAssets:{name:"Show Assets",control:{type:"select"},options:l},showMapPublisher:{name:"Show Map Publisher",control:{type:"select"},options:l},showDynamicContent:{name:"Show Dynamic Content",control:{type:"select"},options:l}};var g,v,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const D=["Playground"],F=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{s as P,F as s};
