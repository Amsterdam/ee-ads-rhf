import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,f as o,t as s}from"./src-CXqVK_ZX.js";import{n as c,t as l}from"./provinces-TvkSsvw4.js";var u,d;function f(){return(f=e((()=>{s(),a(),u=n(),d=({label:e=`Type`,name:t=`example`,options:n=[],isMulti:a=!1,description:s,registerOptions:c,wrapperProps:l,hideFieldError:d=!1,hideErrorMessage:f=!1,shouldShow:p=!0,...m})=>{let h=i({defaultValues:{[t]:``}});return(0,u.jsx)(r,{...h,children:(0,u.jsx)(o,{label:e,name:t,options:n,isMulti:a,description:s,registerOptions:c,wrapperProps:l,hideFieldError:d,hideErrorMessage:f,shouldShow:p,...m})})},d.__docgenInfo={description:``,methods:[],displayName:`ReactSelectControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},options:{defaultValue:{value:`[]`,computed:!1},required:!1},isMulti:{defaultValue:{value:`false`,computed:!1},required:!1},hideFieldError:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var p=t({Disabled:()=>v,Primary:()=>h,WithDescription:()=>g,WithMultiple:()=>_,__namedExportsOrder:()=>y,default:()=>m}),m,h,g,_,v,y;function b(){return(b=e((()=>{f(),l(),m={title:`Components/ReactSelectControl`,component:d,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},options:{control:`object`,description:"List of selectable options. Each option is an object `{ label, value }`"},isMulti:{control:`boolean`,description:`Enable multiple selected options`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:`boolean`,default:`false`,description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render the field, useful for conditional form elements`},inputProps:{control:`object`,description:"Optional additional props for the underlying `SelectInput` component."}}},h={args:{label:`Province`,name:`province`,options:c,registerOptions:{required:`A province is required`},isMulti:!0,wrapperProps:{}}},g={args:{label:`Province`,name:`province2`,options:c,description:`A province is required`,registerOptions:{required:`You must select a province`}}},_={args:{label:`Province`,name:`province3`,options:c,description:`You can select multiple provinces`,isMulti:!0,registerOptions:{required:`You must select a province`}}},v={args:{label:`Disabled province`,name:`province4`,options:c,disabled:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required'
    },
    isMulti: true,
    wrapperProps: {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province3',
    options: provinces,
    description: 'You can select multiple provinces',
    isMulti: true,
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`WithDescription`,`WithMultiple`,`Disabled`]})))()}export{b as a,_ as i,p as n,g as r,v as t};