import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{A as i,E as a,F as o,N as s,t as c}from"./src-CXqVK_ZX.js";var l,u;function d(){return(d=e((()=>{n(),c(),s(),l=r(),u=({label:e=`Do you accept the terms?`,name:t=`example`,description:n,registerOptions:r,wrapperProps:s,hideFieldError:c=!1,hideErrorMessage:u=!1,shouldShow:d=!0,...f})=>{let p=o({defaultValues:{[t]:!1}});return(0,l.jsx)(i,{...p,children:(0,l.jsx)(a,{label:e,name:t,description:n,registerOptions:r,wrapperProps:s,hideFieldError:c,hideErrorMessage:u,shouldShow:d,...f})})},u.__docgenInfo={description:``,methods:[],displayName:`CheckboxControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Do you accept the terms?'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},hideFieldError:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var f=t({Disabled:()=>g,Primary:()=>m,WithDescription:()=>h,__namedExportsOrder:()=>_,default:()=>p}),p,m,h,g,_;function v(){return(v=e((()=>{d(),p={title:`Components/CheckboxControl`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:`boolean`,default:`false`,description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render the field, useful for conditional form elements`},attributes:{control:`object`,description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},m={args:{label:`Do you agree?`,name:`terms`,registerOptions:{required:`The terms are required`},wrapperProps:{}}},h={args:{label:`Accept terms and conditions`,name:`terms1`,description:`Please read the terms carefully before accepting`,registerOptions:{required:`You must accept the terms`}}},g={args:{label:`Disabled checkbox`,name:`terms2`,disabled:!0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required'
    },
    wrapperProps: {}
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    name: 'terms1',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    name: 'terms2',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Primary`,`WithDescription`,`Disabled`]})))()}export{v as i,g as n,h as r,f as t};