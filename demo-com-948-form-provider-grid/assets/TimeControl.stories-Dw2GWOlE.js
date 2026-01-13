import{j as o}from"./iframe-donXh11V.js";import{u as b,a as h,f as g}from"./TimeControl-BB_ZdsD0.js";const s=({label:i="Start time",name:a="example",description:l,registerOptions:n,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:m=!1,shouldShow:c=!0,...u})=>{const f=b({defaultValues:{[a]:""}});return o.jsx(h,{...f,children:o.jsx(g,{label:i,name:a,description:l,registerOptions:n,wrapperProps:d,hideFieldError:p,hideErrorMessage:m,shouldShow:c,...u})})};s.__docgenInfo={description:"",methods:[],displayName:"TimeControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Start time'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const q={title:"Components/TimeControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Start time",name:"start_time",registerOptions:{required:"A start time is required"},wrapperProps:{}}},r={args:{label:"Start time",name:"start_time1",description:"Please provide a start time",registerOptions:{required:"A start time is required"}}},t={args:{label:"Disabled name",name:"start_time2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],S=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:x,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,S as T,r as W};
