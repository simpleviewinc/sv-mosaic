import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CDlOlYQx.js";import{u as F,v as T,a as P,F as k}from"./index-DUrLt3d7.js";import{B as A}from"./Button-DiGzPWWk.js";import{S as l,t as n,B as a}from"./sizes-BeWafy6f.js";import{u as D}from"./uniqueId-C86JDU23.js";import{a as H,b as M}from"./options-DEOzrsxm.js";import{c as N}from"./styled-components.browser.esm-Cbu7rhRc.js";import{A as z}from"./AddCircleOutline-BIVTeABg.js";import"./MosaicContext-Ckn3SYVO.js";import"./ButtonBase-BTOUCkJL.js";import"./identifier-D-VlK421.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-D9Xlm0gk.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./createSvgIcon-CpiYeT0y.js";import"./useTooltip-CvILwQ8N.js";import"./index-fPYtWVub.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./Popover-BARbcQa_.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useId-CJY4DrkM.js";import"./useControlled-DKUcMOPx.js";import"./index-BYJCM7n4.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DE1h0Woy.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CircularProgress-DnZWjXCP.js";import"./CheckboxList-BKNIRyAz.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./FormGroup-DKw7Nhjc.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DAQJW3QI.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioGroup-bYFNZFp8.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";import"./toString-BiHoOcmO.js";import"./emotion-unitless.esm-x5IvBceT.js";import"./createSvgIcon-BczN9R-D.js";const Ze={title:"Components/Form"},t={type:"text",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",required:!0,inputSettings:{maxCharacters:20}},m={type:"address",required:!0,inputSettings:{getOptionsCountries:M,getOptionsStates:H,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},i={type:"mapCoordinates",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},c=N.h2`
    font-size: 26px;
    font-weight: ${n.weight.regular};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${n.color.gray[600]};
    margin: 8px -12px 0;
    display: flex;
    align-items: center;

    &::after{
        content: " ";
        flex-grow: 1;
        border-top: 1px solid ${n.color.gray[100]};
        margin-left: 16px;
        margin-top: 4px;
    }
`,W=[{title:"Text field sizes",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",fields:[[["text-xs"]],[["text-sm"]],[["text-md"]],[["text-lg"]]]},{title:"Fields with grid layout",fields:[[["firstName"],["lastName"],["dob"]],[["profilePicture"],["biography"],[]],[["homeAddress"],["workAddress"],["altAddress"]],[["petsHeading"]],[["favouritePet","firstPet","desiredPet"]],[["destinationsHeading"]],[["whereToGo"]],[["availableStart"],["availableEnd"]],[["novaScotia"],["eiffelTower"],["lochNessMonster"]]]}],v={default:`${parseInt(a.sm,10)-160}px`,sm:a.sm,md:a.md,lg:a.lg,xl:a.xl,"2xl":a["2xl"]},o=({showSections:x,drawWidth:w})=>{const d=F({data:{petsHeading:e.jsx(c,{children:"Pets"}),destinationsHeading:e.jsx(c,{children:"Destinations"}),novaScotia:{lat:44.64933472911243,lng:-63.615047475871876},eiffelTower:{lat:48.858348895100555,lng:2.294492026111051},lochNessMonster:{lat:57.27050873488408,lng:-4.493444954407284}}}),{handleSubmit:f}=d,S=u.useMemo(()=>[{...t,name:"text-xs",label:"Extra small text",size:l.xs},{...t,name:"text-sm",label:"Small text",size:l.sm},{...t,name:"text-md",label:"Medium text",size:l.md},{...t,name:"text-lg",label:"Email address",size:l.lg,validators:[T]},{...t,name:"firstName",label:"First Name"},{...t,name:"lastName",label:"Last Name"},{type:"date",name:"dob",label:"Date of Birth"},{name:"profilePicture",label:"Profile Picture",type:"upload",inputSettings:{onFileAdd:async({onUploadComplete:s})=>{s({name:"Test",fileUrl:"https://www.google.com",id:D(),size:1098})},onFileDelete:async()=>{}},required:!0},{...t,name:"biography",label:"Biography",size:l.lg,inputSettings:{multiline:!0,minRows:8}},{name:"phone",label:"Phone",type:"phone"},{name:"petsHeading",type:"raw"},{label:"Favourite Pet",name:"favouritePet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"First Pet",name:"firstPet",required:!0,type:"dropdown",inputSettings:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}]}},{label:"Desired Pet",name:"desiredPet",required:!0,type:"chip",inputSettings:{options:[{value:"kangaroo",label:"Kangaroo"},{value:"cow",label:"Cow"},{value:"duckbillPlatypus",label:"Duckbill Platypus"},{value:"raccoon",label:"Raccoon"},{value:"hog",label:"Hog"},{value:"madagascarHissingCockroach",label:"Madagascar Hissing Cockroach"},{value:"pronghorn",label:"Pronghorn"},{value:"alligator",label:"Alligator"}]}},{...m,name:"homeAddress",label:"Home address"},{...m,name:"workAddress",label:"Work address"},{...m,name:"altAddress",label:"Alternative address"},{name:"mostVisitedLocations",label:"Most visited locations",type:"advancedSelection"},{name:"booksRead",label:"Books read",type:"advancedSelection",inputSettings:{options:[{value:"the",label:"The Great Gatsby"},{value:"cow",label:"To Kill a Mockingbird"},{value:"duckbillPlatypus",label:"Pride and Prejudice"},{value:"raccoon",label:"The Book Thief"},{value:"hog",label:"Lord of the Flies"},{value:"madagascarHissingCockroach",label:"The Catcher in the Rye"}]}},{name:"destinationsHeading",type:"raw"},{name:"whereToGo",label:"Where do you want to go?",type:"matrix",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{dataView:{columns:[{name:"name",label:"Name"}],data:[{id:1,name:"Australia"},{id:2,name:"Japan"}]},buttons:[{label:"Add",onClick:()=>null,intent:"info",variant:"text",mIcon:z}]}},{name:"availableStart",label:"When are you available?",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{name:"availableEnd",label:" ",type:"date",instructionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",inputSettings:{showTime:!0}},{...i,name:"eiffelTower",label:"Where is the Eiffel tower?",inputSettings:{...i.inputSettings,initialCenter:{lat:57.27050873488408,lng:-4.493444954407284}}},{...i,name:"lochNessMonster",label:"Where's the Loch Ness monster?",inputSettings:{...i.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}},{...i,name:"novaScotia",label:"Where is Nova Scotia?",inputSettings:{...i.inputSettings,initialCenter:{lat:48.858348895100555,lng:2.294492026111051}}}],[]),[y,r]=u.useState(!1),p=()=>r(!1),C=[{label:"Save",onClick:f(s=>{r(!1),alert("Form submitted with the following data: "+JSON.stringify(s,null," "))}),intent:"primary",variant:"contained"}];return e.jsxs(e.Fragment,{children:[e.jsx(P,{open:y,onClose:p,PaperProps:{sx:{width:"90%"}},children:e.jsx("div",{style:{width:w,height:"100vh"},children:e.jsx(k,{...d,buttons:C,title:"Drawer form example",fields:S,onBack:p,sections:x?W:void 0})})}),e.jsx("div",{style:{margin:20},children:e.jsx(A,{onClick:()=>r(!0),label:"Open Drawer",intent:"primary",variant:"contained"})})]})};o.args={showSections:!1,drawWidth:v.default};o.argTypes={showSections:{name:"Show Sections"},drawWidth:{name:"Draw Width",control:{type:"select"},options:v}};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
  showSections,
  drawWidth
}: typeof DrawerForm.args): ReactElement => {
  const controller = useForm({
    data: {
      petsHeading: <Heading>Pets</Heading>,
      destinationsHeading: <Heading>Destinations</Heading>,
      novaScotia: {
        lat: 44.64933472911243,
        lng: -63.615047475871876
      },
      eiffelTower: {
        lat: 48.858348895100555,
        lng: 2.294492026111051
      },
      lochNessMonster: {
        lat: 57.27050873488408,
        lng: -4.493444954407284
      }
    }
  });
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
    name: "phone",
    label: "Phone",
    type: "phone"
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
        intent: "info",
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
    intent: "primary",
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
                    <Form {...controller} buttons={buttons} title="Drawer form example" fields={fields} onBack={onCancel} sections={showSections ? sections : undefined} />
                </div>
            </Drawer>
            <div style={{
      margin: 20
    }}>
                <Button onClick={() => setOpen(true)} label="Open Drawer" intent="primary" variant="contained" />
            </div>
        </>;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Qe=["DrawerForm"];export{o as DrawerForm,Qe as __namedExportsOrder,Ze as default};
