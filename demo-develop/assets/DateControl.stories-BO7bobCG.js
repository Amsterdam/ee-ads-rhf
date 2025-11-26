import{j as s}from"./iframe-C1JbQLBR.js";import{u as f,F as b,D as g}from"./ReactSelectControl-qsz42cYT.js";const o=({label:i="Date",name:a="example",description:l,registerOptions:n,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:c=!1,...u})=>{const m=f({defaultValues:{[a]:""}});return s.jsx(b,{...m,children:s.jsx(g,{label:i,name:a,description:l,registerOptions:n,wrapperProps:d,hideFieldError:p,hideErrorMessage:c,...u})})};o.__docgenInfo={description:"",methods:[],displayName:"DateControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const h={title:"Components/DateControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Start date",name:"start_date",registerOptions:{required:"The start date is required"},wrapperProps:{}}},r={args:{label:"Start date",name:"start_date1",description:"Please select a date.",registerOptions:{required:"The start date is required"}}},t={args:{label:"Select a date",name:"start_date2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date',
    registerOptions: {
      required: 'The start date is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date1',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a date',
    name: 'start_date2',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary","WithDescription","Disabled"],D=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:q,default:h},Symbol.toStringTag,{value:"Module"}));export{D,r as W,t as a};
