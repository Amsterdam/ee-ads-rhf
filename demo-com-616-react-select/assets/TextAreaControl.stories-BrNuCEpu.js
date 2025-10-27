import{j as o}from"./iframe-Cz7nHs0V.js";import{u as d,F as u,T as g}from"./index.esm-z_Q6CO-s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYCDNaMf.js";import"./index-Cyyi9GTH.js";const a=({label:n="Message",name:t="example",description:m,registerOptions:i,wrapperProps:l,...c})=>{const p=d({defaultValues:{[t]:""}});return o.jsx(u,{...p,children:o.jsx(g,{label:n,name:t,description:m,registerOptions:i,wrapperProps:l,...c})})};a.__docgenInfo={description:"",methods:[],displayName:"TextAreaControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Message'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const q={title:"Components/TextAreaControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The textarea label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Comments",name:"comments",registerOptions:{required:"A comment is required"},wrapperProps:{},placeholder:"Comments"}},r={args:{label:"Comments",name:"comments1",description:"Please enter a comment",registerOptions:{required:"A comment is required"},placeholder:"Comments"}},s={args:{label:"Disabled comments",name:"comments2",disabled:!0,placeholder:"Comments"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments',
    registerOptions: {
      required: 'A comment is required'
    },
    wrapperProps: {},
    placeholder: 'Comments'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments1',
    description: 'Please enter a comment',
    registerOptions: {
      required: 'A comment is required'
    },
    placeholder: 'Comments'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled comments',
    name: 'comments2',
    disabled: true,
    placeholder: 'Comments'
  }
}`,...s.parameters?.docs?.source}}};const T=["Primary","WithDescription","Disabled"];export{s as Disabled,e as Primary,r as WithDescription,T as __namedExportsOrder,q as default};
