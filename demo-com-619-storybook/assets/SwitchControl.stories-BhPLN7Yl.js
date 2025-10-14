import{j as a}from"./iframe-DgOPTgh_.js";import{u as d,F as u,b}from"./index.esm-CuLVOd4D.js";import"./preload-helper-PPVm8Dsz.js";const o=({label:n="Do you accept the terms?",name:t="example",description:i,registerOptions:c,wrapperProps:m,...l})=>{const p=d({defaultValues:{[t]:!1}});return a.jsx(u,{...p,children:a.jsx(b,{label:n,name:t,description:i,registerOptions:c,wrapperProps:m,...l})})};o.__docgenInfo={description:"",methods:[],displayName:"SwitchControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const y={title:"Components/SwitchControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The switch label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{className:"ams-mb-m"}}},r={args:{label:"Accept terms and conditions",name:"terms",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},s={args:{label:"Disabled switch",name:"terms",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required'
    },
    wrapperProps: {
      className: 'ams-mb-m'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    name: 'terms',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    name: 'terms',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"];export{s as Disabled,e as Primary,r as WithDescription,x as __namedExportsOrder,y as default};
