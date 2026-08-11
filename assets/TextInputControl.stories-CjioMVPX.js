import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,o,t as s}from"./src-CXqVK_ZX.js";var c,l;function u(){return(u=e((()=>{s(),a(),c=n(),l=({label:e=`Name`,name:t=`example`,description:n,registerOptions:a,wrapperProps:s,hideFieldError:l=!1,hideErrorMessage:u=!1,shouldShow:d=!0,...f})=>{let p=i({defaultValues:{[t]:``}});return(0,c.jsx)(r,{...p,children:(0,c.jsx)(o,{label:e,name:t,description:n,registerOptions:a,wrapperProps:s,hideFieldError:l,hideErrorMessage:u,shouldShow:d,...f})})},l.__docgenInfo={description:``,methods:[],displayName:`TextInputControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Name'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},hideFieldError:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var d=t({Disabled:()=>h,Primary:()=>p,WithDescription:()=>m,__namedExportsOrder:()=>g,default:()=>f}),f,p,m,h,g;function _(){return(_=e((()=>{u(),f={title:`Components/TextInputControl`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:`boolean`,default:`false`,description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render the field, useful for conditional form elements`},attributes:{control:`object`,description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},p={args:{label:`Name`,name:`name`,registerOptions:{required:`A name is required`},wrapperProps:{}}},m={args:{label:`Name`,name:`name1`,description:`Please provide your name`,registerOptions:{required:`Please enter your name`}}},h={args:{label:`Disabled name`,name:`name2`,disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    registerOptions: {
      required: 'A name is required'
    },
    wrapperProps: {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name1',
    description: 'Please provide your name',
    registerOptions: {
      required: 'Please enter your name'
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'name2',
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Primary`,`WithDescription`,`Disabled`]})))()}export{_ as i,d as n,m as r,h as t};