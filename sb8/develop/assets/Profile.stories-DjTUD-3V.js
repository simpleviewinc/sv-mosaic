import{j as d}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{D as V}from"./Delete-BQJpjAkE.js";import{A as W}from"./Add-fnxyn5lZ.js";import{u as M,a as Y,b as q,v as j,c as B,j as G,F as L}from"./Form-CgwovX7A.js";import{r as U}from"./renderButtons-BmHfsf_z.js";import{t as c,a as p}from"./toggleOptions-1cXvXfFl.js";import{b as F,a as z}from"./options-DEOzrsxm.js";import{O as E}from"./utils-BR2PSRFh.js";import{n as H}from"./index.browser-vcSNLBTf.js";import"./styled-D_JiKFWz.js";import"./createSvgIcon-DgkyijZl.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DuPZ_syw.js";import"./generateUtilityClasses-DR3ZN2W1.js";import"./ButtonBase-D151CXhN.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-CwglX3X7.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D2wr39e0.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-Dzq3_XHF.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-Nl7VMvHi.js";import"./createSvgIcon-Dkn5Rwb8.js";import"./createSvgIcon-BJqXHHQN.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Q_76qCVq.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-CyYL6T5I.js";import"./formControlState-DOpihTi1.js";import"./ButtonRow-CMfkAXvR.js";import"./Spinner-l5n7yqAB.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-BpALmPMn.js";import"./Checkbox-DEHVDJOM.js";import"./FormControlLabel-c62W2Jp9.js";import"./getThemeProps-jN7SmM6K.js";import"./sizes-C6oSOElx.js";import"./RadioButton-C4GIeT3G.js";import"./StyledFormControl.styled-CN2FC1d6.js";import"./Toggle-ZvDv_3Et.js";import"./formats-sBod7wm8.js";import"./Dialog-q0ujYBl7.js";import"./ChevronRight-BmBn2D1l.js";import"./TitleWrapper-BBj93Dzh.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-v6BtnLJQ.js";import"./Close-KkbZKwWJ.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Bjl-7o6A.js";import"./PageHeader-UTe0naMU.js";const at={title:"Components/Form"},_=[[["firstName"],["lastName"],["initials"]],[["dob"],[],[]],[["sex"],["gender"],["otherGender"]],[["profilePicture"]]];function $(i,r){return Math.floor(Math.random()*(r-i+1)+i)}const J=i=>Array.from(Array(i+1),(r,u)=>u).filter(r=>i%r===0),l=({showState:i,hideSectionNav:r,height:u,section1Fields:h,showFirstName:y,showLastName:b,showInitials:f,showAboutYou:w,showContactDetails:g,showYourWork:v,showPreferences:x})=>{const k=M({data:{workDates:{current:!0}}}),{state:t,methods:{setFieldValue:s},handleSubmit:C}=k;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=E}),[]);const S=o.useMemo(()=>({columns:[{name:"id",label:"ID"},{name:"title",label:"Title"},{name:"description",label:"Description"}],primaryActions:[{name:"delete",color:"black",variant:"icon",mIcon:V,onClick:({data:e})=>{s({name:"favouriteNumbers",value:(a=[])=>a.filter(({id:n})=>n!==e.id),touched:!0})}}],data:t.data.formMatrix,limit:25,display:"list",activeColumns:["id","title","description"]}),[s,t.data.formMatrix]),D=o.useCallback(async({file:e,onChunkComplete:a,onUploadComplete:n})=>{for(let m=0;m<10;m++)await new Promise(R=>setTimeout(()=>R(a({percent:(m+1)*.1})),2*1e3/10));await n({id:H(),name:e.name,size:e.size,thumbnailUrl:["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):"",fileUrl:URL.createObjectURL(e)})},[]),N=o.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),2*1e3))},[]),I=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text",required:!0,instructionText:"Please use the name that you were given at birth.",show:c[y]},{name:"lastName",label:"Last Name",type:"text",required:!0,instructionText:"Please use the family name that you had at birth.",show:c[b]},{name:"initials",label:"Initials",type:"text",required:!0,instructionText:"If you don't interact with this field, it'll be generated for you based on your first and last names.",show:c[f]},{name:"dob",label:"Date of Birth",type:"date",required:!0,instructionText:"Pick from the datepicker or enter a MM/DD/YYYY formatted date."},{name:"sex",label:"Sex",type:"radio",required:!0,instructionText:"This is the gender you were assigned at birth.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}},{name:"gender",label:"Gender",type:"dropdown",required:!0,instructionText:"This is the gender that you identify as now.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other (Please specify)"},{value:"undisclosed",label:"Prefer not to say"}]}},{name:"otherGender",label:"Gender Specified",type:"text",required:!0,instructionText:"Please tell us what gender you identify as.",show:({data:e})=>e.gender&&e.gender.value==="other"},{name:"profilePicture",label:"Profile picture",type:"upload",instructionText:"A profile picture is not required, but it's nice to put a face to the name.",inputSettings:{onFileAdd:D,onFileDelete:N}},{name:"ukWorker",label:"I have a job",type:"toggle"},{name:"jobRole",label:"Job Role",type:"text",required:!0,show:({data:e})=>!!e.ukWorker},{name:"workAddress",label:"Work Address",type:"group",show:({data:e})=>!!e.ukWorker,instructionText:"This is where your company is registered. If you're a remote worker, it's not your house.",inputSettings:{layout:[[["address1"],["address2"]],[["city"]],[["country"],["postalCode"]]],fields:[{name:"address1",label:"Address 1",type:"text",size:"full",required:!0},{name:"address2",label:"Address 2",type:"text",size:"full"},{name:"city",label:"City",type:"text",required:!0,size:"full"},{name:"country",type:"dropdown",label:"Country",size:"full",required:!0,inputSettings:{getOptions:F},validates:[{name:"postalCode",include:[Y]}]},{name:"postalCode",type:"text",label:"Postal Code",size:"full",required:!0,validators:[{fn:"validatePostcode",options:{countryField:"country"}}]}]}},{name:"workDates",label:"When did you hold this position?",type:"group",show:({data:e})=>!!e.ukWorker,inputSettings:{layout:[[["current"]],[["startDate"],["endDate"],[]]],fields:[{name:"current",type:"toggle",label:"This is my current position",validates:[{name:"startDate",include:[q]},{name:"endDate",include:[q]}]},{name:"startDate",type:"date",label:"Start date",required:!0,validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",required:!0,validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],disabled:({data:e})=>{var a;return!!((a=e.workDates)!=null&&a.current)}}]}},{name:"email",label:"Email Address",type:"text",required:!0,validators:[j,B]},{name:"phone",label:"Phone",type:"phone",required:!0,instructionText:"Your primary phone number. It can be a mobile or a home or work telephone."},{name:"secondaryPhone",label:"Secondary Phone",type:"phone",instructionText:"Good to have just in case we can't catch you on your primary phone."},{name:"addresses",label:"Addresses",type:"address",required:!0,instructionText:"Provide us with at least 1 physical address at which we can contact you.",inputSettings:{amountPhysical:3,getOptionsCountries:F,getOptionsStates:z,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"favouriteColor",label:"Favourite Colour",type:"color"},{name:"favouriteNumbers",label:"What are your favourite numbers?",type:"matrix",required:!0,instructionText:"There must be at least 1 that you like. Pun intended.",inputSettings:{dataView:S,buttons:[{label:"Add",onClick:()=>{const e=$(1,1e3),a=J(e);s({name:"favouriteNumbers",value:(n=[])=>[...n,{id:e,title:e,description:`I ❤️ ${e} because it has ${a.length} factors which are ${G(a.map(String))}`}],touched:!0})},color:"teal",variant:"text",mIcon:W}]}},{name:"hobbies",label:"What do you like?",type:"textEditor",required:!0,instructionText:"In a few words, describe to us your most distinguishing hobbies."},{name:"animalsOrVehicles",label:"Would you rather talk about animals or vehicles?",type:"radio",required:!0,inputSettings:{options:[{value:"animals",label:"Animals"},{value:"vehicles",label:"Vehicles"}]}},{name:"vehiclesRace",label:"If you had to choose to race around the nurburgring, what would it be?",type:"text",required:!0},{name:"vehiclesSleep",label:"If you had to choose a car to sleep in for a week, what would it be?",type:"text",required:!0},{name:"vehiclesTrip",label:"If you had to choose a car to road trip from east to west coast USA, what would it be?",type:"text",required:!0},{name:"animalsBattle",label:"If had to choose to ride an animal into battle, what would it be?",type:"text",required:!0},{name:"animalsCompanion",label:"If had to choose an animal to be your companion for life, what would it be?",type:"text",required:!0},{name:"animalsTalk",label:"If you could communicate with any animal, what would it be?",type:"text",required:!0}],[y,b,f,S,s,D,N]),O=o.useMemo(()=>[{title:"About You",description:"The official stuff",fields:h,show:w},{title:"Contact Details",description:"How would we get in touch with you otherwise?",fields:[[["email"],[],[]],[["phone"],["secondaryPhone"],[]],[["addresses"]]],show:g},{title:"Your work",description:"How do you make a living?",fields:[[["ukWorker"]],[["jobRole"]],[["workAddress"]],[["workDates"]]],show:v},{title:"Preferences",description:"What you're into",fields:[[["favouriteNumbers"]],[["favouriteColor"]],[["hobbies"]],[["animalsOrVehicles"]]],show:x},{title:"Vehicles",description:"Speed through these questions...",fields:[[["vehiclesRace"]],[["vehiclesSleep"]],[["vehiclesTrip"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="vehicles"},{title:"Animals",description:"Humans don't count.",fields:[[["animalsBattle"]],[["animalsCompanion"]],[["animalsTalk"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="animals"}],[h,w,g,v,x]);return o.useEffect(()=>{if(t.touched.initials)return;const e=[typeof t.data.firstName=="string"&&t.data.firstName.length?t.data.firstName[0]:"",typeof t.data.lastName=="string"&&t.data.lastName.length?t.data.lastName[0]:""].filter(Boolean).join("");s({name:"initials",value:e})},[t.data.firstName,t.data.lastName,t.touched.initials,s]),d.jsxs(d.Fragment,{children:[i&&d.jsx("pre",{children:JSON.stringify(t,null,"  ")}),d.jsx("div",{style:{height:u},children:d.jsx(L,{...k,buttons:U(C),title:"Profile",description:"Give us some information to understand a little more about you.",sections:O,fields:I,hideSectionNav:r})})]})};l.args={showState:!1,hideSectionNav:!1,height:"100vh",section1Fields:_,showFirstName:!0,showLastName:!0,showInitials:!0,skeleton:!1,showAboutYou:!0,showContactDetails:!0,showYourWork:!0,showPreferences:!0};l.argTypes={showState:{name:"Show state"},hideSectionNav:{name:"Hide Section Navigation"},height:{name:"Height"},section1Fields:{name:"Section 1 Fields"},showFirstName:{name:"Show First Name Field",control:{type:"select"},options:p},showLastName:{name:"Show Last Name Field",control:{type:"select"},options:p},showInitials:{name:"Show Initials Field",control:{type:"select"},options:p},skeleton:{name:"Skeleton"},showAboutYou:{name:"Show About You Section"},showContactDetails:{name:"Show Contact Details Section"},showYourWork:{name:"Show You Work Section"},showPreferences:{name:"Show Preferences Section"}};var A,T,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`({
  showState,
  hideSectionNav,
  height,
  section1Fields,
  showFirstName,
  showLastName,
  showInitials,
  showAboutYou,
  showContactDetails,
  showYourWork,
  showPreferences
}: typeof Profile.args): ReactElement => {
  const controller = useForm({
    data: {
      workDates: {
        current: true
      }
    }
  });
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
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Profile" description="Give us some information to understand a little more about you." sections={sections} fields={fields} hideSectionNav={hideSectionNav} />
            </div>
        </>;
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const it=["Profile"];export{l as Profile,it as __namedExportsOrder,at as default};
