import{j as e,G as n,H as h,P as f,O as v,b as M,S as y,c as T,I as E,B as N,r as j,F as R,R as B,E as U,f as o,i as G,k as K}from"./iframe-BehJWw7s.js";import{i as C,g as V,D as F,h as I,T as W,u as J,b as Q}from"./TimeControl-BAkpNfGS.js";import{m as _,o as X,s as g,a as Y}from"./schemas-gJh7ZlxW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-chDN5sXC.js";import"./index-MNcHUy7f.js";const Z="_root_1kms4_1",ee="_loader_1kms4_12",P={root:Z,loader:ee},L=()=>e.jsx("div",{className:P.root,"data-testid":"loader",children:e.jsx("div",{className:P.loader})});L.__docgenInfo={description:"",methods:[],displayName:"Loader"};const q=({onButtonClick:t})=>e.jsx(n,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(n.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(h,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(f,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(h,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(v,{className:"ams-mb-l",children:[e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(M,{href:"#",onClick:r=>{r.preventDefault(),t()},children:"Start het formulier"})]})});q.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A=()=>e.jsx(n,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(n.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Dank u voor uw inzending."})]})})});A.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const O=({onPrevButtonClick:t,onNextButtonClick:r})=>{const{clearErrors:a,formState:{errors:l},trigger:s}=C(),d=Object.keys(l).length>0,c=_(l),p=async()=>{await s(["name","email"])&&r()},m=u=>{u.preventDefault(),a(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"ams-mb-xl",children:e.jsx(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(y,{href:"#",icon:T,onClick:m,children:"Vorige vraag"})})}),e.jsx(n,{as:"main",paddingBottom:"2x-large",children:e.jsxs(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[d&&e.jsx(E,{errors:c,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsx(V,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(V,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-xl"}),e.jsx(N,{type:"button",onClick:p,children:"Volgende vraag"})]})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},D=({children:t,legend:r,fields:a,className:l="ams-mb-m"})=>{const{formState:s,getValues:d}=C(),c=a.some(m=>s.errors[m]&&s.errors[m]?.message),p=j.useMemo(()=>{const m=[],u=[];for(const i of a){const w=s.errors?.[i]?.type;w&&(w==="required"||w==="too_small"&&d(i)===""?m.push(i):u.push(i))}const x=i=>i.length===0?"":i.length===1?`Het veld ${k[i[0]]} is verplicht.`:`De velden ${k[i[0]]} en ${k[i[1]]} zijn verplicht.`;return u.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":x(m)||void 0},[s]);return e.jsxs(R,{legend:r,className:l,invalid:!!c,children:[c&&e.jsx(B,{children:e.jsx(U,{id:`${a[0]}-error`,children:p})}),e.jsx(B,{children:t})]})};D.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ams-mb-m'",computed:!1}}}};const z=({minDateValue:t,onPrevButtonClick:r,onNextButtonClick:a})=>{const{clearErrors:l,formState:{errors:s},trigger:d,watch:c}=C(),p=Object.keys(s).length>0,m=_(s),[u]=c(["startDate"]),x=async()=>{await d(["startDate","startTime","endDate","endTime"])&&a()},S=i=>{i.preventDefault(),l(),r()};return e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"ams-mb-xl",children:e.jsx(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(y,{href:"#",icon:T,onClick:S,children:"Vorige vraag"})})}),e.jsx(n,{as:"main",paddingBottom:"2x-large",children:e.jsxs(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[p&&e.jsx(E,{errors:m,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsxs(D,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(F,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(I,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(D,{className:"ams-mb-xl",legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(F,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:u,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(I,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(N,{type:"button",onClick:x,children:"Volgende vraag"})]})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const H=({disabled:t=!1,onPrevButtonClick:r,onSubmit:a})=>{const{getValues:l,handleSubmit:s}=C(),d=l();return e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"ams-mb-xl",children:e.jsx(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(y,{href:"#",icon:T,onClick:c=>{c.preventDefault(),r()},children:"Vorige vraag"})})}),e.jsx(n,{as:"main",paddingBottom:"2x-large",children:e.jsxs(n.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(o,{className:"ams-mb-l",children:[e.jsx(o.Caption,{children:e.jsx(h,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Voornaam"}),e.jsx(o.Cell,{children:d.name})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"E-mailadres"}),e.jsx(o.Cell,{children:d.email})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Startdatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${d.startDate}T${d.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Einddatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${d.endDate}T${d.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsxs("form",{noValidate:!0,onSubmit:s(a),children:[e.jsx(W,{label:"Opmerkingen",name:"comments",className:"ams-mb-xl",disabled:t}),e.jsx(N,{type:"submit",disabled:t,children:"Verzenden"})]})]})})]})};H.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"SubmitHandler",elements:[{name:"FieldValues"}],raw:"SubmitHandler<FieldValues>"},description:""}}};const te=X({name:g().min(1,"Vul uw voornaam in"),email:g().email("Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl"),startDate:g().min(1,"Vul een startdatum in"),startTime:g().min(1,"Vul een starttijd in"),endDate:g().min(1,"Vul een einddatum in"),endTime:g().min(1,"Vul een eindtijd in"),comments:g().optional()}).superRefine((t,r)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const a=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=a){const s=t.startDate===t.endDate;r.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:s?["endTime"]:["endDate"]})}}),$=()=>{const[t,r]=j.useState(0),[a,l]=j.useState(!1),[s,d]=j.useState(!1),c=new Date,p=new Date().toISOString().split("T")[0],m=J({resolver:Y(te),defaultValues:{name:"",email:"",startDate:c.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),u=j.useCallback(async()=>{try{l(!0),setTimeout(()=>{l(!1),d(!0)},1500)}catch(i){console.log("form error!",i)}},[]),x=()=>{r(t+1)},S=[e.jsx(q,{onButtonClick:()=>r(1)},"step-0"),e.jsx(O,{onPrevButtonClick:()=>r(0),onNextButtonClick:x},"step-1"),e.jsx(z,{minDateValue:p,disabled:a,onPrevButtonClick:()=>r(1),onNextButtonClick:x},"step-2"),e.jsx(H,{disabled:a,onPrevButtonClick:()=>r(2),onSubmit:u},"step-3")];return e.jsxs(G,{children:[e.jsx(K,{className:"ams-mb-xl"}),a&&!s&&e.jsx(L,{}),e.jsx(Q,{...m,children:s?e.jsx(A,{}):S[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const de={title:"Examples/BookingForm",component:$,parameters:{layout:"fullscreen",docs:{source:{code:`
          import { useCallback, useState } from 'react';
          import {
            SubmitHandler,
            useForm,
            FormProvider,
            FieldValues,
          } from 'react-hook-form';
          import { zodResolver } from '@hookform/resolvers/zod';
          import { Page, PageHeader } from '@amsterdam/design-system-react';
          import Loader from './components/Loader/Loader';
          import StepIntro from './components/StepIntro/StepIntro';
          import SuccessContent from './components/SuccessContent/SuccessContent';
          import StepPersonalDetails from './components/StepPersonalDetails/StepPersonalDetails';
          import StepAppointment from './components/StepAppointment/StepAppointment';
          import StepConfirm from './components/StepConfirm/StepConfirm';
          import bookingFormSchema, { BookingFormData } from './schema';

          const BookingForm = () => {
            const [currentStep, setCurrentStep] = useState(0);
            const [isLoading, setIsLoading] = useState(false);
            const [isSubmitted, setIsSubmitted] = useState(false);

            const nowDateTime = new Date();
            const nowDate = new Date().toISOString().split('T')[0];

            const form = useForm<BookingFormData>({
              resolver: zodResolver(bookingFormSchema),
              defaultValues: {
                name: '',
                email: '',
                startDate: nowDateTime.toISOString().split('T')[0],
                startTime: '',
                endDate: '',
                endTime: '',
                comments: '',
              },
            });

            const handleSubmit: SubmitHandler<FieldValues> = useCallback(async () => {
              try {
                /**
                 * Use setTimeout to Simulate API call
                 * - Here's where validation can happen
                 * - Here's where you can show a post-submission success component
                 * or redirect the user to a new page
                 */
                setIsLoading(true);

                setTimeout(() => {
                  setIsLoading(false);
                  setIsSubmitted(true);
                }, 1500);
              } catch (error) {
                console.log('form error!', error);
              }
            }, []);

            const handleNextStep = () => {
              setCurrentStep(currentStep + 1);
            };

            const steps = [
              <StepIntro onButtonClick={() => setCurrentStep(1)} key="step-0" />,
              <StepPersonalDetails
                onPrevButtonClick={() => setCurrentStep(0)}
                onNextButtonClick={handleNextStep}
                key="step-1"
              />,
              <StepAppointment
                minDateValue={nowDate}
                disabled={isLoading}
                onPrevButtonClick={() => setCurrentStep(1)}
                onNextButtonClick={handleNextStep}
                key="step-2"
              />,
              <StepConfirm
                disabled={isLoading}
                onPrevButtonClick={() => setCurrentStep(2)}
                onSubmit={handleSubmit}
                key="step-3"
              />,
            ];

            return (
              <Page>
                <PageHeader className="ams-mb-xl" />
                {isLoading && !isSubmitted && <Loader />}
                <FormProvider {...form}>
                  {!isSubmitted ? steps[currentStep] : <SuccessContent />}
                </FormProvider>
              </Page>
            );
          };
        `}}},tags:["autodocs"]},b={args:{}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}};const le=["Primary"];export{b as Primary,le as __namedExportsOrder,de as default};
