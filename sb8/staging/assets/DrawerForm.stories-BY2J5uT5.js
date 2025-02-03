import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as p}from"./index-Btj5Fd67.js";import{u as F,v as T,F as P}from"./Form-vpubj07T.js";import{B as k}from"./Button-BW21zc79.js";import{D as A}from"./ColorSelected-rVJC1bnf.js";import{t as l,B as t}from"./theme-C7C0QMlu.js";import{u as D}from"./uniqueId-Cc7__LH3.js";import{S as o}from"./sizes-C6oSOElx.js";import{g as M,a as N}from"./optionGetters-CNrUXz-e.js";import{s as z}from"./styled-components.browser.esm-DIT4wwZk.js";import{A as H}from"./AddCircleOutline-DH1WhCVk.js";import"./SideNav-BXGvGLiL.js";import"./containerQuery-BqcK0eeN.js";import"./useToggle-B3mbTfSB.js";import"./FormFieldText.styled-BXg2h5EQ.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-L7Zdnfri.js";import"./useIsFocusVisible-C9uVWUyr.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./formControlState-Bl9Dd4wz.js";import"./createSvgIcon-C7F5N1gl.js";import"./createSvgIcon-Bmixpj46.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DwELyCdS.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-D8KJxpyu.js";import"./Popper-lO7-sb5Y.js";import"./useTheme-CN1B93FI.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./ButtonRow-DaYhrvd1.js";import"./CheckboxList-CKLT5_IE.js";import"./Checkbox-faPr4U1Q.js";import"./FormControlLabel-DlxLljVV.js";import"./ButtonBase-Ci24pScM.js";import"./getThemeProps-DdDNKTGU.js";import"./Chip-BycvDKsV.js";import"./DataViewPrimaryFilter.styled-BUfrUkss.js";import"./RadioButton-BFvQvs9V.js";import"./StyledFormControl.styled-D1xcYZGf.js";import"./Toggle-Lx-sDa2f.js";import"./debounce-B3RVa3dT.js";import"./index-B6f3rorp.js";import"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import"./SubtitleText-DUUVrgUU.js";import"./formats-sBod7wm8.js";import"./Dialog-BFRUe6cu.js";import"./useMediaQuery-Yl5lg82S.js";import"./TitleWrapper-Bkg-hsBc.js";import"./TitleText-CdOksVB0.js";import"./Snackbar-B25MKBii.js";import"./Close-CSY1ofSk.js";import"./ClickAwayListener-DweT8u9y.js";import"./TooltipIcon-C4tSz_X8.js";import"./MoreVert-BH0BHXBp.js";import"./PageHeader-CmlBcYYr.js";import"./ChevronRight-Da8zFjWX.js";import"./toString-CrHhZNKP.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./styled-B22bUKEf.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-X8Rx5IVC.js";const Je={title:"Components/Form"},n={type:"text",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",required:!0,inputSettings:{maxCharacters:20}},m={type:"address",required:!0,inputSettings:{getOptionsCountries:M,getOptionsStates:N,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},a={type:"mapCoordinates",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},c=z.h2`
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
`;async function W(){return{petsHeading:e.jsx(c,{children:"Pets"}),destinationsHeading:e.jsx(c,{children:"Destinations"}),novaScotia:{lat:44.64933472911243,lng:-63.615047475871876},eiffelTower:{lat:48.858348895100555,lng:2.294492026111051},lochNessMonster:{lat:57.27050873488408,lng:-4.493444954407284}}}const L=[{title:"Text field sizes",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",fields:[[["text-xs"]],[["text-sm"]],[["text-md"]],[["text-lg"]]]},{title:"Fields with grid layout",fields:[[["firstName"],["lastName"],["dob"]],[["profilePicture"],["biography"],[]],[["homeAddress"],["workAddress"],["altAddress"]],[["petsHeading"]],[["favouritePet","firstPet","desiredPet"]],[["destinationsHeading"]],[["whereToGo"]],[["availableStart"],["availableEnd"]],[["novaScotia"],["eiffelTower"],["lochNessMonster"]]]}],v={default:`${parseInt(t.sm,10)-160}px`,sm:t.sm,md:t.md,lg:t.lg,xl:t.xl,"2xl":t["2xl"]},i=({showSections:x,drawWidth:w})=>{const d=F(),{handleSubmit:f}=d,S=p.useMemo(()=>[{...n,name:"text-xs",label:"Extra small text",size:o.xs},{...n,name:"text-sm",label:"Small text",size:o.sm},{...n,name:"text-md",label:"Medium text",size:o.md},{...n,name:"text-lg",label:"Email address",size:o.lg,validators:[T]},{...n,name:"firstName",label:"First Name"},{...n,name:"lastName",label:"Last Name"},{type:"date",name:"dob",label:"Date of Birth"},{name:"profilePicture",label:"Profile Picture",type:"upload",inputSettings:{onFileAdd:async({onUploadComplete:r})=>{r({name:"Test",fileUrl:"https://www.google.com",id:D(),size:1098})},onFileDelete:async()=>{}},required:!0},{...n,name:"biography",label:"Biography",size:o.lg,inputSettings:{multiline:!0,minRows:8}},{name:"petsHeading",type:"raw"},{label:"Favourite Pet",name:"favouritePet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"First Pet",name:"firstPet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"Desired Pet",name:"desiredPet",required:!0,type:"chip",inputSettings:{options:[{value:"kangaroo",label:"Kangaroo"},{value:"cow",label:"Cow"},{value:"duckbillPlatypus",label:"Duckbill Platypus"},{value:"raccoon",label:"Raccoon"},{value:"hog",label:"Hog"},{value:"madagascarHissingCockroach",label:"Madagascar Hissing Cockroach"},{value:"pronghorn",label:"Pronghorn"},{value:"alligator",label:"Alligator"}]}},{...m,name:"homeAddress",label:"Home address"},{...m,name:"workAddress",label:"Work address"},{...m,name:"altAddress",label:"Alternative address"},{name:"mostVisitedLocations",label:"Most visited locations",type:"advancedSelection"},{name:"booksRead",label:"Books read",type:"advancedSelection",inputSettings:{options:[{value:"the",label:"The Great Gatsby"},{value:"cow",label:"To Kill a Mockingbird"},{value:"duckbillPlatypus",label:"Pride and Prejudice"},{value:"raccoon",label:"The Book Thief"},{value:"hog",label:"Lord of the Flies"},{value:"madagascarHissingCockroach",label:"The Catcher in the Rye"}]}},{name:"destinationsHeading",type:"raw"},{name:"whereToGo",label:"Where do you want to go?",type:"matrix",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{dataView:{columns:[{name:"name",label:"Name"}],data:[{id:1,name:"Australia"},{id:2,name:"Japan"}]},buttons:[{label:"Add",onClick:()=>null,color:"teal",variant:"text",mIcon:H}]}},{name:"availableStart",label:"When are you available?",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{name:"availableEnd",label:" ",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{...a,name:"eiffelTower",label:"Where is the Eiffel tower?",inputSettings:{...a.inputSettings,initialCenter:{lat:57.27050873488408,lng:-4.493444954407284}}},{...a,name:"lochNessMonster",label:"Where's the Loch Ness monster?",inputSettings:{...a.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}},{...a,name:"novaScotia",label:"Where is Nova Scotia?",inputSettings:{...a.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}}],[]),[y,s]=p.useState(!1),u=()=>s(!1),C=[{label:"Save",onClick:f(r=>{s(!1),alert("Form submitted with the following data: "+JSON.stringify(r,null," "))}),color:"yellow",variant:"contained"}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{open:y,onClose:u,PaperProps:{sx:{width:"90%"}},children:e.jsx("div",{style:{width:w,height:"100vh"},children:e.jsx(P,{...d,buttons:C,title:"Drawer form example",fields:S,onBack:u,sections:x?L:void 0,getFormValues:W})})}),e.jsx("div",{style:{margin:20},children:e.jsx(k,{onClick:()=>s(!0),label:"Open Drawer",color:"yellow",variant:"contained"})})]})};i.args={showSections:!1,drawWidth:v.default};i.argTypes={showSections:{name:"Show Sections"},drawWidth:{name:"Draw Width",control:{type:"select"},options:v}};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
  }, {
    name: "destinationsHeading",
    type: "raw"
  } as any, {
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
        width: drawWidth,
        height: "100vh"
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Ue=["DrawerForm"];export{i as DrawerForm,Ue as __namedExportsOrder,Je as default};
