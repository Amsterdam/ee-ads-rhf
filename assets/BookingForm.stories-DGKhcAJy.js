import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,E as i,P as a,S as o,_ as s,c,f as l,g as u,i as ee,j as d,m as f,p,r as m,u as te,v as ne,w as h,y as g}from"./iframe-7DWDyYL-.js";import{A as re,F as ie,I as _,N as v,S as y,i as ae,n as oe,o as b,t as x}from"./src-DBvqa9dU.js";import{a as S,c as se,d as C,i as ce,l as le,o as ue,r as de,s as fe}from"./schemas-BORPculs.js";var w,T;function pe(){return(pe=e((()=>{r(),w=n(),T=({onButtonClick:e})=>(0,w.jsx)(l,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,paddingTop:`large`,children:(0,w.jsxs)(l.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,w.jsx)(p,{className:`ams-mb-m`,level:1,children:`Waar u dit formulier voor gebruikt`}),(0,w.jsx)(g,{className:`ams-mb-xl`,size:`large`,children:`Met dit formulier maakt u een afspraak.`}),(0,w.jsx)(p,{className:`ams-mb-s`,level:2,children:`De stappen in dit formulier`}),(0,w.jsxs)(u,{className:`ams-mb-l`,children:[(0,w.jsxs)(u.Item,{children:[(0,w.jsx)(`strong`,{children:`Uw gegevens`}),` - Vul uw contactgegevens in.`]}),(0,w.jsxs)(u.Item,{children:[(0,w.jsx)(`strong`,{children:`Afspraak`}),` - Kies wanneer u een afspraak wilt maken.`]}),(0,w.jsxs)(u.Item,{children:[(0,w.jsx)(`strong`,{children:`Controleren`}),` - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.`]})]}),(0,w.jsx)(ee,{href:`#`,onClick:t=>{t.preventDefault(),e()},children:`Start het formulier`})]})}),T.__docgenInfo={description:``,methods:[],displayName:`StepIntro`,props:{onButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var E,D;function O(){return(O=e((()=>{r(),E=n(),D=()=>(0,E.jsx)(l,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,paddingTop:`large`,children:(0,E.jsx)(l.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,E.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,E.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,E.jsx)(g,{children:`Dank u voor uw inzending.`})]})})}),D.__docgenInfo={description:``,methods:[],displayName:`SuccessContent`}})))()}var k,A;function j(){return(j=e((()=>{v(),r(),a(),x(),k=n(),A=({onPrevButtonClick:e,onNextButtonClick:t})=>{let{clearErrors:n,formState:{errors:r},trigger:i}=_(),a=Object.keys(r).length>0,o=C(r);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(l,{className:`ams-mb-xl`,children:(0,k.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,k.jsx)(h,{href:`#`,icon:d,onClick:t=>{t.preventDefault(),n(),e()},children:`Vorige vraag`})})}),(0,k.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,k.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[a&&(0,k.jsx)(f,{errors:o,headingLevel:4,className:`ams-mb-m`,"data-testid":`error-alert`}),(0,k.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,k.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,k.jsx)(g,{children:`Stap 1 van 3: Uw gegevens`})]}),(0,k.jsxs)(`form`,{noValidate:!0,children:[(0,k.jsx)(b,{label:`Voornaam`,name:`name`,registerOptions:{required:!0},className:`ams-mb-m`}),(0,k.jsx)(b,{label:`E-mailadres`,type:`text`,inputMode:`email`,autoComplete:`email`,name:`email`,registerOptions:{required:!0},className:`ams-mb-xl`}),(0,k.jsx)(m,{type:`button`,onClick:async()=>{await i([`name`,`email`])&&t()},children:`Volgende vraag`})]})]})})]})},A.__docgenInfo={description:``,methods:[],displayName:`StepPersonalDetails`,props:{onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNextButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var M,N,P,F;function I(){return(I=e((()=>{M=t(),r(),v(),N=n(),P={startDate:`Startdatum`,startTime:`Starttijd`,endDate:`Einddatum`,endTime:`Eindtijd`},F=({children:e,legend:t,fields:n,className:r=`ams-mb-m`})=>{let{formState:i,getValues:a}=_(),s=n.some(e=>i.errors[e]&&i.errors[e]?.message),l=n.filter(e=>i.errors[e]).map(e=>`${e}-error`).join(` `),u=(0,M.useMemo)(()=>{let e=[],t=[];for(let r of n){let n=i.errors?.[r]?.type;n&&(n===`required`||n===`too_small`&&a(r)===``?e.push(r):t.push(r))}return t.length?`De einddatum en -tijd moeten later zijn dan de startdatum en -tijd`:(e=>e.length===0?``:e.length===1?`Het veld ${P[e[0]]} is verplicht.`:`De velden ${P[e[0]]} en ${P[e[1]]} zijn verplicht.`)(e)||void 0},[i]);return(0,N.jsxs)(te,{legend:t,className:r,invalid:!!s,children:[s&&(0,N.jsx)(o,{children:(0,N.jsx)(c,{id:l,children:u})}),(0,N.jsx)(o,{children:e})]})},F.__docgenInfo={description:``,methods:[],displayName:`DateTimeFieldset`,props:{legend:{required:!0,tsType:{name:`string`},description:``},fields:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'ams-mb-m'`,computed:!1}}}}})))()}var L,R;function z(){return(z=e((()=>{v(),r(),a(),x(),I(),L=n(),R=({minDateValue:e,onPrevButtonClick:t,onNextButtonClick:n})=>{let{clearErrors:r,formState:{errors:i},trigger:a,watch:o}=_(),s=Object.keys(i).length>0,c=C(i),[u]=o([`startDate`]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{className:`ams-mb-xl`,children:(0,L.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,L.jsx)(h,{href:`#`,icon:d,onClick:e=>{e.preventDefault(),r(),t()},children:`Vorige vraag`})})}),(0,L.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,L.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[s&&(0,L.jsx)(f,{errors:c,headingLevel:4,className:`ams-mb-m`}),(0,L.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,L.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,L.jsx)(g,{children:`Stap 2 van 3: Afspraak`})]}),(0,L.jsxs)(`form`,{noValidate:!0,children:[(0,L.jsxs)(F,{legend:`Startdatum en -tijd`,fields:[`startDate`,`startTime`],children:[(0,L.jsx)(y,{label:`Startdatum`,name:`startDate`,registerOptions:{required:!0},min:e}),(0,L.jsx)(oe,{label:`Starttijd`,name:`startTime`,registerOptions:{required:!0},hideErrorMessage:!0})]}),(0,L.jsxs)(F,{className:`ams-mb-xl`,legend:`Einddatum-tijd`,fields:[`endDate`,`endTime`],children:[(0,L.jsx)(y,{label:`Einddatum`,name:`endDate`,registerOptions:{required:!0},min:u,hideErrorMessage:!0,hideFieldError:!0}),(0,L.jsx)(oe,{label:`Eindtijd`,name:`endTime`,registerOptions:{required:!0},hideErrorMessage:!0})]}),(0,L.jsx)(m,{type:`button`,onClick:async()=>{await a([`startDate`,`startTime`,`endDate`,`endTime`])&&n()},children:`Volgende vraag`})]})]})})]})},R.__docgenInfo={description:``,methods:[],displayName:`StepAppointment`,props:{minDateValue:{required:!0,tsType:{name:`string`},description:``},onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNextButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var B,V;function H(){return(H=e((()=>{v(),r(),a(),x(),B=n(),V=({onPrevButtonClick:e,onSubmit:t})=>{let{getValues:n,handleSubmit:r}=_(),a=n();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l,{className:`ams-mb-xl`,children:(0,B.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,B.jsx)(h,{href:`#`,icon:d,onClick:t=>{t.preventDefault(),e()},children:`Vorige vraag`})})}),(0,B.jsx)(l,{as:`main`,paddingBottom:`2x-large`,children:(0,B.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,B.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,B.jsx)(p,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,B.jsx)(g,{children:`Stap 3 van 3: Controleren`})]}),(0,B.jsxs)(i,{className:`ams-mb-l`,children:[(0,B.jsx)(i.Caption,{children:(0,B.jsx)(p,{level:4,children:`Controleer uw gegevens`})}),(0,B.jsxs)(i.Body,{children:[(0,B.jsxs)(i.Row,{children:[(0,B.jsx)(i.Cell,{children:`Voornaam`}),(0,B.jsx)(i.Cell,{children:a.name})]}),(0,B.jsxs)(i.Row,{children:[(0,B.jsx)(i.Cell,{children:`E-mailadres`}),(0,B.jsx)(i.Cell,{children:a.email})]}),(0,B.jsxs)(i.Row,{children:[(0,B.jsx)(i.Cell,{children:`Startdatum en -tijd`}),(0,B.jsx)(i.Cell,{children:new Date(`${a.startDate}T${a.startTime}`).toLocaleString(`nl-NL`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).replace(`,`,``)})]}),(0,B.jsxs)(i.Row,{children:[(0,B.jsx)(i.Cell,{children:`Einddatum en -tijd`}),(0,B.jsx)(i.Cell,{children:new Date(`${a.endDate}T${a.endTime}`).toLocaleString(`nl-NL`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).replace(`,`,``)})]})]})]}),(0,B.jsxs)(`form`,{noValidate:!0,onSubmit:r(t),children:[(0,B.jsx)(ae,{label:`Opmerkingen`,name:`comments`,className:`ams-mb-xl`}),(0,B.jsx)(m,{type:`submit`,children:`Verzenden`})]})]})})]})},V.__docgenInfo={description:``,methods:[],displayName:`StepConfirm`,props:{onPrevButtonClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`SubmitHandler`,elements:[{name:`FieldValues`}],raw:`SubmitHandler<FieldValues>`},description:``}}}})))()}var me,U,W,G;function K(){return(K=e((()=>{me=`_svgContainer_qw8rx_1`,U=`_cross_qw8rx_7`,W=`_rotate_qw8rx_1`,G={svgContainer:me,cross:U,rotate:W}})))()}var q,J;function he(){return(he=e((()=>{K(),q=n(),J=()=>(0,q.jsx)(`div`,{"aria-hidden":`true`,children:(0,q.jsx)(`div`,{className:G.svgContainer,children:[0,1,2].map(e=>(0,q.jsx)(`svg`,{className:G.cross,style:{animationDelay:`${e*.75}s`},focusable:`false`,width:`187`,height:`187`,viewBox:`0 0 187 187`,xmlns:`http://www.w3.org/2000/svg`,children:(0,q.jsx)(`path`,{d:`M0 149.03L55.885 93.142L0 37.253L37.252 0L93.142 55.886L149.027 0L186.284 37.253L130.393 93.142L186.284 149.03L149.027 186.284L93.142 130.397L37.263 186.284L0 149.03Z`})},e))})}),J.__docgenInfo={description:``,methods:[],displayName:`AmsterdamCrossSpinner`}})))()}var Y;function ge(){return(ge=e((()=>{de(),Y=ce({name:S().min(1,`Vul uw voornaam in`),email:S().email(`Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl`),startDate:S().min(1,`Vul een startdatum in`),startTime:S().min(1,`Vul een starttijd in`),endDate:S().min(1,`Vul een einddatum in`),endTime:S().min(1,`Vul een eindtijd in`),comments:S().optional()}).superRefine((e,t)=>{if(!e.startDate||!e.startTime||!e.endDate||!e.endTime)return;let n=new Date(`${e.startDate}T${e.startTime}`);if(new Date(`${e.endDate}T${e.endTime}`)<=n){let n=e.startDate===e.endDate;t.addIssue({code:`custom`,message:`De einddatum en -tijd moeten later zijn dan de startdatum en -tijd`,path:n?[`endTime`]:[`endDate`]})}})})))()}var X,Z,Q;function _e(){return(_e=e((()=>{X=t(),v(),se(),r(),pe(),O(),j(),z(),H(),he(),fe(),ge(),Z=n(),Q=()=>{let[e,t]=(0,X.useState)(0),[n,r]=(0,X.useState)(!1),i=(0,X.useRef)(!1),a=new Date,o=new Date().toISOString().split(`T`)[0],c=ie({resolver:le(Y),defaultValues:{name:``,email:``,startDate:a.toISOString().split(`T`)[0],startTime:``,endDate:``,endTime:``,comments:``}}),l=(0,X.useCallback)(async()=>{if(!i.current){i.current=!0;try{await new Promise(e=>{setTimeout(()=>{r(!0),e()},1500)})}catch(e){console.log(`form error!`,e)}finally{i.current=!1}}},[]),u=()=>{t(e+1)},ee=[(0,Z.jsx)(T,{onButtonClick:()=>t(1)},`step-0`),(0,Z.jsx)(A,{onPrevButtonClick:()=>t(0),onNextButtonClick:u},`step-1`),(0,Z.jsx)(R,{minDateValue:o,onPrevButtonClick:()=>t(1),onNextButtonClick:u},`step-2`),(0,Z.jsx)(V,{onPrevButtonClick:()=>t(2),onSubmit:l},`step-3`)];return(0,Z.jsxs)(s,{children:[(0,Z.jsx)(ne,{className:`ams-mb-xl`}),c.formState.isSubmitting&&!n&&(0,Z.jsx)(ue,{children:(0,Z.jsx)(J,{})}),(0,Z.jsx)(re,{...c,children:n?(0,Z.jsx)(D,{}):ee[e]})]})},Q.__docgenInfo={description:``,methods:[],displayName:`BookingForm`}})))()}var ve,$,ye;function be(){return(be=e((()=>{_e(),ve={title:`Examples/BookingForm`,component:Q,parameters:{layout:`fullscreen`,docs:{source:{code:`
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