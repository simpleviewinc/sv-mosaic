import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{D as f}from"./Drawers-DdSBydzQ.js";import{u as x,F as b}from"./index-CMvSSMEc.js";import{P as D}from"./PageHeader-Maf0ecTd.js";const d=o.createContext({});function v({config:r,callbacks:a}){const n=o.useContext(d),s=x(),{state:i,methods:{setFieldValue:t}}=s,l=[{label:"Cancel",onClick:n.removeDrawer,intent:"secondary",variant:"contained"},{label:"Save",onClick:()=>a.save(i.data),intent:"primary",variant:"contained",show:!!a.save},{label:"Open new form",onClick:()=>n.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:u=>{t({name:"from_parent",value:JSON.stringify(u)}),n.removeDrawer()}}}),intent:"secondary",variant:"contained",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(b,{title:r.title,fields:r.fields,buttons:l,onBack:n.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(i.data)]})]})}function y(){const r=o.useContext(d);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Grid",onBack:r.removeDrawer}),e.jsx("p",{children:"Grid"})]})}const C={form:v,grid:y};function g({config:r,callbacks:a}){const n=C[r.type];return e.jsx(n,{config:r,callbacks:a})}const F={title:"Components/Drawers"},c=()=>{const[r,a]=o.useState({content:{},drawers:[]}),n=o.useCallback(t=>{a(l=>({...l,drawers:[...l.drawers,t]}))},[]),s=o.useCallback(()=>{a(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),i=o.useMemo(()=>({addDrawer:n,removeDrawer:s}),[n,s]);return e.jsx(d.Provider,{value:i,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(r.content)]}),e.jsx("button",{onClick:()=>n({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:t=>{a(l=>({...l,content:t})),s()}}}),children:"Add Form"}),e.jsx(f,{drawers:r.drawers,children:t=>e.jsx(g,{config:t.config,callbacks:t.callbacks??{}})})]})})};var m,p,w;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
