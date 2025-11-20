import{j as o}from"./iframe-DXvFKbXc.js";import{u,F as m,P as w}from"./index.esm-CnL-XMhm.js";const t=({label:n="Password",name:a="example",description:d,registerOptions:p,wrapperProps:l,...i})=>{const c=u({defaultValues:{[a]:""}});return o.jsx(m,{...c,children:o.jsx(w,{label:n,name:a,description:d,registerOptions:p,wrapperProps:l,...i})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Password'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const P={title:"Components/PasswordInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Password",name:"password",registerOptions:{required:"A password is required"},wrapperProps:{},placeholder:"Password"}},s={args:{label:"Password",name:"password1",description:"Passwords must consist of at least 8 characters and ...",registerOptions:{required:"You must accept the terms"},placeholder:"Password"}},r={args:{label:"Disabled password",name:"password2",disabled:!0,placeholder:"Password"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password',
    registerOptions: {
      required: 'A password is required'
    },
    wrapperProps: {},
    placeholder: 'Password'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password1',
    description: 'Passwords must consist of at least 8 characters and ...',
    registerOptions: {
      required: 'You must accept the terms'
    },
    placeholder: 'Password'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled password',
    name: 'password2',
    disabled: true,
    placeholder: 'Password'
  }
}`,...r.parameters?.docs?.source}}};const b=["Primary","WithDescription","Disabled"],f=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:s,__namedExportsOrder:b,default:P},Symbol.toStringTag,{value:"Module"}));export{r as D,f as P,s as W};
