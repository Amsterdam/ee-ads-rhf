import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,b as o,t as s}from"./src-CXqVK_ZX.js";var c,l;function u(){return(u=e((()=>{s(),a(),c=n(),l=({label:e=`Password`,name:t=`example`,description:n,registerOptions:a,wrapperProps:s,hideFieldError:l=!1,hideErrorMessage:u=!1,shouldShow:d=!0,...f})=>{let p=i({defaultValues:{[t]:``}});return(0,c.jsx)(r,{...p,children:(0,c.jsx)(o,{label:e,name:t,description:n,registerOptions:a,wrapperProps:s,hideFieldError:l,hideErrorMessage:u,shouldShow:d,...f})})},l.__docgenInfo={description:``,methods:[],displayName:`PasswordInputControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Password'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},hideFieldError:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var d=t({Disabled:()=>h,Primary:()=>p,WithDescription:()=>m,__namedExportsOrder:()=>g,default:()=>f}),f,p,m,h,g;function _(){return(_=e((()=>{u(),f={title:`Components/PasswordInputControl`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:`boolean`,default:`false`,description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render the field, useful for conditional form elements`},attributes:{control:`object`,description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},p={args:{label:`Password`,name:`password`,registerOptions:{required:`A password is required`},wrapperProps:{},placeholder:`Password`}},m={args:{label:`Password`,name:`password1`,description:`Passwords must consist of at least 8 characters and ...`,registerOptions:{required:`You must accept the terms`},placeholder:`Password`}},h={args:{label:`Disabled password`,name:`password2`,disabled:!0,placeholder:`Password`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password',
    registerOptions: {
      required: 'A password is required'
    },
    wrapperProps: {},
    placeholder: 'Password'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password1',
    description: 'Passwords must consist of at least 8 characters and ...',
    registerOptions: {
      required: 'You must accept the terms'
    },
    placeholder: 'Password'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled password',
    name: 'password2',
    disabled: true,
    placeholder: 'Password'
  }
}`,...h.parameters?.docs?.source}}},g=[`Primary`,`WithDescription`,`Disabled`]})))()}export{_ as i,d as n,m as r,h as t};