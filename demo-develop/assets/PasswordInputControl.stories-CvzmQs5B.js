import{j as o}from"./iframe-4nk4mWsP.js";import{u as m,F as u,P as w}from"./index.esm-BnnXl8Xz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTr04Xoh.js";import"./index-DA5vCagx.js";const t=({label:n="Password",name:a="example",description:d,registerOptions:p,wrapperProps:i,...l})=>{const c=m({defaultValues:{[a]:""}});return o.jsx(u,{...c,children:o.jsx(w,{label:n,name:a,description:d,registerOptions:p,wrapperProps:i,...l})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Password'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const x={title:"Components/PasswordInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},s={args:{label:"Password",name:"password",registerOptions:{required:"A password is required"},wrapperProps:{},placeholder:"Password"}},e={args:{label:"Password",name:"password1",description:"Passwords must consist of at least 8 characters and ...",registerOptions:{required:"You must accept the terms"},placeholder:"Password"}},r={args:{label:"Disabled password",name:"password2",disabled:!0,placeholder:"Password"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password',
    registerOptions: {
      required: 'A password is required'
    },
    wrapperProps: {},
    placeholder: 'Password'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password1',
    description: 'Passwords must consist of at least 8 characters and ...',
    registerOptions: {
      required: 'You must accept the terms'
    },
    placeholder: 'Password'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled password',
    name: 'password2',
    disabled: true,
    placeholder: 'Password'
  }
}`,...r.parameters?.docs?.source}}};const q=["Primary","WithDescription","Disabled"];export{r as Disabled,s as Primary,e as WithDescription,q as __namedExportsOrder,x as default};
