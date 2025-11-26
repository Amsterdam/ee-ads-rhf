import{j as o}from"./iframe-DlWW52u8.js";import{u as m,F as u,C as b}from"./ReactSelectControl-CYZF-4UA.js";const a=({label:n="Do you accept the terms?",name:s="example",description:c,registerOptions:i,wrapperProps:l,...p})=>{const d=m({defaultValues:{[s]:!1}});return o.jsx(u,{...d,children:o.jsx(b,{label:n,name:s,description:c,registerOptions:i,wrapperProps:l,...p})})};a.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const g={title:"Components/CheckboxControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms1",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled checkbox",name:"terms2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    name: 'terms1',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    name: 'terms2',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const h=["Primary","WithDescription","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{y as C,t as D,r as W};
