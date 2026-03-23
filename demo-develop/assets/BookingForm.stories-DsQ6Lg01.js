import{j as e,G as a,H as h,P as S,O as b,b as $,S as T,c as N,I as _,B,r as j,F as U,R as V,E as G,f as i,i as K,k as W}from"./iframe-DGu5gyO-.js";import{i as C,g as P,D as F,h as I,T as J,u as Q,b as X}from"./TimeControl-DKMR2caP.js";import{m as q,o as Y,s as g,a as Z}from"./schemas-DO6rqW67.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMPt1XYU.js";import"./index-B_yC_15Z.js";const ee="_root_1kms4_1",te="_loader_1kms4_12",E={root:ee,loader:te},A=()=>e.jsx("div",{className:E.root,"data-testid":"loader",children:e.jsx("div",{className:E.loader})});A.__docgenInfo={description:"",methods:[],displayName:"Loader"};const R=({onButtonClick:r})=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(h,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(S,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(h,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(b,{className:"ams-mb-l",children:[e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(b.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx($,{href:"#",onClick:n=>{n.preventDefault(),r()},children:"Start het formulier"})]})});R.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O=()=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Dank u voor uw inzending."})]})})});O.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const L=({onPrevButtonClick:r,onNextButtonClick:n})=>{const{clearErrors:o,formState:{errors:m},trigger:t}=C(),d=Object.keys(m).length>0,c=q(m),u=async()=>{await t(["name","email"])&&n()},p=s=>{s.preventDefault(),o(),r()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:p,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[d&&e.jsx(_,{errors:c,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsx(P,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(P,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-xl"}),e.jsx(B,{type:"button",onClick:u,children:"Volgende vraag"})]})]})})]})};L.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},y=({children:r,legend:n,fields:o,className:m="ams-mb-m"})=>{const{formState:t,getValues:d}=C(),c=o.some(s=>t.errors[s]&&t.errors[s]?.message),u=o.filter(s=>t.errors[s]).map(s=>`${s}-error`).join(" "),p=j.useMemo(()=>{const s=[],x=[];for(const l of o){const k=t.errors?.[l]?.type;k&&(k==="required"||k==="too_small"&&d(l)===""?s.push(l):x.push(l))}const f=l=>l.length===0?"":l.length===1?`Het veld ${D[l[0]]} is verplicht.`:`De velden ${D[l[0]]} en ${D[l[1]]} zijn verplicht.`;return x.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":f(s)||void 0},[t]);return e.jsxs(U,{legend:n,className:m,invalid:!!c,children:[c&&e.jsx(V,{children:e.jsx(G,{id:u,children:p})}),e.jsx(V,{children:r})]})};y.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ams-mb-m'",computed:!1}}}};const z=({minDateValue:r,onPrevButtonClick:n,onNextButtonClick:o})=>{const{clearErrors:m,formState:{errors:t},trigger:d,watch:c}=C(),u=Object.keys(t).length>0,p=q(t),[s]=c(["startDate"]),x=async()=>{await d(["startDate","startTime","endDate","endTime"])&&o()},f=w=>{w.preventDefault(),m(),n()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:f,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[u&&e.jsx(_,{errors:p,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsxs(y,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(F,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:r}),e.jsx(I,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(y,{className:"ams-mb-xl",legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(F,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:s,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(I,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(B,{type:"button",onClick:x,children:"Volgende vraag"})]})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const H=({onPrevButtonClick:r,onSubmit:n})=>{const{getValues:o,handleSubmit:m}=C(),t=o();return e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"ams-mb-xl",children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(T,{href:"#",icon:N,onClick:d=>{d.preventDefault(),r()},children:"Vorige vraag"})})}),e.jsx(a,{as:"main",paddingBottom:"2x-large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(i,{className:"ams-mb-l",children:[e.jsx(i.Caption,{children:e.jsx(h,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(i.Body,{children:[e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Voornaam"}),e.jsx(i.Cell,{children:t.name})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"E-mailadres"}),e.jsx(i.Cell,{children:t.email})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Startdatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${t.startDate}T${t.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Einddatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${t.endDate}T${t.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsxs("form",{noValidate:!0,onSubmit:m(n),children:[e.jsx(J,{label:"Opmerkingen",name:"comments",className:"ams-mb-xl"}),e.jsx(B,{type:"submit",children:"Verzenden"})]})]})})]})};H.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"SubmitHandler",elements:[{name:"FieldValues"}],raw:"SubmitHandler<FieldValues>"},description:""}}};const re=Y({name:g().min(1,"Vul uw voornaam in"),email:g().email("Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl"),startDate:g().min(1,"Vul een startdatum in"),startTime:g().min(1,"Vul een starttijd in"),endDate:g().min(1,"Vul een einddatum in"),endTime:g().min(1,"Vul een eindtijd in"),comments:g().optional()}).superRefine((r,n)=>{if(!r.startDate||!r.startTime||!r.endDate||!r.endTime)return;const o=new Date(`${r.startDate}T${r.startTime}`);if(new Date(`${r.endDate}T${r.endTime}`)<=o){const t=r.startDate===r.endDate;n.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:t?["endTime"]:["endDate"]})}}),M=()=>{const[r,n]=j.useState(0),[o,m]=j.useState(!1),t=j.useRef(!1),d=new Date,c=new Date().toISOString().split("T")[0],u=Q({resolver:Z(re),defaultValues:{name:"",email:"",startDate:d.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),p=j.useCallback(async()=>{try{if(t.current)return;t.current=!0,setTimeout(()=>{m(!0),t.current=!1},1500)}catch(f){console.log("form error!",f),t.current=!1}},[]),s=()=>{n(r+1)},x=[e.jsx(R,{onButtonClick:()=>n(1)},"step-0"),e.jsx(L,{onPrevButtonClick:()=>n(0),onNextButtonClick:s},"step-1"),e.jsx(z,{minDateValue:c,onPrevButtonClick:()=>n(1),onNextButtonClick:s},"step-2"),e.jsx(H,{onPrevButtonClick:()=>n(2),onSubmit:p},"step-3")];return e.jsxs(K,{children:[e.jsx(W,{className:"ams-mb-xl"}),u.formState.isSubmitting&&!o&&e.jsx(A,{}),e.jsx(X,{...u,children:o?e.jsx(O,{}):x[r]})]})};M.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const le={title:"Examples/BookingForm",component:M,parameters:{layout:"fullscreen",docs:{source:{code:`
          import { useCallback, useRef, useState } from 'react';
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
            const [isSubmitted, setIsSubmitted] = useState(false);
            const isSubmittingRef = useRef(false);

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
                // Prevent duplicate submissions
                if (isSubmittingRef.current) return;
                isSubmittingRef.current = true;

                /**
                 * Use setTimeout to Simulate API call
                 * - Here's where validation can happen
                 * - Here's where you can show a post-submission success component
                 * or redirect the user to a new page
                 */
                setTimeout(() => {
                  setIsSubmitted(true);
                  isSubmittingRef.current = false;
                }, 1500);
              } catch (error) {
                console.log('form error!', error);
              }
            }, [form.formState.isSubmitting]);

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
                {form.formState.isSubmitting && !isSubmitted && <Loader />}
                <FormProvider {...form}>
                  {!isSubmitted ? steps[currentStep] : <SuccessContent />}
                </FormProvider>
              </Page>
            );
          };
        `}}},tags:["autodocs"]},v={args:{}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...v.parameters?.docs?.source}}};const de=["Primary"];export{v as Primary,de as __namedExportsOrder,le as default};
