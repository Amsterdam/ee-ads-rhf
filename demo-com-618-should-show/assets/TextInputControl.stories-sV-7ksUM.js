import{j as n}from"./iframe-DCCBGEZP.js";import{u as c,F as u,d as b}from"./index.esm-CGtYJ06W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlX6VXAy.js";import"./index-TGAwZdSv.js";const t=({label:o="Name",name:s="example",description:i,registerOptions:m,wrapperProps:p,...l})=>{const d=c({defaultValues:{[s]:""}});return n.jsx(u,{...d,children:n.jsx(b,{label:o,name:s,description:i,registerOptions:m,wrapperProps:p,...l})})};t.__docgenInfo={description:"",methods:[],displayName:"TextInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Name'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const q={title:"Components/TextInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Name",name:"name",registerOptions:{required:"A name is required"},wrapperProps:{}}},r={args:{label:"Name",name:"name1",description:"Please provide your name",registerOptions:{required:"Please enter your name"}}},a={args:{label:"Disabled name",name:"name2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    registerOptions: {
      required: 'A name is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name1',
    description: 'Please provide your name',
    registerOptions: {
      required: 'Please enter your name'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'name2',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const T=["Primary","WithDescription","Disabled"];export{a as Disabled,e as Primary,r as WithDescription,T as __namedExportsOrder,q as default};
