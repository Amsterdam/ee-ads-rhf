import{j as a}from"./iframe-OO432EJY.js";import{u as d,F as u,C as b}from"./index.esm-DQSCKQ9i.js";import"./preload-helper-PPVm8Dsz.js";const o=({label:n="Do you accept the terms?",name:t="example",description:c,registerOptions:i,wrapperProps:l,...p})=>{const m=d({defaultValues:{[t]:!1}});return a.jsx(u,{...m,children:a.jsx(b,{label:n,name:t,description:c,registerOptions:i,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const f={title:"Components/CheckboxControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms1",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},s={args:{label:"Disabled checkbox",name:"terms2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    name: 'terms2',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const y=["Primary","WithDescription","Disabled"];export{s as Disabled,e as Primary,r as WithDescription,y as __namedExportsOrder,f as default};
