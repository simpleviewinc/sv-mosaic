import{j as u}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{d as R}from"./Delete-Bd9yuHmM.js";import{d as W}from"./Add-DakDrsh-.js";import{u as M,b as Y,d as F,v as j,e as B,j as E,F as G}from"./Form-DYTOoPno.js";import{r as L}from"./renderButtons-BmHfsf_z.js";import{t as c,a as p}from"./toggleOptions-1cXvXfFl.js";import{g as q,a as U}from"./optionGetters-DXvNsMp-.js";import{O as z}from"./utils-BR2PSRFh.js";import{n as _}from"./index.browser-vcSNLBTf.js";import"./styled-hJgfyZIG.js";import"./extends-CF3RwP-h.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./createSvgIcon-DE5yaevU.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./CheckboxList-B0TDWvkR.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BN-KUs9r.js";import"./FormControlLabel-n1qioM9o.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useControlled-im5M3O13.js";import"./getThemeProps-Cs15h2IA.js";import"./useTheme-5hcycNQy.js";import"./createSvgIcon-CPgMIgId.js";import"./testIds-D6Gx1A0F.js";import"./FormFieldText.styled-hkDOkrrs.js";import"./Button-Do5OxnZO.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-BxmsGmlx.js";import"./useMosaicTranslation-CZCb37QS.js";import"./createSvgIcon-CcHL1II5.js";import"./useId-DLncWxdO.js";import"./index-BRTUF0sG.js";import"./debounce-DO3dP4oK.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./Chip-Btt3uSwF.js";import"./ButtonRow-B3IWj8ab.js";import"./Spinner-DgupAfKo.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-CvnKr_oj.js";import"./ColorSelected-F3W2PMce.js";import"./TitleWrapper-D2l-_w9e.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-yhdXyTld.js";import"./formats-sBod7wm8.js";import"./Dialog-DXK7hw4q.js";import"./useMediaQuery-CguehUMS.js";import"./Snackbar-J6gNQC5v.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./_isIterateeCall-BC645kN2.js";import"./TooltipIcon-CO3K7ssQ.js";const ut={title:"Components/Form"},H=[[["firstName"],["lastName"],["initials"]],[["dob"],[],[]],[["sex"],["gender"],["otherGender"]],[["profilePicture"]]];function $(a,i){return Math.floor(Math.random()*(i-a+1)+a)}const J=a=>Array.from(Array(a+1),(i,d)=>d).filter(i=>a%i===0),K=async()=>({workDates:{current:!0}}),s=({showState:a,height:i,section1Fields:d,showFirstName:h,showLastName:y,showInitials:f,skeleton:P,showAboutYou:b,showContactDetails:w,showYourWork:g,showPreferences:v})=>{const x=M(),{state:t,methods:{setFieldValue:r},handleSubmit:C}=x;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=z}),[]);const k=o.useMemo(()=>({columns:[{name:"id",label:"ID"},{name:"title",label:"Title"},{name:"description",label:"Description"}],primaryActions:[{name:"delete",color:"black",variant:"icon",mIcon:R,onClick:({data:e})=>{r({name:"favouriteNumbers",value:(n=[])=>n.filter(({id:l})=>l!==e.id),touched:!0})}}],data:t.data.formMatrix,limit:25,display:"list",activeColumns:["id","title","description"]}),[r,t.data.formMatrix]),S=o.useCallback(async({file:e,onChunkComplete:n,onUploadComplete:l})=>{for(let m=0;m<10;m++)await new Promise(V=>setTimeout(()=>V(n({percent:(m+1)*.1})),2*1e3/10));await l({id:_(),name:e.name,size:e.size,thumbnailUrl:["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):"",fileUrl:URL.createObjectURL(e)})},[]),D=o.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),2*1e3))},[]),I=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text",required:!0,instructionText:"Please use the name that you were given at birth.",show:c[h]},{name:"lastName",label:"Last Name",type:"text",required:!0,instructionText:"Please use the family name that you had at birth.",show:c[y]},{name:"initials",label:"Initials",type:"text",required:!0,instructionText:"If you don't interact with this field, it'll be generated for you based on your first and last names.",show:c[f]},{name:"dob",label:"Date of Birth",type:"date",required:!0,instructionText:"Pick from the datepicker or enter a MM/DD/YYYY formatted date."},{name:"sex",label:"Sex",type:"radio",required:!0,instructionText:"This is the gender you were assigned at birth.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}},{name:"gender",label:"Gender",type:"dropdown",required:!0,instructionText:"This is the gender that you identify as now.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other (Please specify)"},{value:"undisclosed",label:"Prefer not to say"}]}},{name:"otherGender",label:"Gender Specified",type:"text",required:!0,instructionText:"Please tell us what gender you identify as.",show:({data:e})=>e.gender&&e.gender.value==="other"},{name:"profilePicture",label:"Profile picture",type:"upload",instructionText:"A profile picture is not required, but it's nice to put a face to the name.",inputSettings:{onFileAdd:S,onFileDelete:D}},{name:"ukWorker",label:"I have a job",type:"toggle"},{name:"jobRole",label:"Job Role",type:"text",required:!0,show:({data:e})=>!!e.ukWorker},{name:"workAddress",label:"Work Address",type:"group",show:({data:e})=>!!e.ukWorker,instructionText:"This is where your company is registered. If you're a remote worker, it's not your house.",inputSettings:{layout:[[["address1"],["address2"]],[["city"]],[["country"],["postalCode"]]],fields:[{name:"address1",label:"Address 1",type:"text",size:"full",required:!0},{name:"address2",label:"Address 2",type:"text",size:"full"},{name:"city",label:"City",type:"text",required:!0,size:"full"},{name:"country",type:"dropdown",label:"Country",size:"full",required:!0,inputSettings:{getOptions:q},validates:[{name:"postalCode",include:[Y]}]},{name:"postalCode",type:"text",label:"Postal Code",size:"full",required:!0,validators:[{fn:"validatePostcode",options:{countryField:"country"}}]}]}},{name:"workDates",label:"When did you hold this position?",type:"group",show:({data:e})=>!!e.ukWorker,inputSettings:{layout:[[["current"]],[["startDate"],["endDate"],[]]],fields:[{name:"current",type:"toggle",label:"This is my current position",validates:[{name:"startDate",include:[F]},{name:"endDate",include:[F]}]},{name:"startDate",type:"date",label:"Start date",required:!0,validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",required:!0,validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],disabled:({data:e})=>{var n;return!!((n=e.workDates)!=null&&n.current)}}]}},{name:"email",label:"Email Address",type:"text",required:!0,validators:[j,B]},{name:"phone",label:"Phone",type:"phone",required:!0,instructionText:"Your primary phone number. It can be a mobile or a home or work telephone."},{name:"secondaryPhone",label:"Secondary Phone",type:"phone",instructionText:"Good to have just in case we can't catch you on your primary phone."},{name:"addresses",label:"Addresses",type:"address",required:!0,instructionText:"Provide us with at least 1 physical address at which we can contact you.",inputSettings:{amountPhysical:3,getOptionsCountries:q,getOptionsStates:U,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"favouriteColor",label:"Favourite Colour",type:"color"},{name:"favouriteNumbers",label:"What are your favourite numbers?",type:"matrix",required:!0,instructionText:"There must be at least 1 that you like. Pun intended.",inputSettings:{dataView:k,buttons:[{label:"Add",onClick:()=>{const e=$(1,1e3),n=J(e);r({name:"favouriteNumbers",value:(l=[])=>[...l,{id:e,title:e,description:`I ❤️ ${e} because it has ${n.length} factors which are ${E(n.map(String))}`}],touched:!0})},color:"teal",variant:"text",mIcon:W}]}},{name:"hobbies",label:"What do you like?",type:"textEditor",required:!0,instructionText:"In a few words, describe to us your most distinguishing hobbies."},{name:"animalsOrVehicles",label:"Would you rather talk about animals or vehicles?",type:"radio",required:!0,inputSettings:{options:[{value:"animals",label:"Animals"},{value:"vehicles",label:"Vehicles"}]}},{name:"vehiclesRace",label:"If you had to choose to race around the nurburgring, what would it be?",type:"text",required:!0},{name:"vehiclesSleep",label:"If you had to choose a car to sleep in for a week, what would it be?",type:"text",required:!0},{name:"vehiclesTrip",label:"If you had to choose a car to road trip from east to west coast USA, what would it be?",type:"text",required:!0},{name:"animalsBattle",label:"If had to choose to ride an animal into battle, what would it be?",type:"text",required:!0},{name:"animalsCompanion",label:"If had to choose an animal to be your companion for life, what would it be?",type:"text",required:!0},{name:"animalsTalk",label:"If you could communicate with any animal, what would it be?",type:"text",required:!0}],[h,y,f,k,r,S,D]),O=o.useMemo(()=>[{title:"About You",description:"The official stuff",fields:d,show:b},{title:"Contact Details",description:"How would we get in touch with you otherwise?",fields:[[["email"],[],[]],[["phone"],["secondaryPhone"],[]],[["addresses"]]],show:w},{title:"Your work",description:"How do you make a living?",fields:[[["ukWorker"]],[["jobRole"]],[["workAddress"]],[["workDates"]]],show:g},{title:"Preferences",description:"What you're into",fields:[[["favouriteNumbers"]],[["favouriteColor"]],[["hobbies"]],[["animalsOrVehicles"]]],show:v},{title:"Vehicles",description:"Speed through these questions...",fields:[[["vehiclesRace"]],[["vehiclesSleep"]],[["vehiclesTrip"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="vehicles"},{title:"Animals",description:"Humans don't count.",fields:[[["animalsBattle"]],[["animalsCompanion"]],[["animalsTalk"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="animals"}],[d,b,w,g,v]);return o.useEffect(()=>{if(t.touched.initials)return;const e=[typeof t.data.firstName=="string"&&t.data.firstName.length?t.data.firstName[0]:"",typeof t.data.lastName=="string"&&t.data.lastName.length?t.data.lastName[0]:""].filter(Boolean).join("");r({name:"initials",value:e})},[t.data.firstName,t.data.lastName,t.touched.initials,r]),u.jsxs(u.Fragment,{children:[a&&u.jsx("pre",{children:JSON.stringify(t,null,"  ")}),u.jsx("div",{style:{height:i},children:u.jsx(G,{...x,buttons:L(C),title:"Profile",description:"Give us some information to understand a little more about you.",sections:O,fields:I,skeleton:P,getFormValues:K})})]})};s.args={showState:!1,height:"100vh",section1Fields:H,showFirstName:!0,showLastName:!0,showInitials:!0,skeleton:!1,showAboutYou:!0,showContactDetails:!0,showYourWork:!0,showPreferences:!0};s.argTypes={showState:{name:"Show state"},height:{name:"Height"},section1Fields:{name:"Section 1 Fields"},showFirstName:{name:"Show First Name Field",control:{type:"select"},options:p},showLastName:{name:"Show Last Name Field",control:{type:"select"},options:p},showInitials:{name:"Show Initials Field",control:{type:"select"},options:p},skeleton:{name:"Skeleton"},showAboutYou:{name:"Show About You Section"},showContactDetails:{name:"Show Contact Details Section"},showYourWork:{name:"Show You Work Section"},showPreferences:{name:"Show Preferences Section"}};var T,N,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  showState,
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
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Profile" description="Give us some information to understand a little more about you." sections={sections} fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
            </div>
        </>;
}`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const dt=["Profile"];export{s as Profile,dt as __namedExportsOrder,ut as default};
