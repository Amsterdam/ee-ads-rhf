import{j as s}from"./iframe-DCCBGEZP.js";import{u as c,F as u,e as b}from"./index.esm-CGtYJ06W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlX6VXAy.js";import"./index-TGAwZdSv.js";const i=({label:o="Start time",name:a="example",description:n,registerOptions:m,wrapperProps:l,...p})=>{const d=c({defaultValues:{[a]:""}});return s.jsx(u,{...d,children:s.jsx(b,{label:o,name:a,description:n,registerOptions:m,wrapperProps:l,...p})})};i.__docgenInfo={description:"",methods:[],displayName:"TimeControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Start time'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const S={title:"Components/TimeControl",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Start time",name:"start_time",registerOptions:{required:"A start time is required"},wrapperProps:{}}},r={args:{label:"Start time",name:"start_time1",description:"Please provide a start time",registerOptions:{required:"A start time is required"}}},t={args:{label:"Disabled name",name:"start_time2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time',
    registerOptions: {
      required: 'A start time is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time1',
    description: 'Please provide a start time',
    registerOptions: {
      required: 'A start time is required'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'start_time2',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const T=["Primary","WithDescription","Disabled"];export{t as Disabled,e as Primary,r as WithDescription,T as __namedExportsOrder,S as default};
