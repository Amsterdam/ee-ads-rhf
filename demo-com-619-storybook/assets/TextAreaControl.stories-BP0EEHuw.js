import{j as a}from"./iframe-Dii_CO3v.js";import{u as p,F as u,T as g}from"./index.esm-DsEpSfPH.js";import"./preload-helper-PPVm8Dsz.js";const o=({label:n="Message",name:t="example",description:m,registerOptions:i,wrapperProps:l,...c})=>{const d=p({defaultValues:{[t]:""}});return a.jsx(u,{...d,children:a.jsx(g,{label:n,name:t,description:m,registerOptions:i,wrapperProps:l,...c})})};o.__docgenInfo={description:"",methods:[],displayName:"TextAreaControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Message'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const h={title:"Components/TextAreaControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The textarea label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Comments",name:"comments",registerOptions:{required:"A comment is required"},wrapperProps:{className:"ams-mb-m"},placeholder:"Comments"}},r={args:{label:"Comments",name:"comments",description:"Please enter a comment",registerOptions:{required:"A comment is required"},placeholder:"Comments"}},s={args:{label:"Disabled comments",name:"comments",disabled:!0,placeholder:"Comments"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments',
    registerOptions: {
      required: 'A comment is required'
    },
    wrapperProps: {
      className: 'ams-mb-m'
    },
    placeholder: 'Comments'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments',
    description: 'Please enter a comment',
    registerOptions: {
      required: 'A comment is required'
    },
    placeholder: 'Comments'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled comments',
    name: 'comments',
    disabled: true,
    placeholder: 'Comments'
  }
}`,...s.parameters?.docs?.source}}};const f=["Primary","WithDescription","Disabled"];export{s as Disabled,e as Primary,r as WithDescription,f as __namedExportsOrder,h as default};
