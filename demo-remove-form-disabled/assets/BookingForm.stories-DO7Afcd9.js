import{j as e,G as a,H as x,P as v,O as C,b as R,S as T,c as N,I as _,B,r as S,F as U,R as V,E as G,f as o,i as K,k as W}from"./iframe-DZuViYCW.js";import{i as b,g as I,D as F,h as P,T as J,u as Q,b as X}from"./TimeControl-COh_0Kfg.js";import{m as L,o as Y,s as h,a as Z}from"./schemas-BFWdu3SO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EpyZIL5V.js";import"./index-CQBwpgrM.js";const ee="_root_1kms4_1",te="_loader_1kms4_12",E={root:ee,loader:te},q=()=>e.jsx("div",{className:E.root,"data-testid":"loader",children:e.jsx("div",{className:E.loader})});q.__docgenInfo={description:"",methods:[],displayName:"Loader"};const A=({onButtonClick:t})=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(x,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(v,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(x,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(C,{className:"ams-mb-l",children:[e.jsxs(C.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(C.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(C.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(R,{href:"#",onClick:s=>{s.preventDefault(),t()},children:"Start het formulier"})]})});A.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O=()=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Dank u voor uw inzending."})]})})});O.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const z=({onPrevButtonClick:t,onNextButtonClick:s})=>{const{clearErrors:i,formState:{errors:m},trigger:r}=b(),l=Object.keys(m).length>0,c=L(m),u=async()=>{await r(["name","email"])&&s()},p=n=>{n.preventDefault(),i(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:p,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[l&&e.jsx(_,{errors:c,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsx(I,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(I,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-xl"}),e.jsx(B,{type:"button",onClick:u,children:"Volgende vraag"})]})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},y=({children:t,legend:s,fields:i,className:m="ams-mb-m"})=>{const{formState:r,getValues:l}=b(),c=i.some(n=>r.errors[n]&&r.errors[n]?.message),u=i.filter(n=>r.errors[n]).map(n=>`${n}-error`).join(" "),p=S.useMemo(()=>{const n=[],g=[];for(const d of i){const k=r.errors?.[d]?.type;k&&(k==="required"||k==="too_small"&&l(d)===""?n.push(d):g.push(d))}const j=d=>d.length===0?"":d.length===1?`Het veld ${D[d[0]]} is verplicht.`:`De velden ${D[d[0]]} en ${D[d[1]]} zijn verplicht.`;return g.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":j(n)||void 0},[r]);return e.jsxs(U,{legend:s,className:m,invalid:!!c,children:[c&&e.jsx(V,{children:e.jsx(G,{id:u,children:p})}),e.jsx(V,{children:t})]})};y.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ams-mb-m'",computed:!1}}}};const H=({minDateValue:t,onPrevButtonClick:s,onNextButtonClick:i})=>{const{clearErrors:m,formState:{errors:r},trigger:l,watch:c}=b(),u=Object.keys(r).length>0,p=L(r),[n]=c(["startDate"]),g=async()=>{await l(["startDate","startTime","endDate","endTime"])&&i()},j=f=>{f.preventDefault(),m(),s()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:j,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[u&&e.jsx(_,{errors:p,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsxs(y,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(F,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(P,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(y,{className:"ams-mb-xl",legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(F,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:n,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(P,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(B,{type:"button",onClick:g,children:"Volgende vraag"})]})]})})]})};H.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M=({onPrevButtonClick:t,onSubmit:s})=>{const{getValues:i,handleSubmit:m}=b(),r=i();return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:l=>{l.preventDefault(),t()},children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(x,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(v,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(o,{className:"ams-mb-l",children:[e.jsx(o.Caption,{children:e.jsx(x,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Voornaam"}),e.jsx(o.Cell,{children:r.name})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"E-mailadres"}),e.jsx(o.Cell,{children:r.email})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Startdatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${r.startDate}T${r.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Einddatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${r.endDate}T${r.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsxs("form",{noValidate:!0,onSubmit:m(s),children:[e.jsx(J,{label:"Opmerkingen",name:"comments",className:"ams-mb-xl"}),e.jsx(B,{type:"submit",children:"Verzenden"})]})]})})]})};M.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"SubmitHandler",elements:[{name:"FieldValues"}],raw:"SubmitHandler<FieldValues>"},description:""}}};const re=Y({name:h().min(1,"Vul uw voornaam in"),email:h().email("Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl"),startDate:h().min(1,"Vul een startdatum in"),startTime:h().min(1,"Vul een starttijd in"),endDate:h().min(1,"Vul een einddatum in"),endTime:h().min(1,"Vul een eindtijd in"),comments:h().optional()}).superRefine((t,s)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const i=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=i){const r=t.startDate===t.endDate;s.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:r?["endTime"]:["endDate"]})}}),$=()=>{const[t,s]=S.useState(0),[i,m]=S.useState(!1),[r,l]=S.useState(!1),c=new Date,u=new Date().toISOString().split("T")[0],p=Q({resolver:Z(re),defaultValues:{name:"",email:"",startDate:c.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),n=S.useCallback(async()=>{try{if(i)return;m(!0),setTimeout(()=>{m(!1),l(!0)},1500)}catch(f){console.log("form error!",f)}},[i]),g=()=>{s(t+1)},j=[e.jsx(A,{onButtonClick:()=>s(1)},"step-0"),e.jsx(z,{onPrevButtonClick:()=>s(0),onNextButtonClick:g},"step-1"),e.jsx(H,{minDateValue:u,onPrevButtonClick:()=>s(1),onNextButtonClick:g},"step-2"),e.jsx(M,{onPrevButtonClick:()=>s(2),onSubmit:n},"step-3")];return e.jsxs(K,{children:[e.jsx(W,{className:"ams-mb-xl"}),i&&!r&&e.jsx(q,{}),e.jsx(X,{...p,children:r?e.jsx(O,{}):j[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const de={title:"Examples/BookingForm",component:$,parameters:{layout:"fullscreen",docs:{source:{code:`
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
                onPrevButtonClick={() => setCurrentStep(1)}
                onNextButtonClick={handleNextStep}
                key="step-2"
              />,
              <StepConfirm
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
        `}}},tags:["autodocs"]},w={args:{}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...w.parameters?.docs?.source}}};const le=["Primary"];export{w as Primary,le as __namedExportsOrder,de as default};
