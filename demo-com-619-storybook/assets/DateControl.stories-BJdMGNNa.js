import{j as s}from"./iframe-DgOPTgh_.js";import{u as m,F as u,D as g}from"./index.esm-CuLVOd4D.js";import"./preload-helper-PPVm8Dsz.js";const o=({label:n="Date",name:r="example",description:d,registerOptions:i,wrapperProps:l,...p})=>{const c=m({defaultValues:{[r]:""}});return s.jsx(u,{...c,children:s.jsx(g,{label:n,name:r,description:d,registerOptions:i,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"DateControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const D={title:"Components/DateControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The date input label"},description:{control:"text",escription:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Start date",name:"start_date",registerOptions:{required:"The start date is required"},wrapperProps:{className:"ams-md-m"}}},t={args:{label:"Start date",name:"start_date",description:"Please select a date.",registerOptions:{required:"The start date is required"}}},a={args:{label:"Select a date",name:"start_date",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date',
    registerOptions: {
      required: 'The start date is required'
    },
    wrapperProps: {
      className: 'ams-md-m'
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a date',
    name: 'start_date',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const h=["Primary","WithDescription","Disabled"];export{a as Disabled,e as Primary,t as WithDescription,h as __namedExportsOrder,D as default};
