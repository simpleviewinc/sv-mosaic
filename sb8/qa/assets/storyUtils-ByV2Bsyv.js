const o=()=>{alert("Cancelling form, going back to previous site")},l=(a,e={showCancel:!0,showSave:!0})=>[{label:"Cancel",onClick:o,color:"gray",variant:"outlined",show:e.showCancel},{label:"Save",onClick:a(r=>alert("Form submitted with the following data: "+JSON.stringify(r,null," "))),color:"yellow",variant:"contained",show:e.showSave}],t={Undefined:void 0,True:!0,False:!1,"Function that returns true":()=>!0,"Function that returns false":()=>!1},s={...t,"Array of true values":[!0,!0,!0],"Array with one falsy value":[!0,!1,!0],"Array of functions that return true":[()=>!0,()=>!0],"Array of functions, one returns false":[()=>!1,()=>!0]},u=Object.keys(s),n={...t,"Array of false values":[!1,!1,!1],"Array with one truthy value":[!1,!0,!1],"Array of functions that return false":[()=>!1,()=>!1],"Array of functions, one returns true":[()=>!0,()=>!1]},f=Object.keys(n);export{u as a,n as b,f as c,o,l as r,s as t};