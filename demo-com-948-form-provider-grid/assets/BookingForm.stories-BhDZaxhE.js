import{j as e,G as a,H as g,c as f,O as v,f as R,S as D,i as T,I as E,B as y,r as j,F as M,R as N,E as H,k as i,P as G,a as U}from"./iframe-B4WcyFLF.js";import{g as b,T as B,D as I,f as P,e as K,u as W,F as J}from"./TimeControl-Ce1l3Zqg.js";import{m as L,o as Q,s as x,e as X,a as Y}from"./schemas-vRGCiSXc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-45GP-phd.js";import"./index-C8s3jWjj.js";const Z="_root_1kms4_1",ee="_loader_1kms4_12",F={root:Z,loader:ee},V=()=>e.jsx("div",{className:F.root,"data-testid":"loader",children:e.jsx("div",{className:F.loader})});V.__docgenInfo={description:"",methods:[],displayName:"Loader"};const _=({onButtonClick:t})=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(g,{className:"ams-mb-m",level:1,children:"Waar u dit formulier voor gebruikt"}),e.jsx(f,{className:"ams-mb-xl",size:"large",children:"Met dit formulier maakt u een afspraak."}),e.jsx(g,{className:"ams-mb-s",level:2,children:"De stappen in dit formulier"}),e.jsxs(v,{className:"ams-mb-l",children:[e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Uw gegevens"})," - Vul uw contactgegevens in."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Afspraak"})," - Kies wanneer u een afspraak wilt maken."]}),e.jsxs(v.Item,{children:[e.jsx("strong",{children:"Controleren"})," - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag."]})]}),e.jsx(R,{href:"#",onClick:n=>{n.preventDefault(),t()},children:"Start het formulier"})]})});_.__docgenInfo={description:"",methods:[],displayName:"StepIntro",props:{onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q=()=>e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(g,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Dank u voor uw inzending."})]})})});q.__docgenInfo={description:"",methods:[],displayName:"SuccessContent"};const A=({onPrevButtonClick:t,onNextButtonClick:n})=>{const{clearErrors:s,formState:{errors:r},trigger:o}=b(),c=Object.keys(r).length>0,m=L(r),l=async()=>{await o(["name","email"])&&n()},u=p=>{p.preventDefault(),s(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:u,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[c&&e.jsx(E,{errors:m,headingLevel:4,className:"ams-mb-m","data-testid":"error-alert"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(g,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 1 van 3: Uw gegevens"})]}),e.jsx(B,{label:"Voornaam",name:"name",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(B,{label:"E-mailadres",type:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-m"}),e.jsx(y,{type:"button",onClick:l,children:"Volgende vraag"})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"StepPersonalDetails",props:{disabled:{required:!0,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={startDate:"Startdatum",startTime:"Starttijd",endDate:"Einddatum",endTime:"Eindtijd"},k=({children:t,legend:n,fields:s})=>{const{formState:r}=b(),o=s.some(m=>r.errors[m]&&r.errors[m]?.message),c=j.useMemo(()=>{const m=[],l=[];for(const d of s){const h=r.errors?.[d]?.type;h&&(h==="required"?m.push(d):l.push(d))}const u=d=>d.length===0?"":d.length===1?`Het veld ${w[d[0]]} is verplicht.`:`De velden ${w[d[0]]} en ${w[d[1]]} zijn verplicht.`;return l.length?"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd":u(m)||void 0},[r]);return e.jsxs(M,{legend:n,className:"ams-mb-m",invalid:!!o,children:[o&&e.jsx(N,{children:e.jsx(H,{id:`${s[0]}-error`,children:c})}),e.jsx(N,{children:t})]})};k.__docgenInfo={description:"",methods:[],displayName:"DateTimeFieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const O=({minDateValue:t,onPrevButtonClick:n,onNextButtonClick:s})=>{const{clearErrors:r,formState:{errors:o},trigger:c,watch:m}=b(),l=Object.keys(o).length>0,u=L(o),[p]=m(["startDate"]),d=async()=>{await c(["startDate","startTime","endDate","endTime"])&&s()},h=S=>{S.preventDefault(),r(),n()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:h,children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[l&&e.jsx(E,{errors:u,headingLevel:4,className:"ams-mb-m"}),e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(g,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 2 van 3: Afspraak"})]}),e.jsxs(k,{legend:"Startdatum en -tijd",fields:["startDate","startTime"],children:[e.jsx(I,{label:"Startdatum",name:"startDate",registerOptions:{required:!0},min:t}),e.jsx(P,{label:"Starttijd",name:"startTime",registerOptions:{required:!0}})]}),e.jsxs(k,{legend:"Einddatum-tijd",fields:["endDate","endTime"],children:[e.jsx(I,{label:"Einddatum",name:"endDate",registerOptions:{required:!0},min:p,hideErrorMessage:!0,hideFieldError:!0}),e.jsx(P,{label:"Eindtijd",name:"endTime",registerOptions:{required:!0},hideErrorMessage:!0})]}),e.jsx(y,{type:"button",onClick:d,children:"Volgende vraag"})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"StepAppointment",props:{minDateValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z=({disabled:t=!1,onPrevButtonClick:n})=>{const{getValues:s}=b(),r=s();return e.jsxs(e.Fragment,{children:[e.jsx(a,{paddingBottom:"2x-large",paddingTop:"large",children:e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:e.jsx(D,{href:"#",icon:T,onClick:o=>{o.preventDefault(),n()},children:"Vorige vraag"})})}),e.jsx(a,{as:"main",id:"inhoud",paddingBottom:"2x-large",paddingTop:"large",children:e.jsxs(a.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs("header",{"aria-labelledby":"form-header",className:"ams-mb-m ams-gap-xs",children:[e.jsx(g,{"aria-hidden":!0,id:"form-header",level:2,size:"level-4",children:"Afspraak maken"}),e.jsx(f,{children:"Stap 3 van 3: Controleren"})]}),e.jsxs(i,{className:"ams-mb-l",children:[e.jsx(i.Caption,{children:e.jsx(g,{level:4,children:"Controleer uw gegevens"})}),e.jsxs(i.Body,{children:[e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Voornaam"}),e.jsx(i.Cell,{children:r.name})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"E-mailadres"}),e.jsx(i.Cell,{children:r.email})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Startdatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${r.startDate}T${r.startTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]}),e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:"Einddatum en -tijd"}),e.jsx(i.Cell,{children:new Date(`${r.endDate}T${r.endTime}`).toLocaleString("nl-NL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")})]})]})]}),e.jsx(K,{label:"Opmerkingen",name:"comments",className:"ams-mb-m",disabled:t}),e.jsx(y,{type:"submit",disabled:t,children:"Verzenden"})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"StepConfirm",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPrevButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const te=Q({name:x().min(1,"Voornaam is verplicht"),email:X({message:"Ongeldig e-mailadres"}),startDate:x().min(1,"Startdatum is verplicht"),startTime:x().min(1,"Starttijd is verplicht"),endDate:x().min(1,"Einddatum is verplicht"),endTime:x().min(1,"Eindtijd is verplicht"),comments:x().optional()}).superRefine((t,n)=>{if(!t.startDate||!t.startTime||!t.endDate||!t.endTime)return;const s=new Date(`${t.startDate}T${t.startTime}`);if(new Date(`${t.endDate}T${t.endTime}`)<=s){const o=t.startDate===t.endDate;n.addIssue({code:"custom",message:"De einddatum en -tijd moeten later zijn dan de startdatum en -tijd",path:o?["endTime"]:["endDate"]})}}),$=()=>{const[t,n]=j.useState(0),[s,r]=j.useState(!1),[o,c]=j.useState(!1),m=new Date,l=new Date().toISOString().split("T")[0],u=W({resolver:Y(te),defaultValues:{name:"",email:"",startDate:m.toISOString().split("T")[0],startTime:"",endDate:"",endTime:"",comments:""}}),p=j.useCallback(async()=>{try{r(!0),setTimeout(()=>{r(!1),c(!0)},1500)}catch(S){console.log("form error!",S)}},[]),d=()=>{n(t+1)},h=[e.jsx(_,{onButtonClick:()=>n(1)},"step-0"),e.jsx(A,{disabled:s,onPrevButtonClick:()=>n(0),onNextButtonClick:d},"step-1"),e.jsx(O,{minDateValue:l,disabled:s,onPrevButtonClick:()=>n(1),onNextButtonClick:d},"step-2"),e.jsx(z,{disabled:s,onPrevButtonClick:()=>n(2)},"step-3")];return e.jsxs(G,{children:[e.jsx(U,{className:"ams-mb-xl"}),s&&!o&&e.jsx(V,{}),e.jsx(J,{form:u,onSubmit:p,children:o?e.jsx(q,{}):h[t]})]})};$.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const de={title:"Examples/BookingForm",component:$,parameters:{layout:"centered",docs:{source:{code:`
          import { useCallback, useState } from 'react'
          import { SubmitHandler, useForm } from 'react-hook-form'
          import { FormProvider } from '@amsterdam/ee-ads-rhf-lib'
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
