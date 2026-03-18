import{j as e,G as a,H as x,P as v,O as b,b as R,S as T,c as N,I as _,B,r as S,F as U,R as V,E as G,f as o,i as K,k as W}from"./iframe-fS1OOIjr.js";import{i as w,g as I,D as F,h as P,T as J,u as Q,b as X}from"./TimeControl-DKkmjXnf.js";import{m as L,o as Y,s as h,a as Z}from"./schemas-MiYdzBYD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBdfWAln.js";import"./index-DXprUd3X.js";const ee="_root_1kms4_1",te="_loader_1kms4_12",E={root:ee,loader:te},q=()=>e.jsx("div",{className:E.root,"data-testid":"loader",children:e.jsx("div",{className:E.loader})});q.__docgenInfo={description:"",methods:[],displayName:"Loader"};const A=({onButtonClick:t})=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(x,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(v,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(x,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(b,{className:"ams-mb-l",children:[e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(R,{href:"#",onClick:r=>{r.preventDefault(),t()},children:"Start het formulier"})]})});A.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O=()=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Dank u voor uw inzending."})]})})});O.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const z=({onPrevButtonClick:t,onNextButtonClick:r})=>{const{clearErrors:i,formState:{errors:l},trigger:s}=w(),d=Object.keys(l).length>0,m=L(l),u=async()=>{await s(["name","email"])&&r()},p=n=>{n.preventDefault(),i(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:p,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[d&&e.jsx(_,{errors:m,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsx(I,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(I,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-xl"}),e.jsx(B,{type:"button",onClick:u,children:"Volgende vraag"})]})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},y=({children:t,legend:r,fields:i,className:l="ams-mb-m"})=>{const{formState:s,getValues:d}=w(),m=i.some(n=>s.errors[n]&&s.errors[n]?.message),u=i.filter(n=>s.errors[n]).map(n=>`${n}-error`).join(" "),p=S.useMemo(()=>{const n=[],g=[];for(const c of i){const k=s.errors?.[c]?.type;k&&(k==="required"||k==="too_small"&&d(c)===""?n.push(c):g.push(c))}const j=c=>c.length===0?"":c.length===1?`Het veld ${D[c[0]]} is verplicht.`:`De velden ${D[c[0]]} en ${D[c[1]]} zijn verplicht.`;return g.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":j(n)||void 0},[s]);return e.jsxs(U,{legend:r,className:l,invalid:!!m,children:[m&&e.jsx(V,{children:e.jsx(G,{id:u,children:p})}),e.jsx(V,{children:t})]})};y.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ams-mb-m'",computed:!1}}}};const H=({minDateValue:t,onPrevButtonClick:r,onNextButtonClick:i})=>{const{clearErrors:l,formState:{errors:s},trigger:d,watch:m}=w(),u=Object.keys(s).length>0,p=L(s),[n]=m(["startDate"]),g=async()=>{await d(["startDate","startTime","endDate","endTime"])&&i()},j=f=>{f.preventDefault(),l(),r()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:j,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[u&&e.jsx(_,{errors:p,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsxs(y,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(F,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(P,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(y,{className:"ams-mb-xl",legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(F,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:n,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(P,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(B,{type:"button",onClick:g,children:"Volgende vraag"})]})]})})]})};H.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M=({disabled:t=!1,onPrevButtonClick:r,onSubmit:i})=>{const{getValues:l,handleSubmit:s}=w(),d=l();return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:m=>{m.preventDefault(),r()},children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(o,{className:"ams-mb-l",children:[e.jsx(o.Caption,{children:e.jsx(x,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Voornaam"}),e.jsx(o.Cell,{children:d.name})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"E-mailadres"}),e.jsx(o.Cell,{children:d.email})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Startdatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${d.startDate}T${d.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Einddatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${d.endDate}T${d.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsxs("form",{noValidate:!0,onSubmit:s(i),children:[e.jsx(J,{label:"Opmerkingen",name:"comments",className:"ams-mb-xl",disabled:t}),e.jsx(B,{type:"submit",disabled:t,children:"Verzenden"})]})]})})]})};M.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"SubmitHandler",elements:[{name:"FieldValues"}],raw:"SubmitHandler<FieldValues>"},description:""}}};const re=Y({name:h().min(1,"Vul uw voornaam in"),email:h().email("Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl"),startDate:h().min(1,"Vul een startdatum in"),startTime:h().min(1,"Vul een starttijd in"),endDate:h().min(1,"Vul een einddatum in"),endTime:h().min(1,"Vul een eindtijd in"),comments:h().optional()}).superRefine((t,r)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const i=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=i){const s=t.startDate===t.endDate;r.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:s?["endTime"]:["endDate"]})}}),$=()=>{const[t,r]=S.useState(0),[i,l]=S.useState(!1),[s,d]=S.useState(!1),m=new Date,u=new Date().toISOString().split("T")[0],p=Q({resolver:Z(re),defaultValues:{name:"",email:"",startDate:m.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),n=S.useCallback(async()=>{try{l(!0),setTimeout(()=>{l(!1),d(!0)},1500)}catch(f){console.log("form error!",f)}},[]),g=()=>{r(t+1)},j=[e.jsx(A,{onButtonClick:()=>r(1)},"step-0"),e.jsx(z,{onPrevButtonClick:()=>r(0),onNextButtonClick:g},"step-1"),e.jsx(H,{minDateValue:u,disabled:i,onPrevButtonClick:()=>r(1),onNextButtonClick:g},"step-2"),e.jsx(M,{disabled:i,onPrevButtonClick:()=>r(2),onSubmit:n},"step-3")];return e.jsxs(K,{children:[e.jsx(W,{className:"ams-mb-xl"}),i&&!s&&e.jsx(q,{}),e.jsx(X,{...p,children:s?e.jsx(O,{}):j[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const le={title:"Examples/BookingForm",component:$,parameters:{layout:"fullscreen",docs:{source:{code:`
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
        `}}},tags:["autodocs"]},C={args:{}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...C.parameters?.docs?.source}}};const me=["Primary"];export{C as Primary,me as __namedExportsOrder,le as default};
