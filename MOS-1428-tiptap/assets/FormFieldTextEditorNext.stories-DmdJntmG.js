import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{a as m}from"./index-BP8_t0zE.js";import{a as n}from"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const ue={title:"FormFields/FormFieldTextEditorNext"},s=`<h1>Welcome to the rich-text editor!!1!</h1><p>This is a basic example of what <em>can</em> be done. <u>There are all kinds of </u><strong><u>basic styles</u></strong><u> you'd probably </u><em><u>expect</u></em><u> from a text editor.</u></p><p>There are also lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items. I can add a reference too by <a target="" rel="noopener noreferrer nofollow" href="https://www.google.co.uk">linking to another page</a>!</p></li></ul><p>Numbered as well...</p><ol><li><p>Wake up</p></li><li><p>Profit</p></li></ol><p>Inserting line breaks is no problem with the shift key:</p><p>495 London Rd<br>West Cliff on Sea<br>Essex<br>SS0 9LG</p><h2>There’s more. Here's a simple code block:</h2><pre><code>for (var i=1; i &lt;= 20; i++) {
    console.log(i);
}</code></pre><p>Any scripts that are added using the code tab will be indicated here in the visual tab too</p><script>alert("Hey");<\/script><p>Other things we can do are quotes:</p><blockquote><p>The greatest glory in living lies not in never falling, but in rising every time we fall.</p><p><em>-Nelson Mandela</em></p></blockquote>`,t=()=>{const[r,a]=m.useState(s);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"2rem"},children:e.jsx(n,{value:r,onChange:async l=>a(l),fieldDef:{name:"textEditor",type:"text"}})}),e.jsx("pre",{style:{padding:"2rem",wordBreak:"break-all",width:600,overflow:"auto"},children:r})]})};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string | number>(initialValue);
  return <>
            <div style={{
      padding: "2rem"
    }}>
                <FormFieldTextEditorNext value={value} onChange={async value => setValue(value)} fieldDef={{
        name: "textEditor",
        type: "text"
      }} />
            </div>
            <pre style={{
      padding: "2rem",
      wordBreak: "break-all",
      width: 600,
      overflow: "auto"
    }}>
                {value}
            </pre>
        </>;
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const ce=["Playground"];export{t as Playground,ce as __namedExportsOrder,ue as default};
