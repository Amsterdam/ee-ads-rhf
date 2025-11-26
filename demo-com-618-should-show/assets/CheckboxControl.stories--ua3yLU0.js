import{j as s}from"./iframe-BZNJ1hkU.js";import{u as b,F as f,C as h}from"./ReactSelectControl-hiwpIvzw.js";const a=({label:n="Do you accept the terms?",name:t="example",description:l,registerOptions:i,wrapperProps:c,hideFieldError:d=!1,hideErrorMessage:p=!1,...m})=>{const u=b({defaultValues:{[t]:!1}});return s.jsx(f,{...u,children:s.jsx(h,{label:n,name:t,description:l,registerOptions:i,wrapperProps:c,hideFieldError:d,hideErrorMessage:p,...m})})};a.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Components/CheckboxControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms1",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},o={args:{label:"Disabled checkbox",name:"terms2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    name: 'terms1',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    name: 'terms2',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],q=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:r,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{q as C,o as D,r as W};
