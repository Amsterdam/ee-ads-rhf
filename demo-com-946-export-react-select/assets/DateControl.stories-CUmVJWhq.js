import{j as o}from"./iframe-CuBGIYij.js";import{u as b,b as h,D as g}from"./TimeControl-BuJcZqBQ.js";const s=({label:l="Date",name:a="example",description:i,registerOptions:d,wrapperProps:n,hideFieldError:p=!1,hideErrorMessage:c=!1,shouldShow:u=!0,...m})=>{const f=b({defaultValues:{[a]:""}});return o.jsx(h,{...f,children:o.jsx(g,{label:l,name:a,description:i,registerOptions:d,wrapperProps:n,hideFieldError:p,hideErrorMessage:c,shouldShow:u,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"DateControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const q={title:"Components/DateControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Start date",name:"start_date",registerOptions:{required:"The start date is required"},wrapperProps:{}}},r={args:{label:"Start date",name:"start_date1",description:"Please select a date.",registerOptions:{required:"The start date is required"}}},t={args:{label:"Select a date",name:"start_date2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:x,default:q},Symbol.toStringTag,{value:"Module"}));export{_ as D,r as W,t as a};
