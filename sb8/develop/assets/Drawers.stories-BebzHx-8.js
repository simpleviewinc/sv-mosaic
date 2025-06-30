import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{D as f}from"./Drawers-MdWgIc0q.js";import{u as x,F as b}from"./index-DCsI_z-L.js";import{P as D}from"./PageHeader-CEZufbNa.js";const d=o.createContext({});function v({config:r,callbacks:n}){const a=o.useContext(d),s=x(),{state:i,methods:{setFieldValue:t}}=s,l=[{label:"Cancel",onClick:a.removeDrawer,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>n.save(i.data),color:"yellow",variant:"contained",show:!!n.save},{label:"Open new form",onClick:()=>a.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:u=>{t({name:"from_parent",value:JSON.stringify(u)}),a.removeDrawer()}}}),color:"teal",variant:"outlined",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(b,{title:r.title,fields:r.fields,buttons:l,onBack:a.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(i.data)]})]})}function y(){const r=o.useContext(d);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Grid",onBack:r.removeDrawer}),e.jsx("p",{children:"Grid"})]})}const C={form:v,grid:y};function g({config:r,callbacks:n}){const a=C[r.type];return e.jsx(a,{config:r,callbacks:n})}const F={title:"Components/Drawers"},c=()=>{const[r,n]=o.useState({content:{},drawers:[]}),a=o.useCallback(t=>{n(l=>({...l,drawers:[...l.drawers,t]}))},[]),s=o.useCallback(()=>{n(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),i=o.useMemo(()=>({addDrawer:a,removeDrawer:s}),[a,s]);return e.jsx(d.Provider,{value:i,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(r.content)]}),e.jsx("button",{onClick:()=>a({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:t=>{n(l=>({...l,content:t})),s()}}}),children:"Add Form"}),e.jsx(f,{drawers:r.drawers,children:t=>e.jsx(g,{config:t.config,callbacks:t.callbacks??{}})})]})})};var m,p,w;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState<AppState>({
    content: {},
    drawers: []
  });
  const addDrawer = useCallback((drawerDef: DrawerDef) => {
    setState(state => ({
      ...state,
      drawers: [...state.drawers, drawerDef]
    }));
  }, []);
  const removeDrawer = useCallback(() => {
    setState(state => ({
      ...state,
      drawers: [...state.drawers.slice(0, -1)]
    }));
  }, []);
  const appContext = useMemo(() => ({
    addDrawer,
    removeDrawer
  }), [addDrawer, removeDrawer]);
  return <AppContext.Provider value={appContext}>
            <div className="App">
                <h1>Drawer Demo</h1>
                <p>
                    From Form:
                    {JSON.stringify(state.content)}
                </p>
                <button onClick={() => addDrawer({
        config: {
          type: "form",
          title: "New Form",
          fields: [{
            name: "foo",
            label: "Foo",
            type: "text"
          }, {
            name: "bar",
            label: "Bar",
            type: "text"
          }, {
            name: "baz",
            label: "Baz",
            type: "text"
          }, {
            name: "from_parent",
            label: "From Parent",
            type: "text"
          }]
        },
        callbacks: {
          save: data => {
            setState(state => ({
              ...state,
              content: data
            }));
            removeDrawer();
          }
        }
      })}>
                    Add Form
                </button>
                <Drawers drawers={state.drawers}>
                    {drawerDef => {
          return <Page config={drawerDef.config} callbacks={drawerDef.callbacks ?? {}} />;
        }}
                </Drawers>
            </div>
        </AppContext.Provider>;
}`,...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const j=["Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:c,__namedExportsOrder:j,default:F},Symbol.toStringTag,{value:"Module"}));export{c as P,A as s};
