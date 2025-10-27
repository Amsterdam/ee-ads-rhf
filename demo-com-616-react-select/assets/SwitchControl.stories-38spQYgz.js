import{j as a}from"./iframe-BrcoFe4b.js";import{u as d,F as u,b as g}from"./index.esm-WQiZe3P3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dA1kWTT5.js";import"./index-DKp28Uiq.js";const o=({label:n="Do you accept the terms?",name:s="example",description:i,registerOptions:c,wrapperProps:l,...p})=>{const m=d({defaultValues:{[s]:!1}});return a.jsx(u,{...m,children:a.jsx(g,{label:n,name:s,description:i,registerOptions:c,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"SwitchControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const D={title:"Components/SwitchControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The switch label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms2",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled switch",name:"terms3",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    name: 'terms2',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    name: 'terms3',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const w=["Primary","WithDescription","Disabled"];export{t as Disabled,e as Primary,r as WithDescription,w as __namedExportsOrder,D as default};
