import{j as s}from"./iframe-BZNJ1hkU.js";import{u as f,F as h,c as b}from"./ReactSelectControl-hiwpIvzw.js";const a=({label:i="Do you accept the terms?",name:o="example",description:n,registerOptions:l,wrapperProps:c,hideFieldError:d=!1,hideErrorMessage:p=!1,...m})=>{const u=f({defaultValues:{[o]:!1}});return s.jsx(h,{...u,children:s.jsx(b,{label:i,name:o,description:n,registerOptions:l,wrapperProps:c,hideFieldError:d,hideErrorMessage:p,...m})})};a.__docgenInfo={description:"",methods:[],displayName:"SwitchControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Components/SwitchControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms2",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled switch",name:"terms3",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    name: 'terms2',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    name: 'terms3',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const y=["Primary","WithDescription","Disabled"],q=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{t as D,q as S,r as W};
