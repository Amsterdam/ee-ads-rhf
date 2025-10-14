import{j as n}from"./iframe-Dii_CO3v.js";import{u as c,F as u,c as b}from"./index.esm-DsEpSfPH.js";import"./preload-helper-PPVm8Dsz.js";const t=({label:o="Name",name:s="example",description:i,registerOptions:m,wrapperProps:l,...p})=>{const d=c({defaultValues:{[s]:""}});return n.jsx(u,{...d,children:n.jsx(b,{label:o,name:s,description:i,registerOptions:m,wrapperProps:l,...p})})};t.__docgenInfo={description:"",methods:[],displayName:"TextInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Name'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const y={title:"Components/TextInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Name",name:"name",registerOptions:{required:"A name is required"},wrapperProps:{className:"ams-mb-m"}}},r={args:{label:"Name",name:"name",description:"Please provide your name",registerOptions:{required:"Please enter your name"}}},a={args:{label:"Disabled name",name:"name",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    registerOptions: {
      required: 'A name is required'
    },
    wrapperProps: {
      className: 'ams-mb-m'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    description: 'Please provide your name',
    registerOptions: {
      required: 'Please enter your name'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'name',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const N=["Primary","WithDescription","Disabled"];export{a as Disabled,e as Primary,r as WithDescription,N as __namedExportsOrder,y as default};
