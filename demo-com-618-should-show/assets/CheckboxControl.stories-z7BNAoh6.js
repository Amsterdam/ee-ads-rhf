import{j as a}from"./iframe-DCCBGEZP.js";import{u as d,F as u,C as b}from"./index.esm-CGtYJ06W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlX6VXAy.js";import"./index-TGAwZdSv.js";const o=({label:n="Do you accept the terms?",name:s="example",description:c,registerOptions:i,wrapperProps:l,...p})=>{const m=d({defaultValues:{[s]:!1}});return a.jsx(u,{...m,children:a.jsx(b,{label:n,name:s,description:c,registerOptions:i,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const C={title:"Components/CheckboxControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms1",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled checkbox",name:"terms2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["Primary","WithDescription","Disabled"];export{t as Disabled,e as Primary,r as WithDescription,D as __namedExportsOrder,C as default};
