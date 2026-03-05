import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CDlOlYQx.js";import{S as A}from"./SideNav-0jIe1PLd.js";import{A as f}from"./AccountCircle-BNY8Mh6V.js";import{H as y}from"./Home-BhQBOOkz.js";import{c as a}from"./createSvgIcon-v5cQwfe7.js";import{O as S,T as x}from"./TaskAlt-DcQlYjNx.js";import{A as H}from"./AddCircleOutline-L6xlhDbz.js";import{t as c,a as l}from"./toggleOptions-1cXvXfFl.js";const M=a(e.jsx("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"})),j=a(e.jsx("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"})),I=a(e.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),m=a(e.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"})),P={title:"Components/SideNav"},p=e.jsx("h1",{children:"Welcome home!"}),s=({parentHeight:u,showAssets:r,showMapPublisher:h,showDynamicContent:d})=>{const[b,t]=i.useState(p),[N,o]=i.useState("home"),k=n=>{o(n.item.name),t(e.jsx("h1",{children:n.item.label}))},C=i.useMemo(()=>[[{label:"Home",name:"home",icon:y,onNav:n=>{o(n.item.name),t(p)}},{label:"Accounts",name:"accounts",icon:f},{label:"Gallery",name:"gallery",icon:M},{label:"Visitors",name:"visitors"},{label:"Sitemap",name:"sitemap",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Sitemap"}))}},{label:"SV Link - Standard",name:"sv_link",icon:m,attrs:{href:"https://www.simpleviewinc.com/"}},{label:"SV Link - Custom",name:"sv_link-custom",icon:m,attrs:{href:"https://www.simpleviewinc.com/"},onNav:n=>{o(n.item.name),t(e.jsx("h1",{style:{background:"#444",color:"white",padding:10},children:"This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav"}))}},{label:"Google",name:"google",icon:m,attrs:{href:"https://www.google.co.uk"},onNav:!1},{label:"Google (New Tab)",name:"google-new",icon:S,attrs:{href:"https://www.google.co.uk",target:"_blank"},onNav:!1}],[{label:"Assets",name:"assets",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Assets"}))},show:c[r]},{label:"Map Publisher",name:"map-publisher",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Map Publisher"}))},show:c[h]},{label:"Dynamic Content",name:"dynamic-content",onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Dynamic Content"}))},show:c[d]}],[{label:"Tasks",name:"tasks",badge:"10",icon:x,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Tasks"}))},action:{icon:H,onClick:()=>alert("Add task clicked")}},{label:"Documents",name:"documents",icon:I,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Documents"}))}},{label:"Notes",name:"notes",badge:"00",icon:j,onNav:n=>{o(n.item.name),t(e.jsx("h1",{children:"Notes"}))}}]],[r,h,d]);return e.jsxs("div",{style:{display:"flex",height:u},children:[e.jsx(A,{items:C,active:N,onNav:k}),e.jsx("div",{children:b})]})};s.args={parentHeight:500,showAssets:"Undefined",showMapPublisher:"Undefined",showDynamicContent:"Undefined"};s.argTypes={parentHeight:{name:"Parent height (px)"},showAssets:{name:"Show Assets",control:{type:"select"},options:l},showMapPublisher:{name:"Show Map Publisher",control:{type:"select"},options:l},showDynamicContent:{name:"Show Dynamic Content",control:{type:"select"},options:l}};var v,g,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const V=["Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:V,default:P},Symbol.toStringTag,{value:"Module"}));export{s as P,U as s};
