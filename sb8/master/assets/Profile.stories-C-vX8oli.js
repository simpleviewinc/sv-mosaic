import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-wekxHvEx.js";import{D as V}from"./Delete-VhiuMRtt.js";import{A as W}from"./Add-SmKzKNaz.js";import{u as M,n as E,b as Y,c as F,v as j,d as B,j as z,F as L}from"./index-DHKTy8Oe.js";import{r as U}from"./renderButtons-DP0bGf4C.js";import{t as h,a as b}from"./toggleOptions-1cXvXfFl.js";import{b as A,a as G}from"./options-DEOzrsxm.js";import{O as H}from"./dom-BR2PSRFh.js";import"./createSvgIcon-h9rIBQiG.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./MosaicContext-DJPbhtc9.js";import"./ButtonBase-CEIt18Mr.js";import"./useSlot-VZdH5auH.js";import"./TitleWrapper-G0h8wZmh.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-CdzdKupF.js";import"./useId-69YouNVI.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-DT_DvNHq.js";import"./mergeSlotProps-BJLz0-OO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-D77Uk9vr.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-BmgFD-Us.js";import"./ExpandMore-BE6LXXJH.js";import"./Help-BcORB-TR.js";import"./Chip-BCe941lM.js";import"./Clear-u1SsJyJR.js";import"./FormFieldText.styled-yvYOpJcX.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./DataViewFilterDropdownButtons-CG0hq6Hh.js";import"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import"./DataViewPrimaryFilter.styled-CoIgiDUg.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-DMqhm_jY.js";import"./PageHeader-CXRi2Lzn.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-CRirri0N.js";import"./Checkbox-DBSudIqU.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-GdCwvfsB.js";import"./FormGroup-BzWjA99g.js";import"./MoreVert-DegxOP5X.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DkHhhliA.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-CRBs-4if.js";import"./Close-C8qa5nrL.js";import"./ChipList-CKVS403F.js";import"./RadioGroup-BJ9uTRhE.js";import"./Toggle-BgAmXpG1.js";import"./Dialog-Da9Q9p0y.js";import"./ThemeProvider-Be_gFf1k.js";import"./Link-BKwfuJVQ.js";import"./CardHeading-Cfv9ll9K.js";import"./OpenInNew-GvVN9mBj.js";import"./Settings-pl1mUW38.js";import"./CloudDownload-DVh_jn78.js";import"./InsertDriveFile-DIzz3aBU.js";const yt={title:"Components/Form"},_=[[["firstName"],["lastName"],["initials"]],[["dob"],[],[]],[["sex"]],[["profilePicture"]],[["referralType"],["referralTypeOther"]]];function $(i,r){return Math.floor(Math.random()*(r-i+1)+i)}const J=i=>Array.from(Array(i+1),(r,d)=>d).filter(r=>i%r===0),s=({showState:i,hideSectionNav:r,height:d,section1Fields:y,showFirstName:f,showLastName:w,showInitials:v,showAboutYou:g,showContactDetails:x,showYourWork:S,showPreferences:k})=>{const D=M({data:{workDates:{current:!0}}}),{state:t,methods:{setFieldValue:l},handleSubmit:q}=D;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=H}),[]);const T=o.useMemo(()=>({columns:[{name:"id",label:"ID"},{name:"title",label:"Title"},{name:"description",label:"Description"}],primaryActions:[{name:"delete",intent:"secondary",variant:"text",tooltip:"Delete",mIcon:V,onClick:({data:e})=>{l({name:"favouriteNumbers",value:(a=[])=>a.filter(({id:n})=>n!==e.id),touched:!0})}}],data:t.data.formMatrix,limit:25,display:"list",activeColumns:["id","title","description"]}),[l,t.data.formMatrix]),m=o.useCallback(async({file:e,onChunkComplete:a,onUploadComplete:n})=>{for(let p=0;p<10;p++)await new Promise(R=>setTimeout(()=>R(a({percent:(p+1)*.1})),2*1e3/10));await n({id:E(),name:e.name,size:e.size,thumbnailUrl:["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):"",fileUrl:URL.createObjectURL(e)})},[]),c=o.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),2*1e3))},[]),I=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text",required:!0,instructionText:"Please use the name that you were given at birth.",show:h[f]},{name:"lastName",label:"Last Name",type:"text",required:!0,instructionText:"Please use the family name that you had at birth.",show:h[w]},{name:"initials",label:"Initials",type:"text",required:!0,instructionText:"If you don't interact with this field, it'll be generated for you based on your first and last names.",show:h[v]},{name:"dob",label:"Date of Birth",type:"date",required:!0,instructionText:"Pick from the datepicker or enter a MM/DD/YYYY formatted date."},{name:"sex",label:"Sex",type:"radio",required:!0,instructionText:"This is the gender you were assigned at birth.",inputSettings:{options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}},{name:"referralType",label:"How did you hear about us?",type:"dropdown",required:!0,inputSettings:{options:[{value:"socialMedia",label:"Social Media (e.g., Facebook, Twitter, Instagram)"},{value:"searchEngine",label:"Search Engine (e.g., Google, Bing)"},{value:"friendFamily",label:"Friend or Family"},{value:"onlineAd",label:"Online Advertisement"},{value:"emailNewsletter",label:"Email Newsletter"},{value:"blogWebsite",label:"Blog or Website"},{value:"eventConference",label:"Event or Conference"},{value:"printAd",label:"Print Advertisement (e.g., magazine, newspaper)"},{value:"radioTv",label:"Radio or TV"},{value:"other",label:"Other"}]}},{name:"referralTypeOther",label:"Please specify where you heard about us",type:"text",required:!0,show:({data:e})=>e.referralType&&e.referralType.value==="other"},{name:"profilePicture",label:"Profile picture",type:"upload",instructionText:"A profile picture is not required, but it's nice to put a face to the name.",inputSettings:{onFileAdd:m,onFileDelete:c}},{name:"ukWorker",label:"I have a job",type:"toggle"},{name:"jobRole",label:"Job Role",type:"text",required:!0,show:({data:e})=>!!e.ukWorker},{name:"workAddress",label:"Work Address",type:"group",show:({data:e})=>!!e.ukWorker,instructionText:"This is where your company is registered. If you're a remote worker, it's not your house.",inputSettings:{layout:[[["address1"],["address2"]],[["city"]],[["country"],["postalCode"]]],fields:[{name:"address1",label:"Address 1",type:"text",size:"full",required:!0},{name:"address2",label:"Address 2",type:"text",size:"full"},{name:"city",label:"City",type:"text",required:!0,size:"full"},{name:"country",type:"dropdown",label:"Country",size:"full",required:!0,inputSettings:{options:A},validates:[{name:"postalCode",include:[Y]}]},{name:"postalCode",type:"text",label:"Postal Code",size:"full",required:!0,validators:[{fn:"validatePostcode",options:{countryField:"country"}}]}]}},{name:"workDates",label:"When did you hold this position?",type:"group",show:({data:e})=>!!e.ukWorker,inputSettings:{layout:[[["current"]],[["startDate"],["endDate"],[]]],fields:[{name:"current",type:"toggle",label:"This is my current position",validates:[{name:"startDate",include:[F]},{name:"endDate",include:[F]}]},{name:"startDate",type:"date",label:"Start date",required:!0,validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",required:!0,validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],disabled:({data:e})=>{var a;return!!((a=e.workDates)!=null&&a.current)}}]}},{name:"email",label:"Email Address",type:"text",required:!0,validators:[j,B]},{name:"phone",label:"Phone",type:"phone",required:!0,instructionText:"Your primary phone number. It can be a mobile or a home or work telephone."},{name:"secondaryPhone",label:"Secondary Phone",type:"phone",instructionText:"Good to have just in case we can't catch you on your primary phone."},{name:"addresses",label:"Addresses",type:"address",required:!0,instructionText:"Provide us with at least 1 physical address at which we can contact you.",inputSettings:{amountPhysical:3,getOptionsCountries:A,getOptionsStates:G,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"favouriteColor",label:"Favourite Colour",type:"color"},{name:"favouriteNumbers",label:"What are your favourite numbers?",type:"matrix",required:!0,instructionText:"There must be at least 1 that you like. Pun intended.",inputSettings:{dataView:T,buttons:[{label:"Add",onClick:()=>{const e=$(1,1e3),a=J(e);l({name:"favouriteNumbers",value:(n=[])=>[...n,{id:e,title:e,description:`I ❤️ ${e} because it has ${a.length} factors which are ${z(a.map(String))}`}],touched:!0})},intent:"info",variant:"text",mIcon:W}]}},{name:"hobbies",label:"What do you like?",type:"textEditor",required:!0,instructionText:"In a few words, describe to us your most distinguishing hobbies."},{name:"favouriteCatPicture",label:"Favourite Cat Picture",type:"upload",instructionText:"Everyone has a favourite cat picture.",inputSettings:{onFileAdd:m,onFileDelete:c,limit:1}},{name:"animalsOrVehicles",label:"Would you rather talk about animals or vehicles?",type:"radio",required:!0,inputSettings:{options:[{value:"animals",label:"Animals"},{value:"vehicles",label:"Vehicles"}]}},{name:"vehiclesRace",label:"If you had to choose to race around the nurburgring, what would it be?",type:"text",required:!0},{name:"vehiclesSleep",label:"If you had to choose a car to sleep in for a week, what would it be?",type:"text",required:!0},{name:"vehiclesTrip",label:"If you had to choose a car to road trip from east to west coast USA, what would it be?",type:"text",required:!0},{name:"animalsBattle",label:"If had to choose to ride an animal into battle, what would it be?",type:"text",required:!0},{name:"animalsCompanion",label:"If had to choose an animal to be your companion for life, what would it be?",type:"text",required:!0},{name:"animalsTalk",label:"If you could communicate with any animal, what would it be?",type:"text",required:!0}],[f,w,v,T,l,m,c]),O=o.useMemo(()=>[{title:"About You",description:"The official stuff",fields:y,show:g},{title:"Contact Details",description:"How would we get in touch with you otherwise?",fields:[[["email"],[],[]],[["phone"],["secondaryPhone"],[]],[["addresses"]]],show:x},{title:"Your work",description:"How do you make a living?",fields:[[["ukWorker"]],[["jobRole"]],[["workAddress"]],[["workDates"]]],show:S},{title:"Preferences",description:"What you're into",fields:[[["favouriteNumbers"]],[["favouriteColor"]],[["hobbies"]],[["favouriteCatPicture"]],[["animalsOrVehicles"]]],show:k},{title:"Vehicles",description:"Speed through these questions...",fields:[[["vehiclesRace"]],[["vehiclesSleep"]],[["vehiclesTrip"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="vehicles"},{title:"Animals",description:"Humans don't count.",fields:[[["animalsBattle"]],[["animalsCompanion"]],[["animalsTalk"]]],show:({data:e})=>e.animalsOrVehicles&&e.animalsOrVehicles.value==="animals"}],[y,g,x,S,k]);return o.useEffect(()=>{if(t.touched.initials)return;const e=[typeof t.data.firstName=="string"&&t.data.firstName.length?t.data.firstName[0]:"",typeof t.data.lastName=="string"&&t.data.lastName.length?t.data.lastName[0]:""].filter(Boolean).join("");l({name:"initials",value:e})},[t.data.firstName,t.data.lastName,t.touched.initials,l]),u.jsxs(u.Fragment,{children:[i&&u.jsx("pre",{children:JSON.stringify(t,null,"  ")}),u.jsx("div",{style:{height:d},children:u.jsx(L,{...D,buttons:U(q),title:"Profile",description:"Give us some information to understand a little more about you.",sections:O,fields:I,hideSectionNav:r})})]})};s.args={showState:!1,hideSectionNav:!1,height:"100vh",section1Fields:_,showFirstName:!0,showLastName:!0,showInitials:!0,skeleton:!1,showAboutYou:!0,showContactDetails:!0,showYourWork:!0,showPreferences:!0};s.argTypes={showState:{name:"Show state"},hideSectionNav:{name:"Hide Section Navigation"},height:{name:"Height"},section1Fields:{name:"Section 1 Fields"},showFirstName:{name:"Show First Name Field",control:{type:"select"},options:b},showLastName:{name:"Show Last Name Field",control:{type:"select"},options:b},showInitials:{name:"Show Initials Field",control:{type:"select"},options:b},skeleton:{name:"Skeleton"},showAboutYou:{name:"Show About You Section"},showContactDetails:{name:"Show Contact Details Section"},showYourWork:{name:"Show You Work Section"},showPreferences:{name:"Show Preferences Section"}};var N,C,P;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
      intent: "secondary",
      variant: "text",
      tooltip: "Delete",
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
    name: "referralType",
    label: "How did you hear about us?",
    type: "dropdown",
    required: true,
    inputSettings: {
      options: [{
        value: "socialMedia",
        label: "Social Media (e.g., Facebook, Twitter, Instagram)"
      }, {
        value: "searchEngine",
        label: "Search Engine (e.g., Google, Bing)"
      }, {
        value: "friendFamily",
        label: "Friend or Family"
      }, {
        value: "onlineAd",
        label: "Online Advertisement"
      }, {
        value: "emailNewsletter",
        label: "Email Newsletter"
      }, {
        value: "blogWebsite",
        label: "Blog or Website"
      }, {
        value: "eventConference",
        label: "Event or Conference"
      }, {
        value: "printAd",
        label: "Print Advertisement (e.g., magazine, newspaper)"
      }, {
        value: "radioTv",
        label: "Radio or TV"
      }, {
        value: "other",
        label: "Other"
      }]
    }
  }, {
    name: "referralTypeOther",
    label: "Please specify where you heard about us",
    type: "text",
    required: true,
    show: ({
      data
    }) => data.referralType && data.referralType.value === "other"
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
          options: getOptionsCountries
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
        intent: "info",
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
    name: "favouriteCatPicture",
    label: "Favourite Cat Picture",
    type: "upload",
    instructionText: "Everyone has a favourite cat picture.",
    inputSettings: {
      onFileAdd,
      onFileDelete,
      limit: 1
    }
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
    [["favouriteNumbers"]], [["favouriteColor"]], [["hobbies"]], [["favouriteCatPicture"]], [["animalsOrVehicles"]]],
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
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const ft=["Profile"];export{s as Profile,ft as __namedExportsOrder,yt as default};
