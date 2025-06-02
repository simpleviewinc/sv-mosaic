import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{r as m,R as c}from"./index-D0AnReJb.js";import{t as n}from"./sizes-HwDk6ODv.js";import{T as l}from"./ThemeProvider-xpJBffxI.js";import{d as f}from"./DefaultPropsProvider-DAx12mnL.js";import"./useThemeWithoutDefault-_krlN3OB.js";import"./index-DJOBlCMp.js";function p(e,{appendTo:r,...i}={}){if(!document||!document.createElement)throw new Error("Document is not available. This function should be run in a browser environment.");const o=document.createElement(e);for(const[t,s]of Object.entries(i))o[t]=s;return r&&r.appendChild(o),o}const u=[{condition:({injectGoogleFontCDN:e})=>e,tagName:"link",rel:"preconnect",href:"https://fonts.googleapis.com"},{condition:({injectGoogleFontCDN:e})=>e,tagName:"link",rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""},{condition:({injectGoogleFontCDN:e})=>e,tagName:"link",rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"},{condition:({injectRootFontStyles:e})=>e,tagName:"style",innerHTML:`
			:root {
				font-family: ${n.family.sans};
				font-optical-sizing: auto;
				font-weight: ${n.weight.regular};
				font-style: normal;
				font-size: 14px;
				font-variation-settings:
					"wdth" 100;
				color: ${n.color.black};
			}
		`.trim()}],d=f({typography:{fontFamily:n.family.sans},components:{MuiChip:{styleOverrides:{root:{fontSize:"inherit"}}},MuiButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{textTransform:"none",fontSize:"inherit"}}},MuiPaper:{styleOverrides:{root:{color:"inherit"}}}}}),h=({children:e,injectGoogleFontCDN:r=!0,injectRootFontStyles:i=!0})=>(m.useEffect(()=>{const o=u.filter(({condition:t})=>!t||t({injectGoogleFontCDN:r,injectRootFontStyles:i})).map(({tagName:t,...s})=>p(t,{...s,appendTo:document.head}));return()=>{for(const t of o)document.head.removeChild(t)}},[]),c.createElement(l,{theme:d},e)),E={decorators:[e=>a.jsx(h,{children:a.jsx(e,{})})],parameters:{options:{storySort:e=>e.title==="Contexts/ThemeProvider"?-1:0},layout:"fullscreen",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{source:{type:"code"}}}};export{E as default};
