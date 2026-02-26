import{j as o}from"./iframe-1dUPt01v.js";import{u as b,b as h,D as g}from"./TimeControl-AT_QXX_G.js";const s=({label:l="Date",name:a="example",description:i,registerOptions:n,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:c=!1,shouldShow:u=!0,...m})=>{const f=b({defaultValues:{[a]:""}});return o.jsx(h,{...f,children:o.jsx(g,{label:l,name:a,description:i,registerOptions:n,wrapperProps:d,hideFieldError:p,hideErrorMessage:c,shouldShow:u,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"DateControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const y={title:"Components/DateControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Start date",name:"start_date",registerOptions:{required:"The start date is required"},wrapperProps:{}}},t={args:{label:"Start date",name:"start_date1",description:"Please select a date.",registerOptions:{required:"The start date is required"}}},r={args:{label:"Select a date",name:"start_date2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date',
    registerOptions: {
      required: 'The start date is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    name: 'start_date1',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required'
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a date',
    name: 'start_date2',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const q=["Primary","WithDescription","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:t,__namedExportsOrder:q,default:y},Symbol.toStringTag,{value:"Module"}));export{_ as D,t as W,r as a};
