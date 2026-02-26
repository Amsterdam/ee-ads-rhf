import{j as e,G as a,H as h,P as S,O as v,b as M,S as D,c as T,I as F,B as y,r as f,F as R,R as N,E as H,f as i,i as G,k as U}from"./iframe-1dUPt01v.js";import{i as b,g as B,D as I,h as P,T as K,u as W,F as J}from"./TimeControl-AT_QXX_G.js";import{m as V,o as Q,s as x,e as X,a as Y}from"./schemas-Ba_rOoq4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XbeOWU64.js";import"./index-BkNovmQz.js";const Z="_root_1kms4_1",ee="_loader_1kms4_12",E={root:Z,loader:ee},L=()=>e.jsx("div",{className:E.root,"data-testid":"loader",children:e.jsx("div",{className:E.loader})});L.__docgenInfo={description:"",methods:[],displayName:"Loader"};const _=({onButtonClick:t})=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(h,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(S,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(h,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(v,{className:"ams-mb-l",children:[e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(M,{href:"#",onClick:s=>{s.preventDefault(),t()},children:"Start het formulier"})]})});_.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q=()=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Dank u voor uw inzending."})]})})});q.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const A=({onPrevButtonClick:t,onNextButtonClick:s})=>{const{clearErrors:n,formState:{errors:r},trigger:d}=b(),m=Object.keys(r).length>0,g=V(r),l=async()=>{await d(["name","email"])&&s()},c=u=>{u.preventDefault(),n(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:c,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[m&&e.jsx(F,{errors:g,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsx(B,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(B,{label:"E-mailadres",type:"text",inputMode:"email",autoComplete:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(y,{type:"button",onClick:l,children:"Volgende vraag"})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{disabled:{required:!0,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},k=({children:t,legend:s,fields:n})=>{const{formState:r,getValues:d}=b(),m=n.some(l=>r.errors[l]&&r.errors[l]?.message),g=f.useMemo(()=>{const l=[],c=[];for(const o of n){const p=r.errors?.[o]?.type;p&&(p==="required"||p==="too_small"&&d(o)===""?l.push(o):c.push(o))}const u=o=>o.length===0?"":o.length===1?`Het veld ${w[o[0]]} is verplicht.`:`De velden ${w[o[0]]} en ${w[o[1]]} zijn verplicht.`;return c.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":u(l)||void 0},[r]);return e.jsxs(R,{legend:s,className:"ams-mb-m",invalid:!!m,children:[m&&e.jsx(N,{children:e.jsx(H,{id:`${n[0]}-error`,children:g})}),e.jsx(N,{children:t})]})};k.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const O=({minDateValue:t,onPrevButtonClick:s,onNextButtonClick:n})=>{const{clearErrors:r,formState:{errors:d},trigger:m,watch:g}=b(),l=Object.keys(d).length>0,c=V(d),[u]=g(["startDate"]),j=async()=>{await m(["startDate","startTime","endDate","endTime"])&&n()},o=p=>{p.preventDefault(),r(),s()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:o,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[l&&e.jsx(F,{errors:c,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs(k,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(I,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(P,{label:"Starttijd",name:"startTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsxs(k,{legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(I,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:u,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(P,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(y,{type:"button",onClick:j,children:"Volgende vraag"})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z=({disabled:t=!1,onPrevButtonClick:s})=>{const{getValues:n}=b(),r=n();return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:d=>{d.preventDefault(),s()},children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(h,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(S,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(i,{className:"ams-mb-l",children:[e.jsx(i.Caption,{children:e.jsx(h,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(i.Body,{children:[e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Voornaam"}),e.jsx(i.Cell,{children:r.name})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"E-mailadres"}),e.jsx(i.Cell,{children:r.email})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Startdatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${r.startDate}T${r.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Einddatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${r.endDate}T${r.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsx(K,{label:"Opmerkingen",name:"comments",className:"ams-mb-m",disabled:t}),e.jsx(y,{type:"submit",disabled:t,children:"Verzenden"})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const te=Q({name:x().min(1,"Voornaam is verplicht"),email:X({message:"Ongeldig e-mailadres"}),startDate:x().min(1,"Startdatum is verplicht"),startTime:x().min(1,"Starttijd is verplicht"),endDate:x().min(1,"Einddatum is verplicht"),endTime:x().min(1,"Eindtijd is verplicht"),comments:x().optional()}).superRefine((t,s)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const n=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=n){const d=t.startDate===t.endDate;s.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:d?["endTime"]:["endDate"]})}}),$=()=>{const[t,s]=f.useState(0),[n,r]=f.useState(!1),[d,m]=f.useState(!1),g=new Date,l=new Date().toISOString().split("T")[0],c=W({resolver:Y(te),defaultValues:{name:"",email:"",startDate:g.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),u=f.useCallback(async()=>{try{r(!0),setTimeout(()=>{r(!1),m(!0)},1500)}catch(p){console.log("form error!",p)}},[]),j=()=>{s(t+1)},o=[e.jsx(_,{onButtonClick:()=>s(1)},"step-0"),e.jsx(A,{disabled:n,onPrevButtonClick:()=>s(0),onNextButtonClick:j},"step-1"),e.jsx(O,{minDateValue:l,disabled:n,onPrevButtonClick:()=>s(1),onNextButtonClick:j},"step-2"),e.jsx(z,{disabled:n,onPrevButtonClick:()=>s(2)},"step-3")];return e.jsxs(G,{children:[e.jsx(U,{className:"ams-mb-xl"}),n&&!d&&e.jsx(L,{}),e.jsx(J,{form:c,onSubmit:u,children:d?e.jsx(q,{}):o[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const de={title:"Examples/BookingForm",component:$,parameters:{layout:"fullscreen",docs:{source:{code:`
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
}`,...C.parameters?.docs?.source}}};const le=["Primary"];export{C as Primary,le as __namedExportsOrder,de as default};
