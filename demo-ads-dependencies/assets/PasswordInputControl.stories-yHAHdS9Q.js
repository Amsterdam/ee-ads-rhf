import{j as a}from"./iframe-CcZ9kdnC.js";import{u as w,a as h,P as b}from"./TimeControl-BgpxS1E2.js";const t=({label:l="Password",name:o="example",description:d,registerOptions:n,wrapperProps:i,hideFieldError:p=!1,hideErrorMessage:c=!1,shouldShow:u=!0,...m})=>{const f=w({defaultValues:{[o]:""}});return a.jsx(h,{...f,children:a.jsx(b,{label:l,name:o,description:d,registerOptions:n,wrapperProps:i,hideFieldError:p,hideErrorMessage:c,shouldShow:u,...m})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Password'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const P={title:"Components/PasswordInputControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Password",name:"password",registerOptions:{required:"A password is required"},wrapperProps:{},placeholder:"Password"}},r={args:{label:"Password",name:"password1",description:"Passwords must consist of at least 8 characters and ...",registerOptions:{required:"You must accept the terms"},placeholder:"Password"}},s={args:{label:"Disabled password",name:"password2",disabled:!0,placeholder:"Password"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const g=["Primary","WithDescription","Disabled"],q=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:r,__namedExportsOrder:g,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,q as P,r as W};
