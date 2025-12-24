import{j as s}from"./iframe-Uztsc6tj.js";import{u as h,a as b,C as g}from"./TimeControl-Dpf4qyuN.js";const a=({label:l="Do you accept the terms?",name:t="example",description:n,registerOptions:i,wrapperProps:c,hideFieldError:d=!1,hideErrorMessage:p=!1,shouldShow:u=!0,...m})=>{const f=h({defaultValues:{[t]:!1}});return s.jsx(b,{...f,children:s.jsx(g,{label:l,name:t,description:n,registerOptions:i,wrapperProps:c,hideFieldError:d,hideErrorMessage:p,shouldShow:u,...m})})};a.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const x={title:"Components/CheckboxControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms1",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},o={args:{label:"Disabled checkbox",name:"terms2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const y=["Primary","WithDescription","Disabled"],D=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:r,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{D as C,o as D,r as W};
