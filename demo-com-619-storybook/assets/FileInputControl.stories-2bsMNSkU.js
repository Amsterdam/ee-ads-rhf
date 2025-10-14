import{j as n}from"./iframe-DgOPTgh_.js";import{u as d,F as u,a as h}from"./index.esm-CuLVOd4D.js";import"./preload-helper-PPVm8Dsz.js";const s=({label:o="FileInput",name:r="example",description:i,registerOptions:c,wrapperProps:l,...m})=>{const p=d({defaultValues:{[r]:""}});return n.jsx(u,{...p,children:n.jsx(h,{label:o,name:r,description:i,registerOptions:c,wrapperProps:l,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"FileInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'FileInput'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const x={title:"Components/FileInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The date input label"},description:{control:"text",escription:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Attachment",name:"attachment",registerOptions:{required:"An attachment is required"},wrapperProps:{className:"ams-md-m"}}},t={args:{label:"Attachment",name:"attachment",description:"Please select your document.",registerOptions:{required:"An attachment is required"}}},a={args:{label:"Select a document",name:"attachment",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment',
    registerOptions: {
      required: 'An attachment is required'
    },
    wrapperProps: {
      className: 'ams-md-m'
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment',
    description: 'Please select your document.',
    registerOptions: {
      required: 'An attachment is required'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a document',
    name: 'attachment',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const q=["Primary","WithDescription","Disabled"];export{a as Disabled,e as Primary,t as WithDescription,q as __namedExportsOrder,x as default};
