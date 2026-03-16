import{j as e,G as s,H as h,P as S,O as v,b as M,S as D,c as y,I as F,B as T,r as f,F as R,R as N,E as H,f as o,i as G,k as U}from"./iframe-DuQD3MQk.js";import{i as b,g as B,D as I,h as P,T as K,u as W,b as J}from"./TimeControl-CUIIO_XX.js";import{m as E,o as Q,s as x,e as X,a as Y}from"./schemas-DQlsOTxX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtOcSZzj.js";import"./index-D7fdbHWr.js";const Z="_root_1kms4_1",ee="_loader_1kms4_12",V={root:Z,loader:ee},L=()=>e.jsx("div",{className:V.root,"data-testid":"loader",children:e.jsx("div",{className:V.loader})});L.__docgenInfo={description:"",methods:[],displayName:"Loader"};const _=({onButtonClick:t})=>e.jsx(s,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(s.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(h,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(S,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(h,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(v,{className:"ams-mb-l",children:[e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(M,{href:"#",onClick:r=>{r.preventDefault(),t()},children:"Start het formulier"})]})});_.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q=()=>e.jsx(s,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(s.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Dank u voor uw inzending."})]})})});q.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const A=({onPrevButtonClick:t,onNextButtonClick:r})=>{const{clearErrors:n,formState:{errors:a},trigger:m}=b(),i=Object.keys(a).length>0,c=E(a),l=async()=>{await m(["name","email"])&&r()},u=p=>{p.preventDefault(),n(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(s,{className:"ams-mb-xl",children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:y,onClick:u,children:"Vorige vraag"})})}),e.jsx(s,{as:"main",paddingBottom:"2x-large",children:e.jsxs(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[i&&e.jsx(F,{errors:c,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsx(B,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(B,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(T,{type:"button",onClick:l,children:"Volgende vraag"})]})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},k=({children:t,legend:r,fields:n})=>{const{formState:a,getValues:m}=b(),i=n.some(l=>a.errors[l]&&a.errors[l]?.message),c=f.useMemo(()=>{const l=[],u=[];for(const d of n){const g=a.errors?.[d]?.type;g&&(g==="required"||g==="too_small"&&m(d)===""?l.push(d):u.push(d))}const p=d=>d.length===0?"":d.length===1?`Het veld ${w[d[0]]} is verplicht.`:`De velden ${w[d[0]]} en ${w[d[1]]} zijn verplicht.`;return u.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":p(l)||void 0},[a]);return e.jsxs(R,{legend:r,className:"ams-mb-m",invalid:!!i,children:[i&&e.jsx(N,{children:e.jsx(H,{id:`${n[0]}-error`,children:c})}),e.jsx(N,{children:t})]})};k.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const O=({minDateValue:t,onPrevButtonClick:r,onNextButtonClick:n})=>{const{clearErrors:a,formState:{errors:m},trigger:i,watch:c}=b(),l=Object.keys(m).length>0,u=E(m),[p]=c(["startDate"]),j=async()=>{await i(["startDate","startTime","endDate","endTime"])&&n()},d=g=>{g.preventDefault(),a(),r()};return e.jsxs(e.Fragment,{children:[e.jsx(s,{className:"ams-mb-xl",children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:y,onClick:d,children:"Vorige vraag"})})}),e.jsx(s,{as:"main",paddingBottom:"2x-large",children:e.jsxs(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[l&&e.jsx(F,{errors:u,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs("form",{noValidate:!0,children:[e.jsxs(k,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(I,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(P,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(k,{legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(I,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:p,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(P,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(T,{type:"button",onClick:j,children:"Volgende vraag"})]})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z=({onSubmit:t,disabled:r=!1,onPrevButtonClick:n})=>{const{getValues:a,handleSubmit:m}=b(),i=a();return e.jsxs(e.Fragment,{children:[e.jsx(s,{className:"ams-mb-xl",children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:y,onClick:c=>{c.preventDefault(),n()},children:"Vorige vraag"})})}),e.jsx(s,{as:"main",paddingBottom:"2x-large",children:e.jsxs(s.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(o,{className:"ams-mb-l",children:[e.jsx(o.Caption,{children:e.jsx(h,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Voornaam"}),e.jsx(o.Cell,{children:i.name})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"E-mailadres"}),e.jsx(o.Cell,{children:i.email})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Startdatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${i.startDate}T${i.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Einddatum en -tijd"}),e.jsx(o.Cell,{children:new Date(`${i.endDate}T${i.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsxs("form",{noValidate:!0,onSubmit:m(t),children:[e.jsx(K,{label:"Opmerkingen",name:"comments",className:"ams-mb-m",disabled:r}),e.jsx(T,{type:"submit",disabled:r,children:"Verzenden"})]})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSubmit:{required:!0,tsType:{name:"SubmitHandler",elements:[{name:"FieldValues"}],raw:"SubmitHandler<FieldValues>"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const te=Q({name:x().min(1,"Voornaam is verplicht"),email:X({message:"Ongeldig e-mailadres"}),startDate:x().min(1,"Startdatum is verplicht"),startTime:x().min(1,"Starttijd is verplicht"),endDate:x().min(1,"Einddatum is verplicht"),endTime:x().min(1,"Eindtijd is verplicht"),comments:x().optional()}).superRefine((t,r)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const n=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=n){const m=t.startDate===t.endDate;r.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:m?["endTime"]:["endDate"]})}}),$=()=>{const[t,r]=f.useState(0),[n,a]=f.useState(!1),[m,i]=f.useState(!1),c=new Date,l=new Date().toISOString().split("T")[0],u=W({resolver:Y(te),defaultValues:{name:"",email:"",startDate:c.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),p=f.useCallback(async()=>{try{a(!0),setTimeout(()=>{a(!1),i(!0)},1500)}catch(g){console.log("form error!",g)}},[]),j=()=>{r(t+1)},d=[e.jsx(_,{onButtonClick:()=>r(1)},"step-0"),e.jsx(A,{onPrevButtonClick:()=>r(0),onNextButtonClick:j},"step-1"),e.jsx(O,{minDateValue:l,disabled:n,onPrevButtonClick:()=>r(1),onNextButtonClick:j},"step-2"),e.jsx(z,{disabled:n,onSubmit:p,onPrevButtonClick:()=>r(2)},"step-3")];return e.jsxs(G,{children:[e.jsx(U,{className:"ams-mb-xl"}),n&&!m&&e.jsx(L,{}),e.jsx(J,{...u,children:m?e.jsx(q,{}):d[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const de={title:"Examples/BookingForm",component:$,parameters:{layout:"fullscreen",docs:{source:{code:`
          import { useCallback, useState } from 'react'
          import { SubmitHandler, useForm } from 'react-hook-form'
          import { FormProvider } from '@amsterdam/ee-ads-rhf'
          import { zodResolver } from '@hookform/resolvers/zod'
          import { Page, PageHeader } from '@amsterdam/design-system-react'
          import Loader from './components/Loader/Loader'
          import StepIntro from './components/StepIntro/StepIntro'
          import SuccessContent from './components/SuccessContent/SuccessContent'
          import StepPersonalDetails from './components/StepPersonalDetails/StepPersonalDetails'
          import StepAppointment from './components/StepAppointment/StepAppointment'
          import StepConfirm from './components/StepConfirm/StepConfirm'
          import bookingFormSchema from './schema'

          export default function BookingForm() {
            const [currentStep, setCurrentStep] = useState(0)
            const [isLoading, setIsLoading] = useState(false)
            const [isSubmitted, setIsSubmitted] = useState(false)

            const nowDateTime = new Date()
            const nowDate = new Date().toISOString().split('T')[0]

            const form = useForm({
              resolver: zodResolver(bookingFormSchema),
              defaultValues: {
                name: '',
                email: '',
                startDate: nowDateTime.toISOString().split('T')[0],
                startTime: '',
                endDate: '',
                endTime: '',
                comments: ''
              }
            })

            const onValidSubmit = useCallback(async () => {
              try {
                setIsLoading(true)
                setTimeout(() => {
                  setIsLoading(false)
                  setIsSubmitted(true)
                }, 1500)
              } catch (error) {
                console.log('form error', error)
              }
            }, [])

            const handleNextStep = () => {
              setCurrentStep(currentStep + 1)
            }

            const steps = [
              <StepIntro onButtonClick={() => setCurrentStep(1)} key="step-0" />,
              <StepPersonalDetails
                disabled={isLoading}
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
                key="step-3"
              />
            ]

            return (
              <Page>
                <PageHeader className="ams-mb-xl" />
                {isLoading && !isSubmitted && <Loader />}
                <FormProvider form={form} onSubmit={onValidSubmit}>
                  {!isSubmitted ? steps[currentStep] : <SuccessContent />}
                </FormProvider>
              </Page>
            )
          }
        `}}},tags:["autodocs"]},C={args:{}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...C.parameters?.docs?.source}}};const me=["Primary"];export{C as Primary,me as __namedExportsOrder,de as default};
