import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,E as i,P as a,S as o,_ as s,c,f as l,g as u,i as d,j as f,m as ee,p,r as m,u as te,v as ne,w as h,y as g}from"./iframe-CtZaigkJ.js";import{A as re,F as ie,I as _,N as v,S as y,i as ae,n as oe,o as se,t as b}from"./src-CXqVK_ZX.js";import{$t as ce,En as le,Gc as ue,Kc as de,Wc as fe,Yc as x,qc as pe,zn as S}from"./schemas-BXGICoA2.js";var C,w;function me(){return(me=e((()=>{r(),C=n(),w=({onButtonClick:e})=>(0,C.jsx)(l,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,paddingTop:`large`,children:(0,C.jsxs)(l.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,C.jsx)(p,{className:`ams-mb-m`,level:1,children:`Waar u dit formulier voor gebruikt`}),(0,C.jsx)(g,{className:`ams-mb-xl`,size:`large`,children:`Met dit formulier maakt u een afspraak.`}),(0,C.jsx)(p,{className:`ams-mb-s`,level:2,children:`De stappen in dit formulier`}),(0,C.jsxs)(u,{className:`ams-mb-l`,children:[(0,C.jsxs)(u.Item,{children:[(0,C.jsx)(`strong`,{children:`Uw gegevens`}),` - Vul uw contactgegevens in.`]}),(0,C.jsxs)(u.Item,{children:[(0,C.jsx)(`strong`,{children:`Afspraak`}),` - Kies wanneer u een afspraak wilt maken.`]}),(0,C.jsxs)(u.Item,{children:[(0,C.jsx)(`strong`,{children:`Controleren`}),` - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.`]})]}),(0,C.jsx)(d,{href:`#`,onClick:t=>{t.preventDefault(),e()},children:`Start het formulier`})]})}),w.__docgenInfo={description:``,methods:[],displayName:`StepIntro`,props:{onButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var T,E;function D(){return(D=e((()=>{r(),T=n(),E=()=>(0,T.jsx)(l,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,paddingTop:`large`,children:(0,T.jsx)(l.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,T.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,T.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,T.jsx)(g,{children:`Dank u voor uw inzending.`})]})})}),E.__docgenInfo={description:``,methods:[],displayName:`SuccessContent`}})))()}var O,k;function A(){return(A=e((()=>{v(),r(),a(),b(),O=n(),k=({onPrevButtonClick:e,onNextButtonClick:t})=>{let{clearErrors:n,formState:{errors:r},trigger:i}=_(),a=Object.keys(r).length>0,o=x(r);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l,{className:`ams-mb-xl`,children:(0,O.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,O.jsx)(h,{href:`#`,icon:f,onClick:t=>{t.preventDefault(),n(),e()},children:`Vorige vraag`})})}),(0,O.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,O.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[a&&(0,O.jsx)(ee,{errors:o,headingLevel:4,className:`ams-mb-m`,"data-testid":`error-alert`}),(0,O.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,O.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,O.jsx)(g,{children:`Stap 1 van 3: Uw gegevens`})]}),(0,O.jsxs)(`form`,{noValidate:!0,children:[(0,O.jsx)(se,{label:`Voornaam`,name:`name`,registerOptions:{required:!0},className:`ams-mb-m`}),(0,O.jsx)(se,{label:`E-mailadres`,type:`text`,inputMode:`email`,autoComplete:`email`,name:`email`,registerOptions:{required:!0},className:`ams-mb-xl`}),(0,O.jsx)(m,{type:`button`,onClick:async()=>{await i([`name`,`email`])&&t()},children:`Volgende vraag`})]})]})})]})},k.__docgenInfo={description:``,methods:[],displayName:`StepPersonalDetails`,props:{onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNextButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var j,M,N,P;function F(){return(F=e((()=>{j=t(),r(),v(),M=n(),N={startDate:`Startdatum`,startTime:`Starttijd`,endDate:`Einddatum`,endTime:`Eindtijd`},P=({children:e,legend:t,fields:n,className:r=`ams-mb-m`})=>{let{formState:i,getValues:a}=_(),s=n.some(e=>i.errors[e]&&i.errors[e]?.message),l=n.filter(e=>i.errors[e]).map(e=>`${e}-error`).join(` `),u=(0,j.useMemo)(()=>{let e=[],t=[];for(let r of n){let n=i.errors?.[r]?.type;n&&(n===`required`||n===`too_small`&&a(r)===``?e.push(r):t.push(r))}return t.length?`De einddatum en -tijd moeten later zijn dan de startdatum en -tijd`:(e=>e.length===0?``:e.length===1?`Het veld ${N[e[0]]} is verplicht.`:`De velden ${N[e[0]]} en ${N[e[1]]} zijn verplicht.`)(e)||void 0},[i]);return(0,M.jsxs)(te,{legend:t,className:r,invalid:!!s,children:[s&&(0,M.jsx)(o,{children:(0,M.jsx)(c,{id:l,children:u})}),(0,M.jsx)(o,{children:e})]})},P.__docgenInfo={description:``,methods:[],displayName:`DateTimeFieldset`,props:{legend:{required:!0,tsType:{name:`string`},description:``},fields:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'ams-mb-m'`,computed:!1}}}}})))()}var I,L;function R(){return(R=e((()=>{v(),r(),a(),b(),F(),I=n(),L=({minDateValue:e,onPrevButtonClick:t,onNextButtonClick:n})=>{let{clearErrors:r,formState:{errors:i},trigger:a,watch:o}=_(),s=Object.keys(i).length>0,c=x(i),[u]=o([`startDate`]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(l,{className:`ams-mb-xl`,children:(0,I.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(h,{href:`#`,icon:f,onClick:e=>{e.preventDefault(),r(),t()},children:`Vorige vraag`})})}),(0,I.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,I.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[s&&(0,I.jsx)(ee,{errors:c,headingLevel:4,className:`ams-mb-m`}),(0,I.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,I.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,I.jsx)(g,{children:`Stap 2 van 3: Afspraak`})]}),(0,I.jsxs)(`form`,{noValidate:!0,children:[(0,I.jsxs)(P,{legend:`Startdatum en -tijd`,fields:[`startDate`,`startTime`],children:[(0,I.jsx)(y,{label:`Startdatum`,name:`startDate`,registerOptions:{required:!0},min:e}),(0,I.jsx)(oe,{label:`Starttijd`,name:`startTime`,registerOptions:{required:!0},hideErrorMessage:!0})]}),(0,I.jsxs)(P,{className:`ams-mb-xl`,legend:`Einddatum-tijd`,fields:[`endDate`,`endTime`],children:[(0,I.jsx)(y,{label:`Einddatum`,name:`endDate`,registerOptions:{required:!0},min:u,hideErrorMessage:!0,hideFieldError:!0}),(0,I.jsx)(oe,{label:`Eindtijd`,name:`endTime`,registerOptions:{required:!0},hideErrorMessage:!0})]}),(0,I.jsx)(m,{type:`button`,onClick:async()=>{await a([`startDate`,`startTime`,`endDate`,`endTime`])&&n()},children:`Volgende vraag`})]})]})})]})},L.__docgenInfo={description:``,methods:[],displayName:`StepAppointment`,props:{minDateValue:{required:!0,tsType:{name:`string`},description:``},onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNextButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var z,B;function V(){return(V=e((()=>{v(),r(),a(),b(),z=n(),B=({onPrevButtonClick:e,onSubmit:t})=>{let{getValues:n,handleSubmit:r}=_(),a=n();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(l,{className:`ams-mb-xl`,children:(0,z.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,z.jsx)(h,{href:`#`,icon:f,onClick:t=>{t.preventDefault(),e()},children:`Vorige vraag`})})}),(0,z.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,z.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,z.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,z.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,z.jsx)(g,{children:`Stap 3 van 3: Controleren`})]}),(0,z.jsxs)(i,{className:`ams-mb-l`,children:[(0,z.jsx)(i.Caption,{children:(0,z.jsx)(p,{level:4,children:`Controleer uw gegevens`})}),(0,z.jsxs)(i.Body,{children:[(0,z.jsxs)(i.Row,{children:[(0,z.jsx)(i.Cell,{children:`Voornaam`}),(0,z.jsx)(i.Cell,{children:a.name})]}),(0,z.jsxs)(i.Row,{children:[(0,z.jsx)(i.Cell,{children:`E-mailadres`}),(0,z.jsx)(i.Cell,{children:a.email})]}),(0,z.jsxs)(i.Row,{children:[(0,z.jsx)(i.Cell,{children:`Startdatum en -tijd`}),(0,z.jsx)(i.Cell,{children:new Date(`${a.startDate}T${a.startTime}`).toLocaleString(`nl-NL`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).replace(`,`,``)})]}),(0,z.jsxs)(i.Row,{children:[(0,z.jsx)(i.Cell,{children:`Einddatum en -tijd`}),(0,z.jsx)(i.Cell,{children:new Date(`${a.endDate}T${a.endTime}`).toLocaleString(`nl-NL`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).replace(`,`,``)})]})]})]}),(0,z.jsxs)(`form`,{noValidate:!0,onSubmit:r(t),children:[(0,z.jsx)(ae,{label:`Opmerkingen`,name:`comments`,className:`ams-mb-xl`}),(0,z.jsx)(m,{type:`submit`,children:`Verzenden`})]})]})})]})},B.__docgenInfo={description:``,methods:[],displayName:`StepConfirm`,props:{onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`SubmitHandler`,elements:[{name:`FieldValues`}],raw:`SubmitHandler<FieldValues>`},description:``}}}})))()}var H,U,W,G;function K(){return(K=e((()=>{H=`_svgContainer_qw8rx_1`,U=`_cross_qw8rx_7`,W=`_rotate_qw8rx_1`,G={svgContainer:H,cross:U,rotate:W}})))()}var q,J;function Y(){return(Y=e((()=>{K(),q=n(),J=()=>(0,q.jsx)(`div`,{"aria-hidden":`true`,children:(0,q.jsx)(`div`,{className:G.svgContainer,children:[0,1,2].map(e=>(0,q.jsx)(`svg`,{className:G.cross,style:{animationDelay:`${e*.75}s`},focusable:`false`,width:`187`,height:`187`,viewBox:`0 0 187 187`,xmlns:`http://www.w3.org/2000/svg`,children:(0,q.jsx)(`path`,{d:`M0 149.03L55.885 93.142L0 37.253L37.252 0L93.142 55.886L149.027 0L186.284 37.253L130.393 93.142L186.284 149.03L149.027 186.284L93.142 130.397L37.263 186.284L0 149.03Z`})},e))})}),J.__docgenInfo={description:``,methods:[],displayName:`AmsterdamCrossSpinner`}})))()}var he;function ge(){return(ge=e((()=>{ce(),he=le({name:S().min(1,`Vul uw voornaam in`),email:S().email(`Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl`),startDate:S().min(1,`Vul een startdatum in`),startTime:S().min(1,`Vul een starttijd in`),endDate:S().min(1,`Vul een einddatum in`),endTime:S().min(1,`Vul een eindtijd in`),comments:S().optional()}).superRefine((e,t)=>{if(!e.startDate||!e.startTime||!e.endDate||!e.endTime)return;let n=new Date(`${e.startDate}T${e.startTime}`);if(new Date(`${e.endDate}T${e.endTime}`)<=n){let n=e.startDate===e.endDate;t.addIssue({code:`custom`,message:`De einddatum en -tijd moeten later zijn dan de startdatum en -tijd`,path:n?[`endTime`]:[`endDate`]})}})})))()}var X,Z,Q;function _e(){return(_e=e((()=>{X=t(),v(),de(),r(),me(),D(),A(),R(),V(),Y(),ue(),ge(),Z=n(),Q=()=>{let[e,t]=(0,X.useState)(0),[n,r]=(0,X.useState)(!1),i=(0,X.useRef)(!1),a=new Date,o=new Date().toISOString().split(`T`)[0],c=ie({resolver:pe(he),defaultValues:{name:``,email:``,startDate:a.toISOString().split(`T`)[0],startTime:``,endDate:``,endTime:``,comments:``}}),l=(0,X.useCallback)(async()=>{if(!i.current){i.current=!0;try{await new Promise(e=>{setTimeout(()=>{r(!0),e()},1500)})}catch(e){console.log(`form error!`,e)}finally{i.current=!1}}},[]),u=()=>{t(e+1)},d=[(0,Z.jsx)(w,{onButtonClick:()=>t(1)},`step-0`),(0,Z.jsx)(k,{onPrevButtonClick:()=>t(0),onNextButtonClick:u},`step-1`),(0,Z.jsx)(L,{minDateValue:o,onPrevButtonClick:()=>t(1),onNextButtonClick:u},`step-2`),(0,Z.jsx)(B,{onPrevButtonClick:()=>t(2),onSubmit:l},`step-3`)];return(0,Z.jsxs)(s,{children:[(0,Z.jsx)(ne,{className:`ams-mb-xl`}),c.formState.isSubmitting&&!n&&(0,Z.jsx)(fe,{children:(0,Z.jsx)(J,{})}),(0,Z.jsx)(re,{...c,children:n?(0,Z.jsx)(E,{}):d[e]})]})},Q.__docgenInfo={description:``,methods:[],displayName:`BookingForm`}})))()}var ve,$,ye;function be(){return(be=e((()=>{_e(),ve={title:`Examples/BookingForm`,component:Q,parameters:{layout:`fullscreen`,docs:{source:{code:`
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
        `}}},tags:[`autodocs`]},$={args:{}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...$.parameters?.docs?.source}}},ye=[`Primary`]})))()}be();export{$ as Primary,ye as __namedExportsOrder,ve as default};