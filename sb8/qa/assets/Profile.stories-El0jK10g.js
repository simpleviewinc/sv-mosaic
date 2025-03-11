import{j as d}from"./jsx-runtime-DiwAibxM.js";import{r as i}from"./index-Btj5Fd67.js";import{D as W}from"./Delete-JquqLxtg.js";import{A as M}from"./Add-DNdhMQMf.js";import{u as Y,b as j,d as N,v as B,e as E,j as G,F as L}from"./Form-mIbk-vgo.js";import{r as U}from"./renderButtons-BmHfsf_z.js";import{t as c,a as p}from"./toggleOptions-1cXvXfFl.js";import{g as q,a as z}from"./options-C_LXlRBD.js";import{O as H}from"./utils-BR2PSRFh.js";import{n as _}from"./index.browser-vcSNLBTf.js";import"./styled-B22bUKEf.js";import"./extends-CF3RwP-h.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./createSvgIcon-X8Rx5IVC.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-BzJSDP1S.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./index-6dl0l4Q7.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-ulzUmfU4.js";import"./testIds-C2FMCy5K.js";import"./useMosaicTranslation-DPUDh126.js";import"./DataViewFilterDropdown-CqTisVOW.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-iQTdUMH8.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-nyy1Of3u.js";import"./Checkbox-1rJEaydD.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-H5i5NPQc.js";import"./formats-sBod7wm8.js";import"./Dialog-BYWfLX43.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-OgvLyBY4.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-CrdURRDn.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-P9MDHuwd.js";const rt={title:"Components/Form"},$=[[["firstName"],["lastName"],["initials"]],[["dob"],[],[]],[["sex"],["gender"],["otherGender"]],[["profilePicture"]]];function J(a,o){return Math.floor(Math.random()*(o-a+1)+a)}const K=a=>Array.from(Array(a+1),(o,u)=>u).filter(o=>a%o===0),X=async()=>({workDates:{current:!0}}),s=({showState:a,hideSectionNav:o,height:u,section1Fields:h,showFirstName:y,showLastName:b,showInitials:f,skeleton:C,showAboutYou:w,showContactDetails:g,showYourWork:v,showPreferences:x})=>{const k=Y(),{state:t,methods:{setFieldValue:r},handleSubmit:I}=k;i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=H}),[]);const S=i.useMemo(()=>({columns:[{name:"id",label:"ID"},{name:"title",label:"Title"},{name:"description",label:"Description"}],primaryActions:[{name:"delete",color:"black",variant:"icon",mIcon:W,onClick:({data:e})=>{r({name:"favouriteNumbers",value:(n=[])=>n.filter(({id:l})=>l!==e.id),touched:!0})}}],data:t.data.formMatrix,limit:25,display:"list",activeColumns:["id","title","description"]}),[r,t.data.formMatrix]),D=i.useCallback(async({file:e,onChunkComplete:n,onUploadComplete:l})=>{for(let m=0;m<10;m++)await new Promise(R=>setTimeout(()=>R(n({percent:(m+1)*.1})),2*1e3/10));await l({id:_(),name:e.name,size:e.size,thumbnailUrl:["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):"",fileUrl:URL.createObjectURL(e)})},[]),F=i.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),2*1e3))},[]),O=i.useMemo(()=>[{name:"firstName",label:"First Name",type:"text",required:!0,instructionText:"Please use the name that you were given at birth.",show:c[y]},{name:"lastName",label:"Last Name",type:"text",required:!0,instructionText:"Please use the family name that you had at birth.",show:c[b]},{name:"initials",label:"Initials",type:"text",required:!0,instructionText:"If you don't interact with this field, it'll be generated for you based on your first and last names.",show:c[f]},{name:"dob",label:"Date of Birth",type:"date",required:!0,instructionText:"Pick from the datepicker or enter a MM/DD/YYYY formatted date."},{name:"sex",label:"Sex",type:"radio",required:!0,instructionText:"This is the gender you were assigned at birth.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}},{name:"gender",label:"Gender",type:"dropdown",required:!0,instructionText:"This is the gender that you identify as now.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other (Please specify)"},{value:"undisclosed",label:"Prefer not to say"}]}},{name:"otherGender",label:"Gender Specified",type:"text",required:!0,instructionText:"Please tell us what gender you identify as.",show:({data:e})=>e.gender&&e.gender.value==="other"},{name:"profilePicture",label:"Profile picture",type:"upload",instructionText:"A profile picture is not required, but it's nice to put a face to the name.",inputSettings:{onFileAdd:D,onFileDelete:F}},{name:"ukWorker",label:"I have a job",type:"toggle"},{name:"jobRole",label:"Job Role",type:"text",required:!0,show:({data:e})=>!!e.ukWorker},{name:"workAddress",label:"Work Address",type:"group",show:({data:e})=>!!e.ukWorker,instructionText:"This is where your company is registered. If you're a remote worker, it's not your house.",inputSettings:{layout:[[["address1"],["address2"]],[["city"]],[["country"],["postalCode"]]],fields:[{name:"address1",label:"Address 1",type:"text",size:"full",required:!0},{name:"address2",label:"Address 2",type:"text",size:"full"},{name:"city",label:"City",type:"text",required:!0,size:"full"},{name:"country",type:"dropdown",label:"Country",size:"full",required:!0,inputSettings:{getOptions:q},validates:[{name:"postalCode",include:[j]}]},{name:"postalCode",type:"text",label:"Postal Code",size:"full",required:!0,validators:[{fn:"validatePostcode",options:{countryField:"country"}}]}]}},{name:"workDates",label:"When did you hold this position?",type:"group",show:({data:e})=>!!e.ukWorker,inputSettings:{layout:[[["current"]],[["startDate"],["endDate"],[]]],fields:[{name:"current",type:"toggle",label:"This is my current position",validates:[{name:"startDate",include:[N]},{name:"endDate",include:[N]}]},{name:"startDate",type:"date",label:"Start date",required:!0,validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",required:!0,validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],disabled:({data:e})=>{var n;return!!((n=e.workDates)!=null&&n.current)}}]}},{name:"email",label:"Email Address",type:"text",required:!0,validators:[B,E]},{name:"phone",label:"Phone",type:"phone",required:!0,instructionText:"Your primary phone number. It can be a mobile or a home or work telephone."},{name:"secondaryPhone",label:"Secondary Phone",type:"phone",instructionText:"Good to have just in case we can't catch you on your primary phone."},{name:"addresses",label:"Addresses",type:"address",required:!0,instructionText:"Provide us with at least 1 physical address at which we can contact you.",inputSettings:{amountPhysical:3,getOptionsCountries:q,getOptionsStates:z,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"favouriteColor",label:"Favourite Colour",type:"color"},{name:"favouriteNumbers",label:"What are your favourite numbers?",type:"matrix",required:!0,instructionText:"There must be at least 1 that you like. Pun intended.",inputSettings:{dataView:S,buttons:[{label:"Add",onClick:()=>{const e=J(1,1e3),n=K(e);r({name:"favouriteNumbers",value:(l=[])=>[...l,{id:e,title:e,description:`I ❤️ ${e} because it has ${n.length} factors which are ${G(n.map(String))}`}],touched:!0})},color:"teal",variant:"text",mIcon:M}]}},{name:"hobbies",label:"What do you like?",type:"textEditor",required:!0,instructionText:"In a few words, describe to us your most distinguishing hobbies."},{name:"animalsOrVehicles",label:"Would you rather talk about animals or vehicles?",type:"radio",required:!0,inputSettings:{options:[{value:"animals",label:"Animals"},{value:"vehicles",label:"Vehicles"}]}},{name:"vehiclesRace",label:"If you had to choose to race around the nurburgring, what would it be?",type:"text",required:!0},{name:"vehiclesSleep",label:"If you had to choose a car to sleep in for a week, what would it be?",type:"text",required:!0},{name:"vehiclesTrip",label:"If you had to choose a car to road trip from east to west coast USA, what would it be?",type:"text",required:!0},{name:"animalsBattle",label:"If had to choose to ride an animal into battle, what would it be?",type:"text",required:!0},{name:"animalsCompanion",label:"If had to choose an animal to be your companion for life, what would it be?",type:"text",required:!0},{name:"animalsTalk",label:"If you could communicate with any animal, what would it be?",type:"text",required:!0}],[y,b,f,S,r,D,F]),V=i.useMemo(()=>[{title:"About You",description:"The official stuff",fields:h,show:w},{title:"Contact Details",description:"How would we get in touch with you otherwise?",fields:[[["email"],[],[]],[["phone"],["secondaryPhone"],[]],[["addresses"]]],show:g},{title:"Your work",description:"How do you make a living?",fields:[[["ukWorker"]],[["jobRole"]],[["workAddress"]],[["workDates"]]],show:v},{title:"Preferences",description:"What you're into",fields:[[["favouriteNumbers"]],[["favouriteColor"]],[["hobbies"]],[["animalsOrVehicles"]]],show:x},{title:"Vehicles",description:"Speed through these questions...",fields:[[["vehiclesRace"]],[["vehiclesSleep"]],[["vehiclesTrip"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="vehicles"},{title:"Animals",description:"Humans don't count.",fields:[[["animalsBattle"]],[["animalsCompanion"]],[["animalsTalk"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="animals"}],[h,w,g,v,x]);return i.useEffect(()=>{if(t.touched.initials)return;const e=[typeof t.data.firstName=="string"&&t.data.firstName.length?t.data.firstName[0]:"",typeof t.data.lastName=="string"&&t.data.lastName.length?t.data.lastName[0]:""].filter(Boolean).join("");r({name:"initials",value:e})},[t.data.firstName,t.data.lastName,t.touched.initials,r]),d.jsxs(d.Fragment,{children:[a&&d.jsx("pre",{children:JSON.stringify(t,null,"  ")}),d.jsx("div",{style:{height:u},children:d.jsx(L,{...k,buttons:U(I),title:"Profile",description:"Give us some information to understand a little more about you.",sections:V,fields:O,skeleton:C,getFormValues:X,hideSectionNav:o})})]})};s.args={showState:!1,hideSectionNav:!1,height:"100vh",section1Fields:$,showFirstName:!0,showLastName:!0,showInitials:!0,skeleton:!1,showAboutYou:!0,showContactDetails:!0,showYourWork:!0,showPreferences:!0};s.argTypes={showState:{name:"Show state"},hideSectionNav:{name:"Hide Section Navigation"},height:{name:"Height"},section1Fields:{name:"Section 1 Fields"},showFirstName:{name:"Show First Name Field",control:{type:"select"},options:p},showLastName:{name:"Show Last Name Field",control:{type:"select"},options:p},showInitials:{name:"Show Initials Field",control:{type:"select"},options:p},skeleton:{name:"Skeleton"},showAboutYou:{name:"Show About You Section"},showContactDetails:{name:"Show Contact Details Section"},showYourWork:{name:"Show You Work Section"},showPreferences:{name:"Show Preferences Section"}};var A,T,P;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`({
  showState,
  hideSectionNav,
  height,
  section1Fields,
  showFirstName,
  showLastName,
  showInitials,
  skeleton,
  showAboutYou,
  showContactDetails,
  showYourWork,
  showPreferences
}: typeof Profile.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    methods: {
      setFieldValue
    },
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const gridConfig: DataViewProps = useMemo(() => ({
    columns: [{
      name: "id",
      label: "ID"
    }, {
      name: "title",
      label: "Title"
    }, {
      name: "description",
      label: "Description"
    }],
    primaryActions: [{
      name: "delete",
      color: "black",
      variant: "icon",
      mIcon: DeleteIcon,
      onClick: ({
        data
      }) => {
        setFieldValue({
          name: "favouriteNumbers",
          value: (numbers = []) => numbers.filter(({
            id
          }) => id !== data.id),
          touched: true
        });
      }
    }],
    data: state.data.formMatrix,
    limit: 25,
    display: "list",
    activeColumns: ["id", "title", "description"]
  }), [setFieldValue, state.data.formMatrix]);
  const onFileAdd: UploadFieldInputSettings["onFileAdd"] = useCallback(async ({
    file,
    onChunkComplete,
    onUploadComplete
  }) => {
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(() => resolve(onChunkComplete({
        percent: (i + 1) * 0.1
      })), 2 * 1000 / 10));
    }
    await onUploadComplete({
      id: nanoid(),
      name: file.name,
      size: file.size,
      thumbnailUrl: ["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : "",
      fileUrl: URL.createObjectURL(file)
    });
  }, []);
  const onFileDelete = useCallback(async () => {
    await new Promise(resolve => setTimeout(() => resolve(null), 2 * 1000));
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    instructionText: "Please use the name that you were given at birth.",
    show: toggleMap[showFirstName]
  }, {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    instructionText: "Please use the family name that you had at birth.",
    show: toggleMap[showLastName]
  }, {
    name: "initials",
    label: "Initials",
    type: "text",
    required: true,
    instructionText: "If you don't interact with this field, it'll be generated for you based on your first and last names.",
    show: toggleMap[showInitials]
  }, {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    required: true,
    instructionText: "Pick from the datepicker or enter a MM/DD/YYYY formatted date."
  }, {
    name: "sex",
    label: "Sex",
    type: "radio",
    required: true,
    instructionText: "This is the gender you were assigned at birth.",
    inputSettings: {
      options: [{
        value: "male",
        label: "Male"
      }, {
        value: "female",
        label: "Female"
      }]
    }
  }, {
    name: "gender",
    label: "Gender",
    type: "dropdown",
    required: true,
    instructionText: "This is the gender that you identify as now.",
    inputSettings: {
      options: [{
        value: "male",
        label: "Male"
      }, {
        value: "female",
        label: "Female"
      }, {
        value: "other",
        label: "Other (Please specify)"
      }, {
        value: "undisclosed",
        label: "Prefer not to say"
      }]
    }
  }, {
    name: "otherGender",
    label: "Gender Specified",
    type: "text",
    required: true,
    instructionText: "Please tell us what gender you identify as.",
    show: ({
      data
    }) => data.gender && data.gender.value === "other"
  }, {
    name: "profilePicture",
    label: "Profile picture",
    type: "upload",
    instructionText: "A profile picture is not required, but it's nice to put a face to the name.",
    inputSettings: {
      onFileAdd,
      onFileDelete
    }
  }, {
    name: "ukWorker",
    label: "I have a job",
    type: "toggle"
  }, {
    name: "jobRole",
    label: "Job Role",
    type: "text",
    required: true,
    show: ({
      data
    }) => Boolean(data.ukWorker)
  }, {
    name: "workAddress",
    label: "Work Address",
    type: "group",
    show: ({
      data
    }) => Boolean(data.ukWorker),
    instructionText: "This is where your company is registered. If you're a remote worker, it's not your house.",
    inputSettings: {
      layout: [[["address1"], ["address2"]], [["city"]], [["country"], ["postalCode"]]],
      fields: [{
        name: "address1",
        label: "Address 1",
        type: "text",
        size: "full",
        required: true
      }, {
        name: "address2",
        label: "Address 2",
        type: "text",
        size: "full"
      }, {
        name: "city",
        label: "City",
        type: "text",
        required: true,
        size: "full"
      }, {
        name: "country",
        type: "dropdown",
        label: "Country",
        size: "full",
        required: true,
        inputSettings: {
          getOptions: getOptionsCountries
        },
        validates: [{
          name: "postalCode",
          include: [validatePostcode]
        }]
      }, {
        name: "postalCode",
        type: "text",
        label: "Postal Code",
        size: "full",
        required: true,
        validators: [{
          fn: "validatePostcode",
          options: {
            countryField: "country"
          }
        }]
      }]
    }
  }, {
    name: "workDates",
    label: "When did you hold this position?",
    type: "group",
    show: ({
      data
    }) => Boolean(data.ukWorker),
    inputSettings: {
      layout: [[["current"]], [["startDate"], ["endDate"], []]],
      fields: [{
        name: "current",
        type: "toggle",
        label: "This is my current position",
        validates: [{
          name: "startDate",
          include: [validateDateRange]
        }, {
          name: "endDate",
          include: [validateDateRange]
        }]
      }, {
        name: "startDate",
        type: "date",
        label: "Start date",
        required: true,
        validators: [{
          fn: "validateDateRange",
          options: {
            endDateName: "endDate"
          }
        }],
        validates: ["endDate"]
      }, {
        name: "endDate",
        type: "date",
        label: "End date",
        required: true,
        validators: [{
          fn: "validateDateRange",
          options: {
            startDateName: "startDate"
          }
        }],
        validates: ["startDate"],
        disabled: ({
          data
        }) => Boolean(data.workDates?.current)
      }]
    }
  }, {
    name: "email",
    label: "Email Address",
    type: "text",
    required: true,
    validators: [validateEmail, validateSlow]
  }, {
    name: "phone",
    label: "Phone",
    type: "phone",
    required: true,
    instructionText: "Your primary phone number. It can be a mobile or a home or work telephone."
  }, {
    name: "secondaryPhone",
    label: "Secondary Phone",
    type: "phone",
    instructionText: "Good to have just in case we can't catch you on your primary phone."
  }, {
    name: "addresses",
    label: "Addresses",
    type: "address",
    required: true,
    instructionText: "Provide us with at least 1 physical address at which we can contact you.",
    inputSettings: {
      amountPhysical: 3,
      getOptionsCountries,
      getOptionsStates,
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"
    }
  }, {
    name: "favouriteColor",
    label: "Favourite Colour",
    type: "color"
  }, {
    name: "favouriteNumbers",
    label: "What are your favourite numbers?",
    type: "matrix",
    required: true,
    instructionText: "There must be at least 1 that you like. Pun intended.",
    inputSettings: {
      dataView: gridConfig,
      buttons: [{
        label: "Add",
        onClick: () => {
          const id = randomNumber(1, 1000);
          const idFactors = factors(id);
          setFieldValue({
            name: "favouriteNumbers",
            value: (numbers = []) => [...numbers, {
              id,
              title: id,
              description: \`I ❤️ \${id} because it has \${idFactors.length} factors which are \${joinAnd(idFactors.map(String))}\`
            }],
            touched: true
          });
        },
        color: "teal",
        variant: "text",
        mIcon: AddIcon
      }]
    }
  }, {
    name: "hobbies",
    label: "What do you like?",
    type: "textEditor",
    required: true,
    instructionText: "In a few words, describe to us your most distinguishing hobbies."
  }, {
    name: "animalsOrVehicles",
    label: "Would you rather talk about animals or vehicles?",
    type: "radio",
    required: true,
    inputSettings: {
      options: [{
        value: "animals",
        label: "Animals"
      }, {
        value: "vehicles",
        label: "Vehicles"
      }]
    }
  }, {
    name: "vehiclesRace",
    label: "If you had to choose to race around the nurburgring, what would it be?",
    type: "text",
    required: true
  }, {
    name: "vehiclesSleep",
    label: "If you had to choose a car to sleep in for a week, what would it be?",
    type: "text",
    required: true
  }, {
    name: "vehiclesTrip",
    label: "If you had to choose a car to road trip from east to west coast USA, what would it be?",
    type: "text",
    required: true
  }, {
    name: "animalsBattle",
    label: "If had to choose to ride an animal into battle, what would it be?",
    type: "text",
    required: true
  }, {
    name: "animalsCompanion",
    label: "If had to choose an animal to be your companion for life, what would it be?",
    type: "text",
    required: true
  }, {
    name: "animalsTalk",
    label: "If you could communicate with any animal, what would it be?",
    type: "text",
    required: true
  }], [showFirstName, showLastName, showInitials, gridConfig, setFieldValue, onFileAdd, onFileDelete]);
  const sections = useMemo(() => [{
    title: "About You",
    description: "The official stuff",
    fields: section1Fields,
    show: showAboutYou
  }, {
    title: "Contact Details",
    description: "How would we get in touch with you otherwise?",
    fields: [[["email"], [], []], [["phone"], ["secondaryPhone"], []], [["addresses"]]],
    show: showContactDetails
  }, {
    title: "Your work",
    description: "How do you make a living?",
    fields: [[["ukWorker"]], [["jobRole"]], [["workAddress"]], [["workDates"]]],
    show: showYourWork
  }, {
    title: "Preferences",
    description: "What you're into",
    fields: [
    // row 1
    [["favouriteNumbers"]], [["favouriteColor"]], [["hobbies"]], [["animalsOrVehicles"]]],
    show: showPreferences
  }, {
    title: "Vehicles",
    description: "Speed through these questions...",
    fields: [[["vehiclesRace"]], [["vehiclesSleep"]], [["vehiclesTrip"]]],
    show: ({
      data
    }) => data.animalsOrVehicles && data.animalsOrVehicles.value === "vehicles"
  }, {
    title: "Animals",
    description: "Humans don't count.",
    fields: [[["animalsBattle"]], [["animalsCompanion"]], [["animalsTalk"]]],
    show: ({
      data
    }) => data.animalsOrVehicles && data.animalsOrVehicles.value === "animals"
  }], [section1Fields, showAboutYou, showContactDetails, showYourWork, showPreferences]);
  useEffect(() => {
    if (state.touched.initials) {
      return;
    }
    const initials = [typeof state.data.firstName === "string" && state.data.firstName.length ? state.data.firstName[0] : "", typeof state.data.lastName === "string" && state.data.lastName.length ? state.data.lastName[0] : ""].filter(Boolean).join("");
    setFieldValue({
      name: "initials",
      value: initials
    });
  }, [state.data.firstName, state.data.lastName, state.touched.initials, setFieldValue]);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Profile" description="Give us some information to understand a little more about you." sections={sections} fields={fields} skeleton={skeleton} getFormValues={getFormValues} hideSectionNav={hideSectionNav} />
            </div>
        </>;
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const st=["Profile"];export{s as Profile,st as __namedExportsOrder,rt as default};
