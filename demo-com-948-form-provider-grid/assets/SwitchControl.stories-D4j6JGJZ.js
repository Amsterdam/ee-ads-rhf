import{j as s}from"./iframe-AfZzknkC.js";import{u as h,a as b,d as g}from"./TimeControl-DTgiGSyX.js";const a=({label:l="Do you accept the terms?",name:o="example",description:i,registerOptions:n,wrapperProps:d,hideFieldError:c=!1,hideErrorMessage:p=!1,shouldShow:u=!0,...m})=>{const f=h({defaultValues:{[o]:!1}});return s.jsx(b,{...f,children:s.jsx(g,{label:l,name:o,description:i,registerOptions:n,wrapperProps:d,hideFieldError:c,hideErrorMessage:p,shouldShow:u,...m})})};a.__docgenInfo={description:"",methods:[],displayName:"SwitchControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const y={title:"Components/SwitchControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms2",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled switch",name:"terms3",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Primary","WithDescription","Disabled"],S=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{t as D,S,r as W};
