import{j as s}from"./iframe-BZNJ1hkU.js";import{u as f,F as b,e as g}from"./ReactSelectControl-hiwpIvzw.js";const o=({label:i="Start time",name:a="example",description:n,registerOptions:l,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:m=!1,...c})=>{const u=f({defaultValues:{[a]:""}});return s.jsx(b,{...u,children:s.jsx(g,{label:i,name:a,description:n,registerOptions:l,wrapperProps:d,hideFieldError:p,hideErrorMessage:m,...c})})};o.__docgenInfo={description:"",methods:[],displayName:"TimeControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Start time'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const h={title:"Components/TimeControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Start time",name:"start_time",registerOptions:{required:"A start time is required"},wrapperProps:{}}},r={args:{label:"Start time",name:"start_time1",description:"Please provide a start time",registerOptions:{required:"A start time is required"}}},t={args:{label:"Disabled name",name:"start_time2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time',
    registerOptions: {
      required: 'A start time is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    name: 'start_time1',
    description: 'Please provide a start time',
    registerOptions: {
      required: 'A start time is required'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'start_time2',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary","WithDescription","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:q,default:h},Symbol.toStringTag,{value:"Module"}));export{t as D,_ as T,r as W};
