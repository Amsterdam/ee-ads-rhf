import{j as s}from"./iframe-Dii_CO3v.js";import{u as c,F as u,d as b}from"./index.esm-DsEpSfPH.js";import"./preload-helper-PPVm8Dsz.js";const i=({label:o="Start time",name:a="example",description:n,registerOptions:m,wrapperProps:l,...d})=>{const p=c({defaultValues:{[a]:""}});return s.jsx(u,{...p,children:s.jsx(b,{label:o,name:a,description:n,registerOptions:m,wrapperProps:l,...d})})};i.__docgenInfo={description:"",methods:[],displayName:"TimeControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Start time'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const q={title:"Components/TimeControl",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Start time",name:"start_time",registerOptions:{required:"A start time is required"},wrapperProps:{className:"ams-mb-m"}}},r={args:{label:"Start time",name:"start_time",description:"Please provide a start time",registerOptions:{required:"A start time is required"}}},t={args:{label:"Disabled name",name:"start_time",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time',
    registerOptions: {
      required: 'A start time is required'
    },
    wrapperProps: {
      className: 'ams-mb-m'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time',
    description: 'Please provide a start time',
    registerOptions: {
      required: 'A start time is required'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'start_time',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const _=["Primary","WithDescription","Disabled"];export{t as Disabled,e as Primary,r as WithDescription,_ as __namedExportsOrder,q as default};
