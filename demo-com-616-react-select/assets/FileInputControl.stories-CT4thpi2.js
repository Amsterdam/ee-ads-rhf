import{j as n}from"./iframe-iYxTHeLQ.js";import{u as d,F as u,a as h}from"./index.esm-CA_qzDY0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpsacvjT.js";import"./index-BqzKUWfk.js";const s=({label:o="FileInput",name:a="example",description:i,registerOptions:c,wrapperProps:l,...m})=>{const p=d({defaultValues:{[a]:""}});return n.jsx(u,{...p,children:n.jsx(h,{label:o,name:a,description:i,registerOptions:c,wrapperProps:l,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"FileInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'FileInput'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const y={title:"Components/FileInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The date input label"},description:{control:"text",escription:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Attachment",name:"attachment",registerOptions:{required:"An attachment is required"},wrapperProps:{}}},t={args:{label:"Attachment",name:"attachment1",description:"Please select your document.",registerOptions:{required:"An attachment is required"}}},r={args:{label:"Select a document",name:"attachment2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment',
    registerOptions: {
      required: 'An attachment is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment1',
    description: 'Please select your document.',
    registerOptions: {
      required: 'An attachment is required'
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a document',
    name: 'attachment2',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const F=["Primary","WithDescription","Disabled"];export{r as Disabled,e as Primary,t as WithDescription,F as __namedExportsOrder,y as default};
