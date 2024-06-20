import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as p}from"./index-CDs2tPxN.js";import{u as F,v as T,F as P}from"./formUtils-CJK8oCl3.js";import{B as k}from"./Button-B_QyrzNG.js";import{D as A}from"./ColorSelected-CdqgCvRo.js";import{t as l,B as a}from"./theme-tUuL1bpb.js";import{u as D}from"./uniqueId-CPIQN7QI.js";import{S as o}from"./sizes-C6oSOElx.js";import{g as N,a as M}from"./optionGetters-DXvNsMp-.js";import{s as z}from"./styled-components.browser.esm-C-l0uCre.js";import{d as H}from"./AddCircleOutline-DRBb5gNE.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./index-B-yFm4aN.js";import"./Popper-CAohKvIp.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./ButtonBase-cV3lp3kg.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./useToggle-D8hNafRh.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./containerQuery-BObFYVCA.js";import"./SideNav-BQB8pb76.js";import"./PageHeader-CF61fenh.js";import"./TitleWrapper-DgtWfsMQ.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./MenuSelect-Bs7eM6mM.js";import"./toString-CSPsKDpK.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./createSvgIcon-Ci5omaqv.js";import"./extends-CF3RwP-h.js";import"./styled-P6hUx81_.js";const Ke={title:"Components/Form"},n={type:"text",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",required:!0,inputSettings:{maxCharacters:20}},m={type:"address",required:!0,inputSettings:{getOptionsCountries:N,getOptionsStates:M,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},i={type:"mapCoordinates",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},c=z.h2`
    font-family: ${l.museoFont};
    font-size: 26px;
    font-weight: ${l.fontWeight.light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${l.colors.simplyGray};
    margin: 8px -12px 0;
    display: flex;
    align-items: center;

    &::after{
        content: " ";
        flex-grow: 1;
        border-top: 1px solid ${l.newColors.grey2[100]};
        margin-left: 16px;
        margin-top: 4px;
    }
`;async function W(){return{petsHeading:e.jsx(c,{children:"Pets"}),destinationsHeading:e.jsx(c,{children:"Destinations"}),novaScotia:{lat:44.64933472911243,lng:-63.615047475871876},eiffelTower:{lat:48.858348895100555,lng:2.294492026111051},lochNessMonster:{lat:57.27050873488408,lng:-4.493444954407284}}}const L=[{title:"Text field sizes",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",fields:[[["text-xs"]],[["text-sm"]],[["text-md"]],[["text-lg"]]]},{title:"Fields with grid layout",fields:[[["firstName"],["lastName"],["dob"]],[["profilePicture"],["biography"],[]],[["homeAddress"],["workAddress"],["altAddress"]],[["petsHeading"]],[["favouritePet","firstPet","desiredPet"]],[["destinationsHeading"]],[["whereToGo"]],[["availableStart"],["availableEnd"]],[["novaScotia"],["eiffelTower"],["lochNessMonster"]]]}],v={default:`${parseInt(a.sm,10)-160}px`,sm:a.sm,md:a.md,lg:a.lg,xl:a.xl,"2xl":a["2xl"]},t=({showSections:w,drawWidth:x})=>{const d=F(),{handleSubmit:f}=d,S=p.useMemo(()=>[{...n,name:"text-xs",label:"Extra small text",size:o.xs},{...n,name:"text-sm",label:"Small text",size:o.sm},{...n,name:"text-md",label:"Medium text",size:o.md},{...n,name:"text-lg",label:"Email address",size:o.lg,validators:[T]},{...n,name:"firstName",label:"First Name"},{...n,name:"lastName",label:"Last Name"},{type:"date",name:"dob",label:"Date of Birth"},{name:"profilePicture",label:"Profile Picture",type:"upload",inputSettings:{onFileAdd:async({onUploadComplete:r})=>{r({name:"Test",fileUrl:"https://www.google.com",id:D(),size:1098})},onFileDelete:async()=>{}},required:!0},{...n,name:"biography",label:"Biography",size:o.lg,inputSettings:{multiline:!0,minRows:8}},{name:"petsHeading",type:"raw"},{label:"Favourite Pet",name:"favouritePet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"First Pet",name:"firstPet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"Desired Pet",name:"desiredPet",required:!0,type:"chip",inputSettings:{options:[{value:"kangaroo",label:"Kangaroo"},{value:"cow",label:"Cow"},{value:"duckbillPlatypus",label:"Duckbill Platypus"},{value:"raccoon",label:"Raccoon"},{value:"hog",label:"Hog"},{value:"madagascarHissingCockroach",label:"Madagascar Hissing Cockroach"},{value:"pronghorn",label:"Pronghorn"},{value:"alligator",label:"Alligator"}]}},{...m,name:"homeAddress",label:"Home address"},{...m,name:"workAddress",label:"Work address"},{...m,name:"altAddress",label:"Alternative address"},{name:"mostVisitedLocations",label:"Most visited locations",type:"advancedSelection"},{name:"booksRead",label:"Books read",type:"advancedSelection",inputSettings:{options:[{value:"the",label:"The Great Gatsby"},{value:"cow",label:"To Kill a Mockingbird"},{value:"duckbillPlatypus",label:"Pride and Prejudice"},{value:"raccoon",label:"The Book Thief"},{value:"hog",label:"Lord of the Flies"},{value:"madagascarHissingCockroach",label:"The Catcher in the Rye"}]}},{name:"destinationsHeading",type:"raw"},{name:"whereToGo",label:"Where do you want to go?",type:"matrix",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{dataView:{columns:[{name:"name",label:"Name"}],data:[{id:1,name:"Australia"},{id:2,name:"Japan"}]},buttons:[{label:"Add",onClick:()=>null,color:"teal",variant:"text",mIcon:H}]}},{name:"availableStart",label:"When are you available?",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{name:"availableEnd",label:" ",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{...i,name:"eiffelTower",label:"Where is the Eiffel tower?",inputSettings:{...i.inputSettings,initialCenter:{lat:57.27050873488408,lng:-4.493444954407284}}},{...i,name:"lochNessMonster",label:"Where's the Loch Ness monster?",inputSettings:{...i.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}},{...i,name:"novaScotia",label:"Where is Nova Scotia?",inputSettings:{...i.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}}],[]),[y,s]=p.useState(!1),u=()=>s(!1),C=[{label:"Save",onClick:f(r=>{s(!1),alert("Form submitted with the following data: "+JSON.stringify(r,null," "))}),color:"yellow",variant:"contained"}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{open:y,onClose:u,PaperProps:{sx:{width:"90%"}},children:e.jsx("div",{style:{width:x},children:e.jsx(P,{...d,buttons:C,title:"Drawer form example",fields:S,onBack:u,sections:w?L:void 0,getFormValues:W})})}),e.jsx("div",{style:{margin:20},children:e.jsx(k,{onClick:()=>s(!0),label:"Open Drawer",color:"yellow",variant:"contained"})})]})};t.args={showSections:!1,drawWidth:v.default};t.argTypes={showSections:{name:"Show Sections"},drawWidth:{name:"Draw Width",control:{type:"select"},options:v}};t.__docgenInfo={description:"",methods:[],displayName:"DrawerForm"};var b,g,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  showSections,
  drawWidth
}: typeof DrawerForm.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  const fields = useMemo<FieldDef[]>(() => [{
    ...baseTextField,
    name: "text-xs",
    label: "Extra small text",
    size: Sizes.xs
  }, {
    ...baseTextField,
    name: "text-sm",
    label: "Small text",
    size: Sizes.sm
  }, {
    ...baseTextField,
    name: "text-md",
    label: "Medium text",
    size: Sizes.md
  }, {
    ...baseTextField,
    name: "text-lg",
    label: "Email address",
    size: Sizes.lg,
    validators: [validateEmail]
  }, {
    ...baseTextField,
    name: "firstName",
    label: "First Name"
  }, {
    ...baseTextField,
    name: "lastName",
    label: "Last Name"
  }, {
    type: "date",
    name: "dob",
    label: "Date of Birth"
  }, {
    name: "profilePicture",
    label: "Profile Picture",
    type: "upload",
    inputSettings: {
      onFileAdd: async ({
        onUploadComplete
      }) => {
        onUploadComplete({
          name: "Test",
          fileUrl: "https://www.google.com",
          id: uniqueId(),
          size: 1098
        });
      },
      onFileDelete: async () => {
        // This is fine
      }
    },
    required: true
  }, {
    ...baseTextField,
    name: "biography",
    label: "Biography",
    size: Sizes.lg,
    inputSettings: {
      multiline: true,
      minRows: 8
    }
  }, {
    name: "petsHeading",
    type: "raw"
  }, {
    label: "Favourite Pet",
    name: "favouritePet",
    required: true,
    type: "dropdown",
    inputSettings: {
      options: [{
        value: "dog",
        label: "Dog"
      }, {
        value: "cat",
        label: "Cat"
      }, {
        value: "rabbit",
        label: "Rabbit"
      }]
    }
  }, {
    label: "First Pet",
    name: "firstPet",
    required: true,
    type: "dropdown",
    inputSettings: {
      options: [{
        value: "dog",
        label: "Dog"
      }, {
        value: "cat",
        label: "Cat"
      }, {
        value: "rabbit",
        label: "Rabbit"
      }]
    }
  }, {
    label: "Desired Pet",
    name: "desiredPet",
    required: true,
    type: "chip",
    inputSettings: {
      options: [{
        value: "kangaroo",
        label: "Kangaroo"
      }, {
        value: "cow",
        label: "Cow"
      }, {
        value: "duckbillPlatypus",
        label: "Duckbill Platypus"
      }, {
        value: "raccoon",
        label: "Raccoon"
      }, {
        value: "hog",
        label: "Hog"
      }, {
        value: "madagascarHissingCockroach",
        label: "Madagascar Hissing Cockroach"
      }, {
        value: "pronghorn",
        label: "Pronghorn"
      }, {
        value: "alligator",
        label: "Alligator"
      }]
    }
  }, {
    ...baseAddressField,
    name: "homeAddress",
    label: "Home address"
  }, {
    ...baseAddressField,
    name: "workAddress",
    label: "Work address"
  }, {
    ...baseAddressField,
    name: "altAddress",
    label: "Alternative address"
  }, {
    name: "mostVisitedLocations",
    label: "Most visited locations",
    type: "advancedSelection"
  }, {
    name: "booksRead",
    label: "Books read",
    type: "advancedSelection",
    inputSettings: {
      options: [{
        value: "the",
        label: "The Great Gatsby"
      }, {
        value: "cow",
        label: "To Kill a Mockingbird"
      }, {
        value: "duckbillPlatypus",
        label: "Pride and Prejudice"
      }, {
        value: "raccoon",
        label: "The Book Thief"
      }, {
        value: "hog",
        label: "Lord of the Flies"
      }, {
        value: "madagascarHissingCockroach",
        label: "The Catcher in the Rye"
      }]
    }
  }, ({
    name: "destinationsHeading",
    type: "raw"
  } as any), {
    name: "whereToGo",
    label: "Where do you want to go?",
    type: "matrix",
    instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
    inputSettings: {
      dataView: {
        columns: [{
          name: "name",
          label: "Name"
        }],
        data: [{
          id: 1,
          name: "Australia"
        }, {
          id: 2,
          name: "Japan"
        }]
      },
      buttons: [{
        label: "Add",
        onClick: () => null,
        color: "teal",
        variant: "text",
        mIcon: AddCircleOutline
      }]
    }
  }, {
    name: "availableStart",
    label: "When are you available?",
    type: "date",
    instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
    inputSettings: {
      showTime: true
    }
  }, {
    name: "availableEnd",
    label: " ",
    type: "date",
    instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
    inputSettings: {
      showTime: true
    }
  }, {
    ...baseMapCoordinatesField,
    name: "eiffelTower",
    label: "Where is the Eiffel tower?",
    inputSettings: {
      ...baseMapCoordinatesField.inputSettings,
      initialCenter: {
        lat: 57.27050873488408,
        lng: -4.493444954407284
      }
    }
  }, {
    ...baseMapCoordinatesField,
    name: "lochNessMonster",
    label: "Where's the Loch Ness monster?",
    inputSettings: {
      ...baseMapCoordinatesField.inputSettings,
      initialCenter: {
        lat: 48.858348895100555,
        lng: 2.294492026111051
      }
    }
  }, {
    ...baseMapCoordinatesField,
    name: "novaScotia",
    label: "Where is Nova Scotia?",
    inputSettings: {
      ...baseMapCoordinatesField.inputSettings,
      initialCenter: {
        lat: 48.858348895100555,
        lng: 2.294492026111051
      }
    }
  }], []);
  const [open, setOpen] = useState(false);
  const onCancel = () => setOpen(false);
  const onDrawerSubmit = handleSubmit(data => {
    setOpen(false);
    alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
  });
  const buttons: ButtonProps[] = [{
    label: "Save",
    onClick: onDrawerSubmit,
    color: "yellow",
    variant: "contained"
  }];
  return <>
            <Drawer open={open} onClose={onCancel} PaperProps={{
      sx: {
        width: "90%"
      }
    }}>
                <div style={{
        width: drawWidth
      }}>
                    <Form {...controller} buttons={buttons} title="Drawer form example" fields={fields} onBack={onCancel} sections={showSections ? sections : undefined} getFormValues={getFormValues} />
                </div>
            </Drawer>
            <div style={{
      margin: 20
    }}>
                <Button onClick={() => setOpen(true)} label="Open Drawer" color="yellow" variant="contained" />
            </div>
        </>;
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const _e=["DrawerForm"];export{t as DrawerForm,_e as __namedExportsOrder,Ke as default};
