import{j as n}from"./iframe-DlWW52u8.js";import{u as d,F as u,a as g}from"./ReactSelectControl-CYZF-4UA.js";const s=({label:o="FileInput",name:a="example",description:i,registerOptions:l,wrapperProps:c,...p})=>{const m=d({defaultValues:{[a]:""}});return n.jsx(u,{...m,children:n.jsx(g,{label:o,name:a,description:i,registerOptions:l,wrapperProps:c,...p})})};s.__docgenInfo={description:"",methods:[],displayName:"FileInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'FileInput'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const h={title:"Components/FileInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The date input label"},description:{control:"text",escription:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Attachment",name:"attachment",registerOptions:{required:"An attachment is required"},wrapperProps:{}}},t={args:{label:"Attachment",name:"attachment1",description:"Please select your document.",registerOptions:{required:"An attachment is required"}}},r={args:{label:"Select a document",name:"attachment2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const b=["Primary","WithDescription","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:t,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{r as D,y as F,t as W};
