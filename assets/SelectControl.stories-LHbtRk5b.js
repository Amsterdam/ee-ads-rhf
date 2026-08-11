import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,t as o,u as s}from"./src-CXqVK_ZX.js";import{n as c,t as l}from"./provinces-TvkSsvw4.js";var u,d;function f(){return(f=e((()=>{o(),a(),u=n(),d=({label:e=`Type`,name:t=`example`,options:n=[],description:a,registerOptions:o,wrapperProps:c,hideFieldError:l=!1,hideErrorMessage:d=!1,shouldShow:f=!0,...p})=>{let m=i({defaultValues:{[t]:``}});return(0,u.jsx)(r,{...m,children:(0,u.jsx)(s,{label:e,name:t,options:n,description:a,registerOptions:o,wrapperProps:c,hideFieldError:l,hideErrorMessage:d,shouldShow:f,...p})})},d.__docgenInfo={description:``,methods:[],displayName:`SelectControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},options:{defaultValue:{value:`[]`,computed:!1},required:!1},hideFieldError:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var p=t({Disabled:()=>v,Primary:()=>h,WithDescription:()=>_,WithPlainArray:()=>g,__namedExportsOrder:()=>y,default:()=>m}),m,h,g,_,v,y;function b(){return(b=e((()=>{f(),l(),m={title:`Components/SelectControl`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:`boolean`,default:`false`,description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render the field, useful for conditional form elements`},attributes:{control:`object`,description:"Generic select props, for example, `className`, to apply to the design-system form field component"}}},h={args:{label:`Province`,name:`province`,options:c,registerOptions:{required:`A province is required`},wrapperProps:{}}},g={args:{label:`Province`,name:`province1`,options:c.map(({label:e})=>e),registerOptions:{required:`A province is required`},wrapperProps:{}}},_={args:{label:`Province`,name:`province2`,options:c,description:`A province is required`,registerOptions:{required:`You must select a province`}}},v={args:{label:`Disabled province`,name:`province3`,options:c,disabled:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province1',
    options: provinces.map(({
      label
    }) => label),
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`WithPlainArray`,`WithDescription`,`Disabled`]})))()}export{b as i,p as n,_ as r,v as t};