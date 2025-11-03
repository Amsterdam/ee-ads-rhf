import{j as s}from"./iframe-4nk4mWsP.js";import{u as m,F as u,D as g}from"./index.esm-BnnXl8Xz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTr04Xoh.js";import"./index-DA5vCagx.js";const o=({label:n="Date",name:a="example",description:i,registerOptions:d,wrapperProps:l,...p})=>{const c=m({defaultValues:{[a]:""}});return s.jsx(u,{...c,children:s.jsx(g,{label:n,name:a,description:i,registerOptions:d,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"DateControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const q={title:"Components/DateControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The date input label"},description:{control:"text",escription:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Start date",name:"start_date",registerOptions:{required:"The start date is required"},wrapperProps:{}}},t={args:{label:"Start date",name:"start_date1",description:"Please select a date.",registerOptions:{required:"The start date is required"}}},r={args:{label:"Select a date",name:"start_date2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date',
    registerOptions: {
      required: 'The start date is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date1',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required'
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a date',
    name: 'start_date2',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const _=["Primary","WithDescription","Disabled"];export{r as Disabled,e as Primary,t as WithDescription,_ as __namedExportsOrder,q as default};
