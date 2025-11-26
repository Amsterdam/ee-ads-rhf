import{j as a}from"./iframe-BZNJ1hkU.js";import{u as w,F as f,P as b}from"./ReactSelectControl-hiwpIvzw.js";const t=({label:d="Password",name:o="example",description:l,registerOptions:n,wrapperProps:i,hideFieldError:p=!1,hideErrorMessage:c=!1,...u})=>{const m=w({defaultValues:{[o]:""}});return a.jsx(f,{...m,children:a.jsx(b,{label:d,name:o,description:l,registerOptions:n,wrapperProps:i,hideFieldError:p,hideErrorMessage:c,...u})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Password'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const h={title:"Components/PasswordInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Password",name:"password",registerOptions:{required:"A password is required"},wrapperProps:{},placeholder:"Password"}},r={args:{label:"Password",name:"password1",description:"Passwords must consist of at least 8 characters and ...",registerOptions:{required:"You must accept the terms"},placeholder:"Password"}},s={args:{label:"Disabled password",name:"password2",disabled:!0,placeholder:"Password"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password',
    registerOptions: {
      required: 'A password is required'
    },
    wrapperProps: {},
    placeholder: 'Password'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password1',
    description: 'Passwords must consist of at least 8 characters and ...',
    registerOptions: {
      required: 'You must accept the terms'
    },
    placeholder: 'Password'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled password',
    name: 'password2',
    disabled: true,
    placeholder: 'Password'
  }
}`,...s.parameters?.docs?.source}}};const P=["Primary","WithDescription","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:r,__namedExportsOrder:P,default:h},Symbol.toStringTag,{value:"Module"}));export{s as D,y as P,r as W};
